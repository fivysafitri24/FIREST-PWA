import 'regenerator-runtime';
// css
import '../styles/normalize.css';
import '../styles/root.css';
import '../styles/navbar.css';
import '../styles/hero.css';
import '../styles/main.css';
import '../styles/responsive.css';
import '../styles/spinner.css';
import '../styles/resto-detail.css';
import '../styles/resto-fav.css';
import '../styles/footer.css';
// js
import App from './view/app';
import swRegister from './utils/sw-register';
// component
import './components/hero';
import './components/custom-footer';

// init App
const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
  document.querySelector('.container').scrollIntoView();
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
