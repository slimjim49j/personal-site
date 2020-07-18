import anime from './anime-master/lib/anime.es.js';

// anime({
//     targets: 'div.hi',
//     translateX: [
//         {value: 1000, duration: 500, delay: 500},
//         {value: 100, duration: 1000, delay: 5000}
//     ],
//     rotate: '1turn',
//     duration: 5000,
// });

const tl = anime.timeline({ easing: "easeInOutCirc" });
tl
.add({
    targets: "#main-circle",
    scale: [
        {
            value: 5,
            duration: 0,
        },
        {
            value: 1,
            duration: 500,
            easing: 'easeInOutQuad',
        }
    ],
})
.add({
    targets: ".projects-section",
    // right: "-60%",
    opacity: 1,
    duration: 500,
})


window.setTimeout(() => {
    const mainCircle = document.querySelector("#main-circle");
    const projectsSection = document.querySelector(".projects-section")
    
    mainCircle.addEventListener("mouseenter", (e) => {
        if (document.querySelector("#main-circle-container").style.visibility === "hidden") return;
        if (Array.from(mainCircle.classList).includes("flipped")) return;
        anime.remove('#main-circle');
    
        const tl = anime.timeline({ easing: "easeInOutCirc" });
        tl
        .add({
            targets: "h1",
            color: "#45daab",
            opacity: 1,
            easing: "easeInOutCirc",
            duration: 100,
        })
        .add({
            targets: "#main-circle",
            borderColor: "#47b290",
            duration: 1000,
        }, "-=100")
        
        console.log("heya")
    })

    mainCircle.addEventListener("mouseleave", (e) => {
        if (Array.from(e.path).includes(projectsSection)) return;
        if (Array.from(mainCircle.classList).includes("flipped")) return;
        if (document.querySelector("#main-circle-container").style.visibility === "hidden") return;
        anime.remove('#main-circle');

        const tl = anime.timeline({ easing: "easeInOutCirc"});
        tl
        .add({
            targets: "h1",
            color: "#ffffff",
            opacity: 0.75,
            easing: "easeInOutCirc",
            duration: 100,
        })
        .add({
            targets: "#main-circle",
            borderColor: "#fff",
            duration: 1000,
        }, "-=100")
        // .add({
        //     targets: ".projects-section",
        //     opacity: 0,
        //     // right: "40%",
        //     duration: 500,
        // }, "-=700")
    })

    document.querySelector(".main-text-container").addEventListener("click", () => {
        mainCircle.classList.toggle("flipped");
    })

    projectsSection.addEventListener("click", () => {
        document.getElementById("main-circle-container").style.visibility = "hidden";
        projectsSection.classList.remove("minified");
        // projectsSection.querySelector("").style.flexDirection = "row";

        // const tl = anime.timeline({ easing: "easeInOutCirc" });
        // tl
        // .add({
        //     targets: ".projects-section",
        //     easing: "easeInOutCirc",
        //     width: "90vw",
        //     height: "90vh",
        //     right: "-100%",
        //     duration: 400,
        // })
        // .add({
        //     targets: ".projects-section ul",
        //     height: "90%",
        //     duration: 200,
        // })
        // .add({
        //     targets: ".projects-section li",
        //     height: "100%",
        //     border: "1px solid red",
        //     duration: 200,
        // })

    })

    document.querySelector(".projects-exit-btn").addEventListener("click", (e) => {
        e.stopPropagation();
        document.getElementById("main-circle-container").style.visibility = "visible";
        projectsSection.classList.add("minified");
    })
}, 600)










// projects carousel

// const projects = document.querySelector(".project-list").childNodes
// const selectedLi = document.querySelector(".selected-project");
// let selectedIdx = Array.from(projects).indexOf(selectedLi);
// function moveCarousel(direction) {
//     return () => {
//         if (direction === "up") projects.length % (selectedIdx++);
//         else (selectedIdx - 1) >= 0 ? selectedIdx-- : selectedIdx = projects.length-1;


//     }
// }