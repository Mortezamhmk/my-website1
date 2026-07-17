const layer = document.getElementById("petal-layer");

const bg = document.getElementById("bg-img");

const colors = [
    "#ffb7d1",
    "#ff9ec4",
    "#ffd6e8",
    "#f78bb0",
    "#ffc9de"
];

const depths = [

    {
        count: 14,
        sizeMin: 5,
        sizeMax: 8,
        durMin: 14,
        durMax: 20,
        blur: 2,
        opacity: .5
    },

    {
        count: 14,
        sizeMin: 8,
        sizeMax: 12,
        durMin: 9,
        durMax: 14,
        blur: .5,
        opacity: .75
    },

    {
        count: 10,
        sizeMin: 12,
        sizeMax: 18,
        durMin: 6,
        durMax: 9,
        blur: 0,
        opacity: .95
    }

];

depths.forEach(depth => {

    for (let i = 0; i < depth.count; i++) {

        const petal = document.createElement("div");

        petal.className = "petal";

        const size = depth.sizeMin + Math.random() * (depth.sizeMax - depth.sizeMin);

        const duration = depth.durMin + Math.random() * (depth.durMax - depth.durMin);

        const sway = 3 + Math.random() * 3;

        const delay = Math.random() * 20;

        petal.style.left = Math.random() * 100 + "vw";

        petal.style.width = size + "px";

        petal.style.height = size + "px";

        petal.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        petal.style.opacity = depth.opacity;

        petal.style.filter =
            depth.blur ? `blur(${depth.blur}px)` : "none";

        petal.style.animationDuration =
            `${duration}s, ${sway}s`;

        petal.style.animationDelay =
            `-${delay}s, -${delay % sway}s`;

        layer.appendChild(petal);
    }

});

document.addEventListener("mousemove", e => {

    const x = (e.clientX / window.innerWidth - .5) * 2;

    const y = (e.clientY / window.innerHeight - .5) * 2;

    bg.style.transform =
        `translate(${x * -10}px, ${y * -6}px) scale(1.02)`;

});
const title = document.querySelector(".typing");
let wasVisible = false;

window.addEventListener("scroll", () => {
    const rect = title.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

    if (isVisible && !wasVisible) {
        title.classList.remove("animate");
        void title.offsetWidth;
        title.classList.add("animate");
    }

    wasVisible = isVisible;
});