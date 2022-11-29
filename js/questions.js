const questionDiv = document.getElementsByClassName("section-faq__container");
const questions = document.querySelectorAll(".questions-toggle");
const btnMore = document.getElementsByClassName("btn-see-more");
const btnLess = document.getElementsByClassName("btn-see-less");

// .section-faq__container--question-box
function toggleQuestion() {
    if (btnMore[0]) {
        btnMore[0].addEventListener("click", () => {
            remove();
            questionDiv[0].classList.toggle("show-questions");
            console.log(questionDiv[0]);
        });
    // } else {
    //     return;
    }
}

function remove() {
    btnLess[0].addEventListener("click", () => {
        questionDiv[0].classList.remove("show-questions");
    });
}
function toggleContent() {
    questions.forEach((t) => {
        t.addEventListener("click", (e) => {
            questions.forEach((e) => {
                e !== t || e.classList.contains("reveal-content") ? e.classList.remove("reveal-content") : e.classList.add("reveal-content");
                console.log(e)
            });
        });
    });
}

toggleQuestion();
toggleContent();
