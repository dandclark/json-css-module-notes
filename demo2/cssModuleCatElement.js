import sheet from "./big_styles.css" assert { type: "css" };

class CSSModuleCatElement extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: "closed"});
        this.shadow.adoptedStyleSheets = [sheet];

        this.shadow.innerHTML = `
        <div class="cat10"></div>
        `;
    }
}
export {CSSModuleCatElement};
