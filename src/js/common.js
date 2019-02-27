$(document).ready(function() {
  //Прокрутка к якорям
  //Наша философия
  // $("#button").click(function() {
  //   var top = $("#form").offset().top;
  //   $("html,body").animate({ scrollTop: top }, 3000);
  // });

  // $(".owl-carousel").owlCarousel({
  //   items: 4,
  //   singleItem: true,
  //   pagination: true,
  //   nav: false,
  //   margin: 20,
  //   responsiveClass: true,
  //   responsive: {
  //     0: {
  //       items: 1,

  //       lazyLoad: true
  //     },
  //     768: {
  //       items: 2,

  //       lazyLoad: true
  //     },
  //     1000: {
  //       items: 3,

  //       lazyLoad: true
  //     }
  //   }
  // });

  // Липкое меню
  const nav = document.querySelector(".js-menu");
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

  // Показать меню по нажатию на бургер
  // const buttonBurger = document.querySelector(".js-menu-button");
  // const menu = document.querySelector(".popup-menu-wrap");
  // const closeBurger = document.querySelector(".js-popup-close");

  // const showBurgerMenu = () => {
  //   menu.style.opacity = "1";
  //   menu.style.zIndex = "999";
  // };

  // const closeBurgerMenu = () => {
  //   menu.style.opacity = "0";
  //   menu.style.zIndex = "-1";
  // };

  // buttonBurger.addEventListener("click", showBurgerMenu);
  // closeBurger.addEventListener("click", closeBurgerMenu);
  // window.addEventListener("keydown", () => {
  //   if (event.code === "Escape") closeBurgerMenu();
  // });

  // open submenu in burger menu
  const popupLink = [...document.querySelectorAll(".js-popup-link")];

  // const toggleMenu = () => {
  //   const parrentItem = event.target.closest(".popup-item");
  //   const submenu = parrentItem.querySelector(".js-submenu");

  //   if (submenu.style.display === "block") {
  //     submenu.style.display = "none";
  //   } else {
  //     submenu.style.display = "block";
  //   }
  // };
  $('.menu-button').click(function() {
    $('.popup-menu-wrap').slideToggle();
  });
  $('.popup-close').click(function(){
    $('.popup-menu-wrap').slideToggle();
  })
  $('.popup-item').click(function() {
    $(this).addClass('submenu-visible').siblings().removeClass('submenu-visible');
    $('.submenu-visible .submenu').slideToggle('slow');
  });

  // add event listener submenu links

  // popupLink.forEach(el => el.addEventListener("click", toggleMenu));
});
