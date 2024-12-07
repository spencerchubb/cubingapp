<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
    <title>CubingApp Home</title>
</head>

<style>
.card {
    display: flex;
    flex-direction: column;
    border: solid 1px #555;
    padding: 16px;
    max-width: 450px;
    width: 100%;
    min-height: 180px;

    & h2 {
        font-size: 18px;
    }

    & p {
        margin-top: 4px;
    }

    & .action {
        margin-top: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 12px;
    }
}

.algSetGroup {
    margin-top: 24px;

    & h2 {
        font-size: 18px;
        padding-bottom: 4px;
        border-bottom: solid 1px #555;
    }
}
.algLinks {
    margin-top: 8px;
    display: flex;
    flex-wrap: wrap;
    gap: 8px 16px;
}
</style>

<?php include "./php/search/element.php"; ?>

<body>
    <main>
        <?php
            if (http_response_code() === 404) {
                echo "<p style='color: var(--red-500); font-size: 1.2rem; text-align: center; margin-bottom: 1rem; padding: 0.5rem; background: var(--gray-900); border-radius: 8px;'>404: Page not found</p>";
            }
        ?>
        <h1 style="text-align: center;">CubingApp Home</h1>
        <div style="margin-top: 24px; display: flex; flex-wrap: wrap; justify-content: center; gap: 16px;">
            <div class="card">
                <h2>Name Ranks</h2>
                <p>Who are the fastest cubers with your name?</p>
                <div style="flex-grow: 1"></div>
                <div class="action">
                    <input id="nameRanksInput" type="text" placeholder="Name" style="width: 100%;" />
                    <button id="nameRanksGo">Go</button>
                </div>
            </div>
            <div class="card">
                <h2>WCA Birthdays</h2>
                <p>A WCA Birthday is the day of someone's first WCA competition</p>
                <div style="flex-grow: 1"></div>
                <div class="action">
                    <a href="/birthdays" style="width: 100%;"><button style="width: 100%;">See today's birthdays</button></a>
                </div>
            </div>
            <div class="card">
                <h2>Kinch Ranks</h2>
                <p>Kinch Ranks is a way to measure all-round cubing ability instead of just one event</p>
                <div style="flex-grow: 1"></div>
                <div class="action">
                    <a href="/kinch-ranks" style="width: 100%;"><button style="width: 100%;">Kinch Ranks Leaderboard</button></a>
                </div>
            </div>
            <div class="card">
                <h2>Sum of Ranks</h2>
                <p>Sum of Ranks is a way to measure all-round cubing ability instead of just one event</p>
                <div style="flex-grow: 1"></div>
                <div class="action">
                    <a href="/sum-of-ranks" style="width: 100%;"><button style="width: 100%;">Sum of Ranks Leaderboard</button></a>
                </div>
            </div>
            <div class="card">
                <h2>Record Streak</h2>
                <p>How many competitions in a row did you get a personal record (PR)?</p>
                <div style="flex-grow: 1"></div>
                <div class="action">
                    <?php renderSearchElement("/record-streak", ""); ?>
                </div>
            </div>
            <div class="card">
                <h2>Competitions</h2>
                <p>Find WCA competitions nearest to you</p>
                <div style="flex-grow: 1"></div>
                <div class="action">
                    <a href="/competitions" style="width: 100%;"><button style="width: 100%;">WCA Competitions</button></a>
                </div>
            </div>
        </div>

        <?php include "./php/algSetGroups.php"; ?>

        <?php
        foreach ($algSetGroups as $groupName => $group) {
            echo "<div class='algSetGroup'>";
                echo "<h2>$groupName Algs</h2>";
                echo "</button>";
                echo "<div class='algLinks'>";
                    foreach ($group as $algSet) {
                        $algSetWithSpaces = str_replace("-", " ", $algSet);
                        echo "<a href='/algorithms/$algSet' class='link'>$algSetWithSpaces</a>";
                    }
                echo "</div>";
            echo "</div>";
        }
        ?>

        <h2 style="margin-top: 32px;">Blog Posts</h2>
        <ul style="margin-top: 8px;">
            <li><a href="/blog/best-speedcubing-method" class="link">What is the best speedcubing method?</a></li>
            <li><a href="/blog/is-speedcubing-a-sport" class="link">Is speedcubing a sport?</a></li>
        </ul>

        <div style="margin-top: 150px;"></div>
        <p>
            <a class="link" href="/feedback">Feedback</a>
            |
            <a class="link" href="https://github.com/spencerchubb/cubingapp">GitHub</a>
        </p>
    </main>
</body>

<script>
    nameRanksInput.onkeydown = event => {
        if (event.key === "Enter") location.href = `/name-ranks/?name=${nameRanksInput.value}`;
    }
    nameRanksGo.onclick = () => location.href = `/name-ranks/?name=${nameRanksInput.value}`;
</script>

<?php include "php/gtag.php" ?>

</html>
