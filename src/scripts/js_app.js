var _functions = {}, winWidth, shareButton;

jQuery(function ($) {
    var isTouchScreen = navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i);
    if (isTouchScreen)
        $('html').addClass('touch-screen');
    var winScr, winHeight, is_Mac = navigator.platform.toUpperCase().indexOf('MAC') >= 0,
        is_IE = /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /MSIE 10/i.test(navigator.userAgent) || /Edge\/\d+/.test(navigator.userAgent),
        is_Chrome = navigator.userAgent.indexOf('Chrome') >= 0 && navigator.userAgent.indexOf('Edge') < 0;
    winWidth = $(window).width();
    winHeight = $(window).height();
    if (is_Mac) {
        $('html').addClass('mac');
    }
    if (is_IE) {
        $('html').addClass('ie');
    }
    if (is_Chrome) {
        $('html').addClass('chrome');
    }

    /*new slider*/
    /*  _functions.getSwOptions = function (swiper) {
          var options = swiper.data('options');
          options = (!options || typeof options !== 'object') ? {} : options;
          var $p = swiper.closest('.swiper-entry'),
              slidesLength = swiper.find('>.swiper-wrapper>.swiper-slide').length;
          if (options.progressbar)
              options.pagination = {
                  el: $p.find('.swiper-pagination')[0],
                  type: 'progressbar',
                  clickable: true
              };

          if (!options.pagination)
              options.pagination = {
                  el: $p.find('.swiper-pagination')[0],
                  clickable: true,
                  renderBullet: function (index, className) {
                      return '<span class="' + className + '">' + '0' + (index + 1) + "</span>";


                  },
              };
          if (!options.navigation)
              options.navigation = {
                  nextEl: $p.find('.swiper-button-next')[0],
                  prevEl: $p.find('.swiper-button-prev')[0]
              };
          options.preloadImages = false;
          options.lazy = {
              loadPrevNext: true
          };
          options.observer = true;
          options.observeParents = true;
          options.watchOverflow = true;
          options.speed = 500;

          options.roundLengths = false;
          if (!options.centerInsufficientSlides)
              options.centerInsufficientSlides = false;
          if (isTouchScreen)
              options.direction = "horizontal";
          if (options.customFraction) {
              $p.addClass('custom-fraction');
              if (slidesLength > 1 && slidesLength < 10) {
                  $p.find('.custom-current').text('01');
                  $p.find('.custom-total').text('0' + slidesLength);
              } else if (slidesLength > 1) {
                  $p.find('.custom-current').text('01');
                  $p.find('.custom-total').text('0' + slidesLength);
              }
          }
          return options;
      }
      ;
      _functions.initSwiper = function (el) {
          var swiper = new Swiper(el[0], _functions.getSwOptions(el));
      };
      $('.swiper-entry .swiper-container').each(function () {
          _functions.initSwiper($(this));
      });


      //custom fraction
      $('.custom-fraction').each(function () {
          var $this = $(this),
              $thisSwiper = $this.find('.swiper-container')[0].swiper,
              currentSlide = $thisSwiper.realIndex + 1;
          $thisSwiper.on('slideChange', function () {
              $this.find('.custom-current').text(
                  function () {
                      currentSlide = $thisSwiper.realIndex + 1;
                      if ($thisSwiper.realIndex < 9) {
                          return ('0' + currentSlide)
                      } else {
                          return '0' + currentSlide
                      }
                  }
              )
          });
      });

  /*
      $('.swiper-thumbs').each(function () {
          var top = $(this).find('.swiper-container.swiper-thumbs-top')[0].swiper
              , bottom = $(this).find('.swiper-container.swiper-thumbs-bottom')[0].swiper;
          top.thumbs.swiper = bottom;
          top.thumbs.init();
          top.thumbs.update();
      });*

      // Thumbs Swiper
      $(".swiper-thumbs").each(function () {
          if ($(".swiper-thumbs-top").length && $(".swiper-thumbs-bottom").length) {
              let t = $(this);
              let top = t.find(".swiper-thumbs-top>.swiper-container")[0].swiper,
                  bottom = t.find(".swiper-thumbs-bottom>.swiper-container")[0].swiper;
              top.thumbs.swiper = bottom;
              top.thumbs.init();
              top.thumbs.update();

              if (top.slides.length < 2) {
                  t.addClass("hide-bottom");
              }
          }
      });

      $('.swiper-control').each(function () {
          var top = $(this).find('.swiper-container')[0].swiper
              , bottom = $(this).find('.swiper-container')[1].swiper;
          top.controller.control = bottom;
          bottom.controller.control = top;
      });

      function slideLength() {
          $('.swiper-entry .swiper-container').each(function () {
              var th = $(this)
                  , slidesLength = $(this).find('.swiper-slide').length
                  , visibleSlidesLength = $(this).find('.swiper-slide-visible').length;
              if (slidesLength <= visibleSlidesLength) {
                  th.addClass('swiper-no');
              }
          });
      }

      slideLength();
      $(window).on('resize', function () {
          slideLength();
      });
  */

    /*new slider*/


    //popup
    let popupTop = 0;
    _functions.removeScroll = function () {
        popupTop = $(window).scrollTop();
        $('html').css({
            "position": "fixed",
            "top": -$(window).scrollTop(),
            "width": "100%"
        });
    }
    _functions.addScroll = function () {

        $('html').css({
            "position": "static"
        });
        // $('html').css({}).removeClass("overflow-hidden");
        window.scroll(0, popupTop);
    }

    _functions.openPopup = function (popup) {

        $('.popup-content').removeClass('active');

        // $('.popup-content').removeClass('animate-away').addClass('animate-in');

        $(popup + ', .popup-wrapper').addClass('active');
        _functions.removeScroll();
    };

    _functions.closePopup = function () {


        //$('.popup-content').removeClass('animate-in').addClass('animate-away');

        $('.popup-wrapper, .popup-content').removeClass('active');
        _functions.addScroll();
    };

    $(document).on('click', '.open-popup', function (e) {
        e.preventDefault();
        _functions.openPopup('.popup-content[data-rel="' + $(this).data('rel') + '"]');
    });

    $(document).on('click', '.popup-wrapper .btn-close, .popup-wrapper .layer-close, .popup-wrapper .btn-back', function (e) {
        e.preventDefault();
        _functions.closePopup();
    });

    /*(window).scrollTop() > 30 ? r.removeClass("transparent") : r.addClass("transparent")
                }
            ));
        };
        _functions.coolNav();
    */


    /* Function on page scroll */
    $(window).on('scroll', function () {
        _functions.scrollCall();
    });


    _functions.scrollCall = function () {
        winScr = $(window).scrollTop();
        if (winScr > 10) {
            $('header').addClass('scrolled');
        } else {
            $('header').removeClass('scrolled');
        }
    }
    _functions.scrollCall();


    // search
    $(document).on("click", ".js-open-search", function () {


        $(".h-search").addClass("active");
        $("html").removeClass("open-menu open-submenu");
        $(`.h-sub-menu, .h-link-subnav`).removeClass("active");
        setTimeout(() => {
            $(".autocomplete-product").focus();
        }, 10);
    });

    $(document).on("click", ".js-close-search", function () {
        $(".h-search, .h-search-results").removeClass("active");
        $(".h-search input").val("");
    });
    $(document).on("click", ".h-overlay", function () {
        $("html").removeClass("overflow-menu open-menu open-submenu");
        $(".h-search").removeClass("active");
        $(".h-search input").val("");
    });


});

function scrollAnime() {
    if ($('.animation').length) {
        $('.animation').not('.animated').each(function () {
            var th = $(this);
            if ($(window).width() < 768) {
                if ($(window).scrollTop() >= th.offset().top - ($(window).height() * 0.95)) {
                    th.addClass('animated');
                }
            } else {
                if ($(window).scrollTop() >= th.offset().top - ($(window).height() * 0.85)) {
                    th.addClass('animated');
                }
            }
        });
    }
}

scrollAnime();
$(window).on('scroll', function () {
    scrollAnime();
});

// =============================
// BURGER
// =============================
jQuery(function () {
    $(".burger__wrap").on("click", function () {
        $(this).toggleClass("active"),
            $(".navbar").toggleClass("is-visible")
    })

    _functions.scrollWidth = function () {
        let scrWidth = $(window).outerWidth() - $('body').innerWidth();
        $('body,  .h-menu-toggle, .h-search-wrapp').css({
            "paddingRight": `${scrWidth}px`
        });
    }
    // Open menu
    $(document).on('click', '.h-burger', function () {
        _functions.scrollWidth();
        $('html').toggleClass('overflow-menu');
        $(this).closest('header').toggleClass('open-menu');
    });


});


// =============================
// ACCORDEON
// =============================

$(document).on('click', '.accordion-title', function () {
    var accordeon = $(this).closest('.accordeon');
    accordeon.find('.accordion-title.active').not(this).removeClass('active').next().slideUp();
    $(this).toggleClass('active').next().slideToggle();
});


// =============================
// SumoSelect
// =============================

if ($('.select-box').length) {

    $('.default').SumoSelect();
}
;


// =============================
// PLAY AND STOP VIDEO
// =============================

$(document).on('click', '.btn-play', function () {
    let videoItem = $(this).closest('.video-with-control').find('video').get(0);

    if (videoItem.paused) {
        videoItem.play();
        $(this).closest('.video-full').find('video').attr('controls', '');
        $(this).closest('.btn-play').addClass('hide');
    } else {
        videoItem.pause();
        $(this).closest('.video-full').find('video').removeAttr('controls');
        $(this).closest('.btn-play').removeClass('hide');
    }
});
// about page
$('.preload__btn').on('click', function () {
    $(this).parents(".preload-entry").find(".preload").css({
        'z-index': -1,
        'opacity': 0
    });
    $(this).parents(".preload-entry").find("video").css({
        "display": "block"
    });

    var video = $(this).parents(".preload-entry").find("video")[0];

    console.log(video.paused);
    if (video.paused === false) {
        $(this).parents(".preload-entry").find('.--pause').removeClass("d-block").addClass("d-none");
        $(this).parents(".preload-entry").find('.--play').removeClass("d-none").addClass("d-block");
        video.pause();
    } else {
        video.play();
        $(this).parents(".preload-entry").find('.--play').removeClass("d-block").addClass("d-none");
        $(this).parents(".preload-entry").find('.--pause').removeClass("d-none").addClass("d-block");
    }
});

// =============================
// FILTER
// =============================

$(document).on("click", ".fl-title", function () {
    $(this).toggleClass("is-active");
    //  $(".fl-menu-item").removeClass("is-open");
    $(this).closest(".fl-menu-item").toggleClass("is-open");
    $(this).closest(".fl-menu-item").find(".fl-toggle").first().slideToggle(300);
});
//open filters on mobile
$(document).on("click", ".btn-filter", function () {
    $("body,html").toggleClass("overflow-hidden");
    $(this).toggleClass("is-open");
    $(".fl-menu__wrap").toggleClass("is-open");
    $(".fl-menu__overlay").toggleClass("is-active");
});
$(document).on("click", ".fl-menu__overlay, .fl-menu__close", function () {
    $(this).hasClass("is-active")
        ? $(this).removeClass("is-active")
        : $(this).addClass("is-active");

    $(".fl-menu__wrap").removeClass("is-open"),
        $("body,html").toggleClass("overflow-hidden");

});

// =============================
// LIGHTGALLERY
// =============================
$('.lightgallery').not('.animated').each(function () {
    $(this).lightGallery();
});

// =============================
// TAB
// =============================
const tabs = document.querySelectorAll(".tab");

function tabify(tab) {
    const tabList = tab.querySelector(".tab__list");

    if (tabList) {
        const tabItems = [...tabList.children];
        const tabContent = tab.querySelector(".tab__content");
        const tabContentItems = [...tabContent.children];
        let tabIndex = 0;

        tabIndex = tabItems.findIndex((item, index) => {
            return [...item.classList].indexOf("is--active") > -1;
        });

        tabIndex > -1 ? (tabIndex = tabIndex) : (tabIndex = 0);

        function setTab(index) {
            tabItems.forEach((x, index) => x.classList.remove("is--active"));
            tabContentItems.forEach((x, index) => x.classList.remove("is--active"));

            tabItems[index].classList.add("is--active");
            tabContentItems[index].classList.add("is--active");
        }

        tabItems.forEach((x, index) =>
            x.addEventListener("click", () => setTab(index))
        );
        setTab(tabIndex);
        tab.querySelectorAll(".tab").forEach((tabContent) => tabify(tabContent));
    }
}

tabs.forEach(tabify);