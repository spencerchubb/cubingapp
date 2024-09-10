<!DOCTYPE html>
<html>
<head>
    <meta name="description" content="Ranks based on World Cube Association (WCA) data">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
    <title>Ranks</title>
</head>

<script>
function setUrlParam(key, value) {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set(key, value);
    window.location.search = urlParams.toString();
}

function goToPage(page, pages) {
    setUrlParam('page', page);
}
</script>

<?php
$event = $_GET["event"] ?? "333";
$region = $_GET["region"] ?? "World";
$page = $_GET["page"] ?? 1;
$type = $_GET["type"] ?? "Single";
$perPage = 100;
?>

<body>
<?php include_once "../php/menu.php"; ?>

<main>
    <h1 style="margin-bottom: 8px;">Ranks</h1>
    <div style="display: flex;"><?php include "../php/wca_attribution.php"; ?></div>

    <div style="margin-top: 24px; display: flex; flex-direction: column;">
        <div style="width: 100%; max-width: 300px;">  
            <?php
                include "../php/event_utils.php";
                selectEvent($event, $eventIdToName);
            ?>
        </div>
        <div style="margin-top: 16px; width: 100%; max-width: 300px;">
            <?php include "../php/select_region.php" ?>
        </div>
        <select
            id="selectType"
            style="margin-top: 16px; width: 100%; max-width: 300px;"
        >
            <option value="Single" <?php echo $type === "Single" ? "selected" : "" ?>>Single</option>
            <option value="Average" <?php echo $type === "Average" ? "selected" : "" ?>>Average</option>
        </select>
        <script>
            selectEvent.onchange = event => setUrlParam("event", event.target.value);
            selectRegion.onchange = event => setUrlParam("region", event.target.value);
            selectType.onchange = event => setUrlParam("type", event.target.value);
            contributorsCheckbox.onchange = event => setUrlParam("contributors", event.target.checked);
        </script>
    </div>
    <?php
    error_reporting(E_ALL);
    ini_set("display_errors", 1);
    $db = new SQLite3("/wca.db");

    if (!$db) {
        die("Error connecting to the database: " . $db->lastErrorMsg());
    }

    $whereConditions = "";
    $valuesToBind = [];
    if (strpos($region, "continent-") !== false) {
        $whereConditions .= " AND continentId = :region";
        $valuesToBind[":region"] = "_" . substr($region, strlen("continent-"));
        $rankColumn = "continentRank";
    } else if (strpos($region, "country-") !== false) {
        $whereConditions .= " AND countryId = :region";
        $valuesToBind[":region"] = substr($region, strlen("country-"));
        $rankColumn = "countryRank";
    } else {
        $rankColumn = "worldRank";
    }

    $stmt = $db->prepare("SELECT COUNT() as count
        FROM Ranks$type
        WHERE eventId = :eventId $whereConditions");
    $stmt->bindValue(":eventId", $event, SQLITE3_TEXT);
    foreach ($valuesToBind as $key => $value) $stmt->bindValue($key, $value, SQLITE3_TEXT);
    $rows = $stmt->execute();
    $row = $rows->fetchArray(SQLITE3_ASSOC);
    $pages = ceil($row["count"] / $perPage);

    $page = max(1, $page);
    $page = min($page, $pages);
    $lowerBound = ($page - 1) * $perPage;
    $upperBound = $lowerBound + $perPage;

    $stmt = $db->prepare("SELECT personId, name, best, countryId, $rankColumn as rank
        FROM Ranks$type ranks
        WHERE eventId = :eventId AND rank >= $lowerBound AND rank <= $upperBound $whereConditions
        ORDER BY worldRank");
    $stmt->bindValue(":eventId", $event, SQLITE3_TEXT);
    $stmt->bindValue(":offset", $lowerBound, SQLITE3_TEXT);
    foreach ($valuesToBind as $key => $value) $stmt->bindValue($key, $value, SQLITE3_TEXT);
    $rows = $stmt->execute();

    function renderPaginator($pages, $page) {
        if ($pages <= 1) return;

        $pageStart = max(1, $page - 2);
        $pageEnd = min($pages, $page + 2);
        $previousPage = max(1, $page - 1);
        $nextPage = min($pages, $page + 1);
        echo "<div style='margin-top: 1rem; display: flex; flex-wrap: wrap; align-items: center;'>";
        echo "<button class='btn-transparent' style='padding: 8px 12px;' onclick='goToPage($previousPage, $pages)'>◀</button>";
        echo "<p style='font-size: 14px; color: #ddd;'>Pg $page/$pages</p>";
        echo "<button class='btn-transparent' style='padding: 8px 12px;' onclick='goToPage($nextPage, $pages)'>▶</button>";
        echo "<input type='number' placeholder='Go to' style='width: 90px;' onchange='setUrlParam(\"page\", this.value)' />";
        echo "</div>";
    }
    renderPaginator($pages, $page);

    echo "<div class='table-wrapper' style='margin-top: 24px;'><table>";
    echo "<tr>
        <th>#</th>
        <th>Name</th>
        <th>Result</th>
        <th>Country</th>
    </tr>";

    while ($row = $rows->fetchArray(SQLITE3_ASSOC)) {
        $id = $row["personId"];
        $rank = $row["rank"];
        $name = $row["name"];
        $best = formatResult($event, $type, $row["best"]);
        $country = $row["countryId"];

        echo "<tr>
            <td>$rank</td>
            <td>$name</td>
            <td>$best</td>
            <td>$country</td>
        </tr>";
    }

    $db->close();

    echo "</table></div>";
    ?>
    <div style="margin-top: 150px;"></div>
</main>
</body>

<style>
    .table-wrapper {
        max-width: 100%;
        width: fit-content;
        overflow-x: auto;
    }

    table tr:nth-child(even) {
        background: var(--gray-900);
    }
</style>

<?php include "../php/gtag.php" ?>

</html>
