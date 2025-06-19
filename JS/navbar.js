function toggleMenu() {
    const menuLinks = document.getElementById("menu-links");
    menuLinks.classList.toggle("show");
}

fetch('navbar.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;
        const links = document.querySelectorAll('.navbar ul li a');
        links.forEach(link => {
            if (link.href === window.location.href) {
                link.classList.add('active');
            }
        });
    })
    .catch(err => console.error('Failed to load navbar:', err));

function toggleNavbar() {
    var menu = document.getElementById("menu");
    var btn = document.querySelector(".toggle-btn");

    if (window.innerWidth <= 768) {
        menu.classList.toggle("show");

        if (menu.classList.contains("show")) {
            btn.innerHTML = "✖"; 
        } else {
            btn.innerHTML = "☰"; 
        }
    }
}