<nav style="justify-content: space-between; padding: 0 12px;">
    <a href="/critiques/" class="white-link">Critiques Home</a>

    <?php
    error_reporting(E_ALL);
    ini_set("display_errors", 1);
    $db = new SQLite3("/var/www/data/cubingapp.db");
    if (!$db) {
        die("Error connecting to the database: " . $db->lastErrorMsg());
    }

    include_once __DIR__ . "/../account/util.php";
    $user = getLoggedInUser($db);
    if ($user) {
        echo "<a href='/account/' class='white-link'>" . $user['username'] . "</a>";
    } else {
        echo "<a href='/account/' class='white-link'>Login</a>";
    }
    ?>
</nav>