<script lang="ts">
    import SideNav from "../src/lib/components/SideNav.svelte";
    import NavBarIcon from "../src/lib/components/NavBarIcon.svelte";
    import MenuIcon from "../src/lib/components/icons/MenuIcon.svelte";
    import NewsletterSignup from "../src/lib/components/NewsletterSignup.svelte";

    let sideNavOpen = false;
</script>

<main class="col" style="width: 100%; height: 100%;">
    <nav class="navbar" style="justify-content: space-between;">
        <NavBarIcon on:click={() => (sideNavOpen = true)}>
            <MenuIcon />
        </NavBarIcon>
    </nav>
    <div
        class="col"
        style="width: 100%; padding: 0 16px; overflow-y: auto;"
    >
        <h1>Practicing With Unlimited Inspection</h1>
        <p class="date">May 20, 2023</p>
        <p>
            In a competition, you have 15 seconds to inspect the cube, but cubers sometimes like to practice with unlimited inspection. That is why the <a class="link" href="/timer">CubingApp Timer</a> allows you to turn off or turn on inspection.
        </p>
        <p>
            Why would you want to practice with unlimited inspection? It turns out there are a few reasons why cubers do this.
        </p>
        <h2>Experimentation</h2>
        <p>
            If you only practice with 15 seconds of inspection, you are limiting yourself. You are not giving yourself to opportunity to experiment with different solutions and fingertricks.
        </p>
        <p>
            A lot of cubers practice with unlimited inspection so they can try different techniques that the normally wouldn't have time to plan out within 15 seconds.
        </p>
        <h2>Plan deeper</h2>
        <p>
            The deeper you can plan, the better. It is good to plan deep because it gives you more time to think about what your next step is going to be.
        </p>
        <p>
            Practicing with unlimited inspection is a good way to practice planning deeper. If you struggle with planning the entire cross, you can take some extra time to plan the cross. If you already know how to plan the entire cross, you can push yourself to plan even more.
        </p>
        <h2>Compare more options</h2>
        <p>
            This tip is applicable to solvers who are color neutral or partially color neutral. When you have multiple crosses to choose between, it can be difficult to decide which cross is the best.
        </p>
        <p>
            In 15 seconds, you don't have time to thoroughly compare 6 different starting crosses. You are typically going to rely on your intuition and pattern recognition to choose a cross that is "pretty good".
        </p>
        <p>
            You can improve your pattern recognition by practicing with unlimited inspection. By using extra inspection time, you can compare more options, and over time learn the patterns that make a cross good or bad.
        </p>
        <div style="margin: 16px 0;"></div>
        <NewsletterSignup />
    </div>
    <SideNav bind:open={sideNavOpen} />
</main>

<style>
    h1 {
        margin-top: 0.67em;
        margin-bottom: 0.25em;
    }

    .date {
        margin-top: 0;
        margin-bottom: 1em;
    }

    h2 {
        margin: 0.83em 0;
    }

    p {
        margin: 1em 0;
    }

    h1, h2 {
        max-width: 600px;
        width: 100%;
        text-align: start;
    }

    p {
        max-width: 600px;
        width: 100%;
        text-align: start;
    }
</style>