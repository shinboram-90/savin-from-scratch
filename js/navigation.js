const state = {
    count: 0,
};

const navWrapper = document.querySelector("#wrapper-navbar");
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
function decrementCounter() {
    let newCount = 0;
    state.count = newCount;
}

function toggleMenu() {
    // if (window.pageYOffset > 100) {
    //     navWrapper.style.backgroundColor = "white";

    // }

    if (burger[0]) {
        burger[0].addEventListener("click", () => {
            incrementCounter();
            navWrapper.classList.toggle("show-nav");

            if (state.count % 2 !== 0) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "auto";
            }
        });
    }

    const resize = () => {
        if (window.innerWidth >= 1025) {
            navWrapper.classList.remove("show-nav");

            // reset counter to zero to avoid scroll when changing screen size whilst nav is open
            decrementCounter();
            document.body.style.overflow = "auto";
        } else if (toggle[0]) {
            document.body.style.overflow = "hidden";
        }
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
            if (window.scrollY > 50) {
                navWrapper.style.backgroundColor = "white";
            } else {
                navWrapper.style.backgroundColor = "transparent";
            }
        }
    };
}

scroll();
toggleMenu();
