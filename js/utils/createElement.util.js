function createElement(
  tagName,
  attributes = {},
  classes = [],
  textContent = ''
) {
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
