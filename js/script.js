$(window).on('load', function () {
  // ==========================
  // Section 3 Tabs
  // ==========================
  const $tabs3 = $('.hp-sec-3-r2 #tabs').tabs({
    activate: function (event, ui) {
      // Refresh the slider when switching tabs
      ui.newPanel.find('.ts-1-slider').slick('setPosition');
    },
  });

  // Make image clickable like tab link
  $('.hp-sec-3-r2 #tabs ul li img').on('click', function () {
    $(this).siblings('a').trigger('click');
  });

  // Show tabs only after everything is ready
  $('.hp-sec-3-r2 #tabs').addClass('tabs-ready');

  // ==========================
  // Section 7 Tabs (Duplicate)
  // ==========================
  const $tabs7 = $('.hp-sec-7-r2 #tabs').tabs({
    activate: function (event, ui) {
      // Refresh the slider when switching tabs
      ui.newPanel.find('.ts-1-slider').slick('setPosition');
    },
  });

  // Make image clickable like tab link
  $('.hp-sec-7-r2 #tabs ul li img').on('click', function () {
    $(this).siblings('a').trigger('click');
  });

  // Show tabs only after everything is ready
  $('.hp-sec-7-r2 #tabs').addClass('tabs-ready');
});

// function toggleMenu() {
//   const menu = document.getElementById('menuList');
//   menu.classList.toggle('show');
// }
