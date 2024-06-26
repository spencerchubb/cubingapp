<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="stylesheet" href="/css/colors.css">
    <link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
    <title>CubingApp Account</title>
</head>

<style>
    h2 {
        margin-top: 2rem;
    }

    .form {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 300px;
    }

    button, input {
        width: 100%;
        max-width: 300px;
        margin-top: 1rem;
    }
</style>

<body style="padding: 0 16px;">
    <?php
    error_reporting(E_ALL);
    ini_set("display_errors", 1);
    $db = new SQLite3("/var/www/data/cubingapp.db");
    if (!$db) {
        exit;
    }

    include_once __DIR__ . "/../critiques/common.php";
    include_once "util.php";

    function renderUserPosts($db, $user_id) {
        $stmt = $db->prepare("
            SELECT posts.id, posts.created_at, users.username, posts.title, posts.body
            FROM posts
            JOIN users ON users.id = :user_id AND posts.user_id = :user_id 
            ORDER BY posts.created_at DESC");
        $stmt->bindValue(":user_id", $user_id, SQLITE3_INTEGER);
        $rows = $stmt->execute();
        renderPosts($rows);
    }

    // Order of precedence:
    // 1. If 'user' is set in the query string, show that user's posts.
    // 2. Else if the user is logged in, show their posts.
    // 3. Else show login form.
    if (isset($_GET['user'])) {
        $user = getUserByUsername($db, $_GET['user']);
        $user_id = $user['id'];
        $username = $user['username'];
        
        echo "<div style='width: 100%; max-width: 800px; margin: auto;'>";
        echo "<h1 style='margin-top: 1rem;'>$username's account</h1>";
        renderUserPosts($db, $user_id);
        echo "</div>";
    } else if ($user = getLoggedInUser($db)) {
        $user_id = $user['id'];
        $username = $user['username'];

        echo "<div style='width: 100%; max-width: 800px; margin: auto;'>";
        echo "<h1 style='margin-top: 1rem;'>Logged in as $username</h1>";
        echo "<button id='logoutButton' style='margin-top: 1rem;'>Logout</button>";
        renderUserPosts($db, $user_id);
        echo "</div>";
    } else { ?>
        <div style="display: flex; flex-direction: column; width: 100%; height: 100%; align-items: center;">
            <div id="loginForm" class="form">
                <h2>Login to cubingapp</h2>
                <input type="text" id="loginUsername" placeholder="Username" />
                <input type="password" id="loginPassword" placeholder="Password" />
                <button id="loginButton">Login</button>
            </div>
            <div id="createAccountForm" class="form">
                <h2>Create account</h2>
                <input type="text" id="createAccountUsername" placeholder="Username" />
                <input type="password" id="createAccountPassword" placeholder="Password" />
                <button id="createAccountButton">Create account</button>
            </div>
        </div>
    <?php } ?>

    <script>
        async function post(url, body) {
            console.log(url, body);
            return fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            })
                .then(res => {
                    return res.json();
                });
        }

        function goBackAndReload() {
            // We want the page to reload so the login state is updated.
            // Solutions like history.back() don't reload the page.
            document.location = document.referrer;
        }

        function login() {
            post("/account/login.php", {
                username: loginUsername.value,
                password: loginPassword.value,
            })
                .then(res => {
                    if (res.success) {
                        localStorage.setItem("userId", res.userId);
                        localStorage.setItem("authToken", res.authToken);
                        goBackAndReload();
                    } else {
                        alert(res.error);
                    }
                });
        }

        function createAccount() {
            post("/account/create_account.php", {
                    username: createAccountUsername.value,
                    password: createAccountPassword.value,
            })
                .then(res => {
                    if (res.success) {
                        localStorage.setItem("userId", res.userId);
                        localStorage.setItem("authToken", res.authToken);
                        goBackAndReload();
                    } else {
                        alert(res.error);
                    }
                });
        }

        function deleteCookie(key) {
            document.cookie = key + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        }

        function logout() {
            localStorage.removeItem("userId");
            localStorage.removeItem("authToken");
            deleteCookie("auth_token");
            goBackAndReload();
        }

        const loginForm = document.querySelector("#loginForm");
        const loginUsername = document.querySelector("#loginUsername");
        const loginPassword = document.querySelector("#loginPassword");
        const loginButton = document.querySelector("#loginButton");
        const createAccountForm = document.querySelector("#createAccountForm");
        const createAccountUsername = document.querySelector("#createAccountUsername");
        const createAccountPassword = document.querySelector("#createAccountPassword");
        const createAccountButton = document.querySelector("#createAccountButton");
        const logoutButton = document.querySelector("#logoutButton");

        if (loginForm && createAccountForm) {
            loginForm.addEventListener("keydown", (event) => {
                if (event.key === "Enter") {
                    login();
                }
            });

            loginButton.addEventListener("click", login);

            createAccountForm.addEventListener("keydown", (event) => {
                if (event.key === "Enter") {
                    createAccount();
                }
            });

            createAccountButton.addEventListener("click", createAccount);
        }

        if (logoutButton) {
            logoutButton.addEventListener("click", logout);
        }
    </script>
</body>

<?php include "../php/gtag.php" ?>

</html>