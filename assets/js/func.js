// smooth scroll
$(document).ready(function () {
  $('.navbar .nav-link').on('click', function (event) {
    if (this.hash !== '') {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top,
        },
        700,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

// navbar toggle
$('#nav-toggle').click(function () {
  $(this).toggleClass('is-active');
  $('ul.nav').toggleClass('show');
});

/* ---- particles.js config ---- */

particlesJS('particles-js', {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 1000,
      },
    },
    color: {
      //   value: ['#aa73ff', '#f8c210', '#83d238', '#33b1f8'],
      value: ['#4dbbff'],
    },

    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#4dbbff',
      },
      polygon: {
        nb_sides: 6,
      },
      image: {
        src: 'img/github.svg',
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.4,
      random: false,
      anim: {
        enable: false,
        speed: 0.5,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.2,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 200,
      color: '#4dbbff',
      opacity: 0.5,
      width: 1,
    },
  },
  interactivity: {
    detect_on: 'window',
    events: {
      onhover: {
        enable: true,
        mode: 'grab',
      },
      onclick: {
        enable: true,
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 1,
      },
      remove: {
        particles_nb: 4,
      },
    },
  },
  retina_detect: true,
});
