import React from "react";
import Typed from "react-typed";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="container">
        <h1 className="title">React Typing Animation Effect</h1>{" "}
      </div>
      <div className="animated-typing">
        <Typed
          strings={[
            "I'm a Full Stack Developer",
            "I Love Software Development",
          ]}
          typeSpeed={150}
          backSpeed={100}
          loop
        />
      </div>
      <div className="buttons">
        <button className="btn-pink">Learn More</button>
        <button className="btn-purple">Talk To Us Now</button>
      </div>
    </div>
  );
}
export default App;

