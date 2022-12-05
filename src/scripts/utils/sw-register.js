import * as WorkboxWindow from 'workbox-window';

const swRegister = () => {
  if ('serviceWorker' in navigator) {
    const wb = new WorkboxWindow.Workbox('./sw.js');

    wb.addEventListener('activated', (event) => {
      if (!event.isUpdate) {
        console.log('Service worker activated');
      }
    });
    wb.register();
  }
};

export default swRegister;
