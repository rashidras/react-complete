import React from "react";

import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark nav-background">
                <a className="navbar-brand" href="#">INTOT</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> 
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto login-and-signup">
                        <li className="nav-item active login">
                            <img className="login-icon" src="images/login.png"
                                alt="" />
                                <Link to="/Login" className="log-sign-link">Login</Link>
                            
                        </li>
                        <li className="nav-item active signup">
                            <img className="signup-icon" src="images/signup.png" alt=""/>
                                <Link to="/Signup" className="log-sign-link">Sign Up</Link>
                               
                            
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <button className="header-buttons"><img src="images/search-icon.png" alt=""/></button>
            
                    </form>
                
                    <div id="myNav" className="overlay">
            
                        
                        <a href="javascript:void(0)" className="closebtn" onclick="closeNav()">&times;</a>
            
                        
                        <div className="overlay-content">
                            <a href="#">HOME</a>
                            <a href="#">TEAM</a>
                            <a href="#">PORTFOLIO</a>
                            <a href="#">CONTACTUS</a>
                        </div>
                    </div>
                    
                    <button className="btn btn-outline-success my-2 my-sm-0 menu-button" type="submit" onclick="openNav()"><img
                            src="images/menu.png" alt=""/></button>
                </div>
            </nav> 

            <h1>PLEASE CLICK ON THE LOGIN LINK.....</h1>

            <div class="container">
        <div class="why-initiative">
            <h2 class="company-title">WHY INITIATIVE COMPANY</h2>
            <p class="company-para">It is a long established fact that a reader will be distracted by the readable content of a
                page when looking at its
                layout. The point of using Lorem</p>
        </div>
        <div class="card-section">
            <div class="row">
                <div class="col-md-4">
                    <div class="shadow p-3 mb-5 bg-body rounded box-shadow">
                        <div class="card-image">
                            <img src="images/card-img-1.png" alt=""/>
                        </div>
                        
                        <div class="card-title">
                            <h3>10 YEARS EXPERIENCE</h3>
                            <p class="card-para">Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh
                                ultricies vehicula ut id
                                elit. Morbi leo risus.</p>
                        </div>
                    </div>
                    <div class="three-buttons">
                        <button class="read-button">Read More</button>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="shadow p-3 mb-5 bg-body rounded box-shadow">
                        <div class="card-image">
                            <img src="images/card-img-2.png" alt=""/>
                        </div>
                    
                        <div class="card-title">
                            <h3>10 YEARS EXPERIENCE</h3>
                            <p class="card-para">Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh
                                ultricies vehicula ut id
                                elit. Morbi leo risus.</p>
                        </div>
                    </div>
                    <div class="three-buttons">
                        <button class="read-button">Read More</button>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="shadow p-3 mb-5 bg-body rounded box-shadow">
                        <div class="card-image">
                            <img src="images/card-img-3.png" alt=""/>
                        </div>
                    
                        <div class="card-title">
                            <h3>10 YEARS EXPERIENCE</h3>
                            <p class="card-para">Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh
                                ultricies vehicula ut id
                                elit. Morbi leo risus.</p>
                        </div>
                    </div>
                    <div class="three-buttons">
                        <button class="read-button">Read More</button>
                    </div>
                </div>
            </div>
        </div>
            </div>
            

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
            

            





        </header>
        
      
        
    );
}

export default Header;