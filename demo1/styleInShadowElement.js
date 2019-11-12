class StyleTestElement extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: "closed"});

        this.shadow.innerHTML =
            `<style>
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
            </style><div class="outer-container text-container">This text should be styled</div>`;
    }
}
export {StyleTestElement};
