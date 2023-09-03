<script>
    import AlgSetPage from "../algSetPage";
    import { algSet } from "../algSets/LSE-EOLR";
</script>

<AlgSetPage {algSet}>
    <div>
        <h1>LSE EOLR Algorithms</h1>
        <p>
            Roux EOLR is an advanced Roux technique that stands for Edge Orientation Left and Right. EOLR combines substeps 4a and 4b to save moves, and ultimately make the solve faster.
        </p>
        <p>
            The EOLR algorithms should be intuitive, meaning that you can understand the solutions rather than memorizing the solutions with brute force. Due to the intuitive nature, this algorithm set does not include mirror cases.
        </p>
        <p>
            The goal of EOLR is to solve edge orientation while getting the UL and UR edgeson bottom. Getting ULUR on bottom allows them to be inserted with just an M2.    
        </p>
        <h2>Cubers also use</h2>
        <a href="/algdb/LSE-EO.html" class="link also-use">
            LSE EO
        </a>
        <a href="/algdb/CMLL.html" class="link also-use">
            CMLL
        </a>
    </div>
</AlgSetPage>