<?php
function createOption($value, $text, $toCompare) {
    // Use strval in case one of them is an integer.
    $selected = strval($value) === strval($toCompare) ? "selected" : "";
    return "<option value='$value' $selected>$text</option>";
}
?>