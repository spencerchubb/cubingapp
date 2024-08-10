<p style="font-size: 1rem; text-align: center; align-self: center; color: var(--gray-300);">
    WCA data from <?php
        $db = new SQLite3("/wca.db");
        $stmt = $db->prepare("SELECT * FROM Miscellaneous WHERE key = 'export_date';");
        $rows = $stmt->execute();
        $row = $rows->fetchArray();
        echo $row["value"];
    ?>
</p>