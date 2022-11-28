const state = {
    count: 0,
};

const navbar = document.getElementsByClassName("nav__container");
const toggle = document.getElementsByClassName("show-nav");

const burger = document.getElementsByClassName("burger");
const navbarLinks = document.querySelectorAll(".nav__container a");

const menuHasChidren = document.querySelectorAll(".menu-item-has-children");
const subMenu = document.getElementsByClassName("sub-menu");

function incrementCounter() {
    let newCount = state.count + 1;
    state.count = newCount;
}

function toggleMenu() {
    if (window.pageYOffset > 100) {
        navbar[0].style.backgroundColor = "white";
    }

    if (burger[0]) {
        burger[0].addEventListener("click", () => {
            incrementCounter();
            navbar[0].classList.toggle("show-nav");

            if (state.count % 2 == 0) {
                document.body.style.overflow = "auto";
            } else {
                document.body.style.overflow = "hidden";
            }
        });
    }

    const resize = () => {
        if (window.innerWidth >= 1025) {
            document.body.style.overflow = "auto";
        } else if (toggle[0]) {
            document.body.style.overflow = "hidden";
        }
        // console.log('width: ', window.innerWidth, 'px');
    };

    window.onresize = resize;

    menuHasChidren.forEach((link) => {
        link.addEventListener("click", () => {
            subMenu[0].classList.toggle("show-menu");
        });
    });
}

function scroll() {
    window.onscroll = () => {
        if (navbar[0]) {
            if (window.scrollY > 100) {
                navbar[0].style.backgroundColor = "white";
                navbar[0].style.top = 0;
            } else {
                navbar[0].style.backgroundColor = "transparent";
            }
        }
    };
}

scroll();
toggleMenu();
