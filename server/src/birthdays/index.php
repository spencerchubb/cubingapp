<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="description" content="Find out your WCA birthday, or in other words, the day of your first competition">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
    <title>WCA Birthdays</title>
</head>

<body>
    <?php include_once "../php/menu.php"; ?>
    
    <main>
        <?php
        error_reporting(E_ALL);
        ini_set("display_errors", 1);
        $db = new SQLite3("/wca.db");

        if (!$db) {
            die("Error connecting to the database: " . $db->lastErrorMsg());
        }

        $year = date("Y");
        $month = $_GET["month"] ?? NULL;
        $day = $_GET["day"] ?? NULL;
        $wcaId = $_GET["wcaId"] ?? NULL;

        if ($wcaId) {
            $stmt = $db->prepare("
            SELECT DISTINCT competitionId, personId, name, date FROM Birthdays b
            JOIN persons p ON p.id=b.personId
            WHERE personId=:personId;");
            $stmt->bindValue(":personId", $wcaId, SQLITE3_TEXT);
            $rows = $stmt->execute();
            $row = $rows->fetchArray(SQLITE3_ASSOC);

            $competitionId = $row["competitionId"];
            $name = $row["name"];
            $date = $row["date"];
            $age = $year - intval(substr($date, 0, 4));

            echo "<p style='margin-bottom: 16px;'>$name's first competition was $competitionId on $date.</p>";
        }

        include "../php/search/element.php";
        renderSearchElement("/birthdays", $wcaId);

        echo "<div style='margin-top: 16px;'>
        <input id='month' style='width: 90px;' type='number' placeholder='Month' value='$month' min='1' max='12' />
        <input id='day' style='width: 90px;' type='number' placeholder='Day' value='$day' min='1' max='31' />
        <button id='submitDateButton'>Go</button>
        </div>";

        // Try to use query params for month and day.
        // If they don't exist, use current month and day.
        if ($month && $day) {
            $month = str_pad($month, 2, "0", STR_PAD_LEFT);
            $day = str_pad($day, 2, "0", STR_PAD_LEFT);
            echo "
            <a href='/birthdays'><button style='margin-top: 16px;'>See today's birthdays</button></a>
            <h1 style='margin-top: 40px; font-size: 24px;'>These cubers have their WCA birthday on $month/$day 🥳</h1>
            ";
        } else {
            $month = date("m");
            $day = date("d");
            echo "
            <h1 style='margin-top: 40px; font-size: 24px;'>These cubers have their WCA birthday today ($month/$day) 🥳</h1>
            ";
        }

        // DISTINCT is needed in case someone appears multiple times, such as 2012BUBE01
        $stmt = $db->prepare("
            SELECT DISTINCT competitionId, personId, name, date FROM Birthdays b
            JOIN persons p ON p.id=b.personId
            WHERE date LIKE '%-$month-$day';");
        $rows = $stmt->execute();

        echo "<table style='margin-top: 16px;'>";
        echo "<tr>
            <th>Name</th>
            <th>Age</th>
        </tr>";

        while ($row = $rows->fetchArray(SQLITE3_ASSOC)) {
            $competitionId = $row["competitionId"];
            $personId = $row["personId"];
            $name = $row["name"];
            $date = $row["date"];
            $age = $year - intval(substr($date, 0, 4));
            echo "<tr>
                <td>$name</td>
                <td>$age</td>
            </tr>";
        }
        echo "</table>";
        ?>
        <div style="margin-top: 96px;"></div>
    </main>
</body>

<script>
    function submitDate() {
        if (!month.value) {
            alert("Please provide a month to search for a date");
            return;
        }
        if (!day.value) {
            alert("Please provide a day to search for a date");
            return;
        }

        document.location = `/birthdays?month=${month.value}&day=${day.value}`;
    }
    month.onkeydown = event => {
        if (event.key === "Enter") submitDate();
    }
    day.onkeydown = event => {
        if (event.key === "Enter") submitDate();
    }
    submitDateButton.onclick = submitDate;
</script>

<?php include "../php/gtag.php" ?>

</html>