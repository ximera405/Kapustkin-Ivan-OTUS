import { LitElement, html, css } from "lit-element";

class MyTree extends LitElement {
  constructor() {
    super();
  }

  static get properties() {
    return {
      items: {
        type: Array,
      },
    };
  }

  render() {
    function getLastOne(obj) {
      return getItem(obj);
      function getItem(o) {
        if (o) {
          return html`<li class="list-item">${o[0].id}${getItem(o[0].items)}</li>`;
        }
        else return;
      }
    }
    return html`
    <style>
      .list {
        list-style: none;
        margin: 0;
        padding: 0;
        border: 1px solid black;
      }

      .list-item {
        margin-left: 15px;
        margin-top: 15px;
        border: 1px solid red;
      }
    </style>
    <ul class="list">
      ${getLastOne(this.items)}
    </ul>`;
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