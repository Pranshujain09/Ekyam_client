import React  from "react";
import About from "./About";

import Heading from "./Heading";
import Events, { EventsHeading } from "./Events";
import BImage from "./stage e cell.avif";



function App(){
    
    return(
        
        // <img classname="BImage" src={BImage}>
        <div className="app">
        <Heading></Heading>
        <About></About>
        {/* <EventsHeading></EventsHeading> */}
        <Events></Events>
        </div>
        // </img>
       

    )
};





export default App;
