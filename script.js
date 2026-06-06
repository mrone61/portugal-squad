// =================================
// LOADER
// =================================

window.addEventListener("load", () => {

    const loader =
        document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add(
            "loader-hidden"
        );

    }, 1200);

});

// =================================
// MENU DROPDOWN
// =================================

const menuBtn =
    document.getElementById(
        "menuBtn"
    );

const dropdownMenu =
    document.getElementById(
        "dropdownMenu"
    );

menuBtn.addEventListener(
    "click",
    () => {

        dropdownMenu.classList.toggle(
            "show"
        );

    }
);

// =================================
// CLOSE MENU OUTSIDE
// =================================

document.addEventListener(
    "click",
    (e) => {

        if (
            !menuBtn.contains(e.target) &&
            !dropdownMenu.contains(e.target)
        ) {

            dropdownMenu.classList.remove(
                "show"
            );

        }

    }
);

// =================================
// ABOUT MODAL
// =================================

const aboutBtn =
    document.getElementById(
        "aboutBtn"
    );

const aboutModal =
    document.getElementById(
        "aboutModal"
    );

const closeModal =
    document.getElementById(
        "closeModal"
    );

aboutBtn.addEventListener(
    "click",
    () => {

        aboutModal.style.display =
            "flex";

        dropdownMenu.classList.remove(
            "show"
        );

    }
);

closeModal.addEventListener(
    "click",
    () => {

        aboutModal.style.display =
            "none";

    }
);

window.addEventListener(
    "click",
    (e) => {

        if (
            e.target === aboutModal
        ) {

            aboutModal.style.display =
                "none";

        }

    }
);

// =================================
// WHATSAPP GROUP
// =================================

const groupLink =
    "https://chat.whatsapp.com/KbWf8mrpRey1tIaZ6NJAh0?s=cl&p=a&ilr=4";

const joinBtn =
    document.getElementById(
        "joinBtn"
    );

const joinMainBtn =
    document.getElementById(
        "joinMainBtn"
    );

joinBtn.addEventListener(
    "click",
    () => {

        window.open(
            groupLink,
            "_blank"
        );

    }
);

joinMainBtn.addEventListener(
    "click",
    () => {

        window.open(
            groupLink,
            "_blank"
        );

    }
);

// =================================
// DARK MODE
// =================================

const darkModeBtn =
    document.getElementById(
        "darkModeBtn"
    );

if (
    localStorage.getItem("theme")
    === "dark"
) {

    document.body.classList.add(
        "dark"
    );

    darkModeBtn.innerHTML =
        "☀️ Light Mode";

}

darkModeBtn.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "dark"
        );

        if (
            document.body.classList.contains(
                "dark"
            )
        ) {

            localStorage.setItem(
                "theme",
                "dark"
            );

            darkModeBtn.innerHTML =
                "☀️ Light Mode";

            showToast(
                "Dark Mode Aktif 🌙"
            );

        } else {

            localStorage.setItem(
                "theme",
                "light"
            );

            darkModeBtn.innerHTML =
                "🌙 Dark Mode";

            showToast(
                "Light Mode Aktif ☀️"
            );

        }

    }
);

// =================================
// TOAST NOTIFICATION
// =================================

function showToast(message) {

    const toast =
        document.createElement(
            "div"
        );

    toast.className =
        "toast";

    toast.textContent =
        message;

    document.body.appendChild(
        toast
    );

    setTimeout(() => {

        toast.classList.add(
            "show"
        );

    }, 100);

    setTimeout(() => {

        toast.classList.remove(
            "show"
        );

        setTimeout(() => {

            toast.remove();

        }, 400);

    }, 2500);

}

// =================================
// WELCOME MESSAGE
// =================================

setTimeout(() => {

    showToast(
        "Selamat Datang Portugal Fans 🇵🇹"
    );

}, 1800);

// =================================
// SMOOTH FADE-IN EFFECT
// =================================

const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                    }

                }
            );

        },
        {
            threshold: 0.15
        }
    );

document
    .querySelectorAll(
        ".glass-card, .achievement-card"
    )
    .forEach(
        (el) => {

            el.classList.add(
                "hidden"
            );

            observer.observe(el);

        }
    );

// =================================
// CONSOLE MESSAGE
// =================================

console.log(`
=====================================
PORTUGAL WORLD CUP 2026
FORÇA PORTUGAL 🇵🇹
Responsive Landing Page
=====================================
`);
