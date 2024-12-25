<?php
error_reporting(E_ALL);
ini_set("display_errors", 1); 

header("Content-Type: application/json");

// $appId = getenv("WCA_APP_ID");
// $appSecret = getenv("WCA_APP_SECRET");
$appId = "kkYawOaSIuU1w25XyyMxAvWeTqomIM1tWHxuia_tsu0";
$appSecret = "tDEPhyCdpttlURimYRKBxEDLuPVIszm04lba3Irbnzs";

if (!$appId || !$appSecret) {
    echo json_encode(["error" => "Spencer screwed up. Environment variables not set"]);
    http_response_code(500);
    exit;
}

$input = json_decode(file_get_contents("php://input"), true);

$username = $input["username"];
$password = $input["password"];

function httpPost($url, $data) {
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_POST, true);
    curl_setopt($curl, CURLOPT_POSTFIELDS, http_build_query($data));
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($curl);
    curl_close($curl);
    return $response;
}

$response = httpPost("https://www.worldcubeassociation.org/oauth/token", [
    "grant_type" => "password",
    "client_id" => $appId,
    "client_secret" => $appSecret,
    "username" => $username,
    "password" => $password,
]);

$responseData = json_decode($response, true);

if (isset($responseData["error"])) {
    echo json_encode(["error" => "Incorrect username or password"]);
    // echo $response;
    http_response_code(400);
    exit;
}

// Save access_token, expires_in, and created_at in session.
// Later we can use this info to see if access_token is expired.
session_start();
$_SESSION["wca_access_token"] = $responseData["access_token"];
$_SESSION["wca_expires_in"] = $responseData["expires_in"];
$_SESSION["wca_created_at"] = $responseData["created_at"];

echo json_encode(["message" => "Signed in successfully"]);
http_response_code(200);
exit;
?>