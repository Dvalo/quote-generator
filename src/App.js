import React from 'react';
import axios from 'axios';
import $ from 'jquery';
import UpdateQuote from './UpdateQuote';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      author: "",
      quotesAll: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }
  generateQuote() {
    let generateRandomInt = Math.floor(
      Math.random() * this.state.quotesAll.length
    );
    let getRandomQuote = this.state.quotesAll[generateRandomInt];
    this.setState({
      text: `${getRandomQuote.text}`,
      author: getRandomQuote.author,
    });

    $("#tweet-quote").attr(
      "href",
      `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${getRandomQuote.text}"`
    );
    this.updateBackground();
  }
  updateBackground() {
    const hexValues = [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
      "A", "B", "C", "D", "E", "F",];

    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hexValues[Math.floor(Math.random() * 16)];
    }
    $("body").css("background-color", color);
  }
  componentDidMount() {
    this.setState({ isLoaded: true });
    axios
      .get("https://type.fit/api/quotes")
      .then((response) => {
        this.setState({ quotesAll: response.data });
        this.generateQuote();
      })
      .catch((error) => console.log(error));
  }

  handleClick() {
    this.generateQuote();
  }

  render() {
    return (
      <div id="quote-box">
        <UpdateQuote text={this.state.text} author={this.state.author} />
        <a href="https://twitter.com/"
          target="_blank"
          id="tweet-quote"
          className="custom-btn tweet">
          <i class="fab fa-twitter"></i>
        </a>

        <button id="new-quote" className="custom-btn generate-btn"
          onClick={this.handleClick}>
          Generate New Quote
        </button>

      </div>
    );
  }
}

export default App;
