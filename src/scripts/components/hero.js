class HeroContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="hero" style="background-image: linear-gradient(rgba(1, 1, 6, .8), rgba(1, 1, 6, .8)), url('images/hero-image_2.jpg'); background-repeat: no-repeat; background-size: auto;">
    <div class="inner-hero">
        <h1 class="title-hero">FIREST APPS</h1>
        <p class="subtitle-hero">Find a comfortable resto to healing or to get together with loved people</p>
    </div>
      `;
  }
}

customElements.define('hero-content', HeroContent);
