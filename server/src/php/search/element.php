<div id="search-dropdown" style="position: relative; display: inline-block; width: 100%; max-width: 300px;">
    <input
        id="search-wca-persons"
        type="text"
        placeholder="Search name or WCA ID"
        style="width: 100%;"
        value="<?php echo $wcaId ?>"
    />
    <div
        id="search-results"
        style="position: absolute; width: 100%;"
    ></div>
</div>

<style>
    .search-result {
        background: var(--gray-900);
        border: solid 1px var(--gray-500);
        border-top: none;
        border-radius: 0px;
        padding: 0.5rem 1rem;
    }

    .search-result:hover {
        background: var(--gray-800);
    }
</style>

<script>
    const DEBOUNCE_TIME = 300;
    let debounceTimeout;

    const searchDropdown = q("#search-dropdown");
    const input = q("#search-wca-persons");
    const searchResults = q("#search-results");

    // Hide when user clicks out of the search dropdown.
    document.addEventListener("click", event => {
        if (searchDropdown.contains(event.target)) {
            searchResults.style.visibility = "visible";
        } else {
            searchResults.style.visibility = "hidden";
        }
    });
    
    // Perform search on every keyup, but only after debounce time.
    input.addEventListener("keyup", event => {
        clearTimeout(debounceTimeout);

        debounceTimeout = setTimeout(() => {
            const value = event.target.value;
            fetch(`/php/search/search.php?q=${value}`)
                .then(res => res.json())
                .then(json => {
                    searchResults.innerHTML = "";
                    searchResults.appendChild(E("div", {
                        style: "display: flex; flex-direction: column;"
                    }, json.map(result => E("a", { className: "search-result", href: searchResultHref(result.id) }, [
                        E("p", { textContent: result.name, style: "text-align: left; font-weight: bold;" }),
                        E("p", { textContent: result.id, style: "text-align: left; font-size: 0.9rem;" }),
                    ]))));
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }, DEBOUNCE_TIME);
    });
</script>