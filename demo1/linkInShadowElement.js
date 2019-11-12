class LinkTestElement extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: "closed"});

        this.shadow.innerHTML =
            `<link rel="stylesheet" href="styles.css" /><div class="outer-container text-container">This text should be styled</div>`;
    }
}
export {LinkTestElement};
