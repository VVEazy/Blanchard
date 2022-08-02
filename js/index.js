// YANDEX MAP

ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map(
    "map",
    {
      center: [55.75846806898367, 37.60108849999989],
      zoom: 14,
      controls: [],
    },
    {
      suppressMapOpenBlock: true,
    }
  );

  var myPlacemark = new ymaps.Placemark(
    [55.75846806898367, 37.60108849999989],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "img/location.svg",
      iconImageSize: [30, 42],
      iconImageOffset: [-3, -42],
    }
  );
  myMap.geoObjects.add(myPlacemark);
}

// SWIPER

// document.addEventListener("DOMContentLoaded", function () {
//   const swiper = new Swiper(".swiper-container", {
//     slidesPerView: 1,
//     loop: true,
//     // пагинация
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     // навигация
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    loop: true,
    // пагинация
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // навигация
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

document.querySelectorAll(".tabs-nav__btn").forEach(function (tabsBtn) {
  tabsBtn.addEventListener("click", function (e) {
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll(".tabs-nav__btn").forEach(function (btn) {
      btn.classList.remove("tabs-nav__btn--active");
    });
    e.currentTarget.classList.add("tabs-nav__btn--active");
    document.querySelectorAll(".tabs-item").forEach(function (tabsBtn) {
      tabsBtn.classList.remove("tabs-item--active");
    });
    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add("tabs-item--active");
  });
});

$(".accordion").accordion({
  heightStyle: "content",
});

// document
//   .querySelector(".header__burger-js")
//   .addEventListener("click", function (e) {
//     console.log(this);
//     this.classList.toggle("burger-active");

//     document
//       .querySelector(".header__nav")
//       .classList.toggle("header__nav-active");
//   });

// document
//   .querySelector(".search__btn_lupa-js")
//   .addEventListener("click", function (e) {
//     this.classList.add("active");

//     document.querySelector(".search__wrapper").classList.add("active");
//   });

// document
//   .querySelector(".search__btn_close-js")
//   .addEventListener("click", function (e) {
//     document.querySelector(".search__btn_lupa-js").classList.remove("active");

//     document.querySelector(".search__wrapper").classList.remove("active");
//   });
