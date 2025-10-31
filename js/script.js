$(window).on('load', function () {
  // ==========================
  // Section 3 Tabs
  // ==========================
  const $tabs3 = $('.hp-sec-3-r2 #tabs').tabs({
    activate: function (event, ui) {
      // Refresh the slider when switching tabs
      ui.newPanel.find('.ts-1-slider').slick('setPosition');

      // 🟢 Update heading text when tab is activated
      const activeText = ui.newTab.find('a').text().replace(/["']/g, '').trim();
      $('.hp-sec-3 .hp-nba-h').text(activeText);
    },
  });

  // Make image clickable like tab link
  $('.hp-sec-3-r2 #tabs ul li img').on('click', function () {
    $(this).siblings('a').trigger('click');
  });

  // Show tabs only after everything is ready
  $('.hp-sec-3-r2 #tabs').addClass('tabs-ready');

  // Trigger update for the first tab on load
  const firstTabText = $('.hp-sec-3-r2 #tabs ul li:first-child a')
    .text()
    .replace(/["']/g, '')
    .trim();
  $('.hp-sec-3 .hp-nba-h').text(firstTabText);

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
