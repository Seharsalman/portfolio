
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeToggle.textContent = "☀️";
    } else {
        themeToggle.textContent = "🌙";
    }

});

const words = [
    "Frontend Developer",
    "UI Designer",
    "JavaScript Developer"
];

let i = 0;
let j = 0;
let isDeleting = false;

function type() {

    const typingElement = document.getElementById("typing");
    const currentWord = words[i];

    if (isDeleting) {
        typingElement.textContent = currentWord.substring(0, j);
        j--;
    } else {
        typingElement.textContent = currentWord.substring(0, j);
        j++;
    }

    if (!isDeleting && j > currentWord.length) {

        isDeleting = true;

        setTimeout(type, 1000);
        return;
    }

    if (isDeleting && j < 0) {

        isDeleting = false;

        i++;

        if (i >= words.length) {
            i = 0;
        }

        j = 0;
    }

    setTimeout(type, isDeleting ? 70 : 120);
}

type();





