// =================================
// ELEMENT
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

const contactBtn =
document.getElementById(
"contactBtn"
);

const joinMainBtn =
document.getElementById(
"joinMainBtn"
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

    if(

        !menuBtn.contains(
        event.target
        )

        &&

        !dropdownMenu.contains(
        event.target
        )

    ){

        dropdownMenu.classList.remove(
        "show"
        );

    }

}
);

// =================================
// ABOUT MODAL OPEN
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

// =================================
// ABOUT MODAL CLOSE
// =================================

closeModal.addEventListener(
"click",
() => {

    aboutModal.style.display =
    "none";

}
);

// =================================
// CLOSE MODAL OUTSIDE
// =================================

window.addEventListener(
"click",
(event) => {

    if(

        event.target ===
        aboutModal

    ){

        aboutModal.style.display =
        "none";

    }

}
);

// =================================
// JOIN GROUP
// =================================


contactBtn.addEventListener(
"click",
() => {

    window.open(
    "https://wa.me/6282239959100",
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
// SCROLL ANIMATION
// =================================

const observer =
new IntersectionObserver(

(entries) => {

    entries.forEach(
    (entry) => {

        if(
            entry.isIntersecting
        ){

            entry.target.classList.add(
            "visible"
            );

        }

    });

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
==================================
PORTUGAL WORLD CUP 2026
FORÇA PORTUGAL 🇵🇹
Papua Cyber Community
==================================
`
);
