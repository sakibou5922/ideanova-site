/* Warm the two unique corporate hero images after the current page finishes loading. */
(function () {
  if (location.pathname.includes('/cosmetics')) return;

  function preloadRouteImages() {
    var width = window.innerWidth;
    var dpr = window.devicePixelRatio || 1;
    var cityWidth = (width <= 1000 ? width : width * .66) * dpr;
    var sceneWidth = (width <= 1000 ? width : width * .74) * dpr;
    var files = [
      cityWidth <= 800 ? 'reference-city-800.webp' : 'reference-city.webp',
      sceneWidth <= 800 ? 'business/scene-800.webp' : 'business/scene.webp'
    ];

    files.forEach(function (file) {
      var hint = document.createElement('link');
      hint.rel = 'prefetch';
      hint.as = 'image';
      hint.href = new URL('./images/' + file, document.baseURI).href;
      document.head.appendChild(hint);
    });
  }

  if (document.readyState === 'complete') preloadRouteImages();
  else window.addEventListener('load', preloadRouteImages, { once: true });
})();
