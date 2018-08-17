window.onload = function () {
  Particles.init({
    selector: '.background-particles',
    color: ['#DA0463', '#404B69', '#DBEDF3'],
    connectParticles: true,
    maxParticles: 150,
    sizeVariations: 2,
    speed: 0.5,
    minDistance: 150
  });
};
