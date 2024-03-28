export default class DOMmanager {
  constructor() {}

  getElement(id) {
    return document.querySelector(id);
  }

  changeContent(id, txt) {
    const element = this.getElement(id);
    return (element.textContent = txt);
  }

  createElement(tagName, options = {}) {
    const { attributes = {}, classes = [], textContent = '' } = options;
    const element = document.createElement(tagName);

    // Asignar atributos al elemento
    for (const key in attributes) {
      element.setAttribute(key, attributes[key]);
    }

    // Agregar clases al elemento
    if (classes.length != 0) element.classList.add(...classes);

    // Establecer texto interno del elemento
    element.textContent = textContent;

    return element;
  }

  addClass(element, className) {
    element.classList.add(className);
  }

  removeClass(element, className) {
    element.classList.remove(className);
  }

  getAllElementsByClass(className) {
    return document.querySelectorAll(`.${className}`);
  }

  cloneElement(element) {
    return element.cloneNode(true);
  }

  removeElement(element) {
    if (element && element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }

  getAttribute(element, attributeName) {
    return element.getAttribute(attributeName);
  }

  append(parent, childs = []) {
    childs.forEach((child) => {
      parent.appendChild(child);
    });
  }
}
