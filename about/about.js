const center = document.querySelector(".black-hole");
const animations = [];
for (let i = 0; i < 50; i++) {
    const el = document.createElement("DIV");
    el.classList.add("bottom-particle");
    // el.style.offsetAnchor = `${Math.random() * 300}% ${Math.random() * 600}%`;
    el.style.offsetDistance = `${i * 2}%`;
    center.appendChild(el);

    animations.push(el.animate(
        [
            { opacity: `0.2` },
            { opacity: `1` }
        ],
        {
            duration: 1000,
            iterations: Infinity,
            direction: 'alternate'
        }
    ))
}



for (let i = 0; i < 100; i++) {
    const el = document.createElement("DIV");
    el.classList.add("top-particle");
    // el.style.offsetAnchor = `${Math.random() * 300}% ${Math.random() * 600}%`;
    el.style.offsetDistance = `${i * 1}%`;
    center.appendChild(el);

    animations.push(el.animate(
        [
            { opacity: `0.2` },
            { opacity: `1` }
        ],
        {
            duration: 1000,
            delay: i * 10,
            iterations: Infinity,
            direction: 'alternate'
        }
    ))
}

document.querySelector(".toggle-btn").addEventListener("click", e => {
    animations.forEach(a => {
        if (a.playState === "running") a.pause();
        else a.play();
    });
})