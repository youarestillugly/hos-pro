/* =========================================================
   YEATSHOLING RESIDENCE HALL
   SSO PAGE JAVASCRIPT
========================================================= */


/* =========================================================
   THEME BUTTON
========================================================= */

const themeBtn = document.getElementById("themeBtn");

let darkMode = false;


themeBtn.addEventListener("click", function () {

    darkMode = !darkMode;

    document.body.classList.toggle(
        "dark-mode",
        darkMode
    );


    if (darkMode) {

        themeBtn.textContent = "☀️";

    } else {

        themeBtn.textContent = "🌙";

    }

});



/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealItems = document.querySelectorAll(
    ".profile-grid, .role-card, .support-card, .contact-card"
);


const revealObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "show"
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );


revealItems.forEach(function (item) {

    item.classList.add("reveal");

    revealObserver.observe(item);

});



/* =========================================================
   SMOOTH SCROLL
========================================================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(function (link) {

    link.addEventListener(
        "click",
        function (event) {

            const target =
                document.querySelector(
                    this.getAttribute("href")
                );


            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }
    );

});



/* =========================================================
   MOBILE HAMBURGER MENU
========================================================= */

const menuBtn =
    document.getElementById("menuBtn");

const navLinks =
    document.getElementById("navLinks");


if (menuBtn && navLinks) {

    menuBtn.addEventListener(
        "click",
        function () {

            navLinks.classList.toggle(
                "active"
            );


            if (
                navLinks.classList.contains(
                    "active"
                )
            ) {

                menuBtn.textContent = "✕";

            } else {

                menuBtn.textContent = "☰";

            }

        }
    );


    navLinks
        .querySelectorAll("a")
        .forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

                    navLinks.classList.remove(
                        "active"
                    );

                    menuBtn.textContent = "☰";

                }
            );

        });

}