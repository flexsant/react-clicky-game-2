import React, { Component } from "react";
import data from "./data.json";
import Navbar from "./components/Navbar";
import ClickImage from "./components/ClickImage";

class App extends Component {
  //state
  state = {
    data,
    score: 0,
    topScore: 0,
    result: "Click an Image to Begin!"
  };

  //Function to shuffle data array
  shuffle = data => {
    let i = data.length - 1;
    for (i; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = data[i];
      data[i] = data[j];
      data[j] = temp;
    }
    return data;
  };

  //function to reset the data change all the clicked values to false
  reset = data => {
    const resetData = data.map(item => ({ ...item, clicked: false }));
    return this.shuffle(resetData);
    //return resetData;
  };

  //function to handle image click
  handleImageClick = id => {
    let goodGuess = false;
    const newData = this.state.data.map(item => {
      const currentItem = { ...item };
      if (id === currentItem.id) {
        if (!currentItem.clicked) {
          currentItem.clicked = true;
          goodGuess = true;
        }
      }
      return currentItem;
    });
    if (goodGuess) {
      this.handleGoodGuess(newData);
    } else {
      this.handleBadGuess(newData);
    }
  };
  //function to handle a good guess
  handleGoodGuess = data => {
    const newScore = this.state.score + 1;
    //const newTopScore = Math.max(this.state.topScore, newScore);
    this.setState({
      data: this.shuffle(data),
      score: newScore,
      result: "You Guessed Correctly",
      topScore: Math.max(this.state.topScore, newScore)
    });
  };

  //function to handle a bad guess
  handleBadGuess = data => {
    this.setState({
      data: this.reset(data),
      score: 0,
      result: "Wrong! Click to try again!"
    });
  };

  render() {
    return (
      <div>
        <Navbar
          result={this.state.result}
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <div className="container">
          <div className="row">
            <h2 className="mx-auto">
              Click on an image to earn points, but don't click on any more than
              once.
            </h2>
          </div>
          <div className="row">
            {this.state.data.map(item => (
              <ClickImage
                handleImageClick={this.handleImageClick}
                key={item.id}
                {...item}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default App;
