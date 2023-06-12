<script lang="ts">
    type Post = {
        href: string,
        title: string,
        date: string,
    }

    const posts: Post[] = [
        {
            href: "/blog/is-speedcubing-a-sport.html",
            title: "Is Speedcubing a Sport?",
            date: "Jun 12, 2023",
        },
        {
            href: "/blog/deep-dive-on-tony-snyder.html",
            title: "Deep Dive on Tony Snyder",
            date: "Jun 4, 2023",
        },
        {
            href: "/blog/how-to-be-good-at-inspection.html",
            title: "How to be Good at Inspection",
            date: "May 27, 2023",
        },
        {
            href: "/blog/practicing-with-unlimited-inspection.html",
            title: "Practicing with Unlimited Inspection",
            date: "May 20, 2023",
        },
        {
            href: "/tutorials/inspection.html",
            title: "Speedcubing Inspection",
            date: "May 14, 2023",
        },
        {
            href: "/blog/spaced-repetition.html",
            title: "Every cuber should use spaced repetition",
            date: "May 10, 2023",
        },
        {
            href: "/blog/mental-load.html",
            title: "Why mental load matters for lookahead",
            date: "May 11, 2023",
        },
        {
            href: "/tutorials/how-to-learn-f2l.html",
            title: "How to Learn Rubik's Cube F2L",
            date: "May 9, 2023",
        },
    ];
</script>

<div style="
    width: 100%;
    height: 100%;
    padding: 32px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;">
    <h1>CubingApp Blog</h1>
    {#each posts as post}
        <div class="post">
            <p class="date">{post.date}</p>
            <a href={post.href}>
                {post.title}
            </a>
        </div>
    {/each}
</div>

<style>
    .post {
        padding: 1rem 0;
    }

    .post:not(:first-of-type) {
        border-top: solid 1px var(--gray-600);
    }

    .date {
        color: var(--gray-300);
        margin-bottom: 4px;
    }

    a {
        color: var(--lightBlue-500);
        font-size: 1.3rem;
    }
    
    a:hover {
        text-decoration: underline;
    }
</style>
