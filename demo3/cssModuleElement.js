import sheet from "./styles.css" assert { type: "css" };

class CSSModuleTestElement extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: "closed"});
        this.shadow.adoptedStyleSheets = [sheet];

        this.shadow.innerHTML = `
        <div class="outer-container">
            <div class="text-container">This text should be styled</div>
        </div>
        `;  
    }
}
export {CSSModuleTestElement};