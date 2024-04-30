<?php
error_reporting(E_ALL);
ini_set("display_errors", 1);
$db = new SQLite3("/var/www/data/cubingapp.db");
if (!$db) {
    die("Error connecting to the database: " . $db->lastErrorMsg());
}

$post_id = $_POST['post_id'];
$comment = $_POST['comment'];

include_once "../account/util.php";
$user = getLoggedInUser($db);
if (!$user) {
    http_response_code(401);
    die("You must be logged in to comment.");
}

$stmt = $db->prepare("INSERT INTO comments (user_id, post_id, comment) VALUES (:user_id, :post_id, :comment)");
$stmt->bindValue(':user_id', $user['id']);
$stmt->bindValue(':post_id', $post_id);
$stmt->bindValue(':comment', $comment);

if ($stmt->execute()) {
    echo "Comment submitted successfully!";
} else {
    http_response_code(500);
    echo "Error submitting comment.";
}
?>