$(window).on('load', function () {
  // ==========================
  // Section 3 Tabs
  // ==========================
  const $tabs3 = $('.hp-sec-3-r2 #tabs').tabs({
    activate: function (event, ui) {
      // Refresh the slider when switching tabs
      ui.newPanel.find('.ts-1-slider').slick('setPosition');

      // Smooth transition
      ui.newPanel.addClass('tabs-active');
      ui.oldPanel.removeClass('tabs-active');

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

  // Add transition class to first panel
  $('.hp-sec-3-r2 #tabs .ui-tabs-panel:first').addClass('tabs-active');

  // ==========================
  // Section 7 Tabs
  // ==========================
  const $tabs7 = $('.hp-sec-7-r2 #tabs').tabs({
    activate: function (event, ui) {
      // Refresh the slider when switching tabs
      ui.newPanel.find('.ts-1-slider').slick('setPosition');

      // Smooth transition
      ui.newPanel.addClass('tabs-active');
      ui.oldPanel.removeClass('tabs-active');
    },
  });

  // Make image clickable like tab link
  $('.hp-sec-7-r2 #tabs ul li img').on('click', function () {
    $(this).siblings('a').trigger('click');
  });

  // Show tabs only after everything is ready
  $('.hp-sec-7-r2 #tabs').addClass('tabs-ready');

  // Add transition class to first panel
  $('.hp-sec-7-r2 #tabs .ui-tabs-panel:first').addClass('tabs-active');

  // ==========================
  // Footer Accordion
  // ==========================
  function setupFooterAccordion() {
    if ($(window).width() <= 1024) {
      // Enable accordion only on smaller screens
      $('.footer-col').each(function (index) {
        if (index > 0 && index < 5) {
          // skip first & last
          const $col = $(this);
          const $toggle = $col.find('.footer-toggle');
          const $panel = $col.find('ul');

          // Remove previous handlers
          $toggle.off('click.accordion').on('click.accordion', function (e) {
            e.preventDefault();

            // Close other open panels
            $('.footer-col.active')
              .not($col)
              .removeClass('active')
              .find('ul')
              .slideUp(250);

            // Toggle this one
            if ($col.hasClass('active')) {
              $panel.slideUp(250, function () {
                $col.removeClass('active');
              });
            } else {
              $panel.slideDown(250, function () {
                $col.addClass('active');
              });
            }
          });
        }
      });
    } else {
      // Show all on large screens
      $('.footer-col ul').show();
      $('.footer-col').removeClass('active');
      $('.footer-toggle').off('click.accordion');
    }
  }

  // Run once on load
  setupFooterAccordion();

  // Re-run on resize
  $(window).on('resize', function () {
    setupFooterAccordion();
  });

  // ==========================
  // Mobile Navigation Toggle
  // ==========================
  const mobileNavHandler = function () {
    // Check if the current window width is less than 768 pixels
    if (window.innerWidth < 768) {
      // Check if the handler is not already bound to prevent multiple bindings
      if (!$('.nav-toggler').data('mobile-bound')) {
        // Attach the click handler
        $('.nav-toggler').on('click.mobileToggle', function () {
          const $menu = $('.header-r3-nav ul');
          $menu.slideToggle('slow').toggleClass('menu-open'); // 🔹 Added toggle class
        });
        // Set a flag to remember the handler is bound
        $('.nav-toggler').data('mobile-bound', true);
      }
    } else {
      // Remove the click handler if the screen is 768px or wider
      $('.nav-toggler').off('click.mobileToggle');
      // Remove the flag
      $('.nav-toggler').data('mobile-bound', false);
      // Optional: Ensure the menu is always visible on larger screens
      $('.header-r3-nav ul')
        .removeClass('menu-open') // 🔹 Remove class on desktop
        .css('display', ''); // Clears inline 'display: none'
    }
  };

  // 2. Run the function on initial page load
  mobileNavHandler();

  // 3. Run the function when the window is resized
  // Using a simple debounce to avoid running the function too many times while resizing
  let resizeTimer;
  $(window).on('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(mobileNavHandler, 100);
  });
});
