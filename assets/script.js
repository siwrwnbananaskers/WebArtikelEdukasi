document.addEventListener("DOMContentLoaded", function () {
    // Animasi hover untuk tombol
    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("mouseover", function () {
            this.style.opacity = "0.8";
        });
        button.addEventListener("mouseout", function () {
            this.style.opacity = "1";
        });
    });

    // Pencarian Artikel
    const searchInput = document.getElementById("search-bar");
    const searchButton = document.getElementById("search-btn");
    const articles = document.querySelectorAll("#artikel-container .artikel-card");

    function searchArticles() {
        let keyword = searchInput.value.toLowerCase();

        articles.forEach(article => {
            let title = article.querySelector(".artikel-content h2").textContent.toLowerCase();
            article.style.display = title.includes(keyword) ? "block" : "none";
        });
    }

    // Event pencarian saat tombol "Cari" ditekan
    if (searchButton && searchInput) {
        searchButton.addEventListener("click", searchArticles);
        searchInput.addEventListener("input", searchArticles);
    }

    // 🔹 Pencarian Video di Halaman Video
    const videoSearchInput = document.getElementById("video-search-bar");
    const videoCards = document.querySelectorAll(".video-card");

    function searchVideos() {
        let keyword = videoSearchInput.value.toLowerCase();

        videoCards.forEach(video => {
            let title = video.querySelector(".video-content h2").textContent.toLowerCase();
            video.style.display = title.includes(keyword) ? "block" : "none";
        });
    }

    if (videoSearchInput) {
        videoSearchInput.addEventListener("input", searchVideos);
    }

    // 🔹 Efek Hover pada Card Video
    videoCards.forEach(video => {
        video.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.05)";
            this.style.transition = "0.3s";
        });
        video.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
        });
    });
});

// Menandai halaman aktif berdasarkan URL
const currentUrl = window.location.pathname.split("/").pop();
const links = document.querySelectorAll(".nav-link");

links.forEach(link => {
    link.classList.add("hover");
    if (link.getAttribute("href") === currentUrl) {
        link.classList.add("active");
    }
});

// Efek animasi muncul saat scroll
function revealElements() {
    const elements = document.querySelectorAll('.author-profile, .vision-mission');
    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (position < windowHeight - 50) {
            el.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", revealElements);
window.addEventListener("load", revealElements);

