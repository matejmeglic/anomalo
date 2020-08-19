import React, { Component } from "react";
import logo from "./img/am_logo.png";
import "./App.css";
import Grid from "./components/Grid";
import * as data_en from "./content/en.json";
import * as data_slo from "./content/slo.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { articles: data_slo.default.articles };
  }

  componentDidMount() {}

  render() {
    function set_slo() {
      this.setState({
        articles: data_slo.articles,
      });
    }

    function set_en() {
      this.setState({
        articles: data_en.articles,
      });
    }

    return (
      <div className="App">
        <header className="App-header">
          <div className="buttons">
            <button id="slo" onClick={set_slo}>
              SLO
            </button>
            <button id="en" onClick={set_en}>
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
          <Grid articles={this.state.articles}></Grid>
        </header>
      </div>
    );
  }
}

export default App;
