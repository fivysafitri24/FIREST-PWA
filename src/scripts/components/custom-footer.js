class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
     <footer>
       <p>Copyright © 2022 - FIREST APPS</p>
     </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);
