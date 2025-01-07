// Sticky Navbar
let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
    document.getElementById('scroll-top').classList.toggle('show', window.scrollY > 200);
});

menu.onclick = () => {
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    navbar.classList.remove('active');
}

// Dark Mode
let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () => {
    if (darkmode.classList.contains('bx-moon')) {
        darkmode.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('active');
    } else {
        darkmode.classList.replace('bx-sun', 'bx-moon');
        document.body.classList.remove('active');
    }
}

// Initialize AOS
AOS.init({
    duration: 1200,
});

// Bottom to Top Button
const scrollTopButton = document.getElementById('scroll-top');
scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Custom Cursor
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});




// for internship read more button 

function toggleDetails(internshipId) {
    const details = document.getElementById(`details-${internshipId}`);
    const button = document.querySelector(`#details-${internshipId}`).previousElementSibling;
    
    if (details.style.display === "block") {
        details.style.display = "none";
        button.textContent = "Read More";
    } else {
        details.style.display = "block";
        button.textContent = "Read Less";
    }
}


