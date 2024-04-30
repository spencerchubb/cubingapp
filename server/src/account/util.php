<?php
function generateAuthToken(): string {
    return bin2hex(random_bytes(16));
}

function getUserByToken($db, $auth_token) {
    $stmt = $db->prepare("SELECT id, username FROM users WHERE auth_token = :auth_token");
    $stmt->bindValue(':auth_token', $auth_token, SQLITE3_TEXT);

    $result = $stmt->execute();
    $row = $result->fetchArray();
    return $row;
}

function getLoggedInUser($db) {
    if (isset($_COOKIE['auth_token'])) {
        $auth_token = $_COOKIE['auth_token'];
        $user = getUserByToken($db, $auth_token);
        return $user;
    }
    return NULL;
}
?>