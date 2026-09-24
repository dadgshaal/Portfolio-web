const menuBtn = document.getElementById("menuBtn");
const navBar = document.getElementById("navbar");


menuBtn.addEventListener("click", function () {
    navBar.classList.toggle("show");
});


document.querySelectorAll(".nav-link").forEach(function (link) {

    link.addEventListener("click", function () {

        navBar.classList.remove("show");

        document.querySelectorAll(".nav-link").forEach(function (nav) {
            nav.classList.remove("active");
        });

        this.classList.add("active");

    });

});


const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", function () {

    let currentSection = "home";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});


const typingName = document.getElementById("typingName");

const names = [
    "Dading Pasha",
    "Web Dev",
    "Psikolog",
    "Penulis",
    "Digital Marketer"
];

let nameIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect() {
    const currentName = names[nameIndex];

    if (!deleting) {
        typingName.textContent = currentName.substring(0, characterIndex + 1);
        characterIndex++;

        if (characterIndex === currentName.length) {
            deleting = true;
            setTimeout(typeEffect, 2000);
            return;
        }
    } else {
        typingName.textContent = currentName.substring(0, characterIndex - 1);
        characterIndex--;

        if (characterIndex === 0) {
            deleting = false;
            nameIndex = (nameIndex + 1) % names.length;
        }
    }

    setTimeout(typeEffect, deleting ? 300 : 300);
}

typeEffect();



const testimonials = [
    {
        name: "G-Dev 1",
        text: "website ini b aja sih"
    },
    {
        name: "wong ganteng",
        text: "website b aja kok bangga"
    },
    {
        name: "ada deh",
        text: "wong kok aneh"
    }
];

let testimonialIndex = 0;

const testimonialName = document.getElementById("testimonialName");
const testimonialText = document.getElementById("testimonialText");

const prevBtn = document.getElementById("prevTestimonial");
const nextBtn = document.getElementById("nextTestimonial");

function showTestimonial(index) {
    testimonialName.textContent = testimonials[index].name;
    testimonialText.textContent = '"' + testimonials[index].text + '"';
}

document.getElementById("nextTestimonial").addEventListener("click", function() {
    testimonialIndex++;

    if (testimonialIndex >= testimonials.length) {
        testimonialIndex = 0;
    }

    showTestimonial(testimonialIndex);
});

document.getElementById("prevTestimonial").addEventListener("click", function () {
    testimonialIndex--;

    if (testimonialIndex < 0) {
        testimonialIndex = testimonials.length - 1;
    }

    showTestimonial(testimonialIndex);
});



const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("fullname").ariaValueMax;

    alert("Terima Kasih, " + name + "! pesan berhasil dikirim (simulasi).");

    contactForm.reset();
});



document.getElementById("cvBtn").addEventListener("click", function (event) {
    event.preventDefault();

    alert("file cv belum tersedia.")
});
