const center = document.querySelector(".black-hole");
for (i = 0; i < 500; i++) {
    const el = document.createElement("DIV");
    el.classList.add("bottom-particle");
    el.style.offsetAnchor = `${Math.random() * 300}% ${Math.random() * 600}%`;
    el.style.offsetDistance = `${i * .2}%`;
    center.appendChild(el);

    // el.animate(
    //     [
    //         { offsetDistance: `0%`, height: "10px" },
    //         { height: "10px", offset: 0.4},
    //         { height: "5px", offset: 0.5},
    //         { offsetDistance: `100%` }
    //     ],
    //     {
    //         duration: Math.floor(Math.random() * 1000000),
    //         delay: Math.floor(Math.random() * 1000),
    //         iterations: Infinity
    //     }
    // )
    el.animate(
        [
            { opacity: `0.2` },
            { opacity: `1` }
        ],
        {
            duration: 1000,
            iterations: Infinity,
            direction: 'alternate'
        }
    )
}



for (i = 0; i < 1000; i++) {
    const el = document.createElement("DIV");
    el.classList.add("top-particle");
    el.style.offsetAnchor = `${Math.random() * 300}% ${Math.random() * 600}%`;
    el.style.offsetDistance = `${i * .1}%`;
    center.appendChild(el);

    // el.animate(
    //     [
    //         { offsetDistance: `0%`, height: "10px" },
    //         { height: "10px", offset: 0.4},
    //         { height: "5px", offset: 0.5},
    //         { offsetDistance: `100%` }
    //     ],
    //     {
    //         duration: Math.floor(Math.random() * 1000000),
    //         delay: Math.floor(Math.random() * 1000),
    //         iterations: Infinity
    //     }
    // )
    el.animate(
        [
            { opacity: `0.2` },
            { opacity: `1` }
        ],
        {
            duration: 1000,
            delay: i * 5,
            iterations: Infinity,
            direction: 'alternate'
        }
    )
}