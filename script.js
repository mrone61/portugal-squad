const menuBtn = document.getElementById("menuBtn");
const dropdownMenu = document.getElementById("dropdownMenu");
const aboutBtn = document.getElementById("aboutBtn");
const scheduleBtn = document.getElementById("scheduleBtn");
const contactBtn = document.getElementById("contactBtn");
const joinMainBtn = document.getElementById("joinMainBtn");
const aboutModal = document.getElementById("aboutModal");
const closeModal = document.getElementById("closeModal");

const groupLink = "https://chat.whatsapp.com/KbWf8mrpRey1tIaZ6NJAh0?s=cl&p=a&ilr=4";

// Menu toggle
menuBtn.addEventListener("click", () => {
    dropdownMenu.classList.toggle("show");
});

// Close menu outside
document.addEventListener("click", (e) => {
    if(!menuBtn.contains(e.target) &&!dropdownMenu.contains(e.target)){
        dropdownMenu.classList.remove("show");
    }
});

// About modal
aboutBtn.addEventListener("click", () => {
    aboutModal.style.display = "flex";
    dropdownMenu.classList.remove("show");
});
closeModal.addEventListener("click", () => {
    aboutModal.style.display = "none";
});
window.addEventListener("click", (e) => {
    if(e.target === aboutModal){
        aboutModal.style.display = "none";
    }
});

// Scroll ke Jadwal Lengkap
scheduleBtn.addEventListener("click", () => {
    document.getElementById("full-schedule").scrollIntoView({behavior:"smooth"});
    dropdownMenu.classList.remove("show");
});

// Contact + Join
contactBtn.addEventListener("click", () => {
    window.open("https://wa.me/6282239959100", "_blank");
});
joinMainBtn.addEventListener("click", () => {
    window.open(groupLink, "_blank");
});

// Tombol Live Match - GUE FIX INI
document.querySelectorAll(".match-live-btn").forEach(btn => {
    btn.addEventListener("click", function(e){
        e.preventDefault();
        const link = this.getAttribute("data-link");
        const card = this.closest(".match-card");
        const date = card.querySelector(".match-date").textContent;
        const team1 = card.querySelectorAll(".team h3")[0].textContent;
        const team2 = card.querySelectorAll(".team h3")[1].textContent;

        console.log("Tombol diklik:", team1, "vs", team2, "Link:", link);

        if(link && link!== "#" && link!== ""){
            alert(`⚽ ${team1} vs ${team2}\n📅 ${date}\n🏆 FIFA World Cup 2026\nBuka link match sekarang!`);
            window.open(link, "_blank");
        } else {
            alert(`⚽ ${team1} vs ${team2}\n📅 ${date}\n\nLink live match belum tersedia bro. Nanti gue update!`);
        }
    });
});

// Scroll animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("visible");
        }
    });
}, {threshold:0.15});

document.querySelectorAll(".about-card,.achievement-card,.match-card").forEach((el) => {
    el.classList.add("hidden");
    observer.observe(el);
});
