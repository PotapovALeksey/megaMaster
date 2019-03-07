$(document).ready(function() {
  $(".manufacture-carousel").slick({
    slidesToShow: 6,
    slidesToScroll: 3,
    infinite: true,
    prevArrow:
      '<button class="manufacture__btn left btn slider-prev "><i class="fas fa-chevron-left"></i></button>',
    nextArrow:
      '<button class="manufacture__btn right btn slider-next"><i class="fas fa-chevron-right"></i></button>'
  });
  // Деактивировать последнюю ссылку
  const routingLinks = [...document.querySelectorAll(".routing__link")];
  const lastLink = routingLinks.length - 1;

  if (routingLinks.length !== 0) {
    routingLinks[lastLink].style.pointerEvents = "none";
  }

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

  // popup burger menu

  $(".menu-button").click(function() {
    $(".popup-menu-wrap").slideToggle();
  });
  $(".popup-close").click(function() {
    $(".popup-menu-wrap").slideToggle();
  });
  $(".popup-item").click(function() {
    $(this)
      .addClass("submenu-visible")
      .siblings()
      .removeClass("submenu-visible");
    $(".submenu-visible .submenu").slideToggle("slow");
  });

  // Запуск счётчиков
  const counterList = document.querySelector(".advantages__experience-list");
  let wasRunning = false;

  if (counterList) {
    window.addEventListener("scroll", function() {
      var scrollTop = $(window).scrollTop(),
        elementOffset = $(".advantages__experience-list").offset().top,
        distance = elementOffset - scrollTop;

      if (distance < 650 && !wasRunning) {
        $(".advantages__experience-num").each(function() {
          $(this)
            .prop("Counter", 0)
            .animate(
              {
                Counter: $(this).text()
              },
              {
                duration: 3000,
                easing: "swing",
                step: function(now) {
                  $(this).text(Math.ceil(now));
                }
              }
            );
        });

        wasRunning = true;
      }
    });
  }

  // Добавление эффекта при наведение на пункт меню

  const itemList = [...document.querySelectorAll(".js-menu-item")];
  const headerHover = document.querySelector(".hover-js");

  itemList.forEach(el =>
    el.addEventListener("mouseenter", () => {
      headerHover.style.opacity = 1;
    })
  );
  itemList.forEach(el =>
    el.addEventListener("mouseleave", () => {
      headerHover.style.opacity = 0;
    })
  );

  // Добавление кнопок
  const allTextItem = [...document.querySelectorAll(".sidebar__info-text")];

  allTextItem.forEach(el => {
    const parrentItem =
      el.closest(".sidebar__reviews-item") || el.closest(".sidebar__info-item");
    const button = parrentItem.querySelector(".sidebar__button-text");
    const heightElem = $(el).height();
    el.dataset.height = heightElem;
    if (heightElem > 105) {
      button.style.display = "block";
      el.style.height = "105px";
    }
  });

  // Открытие текста в сайдбаре
  const buttonsText = [...document.querySelectorAll(".sidebar__button-text")];
  const arrowTop = "fa-arrow-up";
  const arrowBottom = "fa-arrow-down";

  buttonsText.forEach(el =>
    el.addEventListener("click", function(e) {
      const item =
        e.target.closest(".sidebar__reviews-item") ||
        e.target.closest(".sidebar__info-item");
      const text = item.querySelector(".sidebar__info-text");
      const heightElem = text.dataset.height;

      if (text.style.height === "105px") {
        text.style.height = heightElem + "px";
        e.target.classList.remove(arrowBottom);
        e.target.classList.add(arrowTop);
      } else {
        text.style.height = "105px";
        e.target.classList.remove(arrowTop);
        e.target.classList.add(arrowBottom);
      }
    })
  );
});
