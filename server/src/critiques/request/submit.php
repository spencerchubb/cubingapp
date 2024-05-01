<?php
// error_reporting(E_ALL);
// ini_set("display_errors", 1);

require '../../vendor/autoload.php';

$db = new SQLite3("/var/www/data/cubingapp.db");
if (!$db) {
    die("Error connecting to the database: " . $db->lastErrorMsg());
}

use Aws\S3\Exception\S3Exception;
use Aws\S3\S3Client;
use Aws\Credentials\CredentialProvider;

$bucket = 'cubingapp-critique-videos';

// Bucket policy to allow public read access to all objects in the bucket.
// {
//     "Version": "2012-10-17",
//     "Statement": [
//         {
//             "Sid": "Statement1",
//             "Effect": "Allow",
//             "Principal": "*",
//             "Action": "s3:GetObject",
//             "Resource": "arn:aws:s3:::cubingapp-critique-videos/*"
//         }
//     ]
// }

// CORS policy to allow all origins to PUT objects.
// [
//     {
//         "AllowedHeaders": [
//             "*"
//         ],
//         "AllowedMethods": [
//             "PUT"
//         ],
//         "AllowedOrigins": [
//             "*"
//         ]
//     }
// ]

function getPresignedUrl($bucket, $key) {
    // https://docs.aws.amazon.com/sdk-for-php/v3/developer-guide/guide_credentials_provider.html#ini-provider
    // Place credentials in /.aws/credentials
    // Specify region, aws_access_key_id, and aws_secret_access_key.
    $credentialProvider = CredentialProvider::ini();
    $credentialProvider = CredentialProvider::memoize($credentialProvider); // Cache to avoid loading every time.

    $s3 = new S3Client([
        'version' => '2006-03-01',
        'region' => 'us-east-1',
        'credentials' => $credentialProvider,
    ]);
    $cmd = $s3->getCommand('PutObject', [
        'Bucket' => $bucket,
        'Key' => $key,
        'ContentType' => 'video/mp4',
    ]);
    
    $request = $s3->createPresignedRequest($cmd, '+5 minutes');
    $presignedUrl = (string)$request->getUri();
    return $presignedUrl;
}

$title = $_POST['title'];
$body = $_POST['body'];

include_once "../../account/util.php";
$user = getLoggedInUser($db);
if (!$user) {
    http_response_code(401);
    echo json_encode(array("success" => false, "error" => "You must be logged in to submit a post."));
}

$filename = bin2hex(random_bytes(16)) . ".mp4";
$presignedUrl = getPresignedUrl($bucket, $filename);

$stmt = $db->prepare("INSERT INTO posts (user_id, title, body, video_filename) VALUES (:user_id, :title, :body, :video_filename)");
$stmt->bindValue(':user_id', $user['id']);
$stmt->bindValue(':title', $title);
$stmt->bindValue(':body', $body);
$stmt->bindValue(':video_filename', $filename);
$exec_output = $stmt->execute();

if (!$exec_output) {
    echo json_encode(array("success" => false, "error" => $db->lastErrorMsg()));
    return;
}

$postId = $db->lastInsertRowID();
echo json_encode(array("success" => true, "postId" => $postId, "presignedUrl" => $presignedUrl));
?>