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

anime({
    targets: "#main-circle",
    scale: [
        {
            value: 5,
            duration: 0,
        },
        {
            value: 1,
            duration: 1000,
            easing: 'easeInOutQuad',
        }
    ],
})

const mainCircle = document.querySelector("#main-circle");

mainCircle.addEventListener("mouseenter", () => {
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
    .add({
        targets: ".projects-section",
        right: "-60%",
        opacity: 1,
        duration: 500,
    }, "-=700")
    console.log("heya")
})

mainCircle.addEventListener("mouseout", () => {
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
    .add({
        targets: ".projects-section",
        opacity: 0,
        // right: "40%",
        duration: 500,
    }, "-=700")
})

mainCircle.addEventListener("click", () => {

})