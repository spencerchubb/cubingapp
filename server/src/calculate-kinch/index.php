<!DOCTYPE html>
<html>
<head>
    <meta name="description" content="Best tool for speedcubers to calculate their Kinch score.">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="stylesheet" href="/css/colors.css">
    <link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
    <title>Kinch Calculator | Cubing</title>
</head>

<body style="width: 100%; height: 100%;">
    <nav>
        <?php include_once "../php/menu/menuIcon.php" ?>
        <?php include_once "../php/menu/menu.php" ?>
    </nav>
    <main class="col" style="width: 100%; height: 100%; align-items: center; padding: 16px; overflow-y: auto;">
        <h1 style="margin-top: 0.25rem;">Kinch Calculator</h1>
        <?php
            $wcaId = $_GET["wcaId"] ?? null;
            $region = $_GET["region"] ?? "World";
        ?>
        <form
            action="calculate-kinch"
            method="GET"
            style="margin-top: 1.5rem; display: grid; grid-template-columns: 1fr auto; gap: 24px 16px;"
        >
            <p>WCA ID</p>
            <input
                type="text"
                value="<?php echo $wcaId; ?>"
                name="wcaId"
                placeholder="Enter WCA ID"
            />
            <p>Region</p>
            <select name="region">
                <?php
                include_once "../php/option.php";
                echo createOption("World", "World", $region);
                ?>
                <optgroup label="Continents">
                    <?php
                        $CONTINENTS = [
                            "Asia",
                            "Europe",
                            "Africa",
                            "South America",
                            "Oceania",
                            "North America",
                        ];

                        foreach ($CONTINENTS as $continent) {
                            echo createOption("continent-" . $continent, $continent, $region);
                        }
                    ?>
                </optgroup>
                <optgroup label="Countries">
                    <?php
                        $COUNTRIES = [
                            "Afghanistan",
                            "Albania",
                            "Algeria",
                            "Andorra",
                            "Angola",
                            "Antigua and Barbuda",
                            "Argentina",
                            "Armenia",
                            "Australia",
                            "Austria",
                            "Azerbaijan",
                            "Bahamas",
                            "Bahrain",
                            "Bangladesh",
                            "Barbados",
                            "Belarus",
                            "Belgium",
                            "Belize",
                            "Benin",
                            "Bhutan",
                            "Bolivia",
                            "Bosnia and Herzegovina",
                            "Botswana",
                            "Brazil",
                            "Brunei",
                            "Bulgaria",
                            "Burkina Faso",
                            "Burundi",
                            "Cabo Verde",
                            "Cambodia",
                            "Cameroon",
                            "Canada",
                            "Central African Republic",
                            "Chad",
                            "Chile",
                            "China",
                            "Taiwan",
                            "Colombia",
                            "Comoros",
                            "Congo",
                            "Costa Rica",
                            "Cote d_Ivoire",
                            "Croatia",
                            "Cuba",
                            "Cyprus",
                            "Czech Republic",
                            "Democratic People_s Republic of Korea",
                            "Democratic Republic of the Congo",
                            "Denmark",
                            "Djibouti",
                            "Dominica",
                            "Dominican Republic",
                            "Ecuador",
                            "Egypt",
                            "El Salvador",
                            "Equatorial Guinea",
                            "Eritrea",
                            "Estonia",
                            "Eswatini",
                            "Ethiopia",
                            "Federated States of Micronesia",
                            "Fiji",
                            "Finland",
                            "France",
                            "Gabon",
                            "Gambia",
                            "Georgia",
                            "Germany",
                            "Ghana",
                            "Greece",
                            "Grenada",
                            "Guatemala",
                            "Guinea",
                            "Guinea Bissau",
                            "Guyana",
                            "Haiti",
                            "Honduras",
                            "Hong Kong",
                            "Hungary",
                            "Iceland",
                            "India",
                            "Indonesia",
                            "Iran",
                            "Iraq",
                            "Ireland",
                            "Israel",
                            "Italy",
                            "Jamaica",
                            "Japan",
                            "Jordan",
                            "Kazakhstan",
                            "Kenya",
                            "Kiribati",
                            "Kosovo",
                            "Kuwait",
                            "Kyrgyzstan",
                            "Laos",
                            "Latvia",
                            "Lebanon",
                            "Lesotho",
                            "Liberia",
                            "Libya",
                            "Liechtenstein",
                            "Lithuania",
                            "Luxembourg",
                            "Macau",
                            "Madagascar",
                            "Malawi",
                            "Malaysia",
                            "Maldives",
                            "Mali",
                            "Malta",
                            "Marshall Islands",
                            "Mauritania",
                            "Mauritius",
                            "Mexico",
                            "Moldova",
                            "Monaco",
                            "Mongolia",
                            "Montenegro",
                            "Morocco",
                            "Mozambique",
                            "Myanmar",
                            "Namibia",
                            "Nauru",
                            "Nepal",
                            "Netherlands",
                            "New Zealand",
                            "Nicaragua",
                            "Niger",
                            "Nigeria",
                            "North Macedonia",
                            "Norway",
                            "Oman",
                            "Pakistan",
                            "Palau",
                            "Palestine",
                            "Panama",
                            "Papua New Guinea",
                            "Paraguay",
                            "Peru",
                            "Philippines",
                            "Poland",
                            "Portugal",
                            "Qatar",
                            "Korea",
                            "Romania",
                            "Russia",
                            "Rwanda",
                            "Saint Kitts and Nevis",
                            "Saint Lucia",
                            "Saint Vincent and the Grenadines",
                            "Samoa",
                            "San Marino",
                            "Sao Tome and Principe",
                            "Saudi Arabia",
                            "Senegal",
                            "Serbia",
                            "Seychelles",
                            "Sierra Leone",
                            "Singapore",
                            "Slovakia",
                            "Slovenia",
                            "Solomon Islands",
                            "Somalia",
                            "South Africa",
                            "South Sudan",
                            "Spain",
                            "Sri Lanka",
                            "Sudan",
                            "Suriname",
                            "Sweden",
                            "Switzerland",
                            "Syria",
                            "Tajikistan",
                            "Tanzania",
                            "Thailand",
                            "Timor-Leste",
                            "Togo",
                            "Tonga",
                            "Trinidad and Tobago",
                            "Tunisia",
                            "Turkey",
                            "Turkmenistan",
                            "Tuvalu",
                            "Uganda",
                            "Ukraine",
                            "United Arab Emirates",
                            "United Kingdom",
                            "Uruguay",
                            "USA",
                            "Uzbekistan",
                            "Vanuatu",
                            "Vatican City",
                            "Venezuela",
                            "Vietnam",
                            "Yemen",
                            "Zambia",
                            "Zimbabwe",
                        ];

                        foreach ($COUNTRIES as $country) {
                            echo createOption("country-" . $country, $country, $region);
                        }
                    ?>
                </optgroup>
            </select>
            <button
                type="submit"
                style="grid-column: 1 / 3; margin-top: 0.5rem;"
            >
                Calculate
            </button>
        </form>
        <?php if ($wcaId): ?>
            <div style="margin-top: 3rem;"></div>
            <?php include "../php/wca_attribution.php" ?>
            <?php
            error_reporting(E_ALL);
            ini_set("display_errors", 1);
            $db = new SQLite3("wca.db");

            if (!$db) {
                die("Error connecting to the database: " . $db->lastErrorMsg());
            }

            function buildStatement($db, $wcaId, $region) {
                // The GROUP BY ensures we only get one row per event.
                // Sometimes people are tied for first place.
                $worldQuery = "
                SELECT
                    e.id as eventId,
                    rs1.best AS single,
                    ra1.best AS average,
                    rs2.best AS bestSingle,
                    ra2.best AS bestAverage
                FROM Events e
                LEFT JOIN RanksSingle rs1 ON e.id = rs1.eventId AND rs1.personId = :wcaId
                LEFT JOIN RanksAverage ra1 ON e.id = ra1.eventId AND ra1.personId = :wcaId
                LEFT JOIN RanksSingle rs2 ON e.id = rs2.eventId AND rs2.worldRank = 1
                LEFT JOIN RanksAverage ra2 ON e.id = ra2.eventId AND ra2.worldRank = 1
                WHERE e.id <> '333ft' AND e.id <> '333mbo' AND e.id <> 'magic' AND e.id <> 'mmagic'
                GROUP BY e.id;
                ";
                $continentQuery = "
                SELECT
                    e.id as eventId,
                    rs1.best AS single,
                    ra1.best AS average,
                    rs2.best AS bestSingle,
                    ra2.best AS bestAverage
                FROM Events e
                LEFT JOIN RanksSingle rs1 ON e.id = rs1.eventId AND rs1.personId = :wcaId
                LEFT JOIN RanksAverage ra1 ON e.id = ra1.eventId AND ra1.personId = :wcaId
                LEFT JOIN RanksSingle rs2
                    ON e.id = rs2.eventId
                        AND rs2.continentId = :regionId
                        AND rs2.continentRank = 1
                LEFT JOIN RanksAverage ra2
                    ON e.id = ra2.eventId
                        AND ra2.continentId = :regionId
                        AND ra2.continentRank = 1
                WHERE e.id <> '333ft' AND e.id <> '333mbo' AND e.id <> 'magic' AND e.id <> 'mmagic'
                GROUP BY e.id;
                ";
                $countryQuery = "
                SELECT
                    e.id as eventId,
                    rs1.best AS single,
                    ra1.best AS average,
                    rs2.best AS bestSingle,
                    ra2.best AS bestAverage
                FROM Events e
                LEFT JOIN RanksSingle rs1 ON e.id = rs1.eventId AND rs1.personId = :wcaId
                LEFT JOIN RanksAverage ra1 ON e.id = ra1.eventId AND ra1.personId = :wcaId
                LEFT JOIN RanksSingle rs2
                    ON e.id = rs2.eventId
                        AND rs2.countryId = :regionId
                        AND rs2.countryRank = 1
                LEFT JOIN RanksAverage ra2
                    ON e.id = ra2.eventId
                        AND ra2.countryId = :regionId
                        AND ra2.countryRank = 1
                WHERE e.id <> '333ft' AND e.id <> '333mbo' AND e.id <> 'magic' AND e.id <> 'mmagic'
                GROUP BY e.id;
                ";

                $strings = explode("-", $region);
                if ($strings[0] === "continent") {
                    $stmt = $db->prepare($continentQuery);
                    $stmt->bindValue(":wcaId", $wcaId, SQLITE3_TEXT);
                    // Continents start with underscore in the database
                    $stmt->bindValue(":regionId", "_" . $strings[1], SQLITE3_TEXT);
                    return $stmt;
                } else if ($strings[0] === "country") {
                    $stmt = $db->prepare($countryQuery);
                    $stmt->bindValue(":wcaId", $wcaId, SQLITE3_TEXT);
                    $stmt->bindValue(":regionId", $strings[1], SQLITE3_TEXT);
                    return $stmt;
                }
                
                $stmt = $db->prepare($worldQuery);
                $stmt->bindValue(":wcaId", $wcaId, SQLITE3_TEXT);
                return $stmt;
            }

            $stmt = buildStatement($db, $wcaId, $region);
            $rows = $stmt->execute();
            
            if (!$rows) {
                die("Error executing the query.");
            }
            
            $results = array();
            while ($row = $rows->fetchArray(SQLITE3_ASSOC)) {
                array_push($results, $row);
            }

            $db->close();

            echo "<table style='margin-top: 1rem;'>";
            echo "<tr>
                <th>Event</th>
                <th>Score</th>
            </tr>";

            include "../php/kinch.php";
            $scores = calcKinchScores($results);
            $averageScore = calcAverageKinchScore($scores);

            function renderCell($percent) {
                // This brings h closer to 100 to make the color more green
                $h = 58.5 * log10(0.5 * $percent + 1);
                $textColor = "hsl(" . $h . "deg 100% 50%)";
                $rounded = round($percent, 2);
                return "<td style='color: " . $textColor . ";'>" . $rounded . "</td>";
            }

            echo "<tr>";
            echo "<td>Overall</td>";
            echo renderCell($averageScore);
            echo "</tr>";

            foreach ($scores as $score) {
                echo "<tr>";
                echo "<td>" . $score[0] . "</td>";
                echo renderCell($score[1]);
                echo "</tr>";
            }

            echo "</table>";
            ?>
        <?php endif; ?>
        <div class="col" style="width: 100%; max-width: 600px; gap: 16px;">
        <h2>What is a Kinch Rank?</h2>
            <p>
                A Kinch Rank is one way of measuring a cuber's overall performance rather than measuring just one event. To compute a Kinch Score, we compute the average of each event ratio, where an event ratio is your personal record divided by the world record.
            </p>
            <p>
                The Multi-blind score is calculated by summing the points and the proportion of the hour left. That means the time is also incorporated into the Kinch Score.
            </p>
            <p>
                There is one more special rule about calculating the Kinch Score. We take your better score between:
            </p>
            <ul>
                <li>FMC single and average</li>
                <li>3BLD single and average</li>
                <li>4BLD single and average</li>
                <li>5BLD single and average</li>
            </ul>
            <h2>What does my Kinch Score mean?</h2>
            <p>
                Higher scores are better. The maximum you can get is 100, assuming you hold the world record in every event.
            </p>
            <p>
                For comparison, the best Kinch Score in the world (at the time of writing) is Stanley Chapel with a score of 74.
                <a href="https://wca.cuber.pro/kinch/persons" class="link">
                    Top rankings here
                </a>
            </p>
            <h2>What is the origin of Kinch Ranks?</h2>
            <p>
                It was introduced on speedsolving.com by kinch2002 in
                <a href="https://www.speedsolving.com/threads/all-round-rankings-kinchranks.53353/" class="link">this post</a>
                😊
            </p>
            <h2>Why use Kinch Ranks?</h2>
            <p>
                Kinch Ranks and Sum of Ranks are both ways to measure the all-round performance of a cuber, but there are a few reasons why kinch2002 devised the system.
            </p>
            <ul>
                <li>Kinch Ranks combines the singles and averages</li>
                <li>You are not penalized as heavily for not having competed in an event</li>
                <li>Avoids event biases - For example, you have to be <b>really</b> good at 3x3 to have a good Sum of Ranks</li>
                <li>In Sum of Ranks, there is no incentive for the world record holder to improve that event</li>
            </ul>
            <h2>Alternatives to Kinch Ranks</h2>
            <p>
                As mentioned before, Kinch Ranks is just one way to measure the all-round abilities of a cuber. If you want to know your Sum of Ranks, you can visit our <a class="link" href="/calculate-sum-of-ranks">Sum of Ranks Calculator</a> as well.
            </p>
            <p>
                Different aggregation methods will have different tradeoffs, and some will debate which methods are better. That's why we provide multiple ways to measure your all-round abilities.
            </p>
        </div>
        <div style="margin-top: 64px;">
            <?php include "../php/cool_calculators.php" ?>
        </div>
        <div style="margin-top: 96px;"></div>
    </main>
</body>

<style>
    h2 {
        margin-top: 32px;
    }

    h2, p {
        max-width: 600px;
    }

    p, ul {
        align-self: start;
        line-height: 1.5rem;
    }
</style>

<?php include "../php/gtag.php" ?>

</html>
