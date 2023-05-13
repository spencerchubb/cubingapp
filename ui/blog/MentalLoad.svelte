<script lang="ts">
    import SideNav from "../src/lib/components/SideNav.svelte";
    import NavBarIcon from "../src/lib/components/NavBarIcon.svelte";
    import MenuIcon from "../src/lib/components/icons/MenuIcon.svelte";
    import NewsletterSignup from "../src/lib/components/NewsletterSignup.svelte";
    import AlgStepper from "../src/lib/components/AlgStepper/AlgStepper.svelte";

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
        <h1>Why mental load matters for lookahead</h1>
        <p>
            "Just improve your lookahead."
        </p>
        <p>
            People say it all the time, but have you ever wondered exactly how to improve lookahead? People usually leave that part out. Lookahead is one of the most talked-about topics in speedcubing. But it's also one of the least well-understood.
        </p>
        <p>
            On the surface it seems simple. Let's give a basic definition. It is the ability to plan out your next moves while you are executing your current moves.
        </p>
        <p>
            Lookahead has obvious benefits. It allows you to spend less time <i>not</i> turning, so you can spend more time <i>turning</i>. This allows you to solve the cube faster.
        </p>
        <p>
            I would argue that mental load is the most important factor in lookahead. Mental load is the amount of mental effort required to perform a task. The more mental load you have, the harder it is to do lookahead.
        </p>
        <p>
            For the rest of this blog post, I have 3 pieces of advice that will help you reduce your mental load so you can so you can improve your lookahead.
        </p>
        <h2>1. Know your algorithms</h2>
        <p>
            If you are still learning F2L, OLL, or PLL, you are probably experiencing a lot of mental load. You are trying to remember what to do, and you are trying to execute it. This is why it is so hard to lookahead when you are learning new algorithms.
        </p>
        <p>
            You need to know the algorithms like the back of your hand. If you are spending mental energy to remember an algorithm, then you have less mental energy to lookahead.
        </p>
        <p>
            That applies to F2L as well. You may have been told that F2L is intuitive. That's partially true. As a beginner you will rely more on intuition, but if you want to get faster, you have to be extremely fluent with F2L. For any given F2L case, you should be able to look at it, and have extreme confidence that you know how to solve it without thinking about it.
        </p>
        <h2>2. Know how moves affect pieces</h2>
        <p>
            If you want to avoid pauses during F2L, you have to know how moves affect pieces. I will admit, this is easier said than done, but I'll break it down.
        </p>
        <p>
            Let's say you insert an F2L pair with R U R'. You should know that edge orientation is unaffected, the back right corner in the U layer is unaffected, and the front right slot is disturbed.
        </p>
        <p>
            You can use that information to your advantage. Since you know that these moves don't affect edge orientation, you can plan out whether you need to rotate for your next pair. Since you know which pieces are unaffected, you can potentially choose those pieces for your next pair.
        </p>
        <p>
            Not only should you <i>know</i> how pieces are affected, but you should know it like the back of your hand. That knowledge should be deeply ingrained into your soul, because you have to recall that information in milliseconds.
        </p>
        <p>
            If you are spending mental energy to figure out how pieces are affected, then you have less mental energy to lookahead.
        </p>
        <h2>3. KISS</h2>
        <p>
            KISS stands for "Keep it simple, stupid"
        </p>
        <p>
            The more complicated your F2L is, the more mental energy you are spending. For that reason, you want to use simple solutions.
        </p>
        <AlgStepper
            setup="z2 R' F R' F' R2"
            alg="R2' F R F' R"
        >
            <p>For example, cubers will sometimes use fancy insertions like this.</p>
        </AlgStepper>
        <p>
            I can see why people would use this. It's very ergonomic and fingertrick friendly. It also allows you to avoid a rotation.
        </p>
        <p>
            But why is it bad? Think about the first two pieces of advice. If you are using a fancy algorithm that rarely arises in solves, you are going to spend mental energy remembering the algorithm and tracking how the pieces move.
        </p>
        <p>
            There is a caveat to this, however. If you have practiced your fancy algorithm enough, then it may be worth it.
        </p>
        <p>
            To recap, remember the 3 pieces of advice for reducing mental load. Know your algorithms, know how moves affect pieces, and KISS.
        </p>
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