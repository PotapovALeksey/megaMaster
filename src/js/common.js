$(document).ready(function() {
  //Прокрутка к якорям
  //Наша философия
  $("#button").click(function() {
    var top = $("#form").offset().top;
    $("html,body").animate({ scrollTop: top }, 3000);
  });

  $(".owl-carousel").owlCarousel({
    items: 4,
    singleItem: true,
    pagination: true,
    nav: false,
    margin: 20,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,

        lazyLoad: true
      },
      768: {
        items: 2,

        lazyLoad: true
      },
      1000: {
        items: 3,

        lazyLoad: true
      }
    }
  });

  // Ограничение на срабатывание фукнции по событию
  const throttle = (func, limit) => {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  };

  // Липкое меню
  const nav = document.querySelector(".menu");
  const navCoords = nav.getBoundingClientRect();

  window.addEventListener("scroll", function() {
    if (pageYOffset >= navCoords.top) {
      document.body.style.paddingTop = nav.offsetHeight + "px";
      nav.classList.add("nav-fixed");
    } else {
      document.body.style.paddingTop = "";
      nav.classList.remove("nav-fixed");
    }
  });
});

const burger = document.querySelector(".js-menu-button");
const menu = document.querySelector(".popup-wrap");

burger.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (menu.classList.contains("show") && !menu.classList.contains("hide")) {
    menu.classList.add("hide");
    var cb = function () {
      menu.classList.remove("show");
      menu.classList.remove("hide");
      menu.removeEventListener("transitionend", cb, false);
    };
    menu.addEventListener("transitionend", cb, false);
  } else {
    menu.classList.add("show");
    menu.classList.remove("hide");
  }
})