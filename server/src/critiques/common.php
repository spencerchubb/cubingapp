<style>
    .critique-div {
        padding: 8px 0;
        border-bottom: solid 1px var(--gray-500);
    }

    .user-and-time {
        margin-top: 4px;
        font-size: 0.8rem;
        color: var(--gray-300);
    }

    .user-and-time a {
        color: inherit;
        text-decoration: none;
    }

    .user-and-time a:hover {
        text-decoration: underline;
    }

    .critique-body {
        margin-top: 4px;
        white-space: pre-wrap;
        max-height: 7rem;
        overflow: hidden;
    }
</style>

<?php

// https://stackoverflow.com/questions/1416697/converting-timestamp-to-time-ago-in-php-e-g-1-day-ago-2-days-ago
function time_elapsed_string($datetime) {
    // Specify UTC because SQLite3 CURRENT_TIMESTAMP uses UTC.
    $now = new DateTime('now', new DateTimeZone('UTC'));
    $ago = new DateTime($datetime, new DateTimeZone('UTC'));
    $diff = $now->diff($ago);

    $diff->w = floor($diff->d / 7);
    $diff->d -= $diff->w * 7;

    $string = array(
        'y' => 'year',
        'm' => 'month',
        'w' => 'week',
        'd' => 'day',
        'h' => 'hour',
        'i' => 'minute',
        's' => 'second',
    );
    foreach ($string as $k => &$v) {
        if ($diff->$k) {
            $v = $diff->$k . ' ' . $v . ($diff->$k > 1 ? 's' : '');
        } else {
            unset($string[$k]);
        }
    }

    $string = array_slice($string, 0, 1);
    return $string ? implode(', ', $string) . ' ago' : 'just now';
}

function renderPosts($rows) {
    while ($row = $rows->fetchArray()) {
        $post_id = $row['id'];
        $title = $row['title'];
        $username = $row['username'];
        $time_elapsed = time_elapsed_string($row['created_at']);
        $body = $row['body'];
        echo "<div class='critique-div'>
        <h2><a href='/critiques/?post=$post_id' class='white-link'>$title</a></h2>
        <p class='user-and-time'>By <a href='/account/?user=$username'>$username</a> $time_elapsed</p>
        <p class='critique-body'>$body</p>
        </div>";
    }
}
?>