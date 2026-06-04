// =====================================
// PORTUGAL WORLD CUP 2026 DASHBOARD
// =====================================

// ===========================
// CLOCK & DATE
// ===========================

function updateClock() {

    const now = new Date();

    const time = now.toLocaleTimeString("id-ID");

    const date = now.toLocaleDateString("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    document.getElementById("clock").textContent = time;
    document.getElementById("date").textContent = date;
}

setInterval(updateClock, 1000);
updateClock();


// ===========================
// DARK MODE
// ===========================

const darkModeBtn = document.getElementById("darkModeBtn");

if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark");

    darkModeBtn.innerHTML =
        "☀️ Light Mode";
}

darkModeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const isDark =
        document.body.classList.contains("dark");

    if (isDark) {

        localStorage.setItem(
            "theme",
            "dark"
        );

        darkModeBtn.innerHTML =
            "☀️ Light Mode";

        showNotification(
            "Dark Mode Activated",
            "success"
        );

    } else {

        localStorage.setItem(
            "theme",
            "light"
        );

        darkModeBtn.innerHTML =
            "🌙 Dark Mode";

        showNotification(
            "Light Mode Activated",
            "success"
        );
    }

});


// ===========================
// TAB NAVIGATION
// ===========================

const tabButtons =
    document.querySelectorAll(".tab-btn");

const tabContents =
    document.querySelectorAll(".tab-content");

tabButtons.forEach(button => {

    button.addEventListener("click", () => {

        const target =
            button.dataset.tab;

        tabButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        tabContents.forEach(content => {
            content.classList.remove("active");
        });

        button.classList.add("active");

        document
            .getElementById(target)
            .classList.add("active");

        localStorage.setItem(
            "activeTab",
            target
        );
    });

});


// ===========================
// LOAD LAST TAB
// ===========================

const savedTab =
    localStorage.getItem("activeTab");

if (savedTab) {

    document
        .querySelectorAll(".tab-btn")
        .forEach(btn => {

            btn.classList.remove("active");

            if (
                btn.dataset.tab === savedTab
            ) {
                btn.classList.add("active");
            }

        });

    document
        .querySelectorAll(".tab-content")
        .forEach(tab => {

            tab.classList.remove("active");

        });

    document
        .getElementById(savedTab)
        .classList.add("active");

}


// ===========================
// NOTIFICATION SYSTEM
// ===========================

function showNotification(
    message,
    type = "success"
) {

    const notification =
        document.createElement("div");

    notification.className =
        `notification ${type}`;

    notification.innerHTML =
        message;

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

        }, 300);

    }, 3000);
}


// ===========================
// SAVE BUTTON
// ===========================

const saveBtn =
    document.getElementById("saveBtn");

saveBtn.addEventListener("click", () => {

    const dashboardData = {

        lastVisit:
            new Date().toLocaleString(),

        favoriteTeam:
            "Portugal",

        activeTab:
            localStorage.getItem(
                "activeTab"
            ) || "overview"

    };

    localStorage.setItem(
        "dashboardData",
        JSON.stringify(
            dashboardData
        )
    );

    showNotification(
        "Dashboard Saved Successfully",
        "success"
    );

});


// ===========================
// RESET BUTTON
// ===========================

const resetBtn =
    document.getElementById("resetBtn");

resetBtn.addEventListener("click", () => {

    const confirmReset =
        confirm(
            "Reset all settings?"
        );

    if (!confirmReset) return;

    localStorage.removeItem(
        "activeTab"
    );

    localStorage.removeItem(
        "dashboardData"
    );

    localStorage.removeItem(
        "theme"
    );

    showNotification(
        "Dashboard Reset Complete",
        "success"
    );

    setTimeout(() => {

        location.reload();

    }, 1500);

});


// ===========================
// EXIT BUTTON
// ===========================

const exitBtn =
    document.getElementById("exitBtn");

exitBtn.addEventListener("click", () => {

    showNotification(
        "Thank you for visiting Portugal World Cup Dashboard",
        "success"
    );

    setTimeout(() => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 500);

});


// ===========================
// PLAYER CARD ANIMATION
// ===========================

const playerCards =
    document.querySelectorAll(
        ".player-card"
    );

playerCards.forEach(card => {

    card.addEventListener(
        "mouseenter",
        () => {

            card.style.transform =
                "translateY(-10px) scale(1.03)";

        }
    );

    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "translateY(0) scale(1)";

        }
    );

});


// ===========================
// WELCOME MESSAGE
// ===========================

window.addEventListener(
    "load",
    () => {

        setTimeout(() => {

            showNotification(
                "Welcome to Portugal World Cup 2026 Dashboard 🇵🇹",
                "success"
            );

        }, 800);

    }
);


// ===========================
// SCROLL REVEAL EFFECT
// ===========================

const revealElements =
    document.querySelectorAll(
        ".player-card, .trophy-card, .info-box"
    );

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(
                entry => {

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
    element => {

        element.style.opacity = "0";
        element.style.transform =
            "translateY(20px)";
        element.style.transition =
            "all .6s ease";

        observer.observe(
            element
        );

    }
);


// ===========================
// CONSOLE SIGNATURE
// ===========================

console.log(`
=================================
PORTUGAL WORLD CUP 2026 DASHBOARD
Developed for UAS Project
HTML • CSS • JavaScript
=================================
`);
