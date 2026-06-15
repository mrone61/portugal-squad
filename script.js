document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById("menuBtn");
    const dropdownMenu = document.getElementById("dropdownMenu");
    const aboutBtn = document.getElementById("aboutBtn");
    const scheduleBtn = document.getElementById("scheduleBtn");
    const contactBtn = document.getElementById("contactBtn");
    const joinMainBtn = document.getElementById("joinMainBtn");
    const aboutModal = document.getElementById("aboutModal");
    const closeModal = document.getElementById("closeModal");

    const groupLink = "https://chat.whatsapp.com/KbWf8mrpRey1tIaZ6NJAh0?s=cl&p=a&ilr=4";

    // Toggle menu
    if(menuBtn) {
        menuBtn.addEventListener("click", function(e) {
            e.stopPropagation();
            dropdownMenu.classList.toggle("show");
        });
    }

    // Close menu kalau klik di luar
    document.addEventListener("click", function(e) {
        if(menuBtn &&!menuBtn.contains(e.target) && dropdownMenu &&!dropdownMenu.contains(e.target)) {
            dropdownMenu.classList.remove("show");
        }
    });

    // About modal
    if(aboutBtn) {
        aboutBtn.addEventListener("click", function() {
            aboutModal.style.display = "flex";
            dropdownMenu.classList.remove("show");
        });
    }

    if(closeModal) {
        closeModal.addEventListener("click", function() {
            aboutModal.style.display = "none";
        });
    }

    window.addEventListener("click", function(e) {
        if(e.target === aboutModal) {
            aboutModal.style.display = "none";
        }
    });

    // JADWAL LENGKAP - REDIRECT KE HALAMAN BARU
    if(scheduleBtn) {
        scheduleBtn.addEventListener("click", function(e) {
            e.preventDefault();
            dropdownMenu.classList.remove("show");
            window.location.href = "jadwal.html";
        });
    }

    // Contact + Join
    if(contactBtn) {
        contactBtn.addEventListener("click", function() {
            window.open("https://wa.me/6282239959100", "_blank");
        });
    }

    if(joinMainBtn) {
        joinMainBtn.addEventListener("click", function() {
            window.open(groupLink, "_blank");
        });
    }

    // Tombol Live Match VERSI BESAR - buat jadwal.html lama
    document.querySelectorAll(".match-live-btn").forEach(btn => {
        btn.addEventListener("click", function(e) {
            e.preventDefault();
            const link = this.getAttribute("data-link");
            const card = this.closest(".match-card");
            const date = card.querySelector(".match-date").textContent;
            const team1 = card.querySelectorAll(".team h3")[0].textContent;
            const team2 = card.querySelectorAll(".team h3")[1].textContent;

            if(link && link!== "#") {
                alert(`⚽ ${team1} vs ${team2}\n📅 ${date}\nBuka link match!`);
                window.open(link, "_blank");
            } else {
                alert(`⚽ ${team1} vs ${team2}\n📅 ${date}\n\nLink live match belum tersedia bro!`);
            }
        });
    });

    // Tombol Live Match VERSI KECIL - buat index.html & jadwal.html baru
    document.querySelectorAll(".match-live-btn-small").forEach(btn => {
        btn.addEventListener("click", function(e) {
            e.preventDefault();
            const link = this.getAttribute("data-link");
            const card = this.closest(".match-card-small");
            const date = card.querySelector(".match-date-small").textContent;
            const teams = card.querySelector(".match-teams-small").textContent;

            if(link && link!== "#") {
                alert(`⚽ ${teams}\n📅 ${date}\nBuka link match!`);
                window.open(link, "_blank");
            } else {
                alert(`⚽ ${teams}\n📅 ${date}\n\nLink live match belum tersedia bro!`);
            }
        });
    });

    // Scroll animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, {threshold:0.15});

    document.querySelectorAll(".about-card,.achievement-card,.match-card,.match-card-small").forEach((el) => {
        el.classList.add("hidden");
        observer.observe(el);
    });
});
