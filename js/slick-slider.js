$(document).ready(function () {
  const $slider = $('.hp-category-slider');

  $slider.slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000000, // 2 sec delay between slides
    speed: 600, // slide animation speed
    arrows: true,
    pauseOnHover: true,
    adaptiveHeight: true,

    responsive: [
      {
        breakpoint: 1540,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1168,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          adaptiveHeight: true,
          // centerMode: true,
          arrows: false,
          infinite: true,
        },
      },
    ],
  });

  $slider.on('afterChange', function () {
    $slider.find('.slick-prev, .slick-next').removeClass('slick-disabled');
  });

  // sec 3 tab 1 slider
  const $ts1slider = $('.hp-sec-3-r2 .ts-1-slider');

  $ts1slider.slick({
    infinite: true,
    slidesPerRow: 2,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000000, // 2 sec delay between slides
    speed: 600, // slide animation speed
    arrows: true,
    pauseOnHover: true,
    adaptiveHeight: true,

    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1168,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 980,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  // sec 6 tab most like slider
  const $ts2slider = $('.ts-2-slider');

  $ts2slider.slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000000, // 2 sec delay between slides
    speed: 600, // slide animation speed
    arrows: true,
    pauseOnHover: true,
    adaptiveHeight: true,

    responsive: [
      {
        breakpoint: 1540,
        settings: {
          slidesToShow: 5,
          arrows: true, // ensure arrows stay active
        },
      },
      {
        breakpoint: 1168,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.05,
          arrows: false,
        },
      },
    ],
  });

  // sec 7 tab 1 slider
  // init only section 7 slider
  const $ts7slider = $('.hp-sec-7-r2 .ts-1-slider');

  $ts7slider.slick({
    infinite: true,
    rows: 2,
    slidesPerRow: 4, // number of items per row
    slidesToShow: 1, // IMPORTANT: leave this at 1 when using slidesPerRow
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000000,
    speed: 600,
    arrows: true,
    pauseOnHover: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1540,
        settings: {
          slidesPerRow: 3,
          rows: 2,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 980,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesPerRow: 2,
          rows: 2,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesPerRow: 1,
          rows: 2,
          slidesToShow: 1,
        },
      },
    ],
  });

  // if slider was already initialized and you changed CSS, refresh
  $ts7slider.slick('setPosition');
  $ts7slider.slick('refresh');
});
