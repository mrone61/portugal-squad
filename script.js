// ================================= ELEMENT =================================
const menuBtn = document.getElementById("menuBtn");
const dropdownMenu = document.getElementById("dropdownMenu");
const aboutBtn = document.getElementById("aboutBtn");
const scheduleBtn = document.getElementById("scheduleBtn");
const contactBtn = document.getElementById("contactBtn");
const joinMainBtn = document.getElementById("joinMainBtn");
const aboutModal = document.getElementById("aboutModal");
const closeModal = document.getElementById("closeModal");
const matchBtns = document.querySelectorAll(".match-live-btn");

// ================================= GROUP LINKS =================================
const groupLink = "https://chat.whatsapp.com/KbWf8mrpRey1tIaZ6NJAh0?s=cl&p=a&ilr=4";

// ================================= MENU TOGGLE =================================
menuBtn.addEventListener("click", () => {
    dropdownMenu.classList.toggle("show");
});

// ================================= CLOSE MENU OUTSIDE =================================
document.addEventListener("click", (event) => {
    if(!menuBtn.contains(event.target) &&!dropdownMenu.contains(event.target)){
        dropdownMenu.classList.remove("show");
    }
});

// ================================= ABOUT MODAL OPEN =================================
aboutBtn.addEventListener("click", () => {
    aboutModal.style.display = "flex";
    dropdownMenu.classList.remove("show");
});

// ================================= SCROLL TO SCHEDULE =================================
scheduleBtn.addEventListener("click", () => {
    document.getElementById("matches").scrollIntoView({behavior:"smooth"});
    dropdownMenu.classList.remove("show");
});

// ================================= ABOUT MODAL CLOSE =================================
closeModal.addEventListener("click", () => {
    aboutModal.style.display = "none";
});

// ================================= CLOSE MODAL OUTSIDE =================================
window.addEventListener("click", (event) => {
    if(event.target === aboutModal){
        aboutModal.style.display = "none";
    }
});

// ================================= JOIN GROUP =================================
contactBtn.addEventListener("click", () => {
    window.open("https://wa.me/6282239959100", "_blank");
});
joinMainBtn.addEventListener("click", () => {
    window.open(groupLink, "_blank");
});

// ================================= MATCH BUTTONS =================================
matchBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const link = btn.getAttribute("data-link");
        const card = btn.closest(".match-card");
        const date = card.querySelector(".match-date").textContent;
        const teams = card.querySelector(".team h3:nth-of-type(1)").textContent + " vs " + card.querySelector(".team h3:nth-of-type(2)").textContent;
        
        if(link && link !== "#"){
            alert(`⚽ ${teams}
📅 ${date}
🏆 FIFA World Cup 2026 - Group K

Link Match dibuka di tab baru!`);
            window.open(link, "_blank");
        } else {
            alert(`⚽ ${teams}
📅 ${date}

Link live match belum tersedia. Nanti gue update bro!`);
        }
    });
});

// ================================= SCROLL ANIMATION =================================
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("visible");
        }
    });
}, {threshold:0.15});

document.querySelectorAll(".about-card,.achievement-card,.match-card").forEach((element) => {
    element.classList.add("hidden");
    observer.observe(element);
});

// ================================= CONSOLE MESSAGE =================================
console.log(`

PORTUGAL WORLD CUP 2026
FORÇA PORTUGAL 🇵🇹
3 Match Group K Ready
Papua Cyber Community

`);
