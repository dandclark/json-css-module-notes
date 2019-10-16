import displayTextConfig from "./displayText.json";

class JSONModuleTestElement extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: "closed"});
        
        let sheet = new CSSStyleSheet();
        sheet.replaceSync(`
        .outer-container {
            display:inline-block;
            margin: 0.2em;
            border: 2px solid red;
        }
        
        .text-container {
            padding-right: 0.3em;
            font-size: 2em;
            font-style: italic;
            font-family: 'Impact';
            background: linear-gradient(to right, orange , yellow, green, cyan, blue, violet);
            background-clip: text;
            -webkit-background-clip: text;
            text-fill-color: transparent;
            -webkit-text-fill-color: transparent;
        }
        `);
        
        this.shadow.adoptedStyleSheets = [sheet];

        let displayText = displayTextConfig.displayText;

        this.shadow.innerHTML = `
        <div class="outer-container">
            <div class="text-container">${displayText}</div>
        </div>
        `;
    }
}

export {JSONModuleTestElement};
