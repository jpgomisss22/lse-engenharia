document.addEventListener("DOMContentLoaded", () => {

  //Animações de seções
  const animatedElements = document.querySelectorAll("[data-animate]");

  const sectionObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target); // anima só uma vez
        }
      });
    },
    { threshold: 0.15 }
  );

  animatedElements.forEach(el => sectionObserver.observe(el));


  // Imaggens Carrosel
  const images = document.querySelectorAll(".about__image");
  let index = 0;

  if (images.length > 0) {
    setInterval(() => {
      images[index].classList.remove("is-active");
      index = (index + 1) % images.length;
      images[index].classList.add("is-active");
    }, 4000);
  }


  //Cards de serviço
  const serviceCards = document.querySelectorAll(".service__card");

  const cardObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  serviceCards.forEach(card => cardObserver.observe(card));

});