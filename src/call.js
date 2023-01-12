export default function createEl(el) {
  const element = document.createElement(el);
  element.textContent = 'Hello my dear friend';
  document.body.appendChild(element);
}
