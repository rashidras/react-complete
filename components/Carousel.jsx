import React from "react";
function Carousel() {
    return (
         <section className="slider-section">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <div className="number-padding">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active">01</li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1">02</li>
                </ol>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active title-and-para">
                    <div className="row">
                        <div claclassNamess="col-md-3 offset-md-2">
                            <h1 className="innovative">INNOVATIVE</h1>
                            <h1 className="solutions">SOLUTIONS</h1>
                            <p className="title-para"/>We find the best solutions fot you, we <br></br> redesign your home and work places. <br></br> Discover why over 5,100 home owners <br></br>trust
                            initiative 
                            <button className="readmore">Read More</button>
                        </div>
                        <div className="col-md-7">
                            <img className="slide-image" src="images/slider-img.png" alt="First slide"/>
                        </div>
                    </div>
                </div>
                <div className="carousel-item title-and-para">
                    <div className="row">
                        <div className="col-md-3 offset-md-2">
                            <h1 className="innovative">INNOVATIVE</h1>
                            <h1 className="solutions">SOLUTIONS</h1>
                            <p className="title-para"/>We find the best solutions fot you, we <br></br> redesign your home and work places. <br></br>
                                Discover why over 5,100 home owners <br> </br>trust
                                initiative
                            <button className="readmore">Read More</button>
                        </div>
                        <div className="col-md-7">
                            <img className="slide-image" src="images/slider-img.png" alt="First slide"/>
                        </div>
                    </div>
                </div>     
            </div>
            <div className="clip-path">
                    
            </div>
            <div className="arrow-buttons">
                <button className="prev-button" type="button" data-target="#carouselExampleIndicators" data-slide="prev"><img src="images/left-black-arrow.png" alt=""/></button>
                <button className="next-button" type="button" data-target="#carouselExampleIndicators" data-slide="next"><img src="images/right-black-arrow.png" alt=""/></button>
            </div>
        </div>        
    </section>
    );
}
export default Carousel;
