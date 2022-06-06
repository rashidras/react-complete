import React, {useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function Login() {
    const [input, setInput] = useState({
        name: '',
        email: '',
        phonenumber: '',
        message: ''
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }
    

    function handleClick(event) {
        event.preventDefault();
        console.log(input);
        const newIntot = {
            name:input.name,
            email: input.email,
            phonenumber: input.phonenumber,
            message: input.message,
        }
        axios.post('http://localhost:3001/create', newIntot);
    }

    return (
        <section>
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
                    
                                <Link to="/">Home</Link>
                            
                        </li>
                        <li className="nav-item active signup">
                            <a className="nav-link" href="#"><img className="signup-icon" src="images/signup.png" alt=""/><span>Sign
                                    Up</span></a>
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
            <div class="container">
                <div class="form-section-title">
                    <h4 class="dont-hesitate">Don’t Hesitate To Ask</h4>
                    <h3 class="">FREE CONSULTATION</h3>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <form action="">
                            <div>
                                <label for="">Name</label><br></br>
                                <input onChange={handleChange} type="text" name="name" value={input.name} class="label-length"/><br></br>
                            </div>
                            <div class="labels-padding">
                                <label for="">Email</label><br></br>
                                <input onChange={handleChange} type="email" name="email" value={input.email} class="label-length"/><br></br>
                            </div>
                            <div class="labels-padding">
                                <label for="">Phone Number</label><br></br>
                                <input onChange={handleChange} type="text" name="phonenumber" value={input.phonenumber} class="label-length"/><br></br>
                            </div>
                            <div class="labels-padding">
                                <label for="">Message</label><br></br>
                                <textarea onChange={handleChange} name="message" value={input.message} id="" cols="30" rows="10" class="textarea-height"></textarea>
                            </div>
                        </form>
                        <button onClick={handleClick} className="send-button" type="submit">SEND</button>
                    </div>
                    <div class="col-md-6">
                        <img src="images/form-img.png" alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Login;