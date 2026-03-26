// const navbar = document.getElementById("navbar");

// let lastScroll = 0;

// window.addEventListener("scroll", () => {

//     const currentScroll = window.pageYOffset;

//     /*  navbar at top */
//     if (currentScroll < 50) {
//         navbar.classList.add("show");
//         return;
//     }

//     /* Activate sticky behavior after first fold */
//     if (currentScroll > window.innerHeight) {

//         if (currentScroll > lastScroll) {
//             /* Scrolling down */
//             navbar.classList.remove("show");

//         } else {
//             /* Scrolling up */
//             navbar.classList.add("show");
//         }

//     }

//     lastScroll = currentScroll;

// });

/* DROPDOWN FOR MOBILE */

const dropdown = document.querySelector(".dropdown");
const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdownMenu = document.querySelector(".dropdown-menu");

if (dropdownToggle) {
    dropdownToggle.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation(); // Prevents the click from bubbling up
        dropdownMenu.classList.toggle("active");
    });
}

// Optional: Close the menu if you click anywhere else on the screen
window.addEventListener("click", function (e) {
    if (!dropdown.contains(e.target)) {
        dropdownMenu.classList.remove("active");
    }
});


const images = [
    "pipe1.jpg",
    "pipe2.jpg",
    "pipe3.jpg",
    "pipe4.jpg",
    "pipe5.jpg"
];

let currentIndex = 0;

const mainImage = document.getElementById("mainImage");

/* Thumbnail click */

function changeImage(index) {
    currentIndex = index;
    mainImage.src = images[currentIndex];
}

/* Right arrow */

function nextImage() {

    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    mainImage.src = images[currentIndex];

}

/* Left arrow */

function prevImage() {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    mainImage.src = images[currentIndex];

}
function changeImage(element) {
    document.getElementById("mainImage").src = element.src;
}

const items = document.querySelectorAll(".accordion-item");

items.forEach(item => {
    const header = item.querySelector(".accordion-header");

    header.addEventListener("click", () => {
        const isActive = item.classList.contains("active");

        // First, remove active class from all items
        items.forEach(i => {
            i.classList.remove("active");
        });

        // If the clicked item wasn't active, make it active
        // This means clicking an active item will close it
        if (!isActive) {
            item.classList.add("active");
        }
    });
});

// carosuel section
// Carousel section
document.addEventListener("DOMContentLoaded", function () {

    const carousel = document.getElementById("carousel");
    
    // Get all previous and next buttons (both desktop and mobile)
    const prevBtns = document.querySelectorAll(".prevBtn");
    const nextBtns = document.querySelectorAll(".nextBtn");

    let scrollAmount = 320;

    // Adjust scroll amount based on screen size
    function getScrollAmount() {
        if (window.innerWidth <= 768) {
            return 280; // Scroll less on mobile
        }
        return 320; // Default for desktop
    }

    // Add click event to all next buttons
    nextBtns.forEach(btn => {
        btn.addEventListener("click", function () {
            scrollAmount = getScrollAmount();
            carousel.scrollBy({
                left: scrollAmount,
                behavior: "smooth"
            });
        });
    });

    // Add click event to all previous buttons
    prevBtns.forEach(btn => {
        btn.addEventListener("click", function () {
            scrollAmount = getScrollAmount();
            carousel.scrollBy({
                left: -scrollAmount,
                behavior: "smooth"
            });
        });
    });

    // Optional: Add touch support for mobile
    let isDragging = false;
    let startX;
    let scrollLeft;

    if (carousel) {
        carousel.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.pageX - carousel.offsetLeft;
            scrollLeft = carousel.scrollLeft;
            carousel.style.cursor = 'grabbing';
        });

        carousel.addEventListener('mouseleave', () => {
            isDragging = false;
            carousel.style.cursor = 'grab';
        });

        carousel.addEventListener('mouseup', () => {
            isDragging = false;
            carousel.style.cursor = 'grab';
        });

        carousel.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX - carousel.offsetLeft;
            const walk = (x - startX) * 2; // Scroll speed
            carousel.scrollLeft = scrollLeft - walk;
        });

        // Touch events for mobile
        carousel.addEventListener('touchstart', (e) => {
            startX = e.touches[0].pageX - carousel.offsetLeft;
            scrollLeft = carousel.scrollLeft;
        });

        carousel.addEventListener('touchmove', (e) => {
            e.preventDefault();
            const x = e.touches[0].pageX - carousel.offsetLeft;
            const walk = (x - startX) * 2;
            carousel.scrollLeft = scrollLeft - walk;
        });
    }

    
    // Update scroll amount on window resize
    window.addEventListener('resize', function() {
        scrollAmount = getScrollAmount();
    });

});

const tabs = document.querySelectorAll(".tab");
const image = document.getElementById("processImage");

const tabImages = [
    "process1.jpg",
    "process2.jpg",
    "process3.jpg",
    "process4.jpg",
    "process5.jpg",
    "process6.jpg",
    "process7.jpg",
    "process8.jpg"
];

let current = 0;

/* TAB SWITCH */

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {

        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        current = index;
        image.src = images[index];

    });
});

/* ARROWS */

document.querySelector(".right").onclick = function () {

    current++;

    if (current >= images.length) {
        current = 0;
    }

    image.src = images[current];

    tabs.forEach(t => t.classList.remove("active"));
    tabs[current].classList.add("active");

};

document.querySelector(".left").onclick = function () {

    current--;

    if (current < 0) {
        current = images.length - 1;
    }

    image.src = images[current];

    tabs.forEach(t => t.classList.remove("active"));
    tabs[current].classList.add("active");

};