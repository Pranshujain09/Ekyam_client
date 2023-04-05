import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./components/About";
import Heading from "./components/Heading";
import Events from "./components/Events";
import Navbar from "./components/navbar";
import ecell from "./assets/e cell logo.png";

const dummyData = {
  ecell: {
    logoImg: ecell,
    heading: "THE ENTREPRENEURSHIP CELL CHITKARA UNIVERSITY",
    title: "Creating job creators",
    mainImg: "https://www.chitkara.edu.in/ciif/images/about-CIIF.jpg",
    aboutHeading: "ABOUT E-CELL",
    aboutTitle:
      "A CHITKARA UNIVERSITY PUNJAB INITIATIVE TO BUILD START-UP ECOSYSTEM",
    aboutPara:
      "At E-Cell, we aim to provide both graduate and under-graduate a preferred ecosystem to discover the entrepreneur within. We provide platform for individual to develop leadership skills, art of managing events, social development and interaction. Also, efficient interaction between students, faculty and working professional with existing Entrepreneurs, professional speakers, venture capitalists and several other industrialists.",
    eventPara:
      "A variety of events and valuable sessions has continuously been the prime focus in assisting our entrepreneurs for having a 360 degree development.",
  },
  iei: {
    logoImg: ecell,
    heading: "CHITKARA UNIVERSITY",
    title: "Creating job creators",
    mainImg: "https://www.chitkara.edu.in/ciif/images/about-CIIF.jpg",
    aboutHeading: "ABOUT E-CELL",
    aboutTitle:
      "A CHITKARA UNIVERSITY PUNJAB INITIATIVE TO BUILD START-UP ECOSYSTEM",
    aboutPara:
      "At E-Cell, we aim to provide both graduate and under-graduate a preferred ecosystem to discover the entrepreneur within. We provide platform for individual to develop leadership skills, art of managing events, social development and interaction. Also, efficient interaction between students, faculty and working professional with existing Entrepreneurs, professional speakers, venture capitalists and several other industrialists.",
    eventPara:
      "A variety of events and valuable sessions has continuously been the prime focus in assisting our entrepreneurs for having a 360 degree development.",
  },
  ieee: {
    logoImg: ecell,
    heading: "kyhjfhgfryrfhj",
    title: "Creating job creators",
    mainImg: "https://www.chitkara.edu.in/ciif/images/about-CIIF.jpg",
    aboutHeading: "ABOUT E-CELL",
    aboutTitle:
      "A CHITKARA UNIVERSITY PUNJAB INITIATIVE TO BUILD START-UP ECOSYSTEM",
    aboutPara:
      "At E-Cell, we aim to provide both graduate and under-graduate a preferred ecosystem to discover the entrepreneur within. We provide platform for individual to develop leadership skills, art of managing events, social development and interaction. Also, efficient interaction between students, faculty and working professional with existing Entrepreneurs, professional speakers, venture capitalists and several other industrialists.",
    eventPara:
      "A variety of events and valuable sessions has continuously been the prime focus in assisting our entrepreneurs for having a 360 degree development.",
  },
  acm: {
    logoImg: ecell,
    heading: "THE ENTREPRENEURSHIP CELL CHITKARA UNIVERSITY",
    title: "Creating job creators",
    mainImg: "https://www.chitkara.edu.in/ciif/images/about-CIIF.jpg",
    aboutHeading: "ABOUT E-CELL",
    aboutTitle:
      "A CHITKARA UNIVERSITY PUNJAB INITIATIVE TO BUILD START-UP ECOSYSTEM",
    aboutPara:
      "At E-Cell, we aim to provide both graduate and under-graduate a preferred ecosystem to discover the entrepreneur within. We provide platform for individual to develop leadership skills, art of managing events, social development and interaction. Also, efficient interaction between students, faculty and working professional with existing Entrepreneurs, professional speakers, venture capitalists and several other industrialists.",
    eventPara:
      "A variety of events and valuable sessions has continuously been the prime focus in assisting our entrepreneurs for having a 360 degree development.",
  },
  tm: {
    logoImg: ecell,
    heading: "THE ENTREPRENEURSHIP CELL CHITKARA UNIVERSITY",
    title: "Creating job creators",
    mainImg: "https://www.chitkara.edu.in/ciif/images/about-CIIF.jpg",
    aboutHeading: "ABOUT E-CELL",
    aboutTitle:
      "A CHITKARA UNIVERSITY PUNJAB INITIATIVE TO BUILD START-UP ECOSYSTEM",
    aboutPara:
      "At E-Cell, we aim to provide both graduate and under-graduate a preferred ecosystem to discover the entrepreneur within. We provide platform for individual to develop leadership skills, art of managing events, social development and interaction. Also, efficient interaction between students, faculty and working professional with existing Entrepreneurs, professional speakers, venture capitalists and several other industrialists.",
    eventPara:
      "A variety of events and valuable sessions has continuously been the prime focus in assisting our entrepreneurs for having a 360 degree development.",
  },
  c2s2: {
    logoImg: ecell,
    heading: "THE ENTREPRENEURSHIP CELL CHITKARA UNIVERSITY",
    title: "Creating job creators",
    mainImg: "https://www.chitkara.edu.in/ciif/images/about-CIIF.jpg",
    aboutHeading: "ABOUT E-CELL",
    aboutTitle:
      "A CHITKARA UNIVERSITY PUNJAB INITIATIVE TO BUILD START-UP ECOSYSTEM",
    aboutPara:
      "At E-Cell, we aim to provide both graduate and under-graduate a preferred ecosystem to discover the entrepreneur within. We provide platform for individual to develop leadership skills, art of managing events, social development and interaction. Also, efficient interaction between students, faculty and working professional with existing Entrepreneurs, professional speakers, venture capitalists and several other industrialists.",
    eventPara:
      "A variety of events and valuable sessions has continuously been the prime focus in assisting our entrepreneurs for having a 360 degree development.",
  },
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          {Object.keys(dummyData).map((data) => (
            // object.keys retturns an array of all the keys of the object
            <Route path={`/${data}`} >
                {/* template */}
              <div className="app">
                <Navbar />
                <Heading
                  logo={dummyData[data].logoImg}
                  heading={dummyData[data].heading}
                  title={dummyData[data].title}
                  mainImg={dummyData[data].mainImg}
                />
                <About
                  heading={dummyData[data].aboutHeading}
                  title={dummyData[data].aboutTitle}
                  content={dummyData[data].aboutPara}
                />
                <Events content={dummyData[data].eventPara} />
              </div>
            </Route>
          ))}
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
