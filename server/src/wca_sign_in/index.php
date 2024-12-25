<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
    <title>WCA sign in</title>
</head>

<body>
    <?php include_once "../php/menu.php"; ?>

    <main class="col" style="align-items: start;">
        <h1>WCA sign in</h1>
        <div style="margin-top: 32px;">
        <p>Use the email for your wca account (wca id will NOT work)</p> 
        <div style="margin-top: 8px;">
        <input id="username" type="text" placeholder="Email" />
        <div style="margin-top: 16px;">
        <input id="password" type="password" placeholder="WCA Password" />
        <div style="margin-top: 16px;">
        <button id="submitButton">Sign in</button>
        <div style="margin-top: 16px;">
        <p id="errorMessage" style="color: red;"></p>
    </main>
</body>

<script>
    function onClick() {
        if (!username.value) {
            errorMessage.innerText = "Please provide a username";
            return;
        }
        if (!password.value) {
            errorMessage.innerText = "Please provide a password";
            return;
        }
        if (!username.value.includes("@")) {
            errorMessage.innerText = "Use the email for your wca account (wca id will NOT work)";
            return;
        }
        fetch("/wca_sign_in/sign_in.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: username.value,
                password: password.value
            }),
        }).then(response => {
            if (response.status === 200) {
                const url = new URL(window.location.href);
                window.location.href = url.searchParams.get("goto");
            }
            return response.text();
        }).then(data => {
            errorMessage.innerText = data;
        });
    }

    function onKeyDown(event) {
        if (event.key === "Enter" && username.value && password.value) submitButton.onclick();
    }
    username.onkeydown = onKeyDown;
    password.onkeydown = onKeyDown;

    submitButton.onclick = onClick;
</script>

<?php include "../php/gtag.php" ?>

</html>
