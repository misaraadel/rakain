$(document).ready(function () {
  // Loading Page
  var loadingPage = $('#loadingPage');
  var loadingPercent = $('#loadingPercent');
  var counter = 0;
  var loadingInterval;
  
  // Prevent scrolling during loading
  $('body').css('overflow', 'hidden');
  
  // Counter animation
  loadingInterval = setInterval(function() {
    counter++;
    loadingPercent.text(counter);
    
    if (counter >= 100) {
      clearInterval(loadingInterval);
      
      // Wait a bit then hide loading page
      setTimeout(function() {
        loadingPage.addClass('hide');
        
        // Enable scrolling after loading
        setTimeout(function() {
          $('body').css('overflow', '');
          loadingPage.css('display', 'none');
        }, 800);
      }, 300);
    }
  }, 25); // ~2.5 seconds total

  // // Custom Cursor with Direction
  // const cursor = document.querySelector('.custom-cursor');
  // let mouseX = 0, mouseY = 0;
  // let cursorX = 0, cursorY = 0;
  // let prevMouseX = 0, prevMouseY = 0;
  // let angle = 0;

  // document.addEventListener('mousemove', (e) => {
  //   mouseX = e.clientX;
  //   mouseY = e.clientY;

  //   // Calculate direction angle
  //   const deltaX = mouseX - prevMouseX;
  //   const deltaY = mouseY - prevMouseY;
    
  //   if (Math.abs(deltaX) > 2 || Math.abs(deltaY) > 2) {
  //     angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
  //   }

  //   prevMouseX = mouseX;
  //   prevMouseY = mouseY;
  // });

  // function animateCursor() {
  //   // Smooth follow
  //   cursorX += (mouseX - cursorX) * 0.15;
  //   cursorY += (mouseY - cursorY) * 0.15;

  //   if (cursor) {
  //     cursor.style.left = cursorX + 'px';
  //     cursor.style.top = cursorY + 'px';
  //     cursor.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
  //   }

  //   requestAnimationFrame(animateCursor);
  // }
  // animateCursor();

  // // Scale cursor on hover
  // $('a, button, .hamburger, .swiper-button-next, .swiper-button-prev, .nav-link').hover(
  //   function() {
  //     $('.custom-cursor').addClass('cursor-hover');
  //   },
  //   function() {
  //     $('.custom-cursor').removeClass('cursor-hover');
  //   }
  // );

  $(window).scroll(function () {
    if ($(this).scrollTop() > 700) {
      $(".scroll-top-button").fadeIn();
    } else {
      $(".scroll-top-button").fadeOut();
    }
  });

  $(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });

  $(".scroll-top-button").on('click', function () {
    $('html , body').animate({
      scrollTop: 0
    }, 100);
  });

  $('.hamburger').click(function(){
    $('.hamburger').toggleClass('active');
    $('.navbar-nav').toggleClass('active-nav');
    $('body').toggleClass('overflowNone')
  });

  // Smooth scroll with 100px offset for anchor links
  $('.nav-link[href*="#"]').not('[href="#"]').on('click', function(e) {
    var target = $(this.hash);
    if (target.length) {
      e.preventDefault();
      var offset = 100;
      $('html, body').animate({
        scrollTop: target.offset().top - offset 
      }, 600);
      
      // Close mobile menu if open
      $('.hamburger').removeClass('active');
      $('.navbar-nav').removeClass('active-nav');
      $('body').removeClass('overflowNone');
    }
  });

  // Scrollspy - Add active class to nav links based on scroll position
  var sections = $('section[id], header[id], footer[id]');
  var navLinks = $('.navbar-nav .nav-link');
  
  function updateActiveNavLink() {
    var scrollPos = $(window).scrollTop() + 150;
    
    sections.each(function() {
      var section = $(this);
      var sectionTop = section.offset().top;
      var sectionBottom = sectionTop + section.outerHeight();
      var sectionId = section.attr('id');
      
      if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
        navLinks.removeClass('active');
        navLinks.filter('[href="#' + sectionId + '"], [href="index.html#' + sectionId + '"]').addClass('active');
      }
    });
  }
  
  $(window).on('scroll', updateActiveNavLink);
  updateActiveNavLink(); // Run on page load

  // Set active class based on current page
  var currentPage = window.location.pathname.split('/').pop();
  if (currentPage === 'competitions.html') {
    navLinks.removeClass('active');
    navLinks.filter('[href="competitions.html"]').addClass('active');
  }

  var swiper = new Swiper(".swiper-header", {
    loop: true,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  var swiper = new Swiper(".swiper-brands", {
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      300: {
      slidesPerView: 2,
      spaceBetween: 18,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 18,
      },
    },
  });

  var swiper = new Swiper(".swiper-team", {
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      300: {
      slidesPerView: 3,
      spaceBetween: 18,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 18,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 18,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 18,
      },
    },
  });

  var swiper = new Swiper(".swiper-review", {
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 18,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 18,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 18,
      },
    },
  });
  
  var swiper = new Swiper(".swiper-products", {
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      300: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 18,
      },
    },
  });

  $("[data-fancybox]").fancybox({
    selector: '[data-fancybox="images"]',
    loop: true
  });
  
  AOS.init({
    once: true,
    easing: 'ease-out-cubic'
  });

  // Click-to-reveal effect for project boxes
  // First click: reveal content, Second click: open popup
  $(document).on('click', function(e) {
    // If clicking outside project boxes, remove revealed state from all
    if (!$(e.target).closest('.project-box').length) {
      $('.project-box').removeClass('revealed');
    }
  });

  // Project Popup Gallery
  var projectPopup = {
    currentIndex: 0,
    projects: [],
    
    init: function() {
      var self = this;
      
      // Collect all project boxes
      $('.project-box').each(function(index) {
        var $box = $(this);
        var $dataContain = $box.find('.data-contain');
        
        self.projects.push({
          image: $box.find('img').attr('src'),
          title: $dataContain.find('h3').text(),
          location: $dataContain.find('p').eq(0).text(),
          date: $dataContain.find('p').eq(1).text(),
          client: $dataContain.find('h3').text(),
          size: $box.data('size') || 'Site area: 3,720 square meters'
        });
      });
      
      // Click behavior: first click reveals, second click opens popup
      $('.project-box').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        var $box = $(this);
        
        if ($box.hasClass('revealed')) {
          // Second click - open popup
          var index = $('.project-box').index(this);
          self.open(index);
        } else {
          // First click - reveal content
          $('.project-box').removeClass('revealed'); // Remove from others
          $box.addClass('revealed');
        }
      });
      
      // Close popup
      $('.popup-close, .popup-overlay').on('click', function() {
        self.close();
      });
      
      // Navigation - Previous Image (click on left side image or arrow)
      $('.popup-side-left, .prev-image').on('click', function(e) {
        e.stopPropagation();
        self.prevImage();
      });
      
      // Navigation - Next Image (click on right side image or arrow)
      $('.popup-side-right, .next-image').on('click', function(e) {
        e.stopPropagation();
        self.nextImage();
      });
      
      // Previous/Next Project
      $('.prev-project').on('click', function() {
        self.prevImage();
      });
      
      $('.next-project').on('click', function() {
        self.nextImage();
      });
      
      // Toggle Info
      $('#toggleInfo').on('click', function() {
        $(this).toggleClass('active');
        $('#popupInfoSection').toggleClass('active');
        $('#projectPopup').toggleClass('info-open');
      });
      
      // Keyboard navigation
      $(document).on('keydown', function(e) {
        if (!$('#projectPopup').hasClass('active')) return;
        
        switch(e.keyCode) {
          case 27: // Escape
            self.close();
            break;
          case 37: // Left arrow
            self.prevImage();
            break;
          case 39: // Right arrow
            self.nextImage();
            break;
        }
      });
    },
    
    open: function(index) {
      this.currentIndex = index;
      this.updateContent();
      $('#projectPopup').addClass('active');
      $('body').css('overflow', 'hidden');
    },
    
    close: function() {
      $('#projectPopup').removeClass('active info-open');
      $('#popupInfoSection').removeClass('active');
      $('#toggleInfo').removeClass('active');
      $('body').css('overflow', '');
    },
    
    prevImage: function() {
      this.currentIndex = (this.currentIndex - 1 + this.projects.length) % this.projects.length;
      this.updateContent();
    },
    
    nextImage: function() {
      this.currentIndex = (this.currentIndex + 1) % this.projects.length;
      this.updateContent();
    },
    
    updateContent: function() {
      var project = this.projects[this.currentIndex];
      var prevIndex = (this.currentIndex - 1 + this.projects.length) % this.projects.length;
      var nextIndex = (this.currentIndex + 1) % this.projects.length;
      
      // Main image
      $('.popup-main-image').attr('src', project.image);
      
      // Side images (previous and next)
      $('.prev-side-image').attr('src', this.projects[prevIndex].image);
      $('.next-side-image').attr('src', this.projects[nextIndex].image);
      
      // Project info
      $('#popupClient').text(project.client);
      $('#popupLocation').text(project.location);
      $('#popupCompletion').text(project.date);
      $('#popupSize').text(project.size);
    }
  };
  
  projectPopup.init();

});