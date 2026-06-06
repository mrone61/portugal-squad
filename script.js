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
// ELEMENTS
// =================================

const menuBtn =
    document.getElementById(
        "menuBtn"
    );

const dropdownMenu =
    document.getElementById(
        "dropdownMenu"
    );

const aboutBtn =
    document.getElementById(
        "aboutBtn"
    );

const joinBtn =
    document.getElementById(
        "joinBtn"
    );

const joinMainBtn =
    document.getElementById(
        "joinMainBtn"
    );

const darkModeBtn =
    document.getElementById(
        "darkModeBtn"
    );

const aboutModal =
    document.getElementById(
        "aboutModal"
    );

const closeModal =
    document.getElementById(
        "closeModal"
    );

// =================================
// WHATSAPP GROUP
// =================================

const groupLink =
"https://chat.whatsapp.com/KbWf8mrpRey1tIaZ6NJAh0?s=cl&p=a&ilr=4";

// =================================
// MENU TOGGLE
// =================================

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
    (event) => {

        if (
            !menuBtn.contains(
                event.target
            ) &&
            !dropdownMenu.contains(
                event.target
            )
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
    (event) => {

        if (
            event.target ===
            aboutModal
        ) {

            aboutModal.style.display =
                "none";

        }

    }
);

// =================================
// JOIN GROUP
// =================================

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

const savedTheme =
    localStorage.getItem(
        "theme"
    );

if (
    savedTheme === "dark"
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
                "Dark Mode Dimatikan ☀️"
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

    toast.innerHTML =
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
        "🇵🇹 Selamat Datang Portugal Fans!"
    );

}, 1800);

// =================================
// SCROLL ANIMATION
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
            threshold:0.15
        }
    );

document
.querySelectorAll(
".about-card, .achievement-card"
)
.forEach(
(element) => {

    element.classList.add(
        "hidden"
    );

    observer.observe(
        element
    );

}
);

// =================================
// CONSOLE MESSAGE
// =================================

console.log(
`
========================================
PORTUGAL WORLD CUP 2026
FORÇA PORTUGAL 🇵🇹
Papua Cyber Community
========================================
`
);
