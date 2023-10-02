<!DOCTYPE html>
<html>
<head>
    <meta name="description" content="Enter a WCA ID to calculate the Sum of Ranks for that competitor.">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sum of Ranks (SoR) Calculator</title>
    <link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
</head>
<body class="col" style="align-items: center; padding: 16px; overflow-y: auto;">
    <h1>Sum of Ranks (SoR) Calculator</h1>

    <?php
        $wcaId = $_GET['wcaId'] ?? null;
        $type = $_GET['type'] ?? 'Single';
    ?>

    <form
        action="calculate-sum-of-ranks.php"
        method="GET"
        style="margin-top: 1rem; display: grid; grid-template-columns: 1fr auto; gap: 24px 16px;"
    >
        <p>WCA ID</p>
        <input
            type="text"
            value="<?php echo $wcaId;?>"
            name="wcaId"
            placeholder="Enter WCA ID"
        />
        <p>Type</p>
        <select name="type">
            <option value="Single" <?php if ($type === 'Single') echo 'selected'; ?>>Single</option>
            <option value="Average" <?php if ($type === 'Average') echo 'selected'; ?>>Average</option>
        </select>
        <button
            type="submit"
            style="grid-column: 1 / 3; margin-top: 0.5rem;"
        >
            Calculate
        </button>
    </form>

    <?php if ($wcaId !== null): ?>
        <?php
        error_reporting(E_ALL);
        ini_set('display_errors', 1);

        $db = new SQLite3('wca.db');

        if (!$db) {
            die("Error connecting to the database: " . $db->lastErrorMsg());
        }

        $singleQuery = "
        WITH User AS (
            SELECT p.countryId, c.continentId
            FROM Persons p
            JOIN Countries c ON c.id = p.countryId AND p.id = :wcaId
        )
        SELECT
            e.id AS eventId,
            r.worldRank,
            (SELECT COUNT(*) FROM RanksSingle r WHERE r.eventId = e.id) AS maxWorldRank,
            r.continentRank,
            (SELECT COUNT(*) FROM RanksSingle r WHERE r.continentId = (SELECT continentId FROM User) AND r.eventId = e.id) AS maxContinentRank,
            r.countryRank,
            (SELECT COUNT(*) FROM RanksSingle r WHERE r.countryId = (SELECT countryId FROM User) AND r.eventId = e.id) AS maxCountryRank
        FROM Events e
        LEFT JOIN RanksSingle r ON e.id = r.eventId AND r.personId = :wcaId
        WHERE e.id <> '333ft' AND e.id <> '333mbo' AND e.id <> 'magic' AND e.id <> 'mmagic';
        ";

        $averageQuery = "
        WITH User AS (
            SELECT p.countryId, c.continentId
            FROM Persons p
            JOIN Countries c ON c.id = p.countryId AND p.id = :wcaId
        )
        SELECT
            e.id AS eventId,
            r.worldRank,
            (SELECT COUNT(*) FROM RanksAverage r WHERE r.eventId = e.id) AS maxWorldRank,
            r.continentRank,
            (SELECT COUNT(*) FROM RanksAverage r WHERE r.continentId = (SELECT continentId FROM User) AND r.eventId = e.id) AS maxContinentRank,
            r.countryRank,
            (SELECT COUNT(*) FROM RanksAverage r WHERE r.countryId = (SELECT countryId FROM User) AND r.eventId = e.id) AS maxCountryRank
        FROM Events e
        LEFT JOIN RanksAverage r ON e.id = r.eventId AND r.personId = :wcaId
        WHERE e.id <> '333ft' AND e.id <> '333mbf' AND e.id <> '333mbo' AND e.id <> 'magic' AND e.id <> 'mmagic';
        ";

        $query = $type === 'Single' ? $singleQuery : $averageQuery;
        $stmt = $db->prepare($query);
        $stmt->bindValue(':wcaId', $wcaId, SQLITE3_TEXT);
        $result = $stmt->execute();

        if (!$result) {
            die("Error executing the query.");
        }

        echo '<table border="1" style="margin-top: 3rem;">';
        echo '<tr>
            <th>Event</th>
            <th>World Rank</th>
            <th>Continent Rank</th>
            <th>Country Rank</th>
        </tr>';

        $rows = array();
        $worldSum = 0;
        $continentSum = 0;
        $countrySum = 0;
        while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
            $row['worldRank'] = $row['worldRank'] ?? $row['maxWorldRank'];
            $row['continentRank'] = $row['continentRank'] ?? $row['maxContinentRank'];
            $row['countryRank'] = $row['countryRank'] ?? $row['maxCountryRank'];

            $worldSum += $row['worldRank'];
            $continentSum += $row['continentRank'];
            $countrySum += $row['countryRank'];

            // append row to rows
            $rows[] = $row;
        }

        echo '<tr>';
        echo '<td>Sum</td>';
        echo '<td>' . $worldSum . '</td>';
        echo '<td>' . $continentSum . '</td>';
        echo '<td>' . $countrySum . '</td>';
        echo '</tr>';

        // Define a function to render a cell
        function renderCell($value, $maxValue) {
            if ($maxValue == 0) {
                return '<td>N/A</td>';
            }

            $percent = $value / $maxValue * 100;
            $textColor = 'hsl(' . (100 - $percent) . 'deg 100% 50%)';
            return '<td style="color: ' . $textColor . ';">' . $value . '</td>';
        }

        foreach ($rows as $row) {
            echo '<tr>';
            echo '<td>' . $row['eventId'] . '</td>';
            echo renderCell($row['worldRank'], $row['maxWorldRank']);
            echo renderCell($row['continentRank'], $row['maxContinentRank']);
            echo renderCell($row['countryRank'], $row['maxCountryRank']);
            echo '</tr>';
        }

        echo '</table>';

        // Step 7: Close the database connection
        $db->close();
        ?>
    <?php endif; ?>

    <div class="col" style="width: 100%; max-width: 600px; gap: 16px;"></div>
    <h2>What is Sum of Ranks (SoR)?</h2>
    <p style="margin-top: 0.8rem;">
        Sum of Ranks is one way of measuring a cuber's overall
        performance rather than measuring just one event. To compute a
        Sum of Ranks, we simply add up the cuber's rank in each event.
        It is possible to compute a cuber's Sum of Ranks at a global
        level, continental level, and national level.
    </p>
    <h2>What does my Sum of Ranks mean?</h2>
    <p style="margin-top: 0.8rem;">
        Lower scores are better. For example, since the world record
        holder is ranked 1st in the world, their rank for that event is
        1.
    </p>
    <h2>Alternatives to Sum of Ranks</h2>
    <p style="margin-top: 0.8rem;">
        As mentioned before, Sum of Ranks is just one way to measure the
        all-round abilities of a cuber. If you want to know your Kinch
        Score, you can visit our <a
            class="link"
            href="/calculate-kinch.html">Kinch Calculator</a
        > as well.
    </p>
    <p style="margin-top: 0.8rem;">
        Different aggregation methods will have different tradeoffs, and
        some will debate which methods are better. That's why we provide
        multiple ways to measure your all-round abilities.
    </p>
</div>
<div style="margin-top: 64px;"></div>
</body>

<style>
    * {
        box-sizing: border-box;
        font-family: Verdana, sans-serif;
    }

    html {
        width: 100%;
        height: 100%;
        font-family: Verdana, sans-serif;
        overflow: auto;
    }

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    li {
        margin: 0;
        padding: 0;
        color: var(--gray-100);
    }

    p, li {
        font-size: 1rem;
        line-height: 1.4rem;
    }

    ul,
    ol {
        margin: 0;
    }

    a {
        text-decoration: inherit;
    }

    input,
    select {
        margin: 0;
        font-size: 1rem;
    }

    input,
    select,
    textarea {
        font-size: 1rem;
        padding: 6px;
        background: var(--gray-800);
        color: var(--gray-100);
        outline: solid 1px var(--gray-400);
        border: none;
        border-radius: 8px;
        box-shadow: 0 0 4px 2px var(--gray-600);
        transition: all 0.15s ease-in-out;
    }

    input:focus, select:focus, textarea:focus {
        outline: solid 1px var(--gray-300);
        box-shadow: 0 0 4px 2px var(--lightBlue-300);
    }

    input[type="checkbox"] {
        outline: none;
        box-shadow: none;
    }

    input::-moz-placeholder,
    input:-moz-placeholder,
    input::-webkit-input-placeholder,
    input:-ms-input-placeholder,
    textarea::-moz-placeholder,
    textarea:-moz-placeholder,
    textarea::-webkit-input-placeholder,
    textarea:-ms-input-placeholder {
        color: var(--gray-400);
    }

    table {
        border-collapse: collapse;
    }

    th,
    td {
        border-bottom: solid 1px var(--gray-500);
        padding: 8px 16px 8px 8px;
        color: white;
        text-align: left;
        white-space: nowrap;
    }

    svg {
        display: block;
        width: 100%;
        height: 100%;
    }

    button {
        padding: 0.5rem 1rem;
        border-radius: 8px;
        color: #fff;
        font-family: Verdana, sans-serif;
        font-size: 1rem;
        border: none;
        background-color: var(--blue-600);
        text-align: center;
        transition: all 0.15s ease-in-out;
    }

    button:hover {
        cursor: pointer;
        background-color: var(--blue-800);
    }

    button:disabled {
        background-color: var(--gray-500);
        cursor: not-allowed;
    }

    .btn-white {
        background-color: white;
        color: black;
    }

    .btn-white:hover {
        background-color: var(--gray-300);
    }

    .btn-gray {
        background-color: var(--gray-800);
    }

    .btn-gray:hover {
        background-color: var(--gray-900);
    }

    .btn-transparent {
        background-color: transparent;
    }

    .btn-transparent:hover {
        background-color: var(--gray-500);
    }

    .link {
        color: var(--lightBlue-500);
    }

    .link:hover {
        text-decoration: underline;
        cursor: pointer;
    }

    body {
        margin: 0;
        background-color: var(--gray-800);
        /* Prevent scrolling and refresh on mobile */
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: fixed;
        top: 0;
        bottom: 0;
    }

    canvas {
        /*
        * This is 'fixed' because if it were 'absolute', then the layout would be broken 
        * when inside a div with position: relative.
        */
        position: fixed;
        display: block;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: -1;
    }

    .row {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .col {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .blue-to-purple {
        background-image: linear-gradient(135deg,
                hsl(240deg 47% 23%) 0%,
                hsl(266deg 42% 27%) 50%,
                hsl(286deg 36% 30%) 100%);
    }

    .red-to-orange {
        background-image: linear-gradient(135deg,
                hsl(0deg 64% 31%) 0%,
                hsl(15deg 76% 32%) 50%,
                hsl(27deg 94% 31%) 100%);
    }

    .text-gradient {
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .navbar {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        min-height: 48px;
        background: var(--gray-800);
        border-bottom: solid 1px var(--gray-600);
    }

    .spinner {
        display: inline-block;
        width: 50px;
        height: 50px;
        border: 8px solid var(--lightBlue-200);
        border-radius: 50%;
        border-top-color: var(--blue-500);
        animation: spin 1s ease-in-out infinite;
    }

    @keyframes spin {
        to { transform: rotate(360deg); }
    }

    @-webkit-keyframes spin {
        to { transform: rotate(360deg); }
    }

    .dropdown {
        position: relative;
        display: inline-block;
    }

    .dropdown-content {
        visibility: hidden;
        opacity: 0;
        transition: all 0.15s ease-in-out;
        position: absolute;
        background-color: #f1f1f1;
        box-shadow: 0 2px 12px -2px var(--gray-500);
    }

    .dropdown-content a {
        padding: 0.5rem 1rem;
        text-decoration: none;
        display: block;
        white-space: nowrap;
        color: var(--gray-100);
        background: var(--gray-900);
    }

    .dropdown-content a:hover {
        background: var(--gray-800);
    }

    .dropdown:hover .dropdown-content {
        visibility: visible;
        opacity: 1;
    }

    .firebase-emulator-warning {
        display: none;
    }

    * {
        --purple-50: #faf5ff;
        --purple-100: #f3e8ff;
        --purple-200: #e9d5ff;
        --purple-300: #d8b4fe;
        --purple-400: #c084fc;
        --purple-500: #a855f7;
        --purple-600: #9333ea;
        --purple-700: #7e22ce;
        --purple-800: #6b21a8;
        --purple-900: #581c87;
        --blue-50: #eff6ff;
        --blue-100: #dbeafe;
        --blue-200: #bfdbfe;
        --blue-300: #93c5fd;
        --blue-400: #60a5fa;
        --blue-500: #3b82f6;
        --blue-600: #2563eb;
        --blue-700: #1d4ed8;
        --blue-800: #1e40af;
        --blue-900: #1e3a8a;
        --lightBlue-50: #f0f9ff;
        --lightBlue-100: #e0f2fe;
        --lightBlue-200: #bae6fd;
        --lightBlue-300: #7dd3fc;
        --lightBlue-400: #38bdf8;
        --lightBlue-500: #0ea5e9;
        --lightBlue-600: #0284c7;
        --lightBlue-700: #0369a1;
        --lightBlue-800: #075985;
        --lightBlue-900: #0c4a6e;
        --green-50: #f0fdf4;
        --green-100: #dcfce7;
        --green-200: #bbf7d0;
        --green-300: #86efac;
        --green-400: #4ade80;
        --green-500: #22c55e;
        --green-600: #16a34a;
        --green-700: #15803d;
        --green-800: #166534;
        --green-900: #14532d;
        --yellow-50: #fefce8;
        --yellow-100: #fef9c3;
        --yellow-200: #fef08a;
        --yellow-300: #fde047;
        --yellow-400: #facc15;
        --yellow-500: #eab308;
        --yellow-600: #ca8a04;
        --yellow-700: #a16207;
        --yellow-800: #854d0e;
        --yellow-900: #713f12;
        --red-50: #fef2f2;
        --red-100: #fee2e2;
        --red-200: #fecaca;
        --red-300: #fca5a5;
        --red-400: #f87171;
        --red-500: #ef4444;
        --red-600: #dc2626;
        --red-700: #b91c1c;
        --red-800: #991b1b;
        --red-900: #7f1d1d;
        --gray-50: #fafafa;
        --gray-100: #f4f4f5;
        --gray-200: #e4e4e7;
        --gray-300: #d4d4d8;
        --gray-400: #a1a1aa;
        --gray-500: #71717a;
        --gray-600: #52525b;
        --gray-700: #3f3f46;
        --gray-800: #27272a;
        --gray-900: #18181b;
    }

    /* Start styles specific to this page */
    h1 {
        margin-top: 0.5rem;
    }

    h2, p {
        max-width: 600px;
    }

    h2 {
        margin-top: 32px;
    }

    /* End styles specific to this page */
</style>

</html>
