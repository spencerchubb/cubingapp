<!DOCTYPE html>
<html>
<head>
    <meta name="description" content="Request and give critiques for Rubik's Cube speedsolving">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="stylesheet" href="/css/colors.css">
    <link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
    <title>CubingApp Critiques</title>
</head>

<style>
    .comment-div {
        padding: 8px 0;
        border-bottom: solid 1px var(--gray-500);
    }

    .comment-body {
        margin-top: 4px;
        white-space: pre-wrap;
    }
</style>

<body style="display: flex; flex-direction: column; width: 100%; height: 100%;">
    <?php include_once "navbar.php" ?>
    <main style="width: 100%; height: 100%; padding: 16px; overflow-y: auto;">
        <?php
        include_once __DIR__ . "/common.php";
        
        if (isset($_GET['post'])) {
            // Get post
            $stmt = $db->prepare("
                SELECT posts.id, posts.created_at, users.username, posts.title, posts.body, posts.video_filename
                FROM posts
                JOIN users ON posts.id = :id AND posts.user_id = users.id");
            $stmt->bindValue(':id', $_GET['post']);
            $rows = $stmt->execute();
            $row = $rows->fetchArray();

            $post_video = $row['video_filename'];
            $post_time_elapsed = time_elapsed_string($row['created_at']);
            $post_title = $row['title'];
            $post_username = $row['username'];
            $post_body = $row['body'];

            // Get comments
            $stmt = $db->prepare("
                SELECT comments.created_at, users.username, comments.comment
                FROM comments
                JOIN users ON comments.post_id = :id AND comments.user_id = users.id
                ORDER BY comments.created_at DESC");
            $stmt->bindValue(':id', $_GET['post']);
            $rows = $stmt->execute();

            // Render comments
            $comments_div = "<div style='margin-top: 16px;'>";
            while ($row = $rows->fetchArray()) {
                $time_elapsed = time_elapsed_string($row['created_at']);
                $username = $row['username'];
                $comment = $row['comment'];
                $comments_div .= "<div class='comment-div'>
                    <p class='user-and-time'>By <a href='/account/?user=$username'>$username</a> $time_elapsed</p>
                    <p class='comment-body'>$comment</p>
                </div>";
            }
            $comments_div .= "</div>";

            // Determine whether to show comment input or tell user to login.
            $comment_input = "<textarea id='commentInput' type='text' placeholder='Type comment here' style='margin-top: 1rem; width: 100%; min-height: 80px; resize: none;' rows='1'></textarea>
            <div style='display: flex; justify-content: end; margin-top: 8px;'>
                <button id='commentButton'>Comment</button>
            </div>";
            if (!$user) {
                $comment_input = "<a href='/account/'><button style='margin-top: 16px; width: 100%;'>Login to give critique</button></a>";
            }

            echo "<div style='display: flex; flex-wrap: wrap; justify-content: center; align-items: start; gap: 16px;'>
                <video controls style='width: min(500px, 100%);'><source src='https://cubingapp-critique-videos.s3.amazonaws.com/$post_video' type='video/mp4'></video>
                <div style='flex: 1 1 500px; max-width: 700px;'>
                    <h2>$post_title</h2>
                    <p class='user-and-time'>By <a href='/account/?user=$post_username'>$post_username</a> $post_time_elapsed</p>
                    <p style='margin-top: 4px; white-space: pre-wrap;'>$post_body</p>
                    $comment_input
                    $comments_div
                </div>
            </div>";
        } else {
            echo "<div style='width: 100%; max-width: 800px; margin: auto;'>";
            echo "<h1 style='text-align: center; font-size: 1.5rem; font-style: italic;'>Critiques <span style='color: var(--green-400);'>(In Beta)</span></h1>";
            echo "<p style='margin-top: 16px;'>The critiques page is new, so thanks for being an early tester. If you enjoy it, spread the word and I'll keep making improvements. <br> - Spencer Chubb</p>";

            if ($user) {
                echo "<a href='/critiques/request/'><button style='margin-top: 16px;'>Request Critique</button></a>";
            } else {
                echo "<a href='/account/'><button style='margin-top: 16px;'>Login to request critique</button></a>";
            }

            $stmt = $db->prepare("
                SELECT posts.id, posts.created_at, users.username, posts.title, posts.body
                FROM posts
                JOIN users ON posts.user_id = users.id
                ORDER BY posts.created_at DESC");
            $rows = $stmt->execute();
            renderPosts($rows);
            echo "</div>";
            ?>
        <?php } ?>
        <div style="margin-top: 96px;"></div>
    </main>
</body>

<script>
    /** Automatically resizes the textarea to fit its content. */
    function textareaAutoSize(textarea) {
        if (!textarea) return;
        textarea.style.height = textarea.scrollHeight + "px";
        textarea.style.overflowY = "hidden";
        textarea.addEventListener("input", () => {
            textarea.style.height = "auto";
            textarea.style.height = textarea.scrollHeight + "px";
        });
    }

    const commentInput = document.querySelector("#commentInput");
    const commentButton = document.querySelector("#commentButton");

    textareaAutoSize(commentInput);

    function getUrlParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }
    
    if (commentButton) {
        commentButton.addEventListener("click", async () => {
            const comment = commentInput.value;
            if (!comment) {
                alert("Comment is empty");
                return;
            }

            const formData = new FormData();
            formData.append("post_id", getUrlParam('post'));
            formData.append("comment", comment);

            const response = await fetch("/critiques/comment.php", {
                method: "POST",
                body: formData,
            });

            const res = await response.text();
            console.log(res);
            if (response.ok) {
                location.reload();
            } else {
                alert("Error commenting. Please try again later.");
            }
        });
    }
</script>

<?php include "../php/gtag.php" ?>

</html>
