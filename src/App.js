import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      Person: {
        fullName: "Aya Othmen",
        bio: "A passionate web developer from Tunisia.",
        imgSrc: "https://media.licdn.com/dms/image/v2/D4D03AQEkCu72q8b0Uw/profile-displayphoto-crop_800_800/B4DZfgQAwmHkAI-/0/1751814024161?e=1757548800&v=beta&t=6mS7bQ8fvw9uyfOpYKtycSe6NWn1VLFHO8F1qYo2xFs",
        profession: "Industrial Computer Engineer",
      },
      shows: false
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>State with Person and shows initialized</p>
        </header>
      </div>
    );
  }
}

export default App;
