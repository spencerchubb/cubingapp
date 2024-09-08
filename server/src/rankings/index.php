<!DOCTYPE html>
<html>
<head>
    <meta name="description" content="Sum of ranks leaderboard and calculator based on World Cube Association data">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
    <title>Rankings</title>
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
$contributors = ($_GET["contributors"] ?? "false") == "true";
$perPage = 100;
?>

<body>
<?php include_once "../php/menu.php"; ?>

<main>
    <h1 style="text-align: center; margin-bottom: 8px;">Rankings</h1>
    <?php include "../php/wca_attribution.php"; ?>

    <div style="margin-top: 32px; display: flex; flex-direction: column; align-items: center;">
        <div style="margin-top: 16px; width: 100%; max-width: 300px;">  
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
        <div style="margin-top: 16px; width: 100%; max-width: 300px; display: flex; gap: 12px;">
            <input type="checkbox" id="contributorsCheckbox" <?php echo $contributors ? "checked" : "" ?> style="width: 16px;" />
            <label for="contributorsCheckbox">WCA Contributors</label>
        </div>
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
    }
    if (strpos($region, "country-") !== false) {
        $whereConditions .= " AND countryId = :region";
        $valuesToBind[":region"] = substr($region, strlen("country-"));
    }

    $query = "SELECT personId, name, best, countryId FROM Ranks$type ranks
        WHERE eventId = :event $whereConditions
        ORDER BY worldRank";

    if ($contributors) {
        $query = "SELECT personId, name, best, countryId, Staff.group_name, Staff.group_type FROM Ranks$type ranks
            JOIN Staff ON Staff.wca_id = ranks.personId
            WHERE eventId = :event $whereConditions
            ORDER BY worldRank";
    }

    $stmt = $db->prepare("SELECT COUNT() as count FROM ($query)");
    $stmt->bindValue(":event", $event, SQLITE3_TEXT);
    foreach ($valuesToBind as $key => $value) $stmt->bindValue($key, $value, SQLITE3_TEXT);
    $rows = $stmt->execute();
    $row = $rows->fetchArray(SQLITE3_ASSOC);
    $pages = ceil($row["count"] / $perPage);

    $page = max(1, $page);
    $page = min($page, $pages);
    $offset = ($page - 1) * $perPage;

    $stmt = $db->prepare("$query LIMIT $perPage OFFSET :offset");
    $stmt->bindValue(":event", $event, SQLITE3_TEXT);
    $stmt->bindValue(":offset", $offset, SQLITE3_TEXT);
    foreach ($valuesToBind as $key => $value) $stmt->bindValue($key, $value, SQLITE3_TEXT);
    $rows = $stmt->execute();

    // personId => row
    $tableRows = array();

    if ($contributors) {

        // Contributors may have more than one title, so we need to group by personId.
        while ($row = $rows->fetchArray(SQLITE3_ASSOC)) {
            if (!isset($tableRows[$row["personId"]])) {
                $tableRows[$row["personId"]] = $row;
                $tableRows[$row["personId"]]["titles"] = array();
            }

            $group_name = $row["group_name"];
            $group_type = $row["group_type"];
            if ($group_type === "translators") {
                $tableRows[$row["personId"]]["titles"][] = "Translator for " . $group_name;
            } else if ($group_type === "delegate_regions") {
                $tableRows[$row["personId"]]["titles"][] = "Delegate";
            } else if ($group_type === "teams_committees") {
                $tableRows[$row["personId"]]["titles"][] = "Member of " . $group_name;
            } else if ($group_type === "officers") {
                $tableRows[$row["personId"]]["titles"][] = "Member of WCA Officers";
            } else if ($group_type === "board") {
                $tableRows[$row["personId"]]["titles"][] = "Member of WCA Board";
            }
        }
    } else {
        while ($row = $rows->fetchArray(SQLITE3_ASSOC)) {
            $tableRows[$row["personId"]] = $row;
        }
    }

    function renderPaginator($pages, $page) {
        if ($pages <= 1) return;

        $pageStart = max(1, $page - 2);
        $pageEnd = min($pages, $page + 2);
        $previousPage = max(1, $page - 1);
        $nextPage = min($pages, $page + 1);
        echo "<div style='margin-top: 1rem; display: flex; flex-wrap: wrap; align-items: center; justify-content: center;'>";
        echo "<p style='font-size: 14px; color: #ddd;'>Pg $page/$pages</p>";
        echo "<button class='btn-transparent' style='padding: 8px 12px;' onclick='goToPage($previousPage, $pages)'>◀</button>";
        echo "<button class='btn-transparent' style='padding: 8px 12px;' onclick='goToPage($nextPage, $pages)'>▶</button>";
        echo "<input type='number' placeholder='Go to' style='width: 90px;' onchange='setUrlParam(\"page\", this.value)' />";
        echo "</div>";
    }
    renderPaginator($pages, $page);

    echo "<div class='table-wrapper' style='margin: 1rem auto;'><table>";
    echo "<tr>";
        echo "<th>#</th>";
        echo "<th>Name</th>";
        echo "<th>Result</th>";
        echo "<th>Country</th>";
        if ($contributors) echo "<th>Title</th>";
    echo "</tr>";

    $index = $offset + 1;
    foreach ($tableRows as $id => $row) {
        $name = $row["name"];
        $best = formatResult($event, $type, $row["best"]);
        $country = $row["countryId"];
        echo "<tr>";
            echo "<td>$index</td>";
            echo "<td>$name</td>";
            echo "<td>$best</td>";
            echo "<td>$country</td>";
            if ($contributors) {
                // Ensure that titles aren't duplicated. Someone's wca id can appear multiple times due to a country change.
                $dedupedTitles = array_unique($row["titles"]);
                $joinedTitles = join(", ", $dedupedTitles);
                echo "<td>$joinedTitles</td>";
            }
        echo "</tr>";

        $index++;
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
