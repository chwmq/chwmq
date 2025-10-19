document.addEventListener('DOMContentLoaded', function () {
  const sliderNavItems = document.querySelectorAll('.slider-nav ul li a');

  // Add click event listener to each slider navigation item
  sliderNavItems.forEach(function (item) {
    item.addEventListener('click', function () {
      // Remove the 'clicked' class from all items
      sliderNavItems.forEach(function (navItem) {
        navItem.classList.remove('clicked');
      });

      // Add the 'clicked' class to the clicked item
      item.classList.add('clicked');
    });
  });
  // Lightslider initialization
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
document.getElementById("allPortfolio").addEventListener("click", (e) => {
  e.preventDefault();
  let portfolioSlider = document.getElementById("portfolio");
  portfolioSlider.textContent = "";
  portfolioSlider.classList.remove("portfolio-container");
  portfolioSlider.innerHTML = `<ul id="lightSlider" class="myslder">
                <li>
                    <div class="porfolio-slider"><img src="images/slider1.jpg" class="img-fluid" alt=""></div>
                </li>
                <li>
                    <div class="porfolio-slider"><img src="images/slider2.jpg" class="img-fluid" alt=""></div>
                </li>
                <li>
                    <div class="porfolio-slider"><img src="images/slider3.jpg" class="img-fluid" alt=""></div>
                </li>
                <li>
                    <div class="porfolio-slider"><img src="images/slider4.jpg" class="img-fluid" alt=""></div>
                </li>
                <li>
                    <div class="porfolio-slider"><img src="images/slider5.jpg" class="img-fluid" alt=""></div>
                </li>
                <li>
                    <div class="porfolio-slider"><img src="images/slider6.jpg" class="img-fluid" alt=""></div>
                </li>
                <li>
                    <div class="porfolio-slider"><img src="images/slider7.jpg" class="img-fluid" alt=""></div>
                </li>
                <li>
                    <div class="porfolio-slider"><img src="images/slider8.jpg" class="img-fluid" alt=""></div>
                </li>
                </ul>`;
    
                // Initialize lightSlider outside setTimeout
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
document.getElementById("uxuiPortfolio").addEventListener("click", (e) => {
  e.preventDefault();
  let portfolioSlider = document.getElementById("portfolio");
  portfolioSlider.textContent = "";
  portfolioSlider.classList.remove("portfolio-container");
  portfolioSlider.innerHTML = `<ul id="lightSlider" class="myslder">
                <li>
                    <div class="porfolio-slider"><img src="images/slider5.jpg" class="img-fluid" alt=""></div>
                </li>
                <li>
                    <div class="porfolio-slider"><img src="images/slider6.jpg" class="img-fluid" alt=""></div>
                </li>
                <li>
                    <div class="porfolio-slider"><img src="images/slider7.jpg" class="img-fluid" alt=""></div>
                </li>
                <li>
                    <div class="porfolio-slider"><img src="images/slider8.jpg" class="img-fluid" alt=""></div>
                </li>
                </ul>`;
    
                // Initialize lightSlider outside setTimeout
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

document.getElementById("webPortfolio").addEventListener("click", (e) => {
  e.preventDefault();
  let portfolioSlider = document.getElementById("portfolio");
  portfolioSlider.textContent = "";
  portfolioSlider.classList.remove("portfolio-container");
  portfolioSlider.innerHTML = `<ul id="lightSlider" class="myslder">
               
                <li>
                    <div class="porfolio-slider"><img src="images/slider2.jpg" class="img-fluid" alt=""></div>
                </li>
                <li>
                    <div class="porfolio-slider"><img src="images/slider3.jpg" class="img-fluid" alt=""></div>
                </li>
                <li>
                    <div class="porfolio-slider"><img src="images/slider4.jpg" class="img-fluid" alt=""></div>
                </li>
                <li>
                    <div class="porfolio-slider"><img src="images/slider5.jpg" class="img-fluid" alt=""></div>
                </li>
                <li>
                    <div class="porfolio-slider"><img src="images/slider6.jpg" class="img-fluid" alt=""></div>
                </li>
                </ul>`;
    
                // Initialize lightSlider outside setTimeout
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

document.getElementById("brandPortfolio").addEventListener("click", (e) => {
  e.preventDefault();
  let portfolioSlider = document.getElementById("portfolio");
  portfolioSlider.textContent = "";
  portfolioSlider.classList.remove("portfolio-container");
  portfolioSlider.innerHTML = `<ul id="lightSlider" class="myslder">
               
                <li>
                    <div class="porfolio-slider"><img src="images/slider2.jpg" class="img-fluid" alt=""></div>
                </li>
                <li>
                    <div class="porfolio-slider"><img src="images/slider3.jpg" class="img-fluid" alt=""></div>
                </li>
                <li>
                    <div class="porfolio-slider"><img src="images/slider4.jpg" class="img-fluid" alt=""></div>
                </li>
                </ul>`;
    
                // Initialize lightSlider outside setTimeout
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

document.getElementById("logoPortfolio").addEventListener("click", (e) => {
  e.preventDefault();
  let portfolioSlider = document.getElementById("portfolio");
  portfolioSlider.textContent = "";
  portfolioSlider.classList.remove("portfolio-container");
  portfolioSlider.innerHTML = `<ul id="lightSlider" class="myslder">
                <li>
                    <div class="porfolio-slider"><img src="images/slider6.jpg" class="img-fluid" alt=""></div>
                </li>
                <li>
                    <div class="porfolio-slider"><img src="images/slider7.jpg" class="img-fluid" alt=""></div>
                </li>
                <li>
                    <div class="porfolio-slider"><img src="images/slider8.jpg" class="img-fluid" alt=""></div>
                </li>
                </ul>`;
    
                // Initialize lightSlider outside setTimeout
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