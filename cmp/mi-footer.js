class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `&copy; 2021
      María Fernanda López Rodríguez.`;
  }
}
customElements.define(
  "mi-footer", MiFooter);
