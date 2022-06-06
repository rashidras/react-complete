import React from "react";
import Header from "./Header";
import Carousel from "./Carousel";
import Company from "./Company";
import Portfolio from "./Portfolio";
import Login from "./Login";
import { BrowserRouter as Router, Route ,Routes} from "react-router-dom";
import Signup from "./Signup";

function App() {
    return (
        <div>
            <Router>
               <Routes>
                    <Route exact path="/" element={<Header/>}></Route>
                    
                    <Route path="/Login" element={<Login />}></Route>
                    <Route path="/Signup" element={<Signup/>}></Route>
               </Routes>
            </Router>
        </div>
    );
}
export default App;