// const mine = document.getElementsByClassName("section-timeline__container");
// const scrollBar = () => {
//     var winScroll = document.body.scrollTop || document.documentElement.scrollTop;

//     console.log(document.documentElement.scrollHeight)
//     console.log(document.documentElement.clientHeight)
//     var height = mine[0].offsetHeight - document.documentElement.clientHeight ;
//     var scrolled = (winScroll / height) * 100;
//     document.getElementById("myBar").style.height = scrolled + "%";
// };

// // window.onscroll = scrollBar;

// window.addEventListener("scroll", function () {
//     var position = mine[0].getBoundingClientRect();

//     // checking whether fully visible
//     if (position.top >= 0 && position.bottom <= window.innerHeight) {
//         alert("Element is fully visible in screen");
//     }

//     // checking for partial visibility
//     if (position.top < window.innerHeight && position.bottom >= 0) {
//         console.log("Element is partially visible in screen");
//         scrollBar();
//     }
// });

const progressBar = document.getElementById("myBar");
const section = document.getElementById("cd-timeline");

const scrollProgressBar = () => {
    let scrollDistance = -section.getBoundingClientRect().top + 200;
    let progressPercentage = (scrollDistance / (section.getBoundingClientRect().height - document.documentElement.clientHeight)) * 100;

    let val = Math.floor(progressPercentage);
    progressBar.style.height = val + "%";
    progressBar.style.maxHeight = "100%";

    if (val < 0) {
        progressBar.style.height = "0%";
    }
};

window.addEventListener("scroll", scrollProgressBar);
