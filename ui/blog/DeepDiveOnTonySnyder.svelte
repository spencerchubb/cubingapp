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
        <h1>Deep Dive on Tony Snyder</h1>
        <img src="/snyder.jpg" alt="Tony Snyder holding a cube" />
        <p>
            In this blog post, I will take you on a tour into the mind of Tony Snyder. I also include my email exchange with him where we discuss his secret speedsolving method.
        </p>
        <h2>Tony Snyder's non-cubing ideas</h2>
        <p>
            On his website, he talks about how he wrote a computer operating system that actually inspired Windows and MacOS. He also talks about his theory of the human mind, flat earth theory, alternative cancer treatments, and more.
        </p>
        <p>
            This is barely scratching the surface of Tony Snyder's ideas. Feel free to <a class="link" href="http://www.snydermind.com/">read more</a> about his non-cubing stuff.
        </p>
        <h2>Tony Snyder's cubing career</h2>
        <p>
            In the <a class="link" href="http://www.snydermind.com/cube/">headline</a> of his cubing website, he claims that he was "Approximately the fastest in the world for over 20 years." He says he was the fastest from 1983 to 2004, being able to solve the cube in 8-9 seconds at his prime.
        </p>
        <p>
            😥 Unfortunately, he has also said that he sometimes scrambles cubes with only 13 turns. The competitive cubing community typically only recognizes scrambles that have a perfectly random state, such as from a program like <a class="link" href="https://github.com/thewca/tnoodle">tnoodle</a>.
        </p>
        <p>
            So how did he achieve those times? He has written about 3 methods. They are creatively named Snyder Method 1, Snyder Method 2, and Snyder Method 3.
        </p>
        <h2>
            Snyder Method 1
        </h2>
        <p>
            This method is just like layer-by-layer (LBL). You solve the cross, then first layer, the second layer. Then you do the last layer by orienting edges, permuting edges, permuting corners, and orienting corners.
        </p>
        <h2>Snyder Method 2</h2>
        <p>
            This method is similar to CFOP. The first step is to solve the first two layers (F2L) except for one slot. This can be done with blockbuilding, F2L pairs, or however the solver prefers.
        </p>
        <p>
            The next step is to solve the last F2L slot while solving any last layer edge. Next, solve the last three edges while solving any corner. Lastly, solve the last three corners.
        </p>
        <h2>Snyder Method 3</h2>
        <p>
            This method doesn't actually exist yet. Tony Snyder says that he has some theories about how an extremely efficient method could be developed, but he needs a computer program to test his theories.
        </p>
        <p>
            He is hopeful that this method can average about 30 turns in a speedsolve. 😮 Curiosity got the best of me, so I emailed him to learn more.
        </p>
        <h2>Email exchange</h2>
        <p>
            For brevity, here is a summary of our email exchange.
        </p>
        <p>
            <b>Me:</b> I am interested by the potential in Snyder Method 3, and I would be happy to work on developing it with you.
        </p>
        <p>
            <b>Tony:</b> Sounds great. Which methods do you know now?
        </p>
        <p>
            <b>Me:</b> I know quite a bit about method design and I know a lot of methods. I have software that can generate the algorithms, so I basically just need to know the theories that you came up with. In other words, I will input a case, and it will spit out optimal algorithms.
        </p>
        <p>
            <b>Tony:</b> Does that software only work by case? Can you for example start with a turn metric, then spit out all mixed states up to x turns from a solved state using the specified metric?
        </p>
        <p>
            <b>Me:</b> Unfortunately this software only works by case.
        </p>
        <div>
            <p>
                <b>Tony:</b> Here is the idea. Instead of brute memorization of algorithms, specific groups of cases may be handled by one algorithm each, plus a transform to optimally solve the individual case.
            </p>
            <p>
                Basically start with the most optimal alg for a given count, where the count consists of the number of edge pieces that move, the number of corner pieces that move, the number of edge pieces that orient, and the number of corner pieces that orient. 4 counts.
            </p>
            <p>
                Now take all the mixed states adding up to those same counts (this defines the group) and then solve each one to the mixed state for the original alg (with those same counts). This gives you the transform. Then work on a system of earmarks and rules to quickly recognize the alg, then the transform, to optimally solve each case.
            </p>
            <p>
                With enough effort you should be able to consolidate hundreds of algs into just a few.  This then provides more mental-space to advance the method further.
            </p>
        </div>
        <p>
            <b>Me:</b> What do you mean by <i>transform</i>? Can you give an example so I can understand it better?
        </p>
        <div>
            <p><b>Tony:</b> Sure. Rb'R2TF'TFT'R2bR'T'</p>
            <p>This algorithm is very easy to transform, and I use it for quite a few cases.  Here's an example with transform steps in brackets...</p>
            <p>[L'] Rb'R2TF'TFT'R2bR'T' [L]</p>
        </div>
        <p>
            <b>Me:</b> I think I understand what you mean. I have seen a similar concept before, but it was called by a different name.
        </p>
        <p>
            <b>Tony:</b> We have been discussing for some time now, but I have no idea who you are.  How do I trust that you are helping me with this rather than getting ideas for your own method?
        </p>
        <p>
            <b>Me:</b> I am a cuber who is interested in method design. I have no intention of stealing your ideas. I am just interested in learning more about your theories and helping you develop them.
        </p>
        <h2>Lessons from our chat</h2>
        <p>
            I learned a lot from this email exchange.
        </p>
        <p>
            First, I learned that Tony Snyder is a smart guy and he likes to guard his ideas closely. He is very careful about who he shares his ideas with, and I can understand why.
        </p>
        <p>
            I also found it interesting how he does some things that are non-conventional. For example, he has his own notation. He also uses the term <i>transforms</i> instead of <i>conjugates</i> or <i>setup moves</i>
        </p>
        <p>
            These things are not necessarily wrong, just different from what I'm used to. It could be because he discovered these things before there was a vibrant cubing community.
        </p>
        <p>
            My last takeaway from the email exchange is the potential of Snyder Method 3. I still have hope that software can devise a faster speedsolving method, even if it's not exactly in the way Tony Snyder described here. Maybe you can be the one who figures it out. 😉
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

    p, img {
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