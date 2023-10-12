AOS.init();
document.addEventListener("DOMContentLoaded", function () {
  const buttonCourses = document.querySelector('.button-ebooks');

  buttonCourses.addEventListener('click', function (event) {
    event.preventDefault(); // Prevenir o comportamento padrão do link

    const servicesSection = document.querySelector('.services');

    // Verificar se a seção de serviços foi encontrada
    if (servicesSection) {
      const servicesSectionOffset = servicesSection.offsetTop;
      const duration = 1000; // Duração da animação em milissegundos
      const startTime = performance.now();
      const startScrollY = window.scrollY;

      function scroll() {
        const currentTime = performance.now();
        const elapsedTime = currentTime - startTime;

        if (elapsedTime < duration) {
          const ease = easeInOut(elapsedTime / duration);
          const newY = ease * (servicesSectionOffset - startScrollY) + startScrollY;
          window.scrollTo(0, newY);
          requestAnimationFrame(scroll);
        } else {
          window.scrollTo(0, servicesSectionOffset);
        }
      }

      // Função de easing para rolagem suave
      function easeInOut(t) {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      }

      // Iniciar a animação de rolagem suave
      scroll();
    }
  });
});