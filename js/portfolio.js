document.addEventListener('DOMContentLoaded', function () {
    const portfolioNavItems = document.querySelectorAll('.portfolio-nav ul li a');

  // Add click event listener to each portfolio navigation item
  portfolioNavItems.forEach(function (item) {
    item.addEventListener('click', function () {
      // Remove the 'clicked' class from all items
      portfolioNavItems.forEach(function (navItem) {
        navItem.classList.remove('clicked');
      });

      // Add the 'clicked' class to the clicked item
      item.classList.add('clicked');
    });
  });
document.getElementById("portfolio-all").addEventListener("click", (e) => {
  e.preventDefault();
  let portfolioRow = document.getElementById("portfolio-row");
  portfolioRow.textContent = "";
  portfolioRow.innerHTML = `<div class="col-md-6 col-sm-6 col-12">
                        <div class="portfolio-card">
                            <img src="images/project-1.jpg" alt="">
                            <div class="portfolio-card-info">
                                <div>
                                    <h5>Redesign Youtube Homepage</h5>
                                    <p>Project completed 25 December,2021</p>
                                </div>
                                <button>Preview</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-6 col-12">
                        <div class="portfolio-card">
                            <img src="images/project-2.jpg" alt="">
                            <div class="portfolio-card-info">
                                <div>
                                    <h5>Redesign Website Homepage</h5>
                                    <p>Project completed 25 December,2021</p>
                                </div>
                                <button>Preview</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-6 col-12">
                        <div class="portfolio-card">
                            <img src="images/project-5.jpg" alt="">
                            <div class="portfolio-card-info">
                                <div>
                                    <h5>Design Homepage UI</h5>
                                    <p>Project completed 25 December,2021</p>
                                </div>
                                <button>Preview</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-6 col-12">
                        <div class="portfolio-card">
                            <img src="images/project-1.jpg" alt="">
                            <div class="portfolio-card-info">
                                <div>
                                    <h5>User Experience Design</h5>
                                    <p>Project completed 25 December,2021</p>
                                </div>
                                <button>Preview</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-6 col-12">
                        <div class="portfolio-card">
                            <img src="images/project-6.jpg" alt="">
                            <div class="portfolio-card-info">
                                <div>
                                    <h5>E-commerce Marketing</h5>
                                    <p>Project completed 25 December,2021</p>
                                </div>
                                <button>Preview</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-6 col-12">
                        <div class="portfolio-card">
                            <img src="images/project-1.jpg" alt="">
                            <div class="portfolio-card-info">
                                <div>
                                    <h5>Shop Logo Design</h5>
                                    <p>Project completed 25 December,2021</p>
                                </div>
                                <button>Preview</button>
                            </div>
                        </div>
                    </div>`;
});

document.getElementById("portfolio-ux").addEventListener("click", (e) => {
  e.preventDefault();
  let portfolioRow = document.getElementById("portfolio-row");
  portfolioRow.textContent = "";
  portfolioRow.innerHTML = ` <div class="col-md-6 col-sm-6 col-12">
                        <div class="portfolio-card">
                            <img src="images/project-1.jpg" alt="">
                            <div class="portfolio-card-info">
                                <div>
                                    <h5>Redesign Youtube Homepage</h5>
                                    <p>Project completed 25 December,2021</p>
                                </div>
                                <button>Preview</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-6 col-12">
                        <div class="portfolio-card">
                            <img src="images/project-2.jpg" alt="">
                            <div class="portfolio-card-info">
                                <div>
                                    <h5>Redesign Website Homepage</h5>
                                    <p>Project completed 25 December,2021</p>
                                </div>
                                <button>Preview</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-6 col-12">
                        <div class="portfolio-card">
                            <img src="images/project-5.jpg" alt="">
                            <div class="portfolio-card-info">
                                <div>
                                    <h5>Design Homepage UI</h5>
                                    <p>Project completed 25 December,2021</p>
                                </div>
                                <button>Preview</button>
                            </div>
                        </div>
                    </div>`;
});

document.getElementById("portfolio-web").addEventListener("click", (e) => {
  e.preventDefault();
  let portfolioRow = document.getElementById("portfolio-row");
  portfolioRow.textContent = "";
  portfolioRow.innerHTML = ` 
                    <div class="col-md-6 col-sm-6 col-12">
                        <div class="portfolio-card">
                            <img src="images/project-2.jpg" alt="">
                            <div class="portfolio-card-info">
                                <div>
                                    <h5>Redesign Website Homepage</h5>
                                    <p>Project completed 25 December,2021</p>
                                </div>
                                <button>Preview</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-6 col-12">
                        <div class="portfolio-card">
                            <img src="images/project-5.jpg" alt="">
                            <div class="portfolio-card-info">
                                <div>
                                    <h5>User Experience Design</h5>
                                    <p>Project completed 25 December,2021</p>
                                </div>
                                <button>Preview</button>
                            </div>
                        </div>
                    </div>`;
});

document.getElementById("portfolio-branding").addEventListener("click", (e) => {
  e.preventDefault();
  let portfolioRow = document.getElementById("portfolio-row");
  portfolioRow.textContent = "";
  portfolioRow.innerHTML = ` 
                    <div class="col-md-6 col-sm-6 col-12">
                        <div class="portfolio-card">
                            <img src="images/project-2.jpg" alt="">
                            <div class="portfolio-card-info">
                                <div>
                                    <h5>Redesign Youtube Homepage</h5>
                                    <p>Project completed 25 December,2021</p>
                                </div>
                                <button>Preview</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-6 col-12">
                        <div class="portfolio-card">
                            <img src="images/project-5.jpg" alt="">
                            <div class="portfolio-card-info">
                                <div>
                                    <h5>E-commerce Marketing</h5>
                                    <p>Project completed 25 December,2021</p>
                                </div>
                                <button>Preview</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-6 col-12">
                        <div class="portfolio-card">
                            <img src="images/project-2.jpg" alt="">
                            <div class="portfolio-card-info">
                                <div>
                                    <h5>Redesign Website Homepage</h5>
                                    <p>Project completed 25 December,2021</p>
                                </div>
                                <button>Preview</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-6 col-12">
                        <div class="portfolio-card">
                            <img src="images/project-5.jpg" alt="">
                            <div class="portfolio-card-info">
                                <div>
                                    <h5>Design Homepage UI</h5>
                                    <p>Project completed 25 December,2021</p>
                                </div>
                                <button>Preview</button>
                            </div>
                        </div>
                    </div>`;
});
document.getElementById("portfolio-logo").addEventListener("click", (e) => {
  e.preventDefault();
  let portfolioRow = document.getElementById("portfolio-row");
  portfolioRow.textContent = "";
  portfolioRow.innerHTML = `
                    
                    <div class="col-md-6 col-sm-6 col-12">
                        <div class="portfolio-card">
                            <img src="images/project-1.jpg" alt="">
                            <div class="portfolio-card-info">
                                <div>
                                    <h5>Redesign Youtube Homepage</h5>
                                    <p>Project completed 25 December,2021</p>
                                </div>
                                <button>Preview</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-6 col-12">
                        <div class="portfolio-card">
                            <img src="images/project-6.jpg" alt="">
                            <div class="portfolio-card-info">
                                <div>
                                    <h5>Shop Logo Design</h5>
                                    <p>Project completed 25 December,2021</p>
                                </div>
                                <button>Preview</button>
                            </div>
                        </div>
                    </div>`;
});
});