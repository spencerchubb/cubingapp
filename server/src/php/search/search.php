<?php
$q = $_GET['q'];
if (!$q) {
    echo '[]';
    exit();
}

error_reporting(E_ALL);
ini_set("display_errors", 1);
$db = new SQLite3('/wca.db');

if (!$db) {
    die("Error connecting to the database: " . $db->lastErrorMsg());
}

$stmt = $db->prepare("
SELECT name, id FROM Persons
WHERE name LIKE :query OR id LIKE :query
LIMIT 10;
");
$stmt->bindValue(":query", "%$q%", SQLITE3_TEXT);

$result = $stmt->execute();

$results = [];
while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
    $results[] = $row;
}

$stmt->close();
echo json_encode($results);
?>