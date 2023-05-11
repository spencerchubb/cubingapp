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
        <h1>Every cuber should used spaced repetition</h1>
        <p>Picture this: You are trying to learn the OLL algorithms, which is a crucial step for anyone who is taking the leap to learn CFOP. You don't really have a good learning strategy. Maybe you can use mnemonic devices. Maybe you could just learn one per day so you don't forget them. But there are 57 OLL algorithms, and that will take nearly 2 months!</p>
        <p>Does that sound familiar?</p>
        <p>I have been there. I have tried to learn algorithms by using mnemonic devices, by learning one per day, and by cramming a bunch of algorithms at one time.</p>
        <p>But I know a better way. A way that will allow you to learn algorithms faster, and remember them longer.</p>
        <p>It's called spaced repetition.</p>
        <h2>How does it work?</h2>
        <div class="note">
            <h3>Definition from Wikipedia:</h3>
            <p>Definition from Wikipedia: Spaced repetition is an evidence-based learning technique. Newly introduced and more difficult facts are shown more frequently, while older and less difficult facts are shown less frequently in order to exploit the psychological spacing effect.</p>
        </div>
        <p>As the name suggests, spaced repetition is about spacing out your repetitions. Instead of doing one algorithm per day or cramming too many algorithms, spaced repetitions allows you to practice algorithms in an efficient order.</p>
        <h2>How do I use it?</h2>
        <p>I might be biased, but I believe the <a href="/train.html" class="link">CubingApp algorithm trainer</a> is the best way to learn algorithms with spaced repetition.</p>
        <p>The algorithm trainer has a built-in spaced repetition system. You can indicate whether you felt good or bad about an algorithm, and the trainer will then decide how long until you should see that algorithm again.</p>
        <p>There are also multiple practice modes. You can perform algorithms on the virtual cube, or you can get a scramble to set up the algorithms on your cube.</p>
        <p>You will get the best results if you combine spaced repetition with more learning strategies. For example, you can find symmetries and similar triggers between algorithms.</p>
        <h2>Good luck</h2>
        <p>Now that you know about spaced repetition, I encourage you to finally learn OLL, PLL, or whatever algorithm set you have been putting off. You can do it!</p>
        <div style="margin: 16px 0;"></div>
        <NewsletterSignup />
    </div>
    <SideNav bind:open={sideNavOpen} />
</main>

<style>
    h1 {
        margin: 0.67em 0;
    }

    h2 {
        margin: 0.83em 0;
    }

    p, h3, .note {
        margin: 1em 0;
    }

    h1, h2, h3 {
        max-width: 600px;
        width: 100%;
        text-align: start;
    }

    p {
        max-width: 600px;
        width: 100%;
        text-align: start;
    }

    .note {
        border: solid 1px var(--gray-500);
        border-radius: 8px;
        padding: 0 16px;
        margin: 0.75rem 0;
    }
</style>