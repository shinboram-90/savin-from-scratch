const state = {
    count: 0,
};

const icons = document.querySelectorAll(".fa-chevron-right");
const navWrapper = document.querySelector("#wrapper-navbar");
const navbar = document.getElementsByClassName("nav__container");
const commonNavbar = document.getElementsByClassName("common-nav");
const largeScreen = document.getElementsByClassName("large-screen");
const toggle = document.getElementsByClassName("show-nav");
const toggleSubMenu = document.getElementsByClassName("show-menu");
const burger = document.getElementsByClassName("burger");
const bar = document.getElementsByClassName("bar");
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
                parent.lastElementChild.classList.toggle("show-menu");
            });
        });
    }
}

function resize() {
    if (window.innerWidth < 1025) {
        if (toggle[0]) {
            document.body.style.overflow = "hidden";
        }
        switchBlack(menuItems);
        switchBlack(icons);
    } else {
        if (window.scrollY <= 50) {
            switchWhite(menuItems);
            switchWhite(icons);
        }
        navWrapper.classList.remove("show-nav");

        // reset counter to zero to avoid scroll when changing screen size whilst nav is open
        decrementCounter();
        document.body.style.overflow = "auto";
    }
}

window.addEventListener("resize", resize);

function scroll() {
    window.addEventListener("scroll", () => {
        if (navbar[0]) {
            if (window.scrollY < 20 && commonNavbar[0]) {
                commonNavbar[0].style.display='none';
                largeScreen[0].style.visibility='visible';
                console.log(largeScreen)
                
            } else if (commonNavbar[0]) {
            
                largeScreen[0].style.visibility='hidden';
                commonNavbar[0].style.display='flex';
            }
            if (window.scrollY > 50) {
                bar[0].style.setProperty("--barBackColor", "black");
                bar[0].style.backgroundColor = "black";
                navWrapper.style.backgroundColor = "white";

                switchBlack(menuItems);
                switchBlack(icons);
            } else {
                navWrapper.style.backgroundColor = "transparent";
                bar[0].style.setProperty("--barBackColor", "white");
                bar[0].style.backgroundColor = "white";
          
                if (window.innerWidth >= 1025) {
                    switchWhite(menuItems);
                    switchWhite(icons);
                }
            }
        }
    });
}

window.addEventListener("load", () => {
    if (commonNavbar[0]) {
        commonNavbar[0].style.display='none';
        largeScreen[0].style.visibility='visible';
    }
});

toggleMenu();
toggleSubmenu();
resize();
scroll();
