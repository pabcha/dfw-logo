"use strict";
class DFWLogo extends HTMLElement {
    connectedCallback() {
        const shadow = this.attachShadow({ mode: 'open' });
        const style = document.createElement('style');
        style.textContent = `
      :host {
        font-size: 48px;
        font-weight: bold;
        color: white;
      }
      div {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `;
        const div = document.createElement('div');
        div.textContent = 'DataFlow';
        shadow.appendChild(style);
        shadow.appendChild(div);
    }
}
customElements.define('dfw-logo', DFWLogo);
