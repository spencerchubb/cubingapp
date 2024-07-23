<?php if (!empty($subsets)) { ?>
<div class="subsetsWideScreen">
    <p style="font-weight: bold; font-size: 20px;">Subsets</p>
    <?php
    foreach ($subsets as $subset) {
        $uri = $_SERVER["REQUEST_URI"];
        $underscores = str_replace(" ", "_", $subset);
        echo "<a href='$uri#$underscores'>$subset</a>";
    }
    ?>
</div>
<?php } ?>