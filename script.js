const PreviewCard = {
  data: function () {
    return {
      counter: 1,
    };
  },
  template: `
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-4">
          <img 
            src="https://lh3.googleusercontent.com/p/AF1QipNJGhi5azvn1rLyltliJ2GBwxCcYhy3NfGXzy9-=s680-w680-h510" 
            class="card__image img-fluid rounded-start" 
            alt="..." />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>

            <a href='PreviewCard.html' class="btn btn-success">Посмотреть</a>
          </div>
        </div>
      </div>
    </div>
  `,
};

Vue.component("preview-card", PreviewCard);

new Vue({ el: "#app" });

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 6,
  spaceBetween: 16,
  freeMode: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    800: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1500: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 6,
      spaceBetween: 16,
    },
  },
});

timer = setInterval(() => {
  swiper.translateTo(swiper.translate - 10 || 0, 700);
}, 500);
