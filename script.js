// ======================================
// PORTUGAL WORLD CUP 2026 DASHBOARD
// ======================================

// ================================
// LOADING SCREEN
// ================================

window.addEventListener("load", () => {

    const loader =
        document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add("hide");

    }, 1500);

});

// ================================
// DIGITAL CLOCK
// ================================

function updateClock() {

    const now = new Date();

    const time =
        now.toLocaleTimeString("id-ID");

    const date =
        now.toLocaleDateString("id-ID", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
        });

    document.getElementById("clock")
        .textContent = time;

    document.getElementById("date")
        .textContent = date;

}

updateClock();

setInterval(updateClock, 1000);

// ================================
// DARK MODE
// ================================

const darkModeBtn =
    document.getElementById("darkModeBtn");

if (
    localStorage.getItem("theme") === "dark"
) {

    document.body.classList.add("dark");

    darkModeBtn.innerHTML =
        "☀️ Light Mode";

}

darkModeBtn.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "dark"
        );

        const isDark =
            document.body.classList.contains(
                "dark"
            );

        if (isDark) {

            localStorage.setItem(
                "theme",
                "dark"
            );

            darkModeBtn.innerHTML =
                "☀️ Light Mode";

            showNotification(
                "Dark Mode Enabled"
            );

        } else {

            localStorage.setItem(
                "theme",
                "light"
            );

            darkModeBtn.innerHTML =
                "🌙 Dark Mode";

            showNotification(
                "Light Mode Enabled"
            );

        }

    }
);

// ================================
// MENU 3 TITIK
// ================================

const menuToggle =
    document.getElementById(
        "menuToggle"
    );

const dropdownMenu =
    document.getElementById(
        "dropdownMenu"
    );

menuToggle.addEventListener(
    "click",
    () => {

        dropdownMenu.classList.toggle(
            "show"
        );

    }
);

// ================================
// ABOUT MODAL
// ================================

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

        if (e.target === aboutModal) {

            aboutModal.style.display =
                "none";

        }

    }
);

// ================================
// JOIN GROUP
// ================================

const joinGroupBtn =
    document.getElementById(
        "joinGroupBtn"
    );

joinGroupBtn.addEventListener(
    "click",
    () => {

        window.open(
            "https://chat.whatsapp.com/KbWf8mrpRey1tIaZ6NJAh0?s=cl&p=a&ilr=4",
            "_blank"
        );

    }
);

// ================================
// TAB NAVIGATION
// ================================

const tabButtons =
    document.querySelectorAll(
        ".tab-btn"
    );

const tabContents =
    document.querySelectorAll(
        ".tab-content"
    );

tabButtons.forEach((button) => {

    button.addEventListener(
        "click",
        () => {

            const target =
                button.dataset.tab;

            tabButtons.forEach(
                (btn) => {

                    btn.classList.remove(
                        "active"
                    );

                }
            );

            tabContents.forEach(
                (content) => {

                    content.classList.remove(
                        "active"
                    );

                }
            );

            button.classList.add(
                "active"
            );

            document
                .getElementById(target)
                .classList.add(
                    "active"
                );

            localStorage.setItem(
                "activeTab",
                target
            );

        }
    );

});

// ================================
// LOAD LAST TAB
// ================================

const savedTab =
    localStorage.getItem(
        "activeTab"
    );

if (savedTab) {

    tabButtons.forEach((btn) => {

        btn.classList.remove(
            "active"
        );

        if (
            btn.dataset.tab === savedTab
        ) {

            btn.classList.add(
                "active"
            );

        }

    });

    tabContents.forEach((tab) => {

        tab.classList.remove(
            "active"
        );

    });

    document
        .getElementById(savedTab)
        .classList.add(
            "active"
        );

}

// ================================
// BACK TO TOP
// ================================

const topBtn =
    document.getElementById(
        "topBtn"
    );

window.addEventListener(
    "scroll",
    () => {

        if (
            window.scrollY > 300
        ) {

            topBtn.style.display =
                "block";

        } else {

            topBtn.style.display =
                "none";

        }

    }
);

topBtn.addEventListener(
    "click",
    () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);

// ================================
// NOTIFICATION SYSTEM
// ================================

function showNotification(message) {

    const notification =
        document.createElement("div");

    notification.innerHTML =
        message;

    notification.classList.add(
        "notification"
    );

    document.body.appendChild(
        notification
    );

    setTimeout(() => {

        notification.classList.add(
            "show"
        );

    }, 100);

    setTimeout(() => {

        notification.classList.remove(
            "show"
        );

        setTimeout(() => {

            notification.remove();

        }, 500);

    }, 3000);

}

// ================================
// WELCOME MESSAGE
// ================================

window.addEventListener(
    "load",
    () => {

        setTimeout(() => {

            showNotification(
                "Welcome to Portugal World Cup 2026 🇵🇹"
            );

        }, 1800);

    }
);

// ================================
// SCROLL REVEAL
// ================================

const revealElements =
    document.querySelectorAll(
        ".player-card, .trophy-card, .info-box"
    );

const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateY(0)";

                    }

                }
            );

        },
        {
            threshold: 0.2
        }
    );

revealElements.forEach(
    (element) => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(30px)";

        element.style.transition =
            "all .6s ease";

        observer.observe(
            element
        );

    }
);

// ================================
// CLOSE MENU IF CLICK OUTSIDE
// ================================

document.addEventListener(
    "click",
    (e) => {

        if (
            !menuToggle.contains(e.target) &&
            !dropdownMenu.contains(e.target)
        ) {

            dropdownMenu.classList.remove(
                "show"
            );

        }

    }
);

// ================================
// CONSOLE SIGNATURE
// ================================

console.log(`
=====================================
PORTUGAL WORLD CUP 2026 DASHBOARD
Developed For UAS Project
HTML • CSS • JavaScript
=====================================
`);
