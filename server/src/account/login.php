<?php
error_reporting(E_ALL);
ini_set("display_errors", 1);

include_once "util.php";

function setAuthToken($db, $user_id, $auth_token): void {
    $stmt = $db->prepare("
        UPDATE users
        SET auth_token = :auth_token, auth_token_expires = datetime('now', '+30 days')
        WHERE id = :id");
    $stmt->bindValue(':auth_token', $auth_token, SQLITE3_TEXT);
    $stmt->bindValue(':id', $user_id, SQLITE3_INTEGER);
    $stmt->execute();
}

function verifyUser($db, $username, $password) {
    $stmt = $db->prepare("SELECT id, hash, auth_token, auth_token_expires FROM users WHERE username = :username");
    $stmt->bindValue(':username', $username, SQLITE3_TEXT);

    $result = $stmt->execute();
    $row = $result->fetchArray();

    if (!$row) {
        return array('success' => false, 'error' => 'Invalid username or password');
    }

    if (password_verify($password, $row['hash'])) {
        // If the auth token from database is still valid, use it
        if ($row['auth_token'] && strtotime($row['auth_token_expires']) > time()) {
            setcookie('auth_token', $row['auth_token'], strtotime($row['auth_token_expires']), '/');
            return array('success' => true, 'userId' => $row['id'], 'authToken' => $row['auth_token']);
        }

        // Otherwise generate a new auth token
        $authToken = generateAuthToken();
        setAuthToken($db, $row['id'], $authToken);
        setcookie('auth_token', $authToken, time() + 60 * 60 * 24 * 30, '/');
        return array('success' => true, 'userId' => $row['id'], 'authToken' => $authToken);
    }

    return array('success' => false, 'error' => 'Invalid username or password');
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

    echo json_encode(verifyUser($db, $username, $password));
}
?>
