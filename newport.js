/* =========================================================
   PORTFOLIO JAVASCRIPT
========================================================= */


/* =========================================================
   TYPING EFFECT
========================================================= */

const typingElement = document.querySelector(".typing");

const phrases = [
    "Future AI Engineer",
    "Python Developer",
    "Generative AI Learner",
    "Web Developer",
    "Creative Problem Solver"
];

let phraseIndex = 0;
let characterIndex = 0;
let deleting = false;


function typeEffect() {

    const currentPhrase = phrases[phraseIndex];

    if (!deleting) {

        characterIndex++;

        typingElement.textContent =
            currentPhrase.substring(
                0,
                characterIndex
            );

        if (characterIndex === currentPhrase.length) {

            deleting = true;

            setTimeout(typeEffect, 1800);

            return;
        }

    } else {

        characterIndex--;

        typingElement.textContent =
            currentPhrase.substring(
                0,
                characterIndex
            );

        if (characterIndex === 0) {

            deleting = false;

            phraseIndex =
                (phraseIndex + 1) % phrases.length;

        }

    }

    setTimeout(
        typeEffect,
        deleting ? 50 : 90
    );
}


typeEffect();


/* =========================================================
   NAVBAR SCROLL EFFECT
========================================================= */

const navbar =
    document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =========================================================
   MOBILE MENU
========================================================= */

const menuButton =
    document.querySelector(".menu-btn");

const navMenu =
    document.querySelector(".nav-menu");

const menuIcon =
    menuButton.querySelector("i");


menuButton.addEventListener("click", () => {

    navMenu.classList.toggle("open");

    if (navMenu.classList.contains("open")) {

        menuIcon.classList.remove("fa-bars");

        menuIcon.classList.add("fa-xmark");

    } else {

        menuIcon.classList.remove("fa-xmark");

        menuIcon.classList.add("fa-bars");

    }

});


/* Close menu after click */

document
    .querySelectorAll(".nav-link")
    .forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("open");

            menuIcon.classList.remove("fa-xmark");

            menuIcon.classList.add("fa-bars");

        });

    });


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-link");


const sectionObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    const id =
                        entry.target.getAttribute("id");

                    navLinks.forEach(link => {

                        link.classList.toggle(
                            "active",
                            link.getAttribute("href")
                                === `#${id}`
                        );

                    });

                }

            });

        },

        {
            threshold: 0.4
        }

    );


sections.forEach(section => {

    sectionObserver.observe(section);

});


/* =========================================================
   MOUSE FOLLOW GLOW
========================================================= */

const mouseGlow =
    document.querySelector(".mouse-glow");


window.addEventListener("mousemove", event => {

    mouseGlow.style.left =
        `${event.clientX}px`;

    mouseGlow.style.top =
        `${event.clientY}px`;

});


/* =========================================================
   3D CARD TILT
========================================================= */

const tiltCards =
    document.querySelectorAll(".tilt");


tiltCards.forEach(card => {

    card.addEventListener("mousemove", event => {

        const rect =
            card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -5;

        const rotateY =
            ((x - centerX) / centerX) * 5;

        card.style.transform =
            `perspective(900px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-5px)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(900px) rotateX(0) rotateY(0)";

    });

});


/* =========================================================
   BACK TO TOP
========================================================= */

const topButton =
    document.querySelector(".top-button");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topButton.classList.add("show");

    } else {

        topButton.classList.remove("show");

    }

});


topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* =========================================================
   CONTACT FORM
========================================================= */

const contactForm =
    document.querySelector(".contact-form");


contactForm.addEventListener("submit", event => {

    event.preventDefault();


    const name =
        document.querySelector("#name").value.trim();

    const email =
        document.querySelector("#email").value.trim();

    const message =
        document.querySelector("#message").value.trim();


    if (!name || !email || !message) {

        alert("Please fill all fields.");

        return;

    }


    const subject =
        encodeURIComponent(
            `Portfolio Contact from ${name}`
        );


    const body =
        encodeURIComponent(
            `Name: ${name}\n\nEmail: ${email}\n\nMessage:\n${message}`
        );


    /*
       Replace this email with your real email.
    */

    window.location.href =
        `mailto:your-email@example.com?subject=${subject}&body=${body}`;

});


/* =========================================================
   SMOOTH ANCHOR SCROLL
========================================================= */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(anchor => {

        anchor.addEventListener(
            "click",
            event => {

                const target =
                    document.querySelector(
                        anchor.getAttribute("href")
                    );

                if (!target) return;

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }
        );

    });


/* =========================================================
   CURSOR MAGNETIC EFFECT FOR BUTTONS
========================================================= */

const buttons =
    document.querySelectorAll(
        ".primary-btn, .secondary-btn, .nav-button"
    );


buttons.forEach(button => {

    button.addEventListener("mousemove", event => {

        const rect =
            button.getBoundingClientRect();

        const x =
            event.clientX - rect.left - rect.width / 2;

        const y =
            event.clientY - rect.top - rect.height / 2;

        button.style.transform =
            `translate(${x * 0.08}px, ${y * 0.08}px)`;

    });


    button.addEventListener("mouseleave", () => {

        button.style.transform = "";

    });

});


/* =========================================================
   PAGE LOADED
========================================================= */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});
