import DOMmanager from "./DOMabstraction/DOMmanager.js";
import toggleMobileMenu from "./functions/navbar-responsive.js";

// QUERY SELECTOR
const DOM = new DOMmanager
// const newTitle = "Hola mundo!"
// DOM.changeContent('#title', newTitle)

// FUNCTION
const DIV0 = DOM.createElement('div', {textContent:"BASE"})
const DIV1 = DOM.createElement('div', {textContent:"1"})
const DIV2 = DOM.createElement('div', {textContent:"2"})
const DIV3 = DOM.createElement('div', {textContent:"3"})

DOM.append(document.body, [DIV0])
DOM.append(DIV0, [DIV1, DIV2, DIV3])

toggleMobileMenu()

// EVENTLISTENERS

// FUNCTION EXECUTION