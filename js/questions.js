const questionDiv = document.getElementsByClassName("section-faq__container");
const questions = document.querySelectorAll(".section-faq__container--question-box");
const btnMore = document.getElementsByClassName("btn-see-more");
const btnLess = document.getElementsByClassName("btn-see-less");

function toggleQuestion() {
    if (btnMore[0]) {
        btnMore[0].addEventListener("click", () => {
            // incrementCounter();
            remove();
            questionDiv[0].classList.toggle("show-questions");
            console.log(questionDiv[0]);
            // btnMore[0].style.display = "none"
            // btnMore[0].style.display = "none"

            // if (state.count % 2 == 0) {
            //   document.body.style.overflow = 'auto';
            // } else {
            //   document.body.style.overflow = 'hidden';
            // }
        });
    } else {
        return;
    }
}

function remove() {
    btnLess[0].addEventListener("click", () => {
        // incrementCounter();
        questionDiv[0].classList.remove("show-questions");
        // btnMore[0].style.display = "none"
        // btnMore[0].style.display = "none"

        // if (state.count % 2 == 0) {
        //   document.body.style.overflow = 'auto';
        // } else {
        //   document.body.style.overflow = 'hidden';
        // }
    });
}
function toggleContent() {
    questions.forEach((t) => {
        t.addEventListener("click", (e) => {
            questions.forEach((e) => {
                e !== t || e.classList.contains("reveal-content") ? e.classList.remove("reveal-content") : e.classList.add("reveal-content");
            });
        });
    });
}

toggleQuestion();
toggleContent();
