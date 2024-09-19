<?php
function blogStyle() {
    echo "
<style>
body {
    padding: 16px;
    overflow-y: auto;

    & * {
        max-width: 600px;
    }
}

h1 {
    margin: auto;
}

h2 {
    margin: 40px auto 16px auto;
}

p {
    margin: 16px auto;
    line-height: 1.8rem;
}

ul, ol {
    margin: auto;
}

li {
    margin: auto;
    line-height: 1.8rem;
}

a {
    color: var(--lightBlue-500);

    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
}

.tldr {
    font-size: 18px;
    padding: 16px;
    margin: 16px auto;
    color: var(--gray-100);
    background: #181818;
    border-radius: 16px;
}
</style>";
}


include "../../php/gtag.php";
?>