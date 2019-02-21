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

  // sp-list
  //   $(".img-wrapper .item").click(function() {
  //     var tabs = $(".img-wrapper .item");
  //     var cont = $(".img-wrapper .tab-cont");

  //     // Удаляем классы active
  //     tabs.removeClass("active");
  //     cont.removeClass("active");
  //     // Добавляем классы active
  //     $(this).addClass("active");
  //     cont.eq($(this).index()).addClass("active");
  //   });

  //OWL-CARUSEL
  //   $('.owl-slider').owlCarousel({
  //       items:1,
  //       lazyLoad:true,
  //       loop: true,
  //       autoplay: true,
  //       singleItem: true,
  //       nav: true,
  //       pagination: true,
  //       margin: 25,
  //       responsiveClass:true,
  //       responsive:{
  //           0:{
  //               items:1,
  //               loop: true,
  //               lazyLoad: true
  //           },
  //           600:{
  //               items:1,
  //               loop: true,
  //               lazyLoad: true
  //           },
  //           1000:{
  //               items:1,
  //               loop: true,
  //               lazyLoad: true
  //           }
  //       }
  //   })

  // $('.owl-rigth-carousel').owlCarousel({
  //     items:1,
  //     lazyLoad:true,
  //     loop: true,
  //     autoplay: true,
  //     singleItem: true,
  //     nav: true,
  //     pagination: true,
  //     margin:0,
  //     responsiveClass:true,
  //     responsive:{
  //         0:{
  //             items:1,
  //             nav:true,
  //             pagination: true,
  //             loop: true,
  //             lazyLoad: true
  //         },
  //         600:{
  //             items:1,
  //             nav: true,
  //             pagination: true,
  //             loop: true,
  //             lazyLoad: true
  //         },
  //         1000:{
  //             items:1,
  //             nav:true,
  //             pagination: true,
  //             loop: true,
  //             lazyLoad: true
  //         }
  //     }
  // })

  // $('.owl-besrseller').owlCarousel({
  //     items:1,
  //     autoplay: true,
  //     singleItem: true,
  //     pagination: false,
  //     nav: true,
  //     margin:15,
  //     responsiveClass:true,
  //     responsive:{
  //         0:{
  //             items:1,
  //             loop: true,
  //             lazyLoad: true
  //         },
  //         600:{
  //             items:1,
  //             loop: true,
  //             lazyLoad: true
  //         },
  //         1000:{
  //             items:4,
  //             loop: true,
  //             lazyLoad: true
  //         }
  //     }
  // })

  //---------------------OUR-CASE --------------------------//

  //-------------------------------------------------------//
  //-------------------АяксФорма-------------------
  $("form").submit(function() {
    // Получение ID формы
    var formID = $(this).attr("id");
    // Добавление решётки к имени ID
    var formNm = $("#" + formID);
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: formNm.serialize(),
      success: function(data) {
        // Вывод текста результата отправки
        $(formNm).html(data);
      },
      error: function(jqXHR, text, error) {
        // Вывод текста ошибки отправки
        $(formNm).html(error);
      }
    });
    return false;
  });

  //-------------------------
});
