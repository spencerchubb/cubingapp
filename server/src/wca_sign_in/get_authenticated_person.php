<?php
function getWcaAccessToken() {
    session_start();
    if (isset($_SESSION["wca_access_token"]) && isset($_SESSION["wca_expires_in"]) && isset($_SESSION["wca_created_at"])) {
        $accessToken = $_SESSION["wca_access_token"];
        $expiresIn = $_SESSION["wca_expires_in"];
        $createdAt = $_SESSION["wca_created_at"];
        $expiresAt = $createdAt + $expiresIn;
        if ($expiresAt > time()) {
            return $accessToken;
        }
    }

    return null;
}

function getAuthenticatedPerson() {
    $token = getWcaAccessToken();
    if (!$token) return null;

    $curl = curl_init("https://www.worldcubeassociation.org/api/v0/me");
    curl_setopt($curl, CURLOPT_HTTPHEADER, ["Authorization: Bearer $token"]);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($curl);
    curl_close($curl);
    return json_decode($response, true)["me"];
}
?>