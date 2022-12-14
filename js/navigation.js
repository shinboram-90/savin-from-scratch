const state = {
    count: 0,
};

const icons = document.querySelectorAll(".fa-chevron-right");
const navWrapper = document.querySelector("#wrapper-navbar");
const navbar = document.getElementsByClassName("nav__container");
const toggle = document.getElementsByClassName("show-nav");
const toggleSubMenu = document.getElementsByClassName("show-menu");

const burger = document.getElementsByClassName("burger");

const menuHasChidren = document.querySelectorAll(".menu-item-has-children");
const menuItems = document.querySelectorAll(".ui-menu-item-wrapper");

function incrementCounter() {
    let newCount = state.count + 1;
    state.count = newCount;
}
function decrementCounter() {
    let newCount = 0;
    state.count = newCount;
}

function switchWhite(items) {
    items.forEach((item) => {
        item.style.color = "white";
    });
}
function switchBlack(items) {
    items.forEach((item) => {
        item.style.color = "#070707";
    });
}

function toggleMenu() {
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
}

function toggleSubmenu() {
    if (window.innerWidth < 1025) {
        menuHasChidren.forEach((parent) => {
            parent.addEventListener("click", () => {
                const chevron = parent.firstElementChild;

                parent.lastElementChild.classList.toggle("show-menu");
                // if (toggleSubMenu[0]) {
                //     chevron.lastElementChild.style.transform = "rotate(90deg)";
                // } else {
                //     chevron.lastElementChild.style.transform = "rotate(0deg)";
                // }
            });
        });
    }
}

function resize() {
    if (document.clientWidth >= 1025) {
        console.log(document.clientWidth);
        if (window.scrollY <= 50) {
            switchWhite(menuItems);
            switchWhite(icons);
        }
        navWrapper.classList.remove("show-nav");

        // reset counter to zero to avoid scroll when changing screen size whilst nav is open
        decrementCounter();
        document.body.style.overflow = "auto";
    } else {
        if (toggle[0]) {
            document.body.style.overflow = "hidden";
        }

        switchBlack(menuItems);
        switchBlack(icons);
    }
}

window.addEventListener("resize", resize);

function scroll() {
    window.addEventListener("scroll", () => {
        if (navbar[0]) {
            if (window.scrollY > 50) {
                navWrapper.style.backgroundColor = "white";
                switchBlack(menuItems);
                switchBlack(icons);
            } else {
                navWrapper.style.backgroundColor = "transparent";
                if (window.innerWidth >= 1025) {
                    switchWhite(menuItems);
                    switchWhite(icons);
                }
            }
        }
    });
}

toggleMenu();
toggleSubmenu();
resize();
scroll();
