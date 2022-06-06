import React from "react";
function Portfolio() {
    return (
        <section class="portfolio-section">
            <div class="container">
                <div class="our-portfolio">
                    <h2 class="company-title">OUR PORTFOLIO</h2>
                    <p class="portfolio-para">It is a long established fact that a reader will be distracted by the readable content of a
                        page when looking at its
                        layout. The point of using Lorem</p>
                </div>
                <div class="row portfolio-images">
                    <div class="col-md-8">
                        <img class="portfolio-img1" src="images/portfolio-img-1.png" alt=""/>
                    </div>
                    <div class="col-md-4">
                        <img class="portfolio-img2" src="images/portfolio-img-2.jpg" alt=""/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <img class="portfolio-img3" src="images/portfolio-img-3.png" alt=""/>
                    </div>
                    <div class="col-md-8">
                        <img class="portfolio-img4" src="images/portfolio-img-4.png" alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Portfolio;