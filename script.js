const PreviewCard = {
  props: {
    place: {
      type: Object,
      required: true,
    },
    isGos: {
      type: Boolean,
      default: false,
    },
    isDk: {
      type: Boolean,
      default: false,
    },
  },
  template: `
    <div class="card mb-3">
      <div class="row g-0">
<!--        <div -->
<!--          class="recommended" -->
<!--          v-if="isGos" -->
<!--          :class="{ 'col-md-12': isGos, 'col-md-4': !isGos }"-->
<!--        >-->
<!--          Рекомендуем-->
<!--        </div>-->
        <div class="col-md-4">
          <img 
            :src="place.image" 
            class="card__image img-fluid rounded-start" 
            alt="..." />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title" :class="{flexible: isGos}">
              {{ place.title }}
              
              <span 
                v-if="isGos"
                class="preview-card__badge"
              >
                Рекомендуем
              </span>
              
              <span class="float-end" v-if="place.isNeedPay">
                <img src="https://www.freepnglogos.com/uploads/star-png/star-vector-png-transparent-image-pngpix-21.png" alt="" width="24px" height="24px" />
              </span>
            </h5>
            
            <p class="card-text">
              {{ place.description }}
            </p>

            <a v-if="isDk" href="./PreviewCardDk.html" class="btn btn-success">Посмотреть</a>
            <a v-else href="./PreviewCard.html" class="btn btn-success">Посмотреть</a>
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
     <div @click="isMini = !isMini" class="support-bubble" :class="{ 'support-bubble--mini': isMini }">
      <div class="support-bubble__header">
        Полезные ресурсы
      </div>
      <div class="support-bubble__body">
        <div class="support-bubble__section">
          <div class="support-bubble__section-title">Градообразующие предприятия:</div>
          <div class="support-bubble__section-links">
            <a href="">Амурский ГХК</a>
            <a href="">Амурский ГПЗ</a>
          </div>
        </div>
      </div>
    </div>
  `,
};

const InfoButton = {
  props: {
    text: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      isShow: false,
    };
  },

  template: `
    <div 
      @mouseover="isShow = true" 
      @mouseleave="isShow = false" 
      class="header__info"
    >
      <img
          width="18px"
          height="18px"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/480px-Infobox_info_icon.svg.png"
          alt=""
      />
      
      <div v-if="isShow" class="header__info-content">{{ text }}</div>
    </div>
  `,
};

const UsefulBlock = {
  props: {
    title: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  template: `
    <div class="useful-block">
      <img
        class="useful-block__image"
        :src="image"
        width="18px"
        height="18px"
        alt=""
      />
  
      <div class="useful-block__title">
        {{ title }}
  
        <div class="useful-block__link">
          <a
            :href="link"
            target="_blank"
            class="useful-block__link"
          >
            Узнать подробнее
          </a>
        </div>
      </div>
    </div>
  `,
};

Vue.component("preview-card", PreviewCard);
Vue.component("support-bubble", SupportBubble);
Vue.component("info-button", InfoButton);
Vue.component("useful", UsefulBlock);

new Vue({
  el: "#app",
  data() {
    return {
      places: [
        {
          title: "АГХК",
          image: "./img/aghk1.jpg",
          description: "Одно из главных градообразующих предприятий",
          isGos: false,
          isDk: false,
          type: "factory",
          isNeedPay: true,
        },
        {
          title: "ДК ЖД",
          image: "./img/dk.jpg",
          description: `ДК ЖД - значимое место для жителей города Свободный.`,
          isGos: false,
          isDk: true,
          type: "culture",
        },
        {
          title: "Госуслуги",
          image:
            "https://gazetavyborg.ru/userfls/news/news_cover_slider/5/47694_gosuslugi-predostavlyayut-vo.jpg",
          description: "Универсальный рекомендательный портал",
          isGos: true,
          isDk: false,
        },
        {
          title: "ГПЗ",
          image: "./img/aghk2.jpg",
          description: "Одно из главных градообразующих предприятий",
          isGos: false,
          isDk: false,
          type: "factory",
        },
      ],

      placesInfo: [
        {
          title: "АГХК",
          image: "./img/aghk1.jpg",
          description: "Одно из главных градообразующих предприятий",
          isGos: false,
          isDk: false,
          type: "factory",
          isNeedPay: true,
        },
        {
          title: "ДК ЖД",
          image: "./img/dk.jpg",
          description: `ДК ЖД - значимое место для жителей города Свободный.`,
          isGos: false,
          isDk: true,
          type: "culture",
        },
        {
          title: "Госуслуги",
          image:
            "https://gazetavyborg.ru/userfls/news/news_cover_slider/5/47694_gosuslugi-predostavlyayut-vo.jpg",
          description: "Универсальный рекомендательный портал",
          isGos: true,
          isDk: false,
        },
        {
          title: "ГПЗ",
          image: "./img/aghk2.jpg",
          description: "Одно из главных градообразующих предприятий",
          isGos: false,
          isDk: false,
          type: "factory",
        },
      ],

      imagesInSwiper: [
        "./img/dk-poster.jpg",
        "./img/kino-poster.jpg",
        "./img/memory-poster.jpg",
        "./img/pam-poster.jpg",
        "./img/house-poster.jpg",
        "./img/house2-poster.jpg",
        "./img/fok-poster.jpg",
        "./img/kino2-poster.jpg",
        "./img/zhd-poster.jpg",
      ],

      showDropdown: false,
    };
  },

  methods: {
    sort(tag) {
      if (tag === "all") {
        this.places = this.placesInfo;

        return;
      }

      this.places = this.placesInfo.filter((place) => place.type === tag);
    },
  },
});

const swiper = new Swiper(".swiper-main", {
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

const swiperPlace = new Swiper(".swiper-places", {
  direction: "horizontal",
  slidesPerView: 1.6,
});

timer = setInterval(() => {
  swiper.translateTo(swiper.translate - 10 || 0, 700);
}, 500);
