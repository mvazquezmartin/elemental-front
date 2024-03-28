export function append (parent, childs = []) {
  childs.forEach((child) => {
    parent.appendChild(child);
  });
}