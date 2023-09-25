


class LocalizationElement extends HTMLElement {
    constructor() { super(); }

    connectedCallback() {
        const hasKey = this.hasAttribute('key');

        if (hasKey) {
            let key = this.getAttribute('key');
            let parms = this.getAttribute('parms');
            
            fetch(`../../localizations/${language}.json`)
            .then(reponse => reponse.json())
            .then(json => {
                let text = json[key];
                
                if (text === undefined) {
                    this.innerHTML = json['undefined'];

                    throw 'Has not key in this localization json file.';
                } else {
                    // Handles parameters in the text.
                    if (!(parms === null)) {
                        parms = parms.split(',');
                        
                        for (let i = 0; i < parms.length; i++) {
                            text = text.replace(`{${i}}`, parms[i]);
                        }
                    }
                    
                    this.innerHTML = text;
                }
            });
        } else {
            throw 'Has not key attribute in this element';
        }
    }
}

customElements.define('localization-element', LocalizationElement);