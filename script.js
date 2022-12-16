const PreviewCard = {
  props: {
    place: {
      type: Object,
      required: true,
    },
  },
  template: `
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-4">
          <img 
            :src="place.image" 
            class="card__image img-fluid rounded-start" 
            alt="..." />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ place.title }}</h5>
            <p class="card-text">
                {{ place.description }}
            </p>

            <a href='PreviewCard.html' class="btn btn-success">Посмотреть</a>
          </div>
        </div>
      </div>
    </div>
  `,
};

const SupportBubble = {
  data() {
    return {
      isMini: true,
    };
  },
  template: `
     <div class="support-bubble" :class="{ 'support-bubble--mini': isMini }">
      <div class="support-bubble__header">
        Полезные ресурсы

        <button class="support-bubble__toggle" @click="isMini = !isMini">
          {{ isMini ? '△' : '▽' }}
        </button>
      </div>
      <div class="support-bubble__body">
        <div class="support-bubble__section">
          <div class="support-bubble__section-title">Заводы:</div>
          <div class="support-bubble__section-links">
            <a href="">Амурский ГХК</a>
            <a href="">Амурский ГПЗ</a>
          </div>
        </div>

        <div class="support-bubble__section">
          <div class="support-bubble__section-title">Кинотеатры:</div>
          <div class="support-bubble__section-links">
            <a href="">Амурский ГХК</a>
            <a href="">Амурский ГПЗ</a>
          </div>
        </div>
      </div>
    </div>
  `,
};

Vue.component("preview-card", PreviewCard);
Vue.component("support-bubble", SupportBubble);

new Vue({
  el: "#app",
  data() {
    return {
      places: [
        {
          title: "Амурлаг",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipNJGhi5azvn1rLyltliJ2GBwxCcYhy3NfGXzy9-=s680-w680-h510",
          description:
            "Амурлаг амурлаг амурлаг амурлаг амурлаг амурлаг амурлаг",
        },
        {
          title: "Амурлаг",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipNJGhi5azvn1rLyltliJ2GBwxCcYhy3NfGXzy9-=s680-w680-h510",
          description:
            "Амурлаг амурлаг амурлаг амурлаг амурлаг амурлаг амурлаг",
        },
        {
          title: "Амурлаг",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipNJGhi5azvn1rLyltliJ2GBwxCcYhy3NfGXzy9-=s680-w680-h510",
          description:
            "Амурлаг амурлаг амурлаг амурлаг амурлаг амурлаг амурлаг",
        },
        {
          title: "Амурлаг",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipNJGhi5azvn1rLyltliJ2GBwxCcYhy3NfGXzy9-=s680-w680-h510",
          description:
            "Амурлаг амурлаг амурлаг амурлаг амурлаг амурлаг амурлаг",
        },
      ],

      imagesInSwiper: [
        "https://lh3.googleusercontent.com/p/AF1QipNJGhi5azvn1rLyltliJ2GBwxCcYhy3NfGXzy9-=s680-w680-h510",
        "https://lh3.googleusercontent.com/p/AF1QipNJGhi5azvn1rLyltliJ2GBwxCcYhy3NfGXzy9-=s680-w680-h510",
        "https://lh3.googleusercontent.com/p/AF1QipNJGhi5azvn1rLyltliJ2GBwxCcYhy3NfGXzy9-=s680-w680-h510",
        "https://lh3.googleusercontent.com/p/AF1QipNJGhi5azvn1rLyltliJ2GBwxCcYhy3NfGXzy9-=s680-w680-h510",
        "https://lh3.googleusercontent.com/p/AF1QipNJGhi5azvn1rLyltliJ2GBwxCcYhy3NfGXzy9-=s680-w680-h510",
        "https://lh3.googleusercontent.com/p/AF1QipNJGhi5azvn1rLyltliJ2GBwxCcYhy3NfGXzy9-=s680-w680-h510",
        "https://lh3.googleusercontent.com/p/AF1QipNJGhi5azvn1rLyltliJ2GBwxCcYhy3NfGXzy9-=s680-w680-h510",
      ],
    };
  },
});

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
