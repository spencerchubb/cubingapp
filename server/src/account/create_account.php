<?php
error_reporting(E_ALL);
ini_set("display_errors", 1);

include_once "util.php";

function userExists($db, $username): bool {
    $stmt = $db->prepare("SELECT 1 FROM users WHERE username = :username");
    $stmt->bindValue(':username', $username, SQLITE3_TEXT);

    $result = $stmt->execute();
    return $result->fetchArray() !== false;
}

function createUser($db, $username, $password) {
    $hash = password_hash($password, PASSWORD_DEFAULT);
    $authToken = generateAuthToken();
    $stmt = $db->prepare("INSERT INTO users (username, hash, auth_token, auth_token_expires) VALUES (:username, :hash, :auth_token, datetime('now', '+30 days'))");
    $stmt->bindValue(':username', $username, SQLITE3_TEXT);
    $stmt->bindValue(':hash', $hash, SQLITE3_TEXT);
    $stmt->bindValue(':auth_token', $authToken, SQLITE3_TEXT);

    $user_id = $db->lastInsertRowID();

    if ($stmt->execute()) {
        setcookie('auth_token', $authToken, time() + 60 * 60 * 24 * 30, '/');
        return array('success' => true, 'userId' => $user_id, 'authToken' => $authToken);
    }
    return array('success' => false, 'error' => 'Failed to create user');
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'));
    $username = $data->username;
    $password = $data->password;

    if (empty($username) || empty($password)) {
        echo json_encode(array('success' => false, 'error' => 'Username or password cannot be empty'));
        exit;
    }

    $db = new SQLite3("/var/www/data/cubingapp.db");
    if (!$db) {
        echo json_encode(array('success' => true, 'error' => 'Error connecting to the database'));
        exit;
    }

    if (userExists($db, $username)) {
        echo json_encode(array('success' => false, 'error' => 'Username taken'));
        exit;
    }

    echo json_encode(createUser($db, $username, $password));
}
?>