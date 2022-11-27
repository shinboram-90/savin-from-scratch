function Translate() {
    //initialization
    this.init = (attribute, lng) => {
        this.attribute = attribute;
        this.lng = lng;
    };
    //translate
    this.process = () => {
        _self = this;
        const xhr = new XMLHttpRequest();
        //load content data
        xhr.open("GET", "lng/" + this.lng + ".json", false);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200 || xhr.status == 0) {
                    const LngObject = JSON.parse(xhr.responseText);

                    const allDom = document.getElementsByTagName("*");
                    for (let i = 0; i < allDom.length; i++) {
                        const elem = allDom[i];
                        const key = elem.getAttribute(_self.attribute);

                        if (key !== null) {
                            elem.innerHTML = LngObject[key];

                            // Some texts are available in one language only
                            if (LngObject[key] === undefined) {
                                elem.innerHTML = "";
                            }
                        }
                    }
                }
            }
        };
        xhr.send();
    };
}
