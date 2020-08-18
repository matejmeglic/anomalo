import React, { Component } from "react";
import logo from "./img/am_logo.png";
import "./App.css";
import LazyLoad from "react-lazyload"; //used in .md files
import Grid from "./components/Grid";
import * as data from "./content/articles.json";

class App extends Component {
  componentDidMount() {}

  render() {
    //multi-lang support
    // var slo = document.getElementById("slo");
    // var en = document.getElementById("en");

    // if (slo) {
    //   slo.addEventListener("click", set_slo, false);
    // }
    // if (en) {
    //   en.addEventListener("click", set_en, false);
    // }

    // function set_slo() {
    //   localStorage.setItem("language", "slo");
    //   window.location.reload(false);
    // }

    // function set_en() {
    //   localStorage.setItem("language", "en");
    //   window.location.reload(false);
    // }

    return (
      <div className="App">
        <header className="App-header">
          <div className="buttons">
            <button id="slo" onclick="slo">
              SLO
            </button>
            <button id="en" onclick="en">
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
          <div className="gallery">
            <Grid articles={data.articles}></Grid>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
