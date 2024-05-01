<!DOCTYPE html>
<html>
<head>
    <meta name="description" content="Kinch ranks leaderboard based on World Cube Association data">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="stylesheet" href="/css/colors.css">
    <link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
    <title>Request Critique</title>
</head>

<style>
    input, textarea {
        width: 100%;
    }
</style>

<body style="display: flex; flex-direction: column; width: 100%; height: 100%;">
    <?php include_once "../navbar.php" ?>
    <main style="width: 100%; height: 100%; padding: 16px; overflow-y: auto;">
        <div style="width: 100%; height: 100%; max-width: 800px; margin: auto;">
            <h2>Title</h2>
            <p style="margin-top: 0.25rem; font-size: 0.8rem; color: var(--gray-300);">
                If you have a specific question, include it in the title.
            </p>
            <input
                id="titleInput"
                type="text"
                placeholder="Example: How do I recognize PLL faster when I encounter a G perm?"
                style="margin-top: 0.5rem;"
            />
            <h2 style="margin-top: 1rem;">Body</h2>
            <p style="margin-top: 0.25rem; font-size: 0.8rem; color: var(--gray-300);">
                Include times, scrambles, method, and any other details that may help.
            </p>
            <textarea
                id="bodyInput"
                style="margin-top: 0.5rem; height: 200px;"
                placeholder="Enter body here"
            ></textarea>
            <h2 style="margin-top: 1rem;">Video</h2>
            <p style="margin-top: 0.25rem; font-size: 0.8rem; color: var(--gray-300);">
                Upload a video of your solves. For better advice, record from your point of view or over your shoulder.
            </p>
            <input
                id="videoInput"
                type="file"
                accept="video/*"
                style="margin-top: 0.5rem;"
            />
            <video id="videoPreview" controls style="margin: 16px auto 0 auto; width: min(300px, 100%); display: block;"></video>
            <button id="submitButton" style="margin-top: 2rem; width: 100%; font-weight: bold; font-size: 1.2rem;">Submit</button>
            <div style="min-height: 64px;"></div>
        </div>

        <script>
            submitButton.onclick = async () => {
                const title = titleInput.value;
                const body = bodyInput.value;
                const video = videoInput.files[0];

                if (!title) {
                    alert("Please enter a title.");
                    return;
                }
                if (!body) {
                    alert("Please enter a body.");
                    return;
                }
                if (!video) {
                    alert("Please upload a video.");
                    return;
                }

                const formData = new FormData();
                formData.append("title", title);
                formData.append("body", body);

                submitButton.textContent = "Submitting...";
                const response = await fetch("/critiques/request/submit.php", {
                    method: "POST",
                    body: formData,
                });

                const res = await response.json();
                console.log(res);
                if (!res.success) {
                    alert(res.error);
                    return;
                }

                submitButton.textContent = "Uploading...";
                const presignedUrl = res.presignedUrl;
                const uploadResponse = await fetch(presignedUrl, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "video/mp4",
                    },
                    body: video,
                });

                window.location.href = `/critiques/?post=${res.postId}`;
            };

            videoInput.onchange = () => {
                videoPreview.src = URL.createObjectURL(videoInput.files[0]);
            };
        </script>

    </main>
</body>

<?php include "../../php/gtag.php" ?>

</html>
