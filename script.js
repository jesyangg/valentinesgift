const images = [
    { src: "images/davidbed.png", caption: "Hiii poopy love you" },
    { src: "images/IMG_7466.jpg", caption: "Even though you're so lazy" },
    { src: "images/davidipad.png", caption: "And you always ignore me" },
    { src: "images/davidsleep.png", caption: "And you take up the wholllee bed" },
    { src: "images/davidspread.jpg", caption: "Omggg what the heckk" },
    { src: "images/IMG_7469.jpg", caption: "And you sleep with your eyes open" },
    { src: "images/davidpoke.jpg", caption: "I like trying new foods with you" },
    { src: "images/davideat.jpg", caption: "Like da chocolate dim sum at din tai fung" },
    { src: "images/davidfall.jpg", caption: "You're so silly and stupid" },
    { src: "images/IMG_7467.jpg", caption: "Hehe" },
    { src: "images/IMG_7465.jpg", caption: "Hehehe" },
    { src: "images/IMG_7468.jpg", caption: "Mwah happy valentine's day" },
    { src: "images/meanddavid.png", caption: "Bye bye hate you" }
]

let currentIndex = 0;
const imgElement = document.getElementById("display-image");
const captionElement = document.getElementById("caption");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

function updateContent(index) {
    imgElement.src = images[index].src;
    captionElement.textContent = images[index].caption;
}

prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateContent(currentIndex);
});

nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateContent(currentIndex);
});


document.addEventListener("DOMContentLoaded", () => {
    const petalContainer = document.getElementById("petal-container");

    if (!petalContainer) {
        console.error("Error: #petal-container not found");
        return;
    }

    const totalPetals = 30; // Number of petals

    function createPetal() {
        const petal = document.createElement("div");
        petal.classList.add("petal");
        petal.style.left = Math.random() * window.innerWidth + "px";
        petal.style.top = "-50px"; // Start above the screen
        petalContainer.appendChild(petal);
        animatePetal(petal);
    }

    function animatePetal(petal) {
        gsap.to(petal, {
            duration: Math.random() * 5 + 5, // Random fall speed (5-10 sec)
            y: window.innerHeight + 50, // Move to bottom
            x: "+=" + (Math.random() * 100 - 50), // Slight horizontal drift
            rotation: Math.random() * 360, // Rotate while falling
            opacity: 0, // Fade out
            ease: "linear",
            onComplete: () => {
                petal.remove();
                createPetal(); // Spawn new petal after old one disappears
            },
        });
    }

    // Spawn initial petals
    for (let i = 0; i < totalPetals; i++) {
        setTimeout(createPetal, i * 400); // Staggered spawn
    }
});
