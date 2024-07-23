<select id="bottomColorSelect">
    <?php
    include_once "../../php/option.php";
    echo createOption("white", "White bottom", $bottomColor);
    echo createOption("yellow", "Yellow bottom", $bottomColor);
    echo createOption("green", "Green bottom", $bottomColor);
    echo createOption("blue", "Blue bottom", $bottomColor);
    echo createOption("orange", "Orange bottom", $bottomColor);
    echo createOption("red", "Red bottom", $bottomColor);
    ?>
</select>
<script>
    bottomColorSelect.onchange = (event) => {
        console.log(`bottomColor=${event.target.value}`);
        document.cookie = `bottomColor=${event.target.value}`;
        location.reload();
    }
</script>