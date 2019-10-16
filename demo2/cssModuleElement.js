import sheet from "./linkTest.css";

class CSSModuleTestElement extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: "closed"});
        this.shadow.adoptedStyleSheets = [sheet];

        this.shadow.innerHTML = `
        <div class="outer-container">
            <div class="text-container">This text should be styled</div>
            <div class="cat-container"></div>
        </div>
        `;  
    }
}
export {CSSModuleTestElement};