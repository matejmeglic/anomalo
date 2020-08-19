import React, { Component } from "react";
import logo from "./img/am_logo.png";
import "./App.css";
import * as data_en from "./content/en.json";
import * as data_slo from "./content/slo.json";
import InfiniteScroll from "react-infinite-scroll-component";

const articlesShown = 8; // counts from 0, so use n-1
const addArticles = 6;
const imagePath = "img/";
let articlesAfterStateChange = articlesShown;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: data_slo.default.articles,
      loading: data_slo.default.loading,
      endOfText: data_slo.default.endOfText,
      alive: data_slo.default.alive,
      cute: data_slo.default.cute,
      instructions: data_slo.default.instructions,
      paypalButtonSrc: data_slo.default.paypalButtonSrc,
      altPaypal: data_slo.default.altPaypal,
      articlesLength: data_slo.default.articles.length,
      articlesShown: articlesShown,
      addArticles: addArticles,
    };
  }

  componentDidMount() {}

  changeLanguage = (lang) => {
    articlesAfterStateChange = articlesShown;

    let data;
    lang === "slo" ? (data = data_slo) : (data = data_en);

    this.setState({
      articles: data.default.articles,
      articlesShown: articlesShown,
      loading: data.default.loading,
      endOfText: data.default.endOfText,
      alive: data.default.alive,
      cute: data.default.cute,
      instructions: data.default.instructions,
      paypalButtonSrc: data.default.paypalButtonSrc,
      altPaypal: data.default.altPaypal,
      articlesLength: data.default.articles.length,
    });
  };

  fetchMoreData = () => {
    // a fake async api call like which sends
    // more records after 1.5 secs
    articlesAfterStateChange =
      this.state.articlesShown + this.state.addArticles;

    if (articlesAfterStateChange <= this.state.articlesLength) {
      setTimeout(() => {
        this.setState({
          articlesShown:
            articlesAfterStateChange < this.state.articlesLength
              ? this.state.articlesShown + addArticles
              : articlesAfterStateChange - this.state.articlesLength,
        });
      }, 1500);
    } else {
      let loading = document.getElementById("loading");
      loading.innerHTML = "";
      let endOfScroll = document.createElement("h5");
      endOfScroll.textContent = this.state.endOfText;
      loading.appendChild(endOfScroll);
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="buttons">
            <button id="slo" onClick={() => this.changeLanguage("slo")}>
              SLO
            </button>
            <button id="en" onClick={() => this.changeLanguage("en")}>
              EN
            </button>
          </div>
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <span>
              <a
                href="https://www.facebook.com/anomalo.si/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-square fa-lg social_icons"></i>
              </a>
            </span>
            &nbsp;
            <span>
              <a
                href="https://www.instagram.com/anomalo.si/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram fa-lg social_icons"></i>
              </a>
            </span>
          </div>
          <h2>
            {this.state.alive}
            <br />
            {this.state.cute}
          </h2>
          <p>{this.state.instructions}</p>
          <a
            href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=C7RDUMHNRMR28&source=url"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={this.state.paypalButtonSrc} alt={this.state.altPaypal} />
          </a>
          <br />
          <div id="showroom">
            <InfiniteScroll
              dataLength={this.state.articlesShown}
              next={this.fetchMoreData}
              hasMore={true}
              loader={
                <div id="loading">
                  <br />
                  <h5>{this.state.loading}</h5>
                  <br />
                </div>
              }
            >
              {this.state.articles.map((i, index) =>
                index <= this.state.articlesShown ? (
                  <a
                    key={index}
                    href={i.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={`${imagePath}${i.source}`} alt={i.alt} />
                  </a>
                ) : (
                  ""
                )
              )}
            </InfiniteScroll>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
