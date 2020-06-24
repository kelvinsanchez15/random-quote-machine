import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaRedoAlt } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import "./index.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: "",
    };
  }

  componentDidMount() {
    this.getQuote();
  }

  getQuote() {
    let url =
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

    axios.get(url).then((res) => {
      let data = res.data.quotes;
      let quoteNum = Math.floor(Math.random() * data.length);
      let randomQuote = data[quoteNum];

      this.setState({
        quote: randomQuote["quote"],
        author: randomQuote["author"],
      });
    });
  }

  getNewQuote = () => {
    this.getQuote();
  };

  render() {
    const { quote, author } = this.state;
    return (
      <div className="App">
        <div id="wrapper">
          <div id="quote-box">
            <div id="text">
              <h1>
                <FaQuoteLeft /> {quote}
              </h1>
            </div>
            <div id="author">
              <h2>{author}</h2>
              <hr />
            </div>
            <div className="buttons">
              <div>
                <AiFillTwitterCircle id="tweet-quote" title="Tweet this quote!" />
              </div>
              <div>
                <FaRedoAlt
                  id="new-quote"
                  title="Get a new quote!"
                  onClick={this.getNewQuote}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
