class LinkTestElement extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: "closed"});

        this.shadow.innerHTML = `
        <link rel="stylesheet" href="linkTest.css" />
        <div class="outer-container">
            <div class="text-container">This text should be styled</div>
            <div class="cat-container"></div>
        </div>
        `;  
    }
}
export {LinkTestElement};
