/* ================= DARK MODE ================= */

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌙";
    }

});

/* =========================================================
   MOBILE HAMBURGER MENU
========================================================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("active");

        if (navLinks.classList.contains("active")) {

            menuBtn.textContent = "✕";

        } else {

            menuBtn.textContent = "☰";

        }

    });


    /* Close menu after clicking a link */

    navLinks.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

            menuBtn.textContent = "☰";

        });

    });

}
/* ================= ANIMATED COUNTERS ================= */

const counters = document.querySelectorAll(".counter");

const startCounter = (counter) => {

    const target = Number(counter.dataset.target);

    let current = 0;

    const speed = target / 60;

    const update = () => {

        current += speed;

        if (current < target) {

            counter.textContent = Math.ceil(current);

            requestAnimationFrame(update);

        } else {

            counter.textContent = target;

        }

    };

    update();

};


/* Start counters when visible */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            counters.forEach(counter => {
                startCounter(counter);
            });

            observer.disconnect();

        }

    });

});

observer.observe(document.querySelector(".stats-section"));


/* ================= MEMBER SEARCH ================= */

const search = document.getElementById("memberSearch");

const members = document.querySelectorAll(".member-card");

search.addEventListener("input", () => {

    const searchText = search.value.toLowerCase();

    members.forEach(member => {

        const name = member
            .querySelector("h3")
            .textContent
            .toLowerCase();

        const role = member
            .querySelector("p")
            .textContent
            .toLowerCase();

        if (
            name.includes(searchText) ||
            role.includes(searchText)
        ) {

            member.style.display = "block";

        } else {

            member.style.display = "none";

        }

    });

});


/* ================= SCROLL REVEAL ================= */

const sections = document.querySelectorAll(
    ".section, .activities-section, .gallery-section"
);

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.1
    }
);


sections.forEach(section => {

    section.style.opacity = "0";

    section.style.transform = "translateY(30px)";

    section.style.transition = "1s ease";

    revealObserver.observe(section);

});


/* ================= CURRENT YEAR ================= */

console.log(
    "Welcome to Yeatsholing Residence Hall 🏠"
);