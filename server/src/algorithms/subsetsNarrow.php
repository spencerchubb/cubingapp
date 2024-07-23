<?php if (!empty($subsets)) { ?>
<div class="expandable subsetsNarrowScreen">
    <button class="expandableButton">
        <p>Subsets</p>
        <svg viewBox="0 0 100 100" stroke="var(--gray-100)" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" fill="none"><path d="M 25,8 L 75,50 L 25,92" /></svg>
    </button>
    <div class="expandableChild">
        <?php
        foreach ($subsets as $subset) {
            $uri = $_SERVER["REQUEST_URI"];
            $underscores = str_replace(" ", "_", $subset);
            echo "<a href='$uri#$underscores'>$subset</a>";
        }
        ?>
    </div>
</div>
<?php } ?>