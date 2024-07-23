<script>
    document.querySelectorAll(".expandableButton").forEach(ele => {
        ele.onclick = () => {
            ele.parentElement.classList.toggle("expandableOpen");
        }
    });

    function E(name, props, children) {
        const ele = document.createElement(name);
        for (const [key, value] of Object.entries(props)) {
            ele[key] = value;
        }

        children = children || [];
        for (const child of children) {
            ele.appendChild(child);
        }
        return ele;
    }
    function modal(content) {
        const modal = E("div", {
            className: "modal",
            onclick: e => {
                if (e.target === modal) {
                    modal.remove();
                }
            },
        }, [
            E("div", {}, [content]),
        ]);
        document.body.appendChild(modal);

        // Close modal on escape key
        const keydownHandler = e => {
            if (e.key === "Escape") {
                modal.remove();
            }
            document.body.removeEventListener("keydown", keydownHandler);   
        };
        document.body.onkeydown = keydownHandler;
    }

    document.querySelectorAll(".vid").forEach(ele => {
        ele.onclick = () => {
            console.log(ele.getAttribute("data-url"));
            modal(E("video", {
                src: ele.getAttribute("data-url"),
                preload: "metadata",
                controls: true,
                loop: true
            }));
        }
    });
</script>