import sheet from "./styles.css";

class CSSModuleTestElement extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: "closed"});
        this.shadow.adoptedStyleSheets = [sheet];

        this.shadow.innerHTML = 
            `<div class="outer-container text-container">This text should be styled</div>`;
    }
}
export {CSSModuleTestElement};
