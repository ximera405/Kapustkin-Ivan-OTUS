import { LitElement, html, css } from "lit-element";

class MyTree extends LitElement {
  constructor() {
    super();

    this.items = { id: 1, items: [{ id: 2, items: [{ id: 3 }] }] };
  }

  static get properties() {
    return {
      items: {
        type: Object,
      },
    };
  }

  render() {
    let id = 1;
    function getLastOne(obj) {
      return getItem(obj, id);
      function getItem(o, id) {
          for(var prop in o) {
              if(typeof(o[prop]) === 'object') {
                return (
                  html`<li>${id}${getItem(o[prop], id + 1)}</li>`
                )
              } else {
                html`<li>${id}</li>`;
              }
          }
      }}
    return html`<ul>${getLastOne(this.items)}</ul>`;
  }
}

class MyLeaf extends LitElement {
  constructor() {
    super();
  }

  static get styles() {
    return css`
      p {
        font-size: 24px;
        color: red;
      }
    `;
  }

  static get properties() {
    return {
      content: { type: String },
    };
  }

  render() {
    return html` <p>Content - ${this.content}</p> `;
  }
}

customElements.define("my-leaf", MyLeaf);
customElements.define("my-tree", MyTree);