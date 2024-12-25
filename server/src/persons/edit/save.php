<?php
error_reporting(E_ALL);
ini_set("display_errors", 1);

include "../wca_sign_in/get_authenticated_person.php";
$authenticatedPerson = getAuthenticatedPerson();
if (!$authenticatedPerson) {
    echo json_encode(["error" => "Not signed in"]);
    http_response_code(401);
    exit;
}

// Only allow if they have authenticated with the WCA ID.
$wcaId = $authenticatedPerson["wca_id"];

header("Content-Type: application/json");
$input = json_decode(file_get_contents("php://input"), true);
$events = $input["events"];

$db = new SQLite3("/cubingapp.db");

$stmt = $db->prepare("
CREATE TABLE IF NOT EXISTS Profiles (
    wcaId TEXT PRIMARY KEY,
    event TEXT NOT NULL,
    pbSingle INTEGER,
    pbAverage INTEGER,
    main TEXT,
    method TEXT
)
");
$stmt->execute();

foreach ($events as $eventId => $data) {
    $stmt = $db->prepare("
        INSERT OR REPLACE INTO Profiles
        (wcaId, event, pbSingle, pbAverage, main, method)
        VALUES (:wcaId, :event, :pbSingle, :pbAverage, :main, :method);
    ");
    $stmt->bindValue(":wcaId", $wcaId, SQLITE3_TEXT);
    $stmt->bindValue(":event", $eventId, SQLITE3_TEXT);
    $stmt->bindValue(":pbSingle", $data["pbSingle"], SQLITE3_INTEGER);
    $stmt->bindValue(":pbAverage", $data["pbAverage"], SQLITE3_INTEGER);
    $stmt->bindValue(":main", $data["main"], SQLITE3_TEXT);
    $stmt->bindValue(":method", $data["method"], SQLITE3_TEXT);
    $stmt->execute();
}

echo json_encode(["message" => "Saved"]);
http_response_code(200);
exit;
?>