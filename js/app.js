var object = [
  {
    headline: "Branding & Design",
    value: 7.5,
    length: 10,
  },
  {
    headline: "Web Development",
    value: 8.2,
    length: 10,
    description: "Details 2",
  },
  {
    headline: "Digital Marketing",
    value: 6.3,
    length: 10,
    description: "Details 2",
  },
  {
    headline: "Product Design & Develop",
    value: 8.5,
    length: 10,
    description: "Details 2",
  },
];

$(document).ready(function () {
  $("#skillset").skillset({
    object: object,
    duration: 80,
  });

  $(document).ready(function () {
    $("#lightSlider").lightSlider({
      responsive: [
        {
          breakpoint: 526,
          settings: {
            item: 1,
            slideMove: 1,
          },
        },
      ],
      loop: true,
    });
  });
});

var swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  loop: true,
});
