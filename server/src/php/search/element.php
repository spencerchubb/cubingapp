<?php function renderSearchElement($path, $wcaId) { ?>

<div id="searchDropdown" style="position: relative; display: inline-block; width: 100%; max-width: 300px;">
    <input
        id="searchInput"
        type="text"
        placeholder="Search name or WCA ID"
        style="width: 100%;"
        value="<?php echo $wcaId ?>"
    />
    <div
        id="searchResults"
        style="display: flex; flex-direction: column; position: absolute; width: 100%;"
    ></div>
</div>

<style>
    .search-result {
        background: var(--gray-900);
        border: solid 1px var(--gray-500);
        border-top: none;
        border-radius: 0px;
        padding: 0.5rem 1rem;
        cursor: pointer;

        &:hover {
            background: var(--gray-800);
        }

        & h2 {
            font-size: 16px;
        }

        & p {
            margin-top: 4px;
            font-size: 14px;
            color: var(--gray-300);
        }
    }
</style>

<script>
    const DEBOUNCE_TIME = 300;
    let debounceTimeout;

    // Hide when user clicks out of the search dropdown.
    document.addEventListener("click", event => {
        if (searchDropdown.contains(event.target)) {
            searchResults.style.visibility = "visible";
        } else {
            searchResults.style.visibility = "hidden";
        }
    });
    
    // Perform search for each letter typed, but only after debounce time.
    searchInput.addEventListener("keydown", event => {
        clearTimeout(debounceTimeout);

        debounceTimeout = setTimeout(() => {
            const value = event.target.value;
            fetch(`/php/search/search.php?q=${value}`)
                .then(res => res.json())
                .then(json => {
                    searchResults.innerHTML = json.map(result => {
                        return `<a class="search-result" href="<?php echo $path ?>?wcaId=${result.id}">
                            <h2>${result.name}</h2>
                            <p>${result.id}</p>
                        </a>`;
                    }).join("")
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }, DEBOUNCE_TIME);
    });

</script>

<!-- End renderSearchElement -->
<?php } ?>