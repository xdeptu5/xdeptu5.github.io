if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('https://xdeptu5.github.io/service-worker.js')
      .then((registration) => {
        console.log('Service Worker зарегистрирован:', registration);
      })
      .catch((error) => {
        console.log('Ошибка при регистрации Service Worker:', error);
      });
  });
}
