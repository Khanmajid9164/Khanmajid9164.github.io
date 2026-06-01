/* =========================
   TYPING ANIMATION
========================= */

const typingText = document.getElementById("typing-text");

if (typingText) {

    const words = [
        "Digital Creator",
        "Entrepreneur",
        "Technology Enthusiast",
        "Future Brand Builder",
        "Creative Thinker"
    ];

    let wordIndex = 0;

    function changeWord() {

        typingText.style.opacity = "0";

        setTimeout(() => {

            typingText.textContent = words[wordIndex];

            typingText.style.opacity = "1";

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }

        }, 300);
    }

    setInterval(changeWord, 2500);
}


/* =========================
   MOTIVATION GENERATOR
========================= */

const quotes = [
    "Discipline beats motivation.",
    "Small progress every day becomes massive success.",
    "Your future is built by today's actions.",
    "Consistency creates extraordinary results.",
    "Dream big. Build bigger.",
    "Focus on progress, not perfection.",
    "Success comes from repetition.",
    "Stay patient. Stay relentless.",
    "Create more than you consume.",
    "Every expert was once a beginner."
];

function newQuote() {

    const quoteElement = document.getElementById("quote");

    if (!quoteElement) return;

    const randomIndex =
        Math.floor(Math.random() * quotes.length);

    quoteElement.style.opacity = "0";

    setTimeout(() => {

        quoteElement.textContent =
            quotes[randomIndex];

        quoteElement.style.opacity = "1";

    }, 300);
}


/* =========================
   SCROLL REVEAL ANIMATION
========================= */

const observer = new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

},

{
    threshold: 0.15
}

);

document.querySelectorAll(
".card, .wide-card, .timeline-item, .future-card, .section-header"
).forEach((el) => {

    el.classList.add("hidden");

    observer.observe(el);

});


/* =========================
   PARALLAX PROFILE EFFECT
========================= */

const profile =
document.querySelector(".profile-ring");

document.addEventListener("mousemove", (e) => {

    if (!profile) return;

    const x =
    (window.innerWidth / 2 - e.clientX) / 40;

    const y =
    (window.innerHeight / 2 - e.clientY) / 40;

    profile.style.transform =
    `rotateY(${x}deg) rotateX(${-y}deg)`;

});


/* =========================
   NAVBAR SHADOW ON SCROLL
========================= */

window.addEventListener("scroll", () => {

    const header =
    document.querySelector(".header");

    if (!header) return;

    if (window.scrollY > 50) {

        header.style.boxShadow =
        "0 10px 30px rgba(0,0,0,0.35)";

    } else {

        header.style.boxShadow = "none";

    }

});


/* =========================
   RANDOM GREETING
========================= */

const greetings = [
    "Welcome to my portfolio.",
    "Thanks for visiting.",
    "Building the future, one project at a time.",
    "Creativity meets technology.",
    "Keep learning. Keep creating."
];

console.log(
greetings[
Math.floor(Math.random() * greetings.length)
]
);
