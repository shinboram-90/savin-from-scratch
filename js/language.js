const enImgs = document.querySelectorAll(".english");
const frImgs = document.querySelectorAll(".french");

const translate = (lng, attribute) => {
    const translate = new Translate();
    translate.init(attribute, lng);
    translate.process();
};

function switchToEnglish() {
    document.documentElement.setAttribute("lang", "en");
    translate("en", "lng-tag");
    frImgs.forEach((img) => {
        img.style.display = "none";
    });
    enImgs.forEach((img) => {
        img.style.display = "inline-block";
    });
}

function switchToFrench() {
    document.documentElement.setAttribute("lang", "fr");
    translate("fr", "lng-tag");
    frImgs.forEach((img) => {
        img.style.display = "inline-block";
    });

    enImgs.forEach((img) => {
        img.style.display = "none";
    });
}

document.addEventListener("DOMContentLoaded", () => {
    // Get the id of HTML element (English or French) with attr lng-tag, save in localStorage
    const currentLng = localStorage.getItem("language");
    const enLng = document.getElementById("enTranslator");
    const frLng = document.getElementById("frTranslator");
    console.log(`initial language: ${currentLng}`);

    if (enLng && frLng) {
        if (currentLng === "en") {
            enLng.style.display = "none";
            switchToEnglish();
        } else {
            frLng.style.display = "none";
            switchToFrench();
        }
        
        enLng.addEventListener("click", () => {
            enLng.style.display = "none";
            frLng.style.display = "flex";
            localStorage.setItem("language", "en");
            switchToEnglish();
        });

        frLng.addEventListener("click", () => {
            frLng.style.display = "none";
            enLng.style.display = "flex";
            localStorage.setItem("language", "fr");
            switchToFrench();
        });
    } else {
        if (currentLng === "en") {
            switchToEnglish();
        } else {
            switchToFrench();
   
        }
    }
});
