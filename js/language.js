const translate = (lng, attribute) => {
    const translate = new Translate();
    translate.init(attribute, lng);
    translate.process();
};

document.addEventListener("DOMContentLoaded", () => {
    // Get the id of HTML element (English or French) with attr lng-tag, save in localStorage
    const currentLng = localStorage.getItem("language");
    const enLng = document.getElementById("enTranslator");
    const frLng = document.getElementById("frTranslator");
    console.log(`initial language: ${currentLng}`);

    if (currentLng === "en") {
        translate("en", "lng-tag");
        enLng.style.display = "none";
    } else {
        translate("fr", "lng-tag");
        frLng.style.display = "none";
    }

    enLng.addEventListener("click", () => {
        enLng.style.display = "none";
        frLng.style.display = "flex";
        localStorage.setItem("language", "en");
        translate("en", "lng-tag");
    });

    frLng.addEventListener("click", () => {
        frLng.style.display = "none";
        enLng.style.display = "flex";
        localStorage.setItem("language", "fr");
        translate("fr", "lng-tag");
    });
});
