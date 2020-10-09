import anime from './anime-master/lib/anime.es.js';
import { removeHash } from "./util.js";

// anime({
//     targets: 'div.hi',
//     translateX: [
//         {value: 1000, duration: 500, delay: 500},
//         {value: 100, duration: 1000, delay: 5000}
//     ],
//     rotate: '1turn',
//     duration: 5000,
// });

// const tl = anime.timeline({ easing: "easeInOutCirc" });
// tl
// .add({
//     targets: "#main-circle",
//     scale: [
//         {
//             value: 5,
//             duration: 0,
//         },
//         {
//             value: 1,
//             duration: 500,
//             easing: 'easeInOutQuad',
//         }
//     ],
// })
// .add({
//     targets: ".projects-section",
//     // right: "-60%",
//     opacity: 1,
//     duration: 500,
// })


anime({
    targets: ".skills-section li",
    opacity: 1,
    duration: 1000,
    delay: anime.stagger(100),
    easing: "easeInOutQuad"
});

anime({
    targets: ".project h3",
    opacity: 1,
    duration: 1500,
    delay: anime.stagger(500),
    easing: "easeInOutQuad"
});



window.setTimeout(() => {
    const mainCircle = document.querySelector("#main-circle");
    const projectsSection = document.querySelector(".projects-section")
    
    mainCircle.addEventListener("mouseenter", (e) => {
        if (document.querySelector("#main-circle-container").style.visibility === "hidden") return;
        if (Array.from(mainCircle.classList).includes("flipped")) return;
        anime.remove('#main-circle');
    
        // const tl = anime.timeline({ easing: "easeInOutCirc" });
        // tl
        // .add({
        //     targets: "h1",
        //     color: "#45daab",
        //     opacity: 1,
        //     easing: "easeInOutCirc",
        //     duration: 100,
        // })
        // .add({
        //     targets: "#main-circle",
        //     borderColor: "#47b290",
        //     duration: 1000,
        // }, "-=100")
        
        // console.log("heya")
    })

    mainCircle.addEventListener("mouseleave", (e) => {
        if (Array.from(e.path).includes(projectsSection)) return;
        if (Array.from(mainCircle.classList).includes("flipped")) return;
        if (document.querySelector("#main-circle-container").style.visibility === "hidden") return;
        anime.remove('#main-circle');

        // const tl = anime.timeline({ easing: "easeInOutCirc"});
        // tl
        // .add({
        //     targets: "h1",
        //     color: "#ffffff",
        //     opacity: 0.75,
        //     easing: "easeInOutCirc",
        //     duration: 100,
        // })
        // .add({
        //     targets: "#main-circle",
        //     borderColor: "#fff",
        //     duration: 1000,
        // }, "-=100")
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
        removeHash();
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









let animations = [];
const blackHoleElements = [];
function createBlackHole() {

    const center = document.querySelector(".black-hole");
    for (let i = 0; i < 50; i++) {
        const el = document.createElement("DIV");
        el.classList.add("bottom-particle");
        // el.style.offsetAnchor = `${Math.random() * 300}% ${Math.random() * 600}%`;
        el.style.offsetDistance = `${i * 2}%`;
        calcPath(el);
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
        blackHoleElements.push(el);
    }



    for (let i = 0; i < 100; i++) {
        const el = document.createElement("DIV");
        el.classList.add("top-particle");
        // el.style.offsetAnchor = `${Math.random() * 300}% ${Math.random() * 600}%`;
        el.style.offsetDistance = `${i * 1}%`;
        // el.style.offsetPath = `path("M 0 0 A 50 50 0 1 1 400 0 Q 550 0 450 50 Q 199 113 -50 50 Q -150 0 0 0 ")`;
        calcPath(el);
        
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
        ));
        blackHoleElements.push(el);
    }
}

window.addEventListener('resize', updateBlackHole);
function updateBlackHole() {
    blackHoleElements.forEach(el => calcPath(el))
}

function calcPath(el) {
    const circleWidth = document.body.clientWidth * 0.3;

    if (el.classList.contains("top-particle")) {
        el.style.offsetPath = `path("M 0 ${circleWidth / 2} A 50 50 0 1 1 ${circleWidth} ${circleWidth / 2} Q ${circleWidth + circleWidth*0.375} ${circleWidth / 2} ${circleWidth + 50} ${circleWidth / 2 + 50} Q ${circleWidth / 2} ${circleWidth / 2 + 113} 0 ${circleWidth / 2 + 50} Q ${-circleWidth*0.375} ${circleWidth / 2} 0 ${circleWidth / 2} ")`;
    } else {
        el.style.offsetPath = `path("M ${circleWidth} ${circleWidth / 2} A 50 50 0 1 1 0 ${circleWidth / 2} ")`;
    }
}



let root = document.documentElement;
let blackHoleState = false;
const blackHoleToggle = document.querySelector(".black-hole-toggle-btn");
blackHoleToggle.addEventListener("click", e => {
    if (blackHoleState) {
        blackHoleElements.forEach(el => el.remove());
        animations = [];
        blackHoleToggle.textContent = "ACTIVATE BLACK HOLE";
        blackHoleState = false;
    } else {
        createBlackHole();
        blackHoleToggle.textContent = "ABORT BLACK HOLE";
        blackHoleState = true;
    }
    document.body.classList.toggle("black-hole-active");
});

// toggles animation
// document.querySelector(".animation-toggle-btn").addEventListener("click", e => {
//     animations.forEach(a => {
//         if (a.playState === "running") a.pause();
//         else a.play();
//     });
// });


root.addEventListener("mousemove", e => {
    root.style.setProperty('--mouse-x', e.clientX + "px");
    root.style.setProperty('--mouse-y', e.clientY + "px");
});