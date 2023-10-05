<?php
function createOption($value, $text, $toCompare) {
    $selected = $value === $toCompare ? "selected" : "";
    return "<option value='" . $value . "' " . $selected . ">" . $text . "</option>";
}
?>