import React, {Component} from 'react';
import logo from './img/am_logo.png';
import './App.css';
import ReactMarkdown from 'react-markdown/with-html';
import lang_slo from './content/slo.md';
import lang_en from './content/en.md';
var selected_lang;

//browser local-storage check & load
if (localStorage.getItem("language") === null) {localStorage.setItem("language", "slo");};
if (localStorage.getItem("language") === "slo") {selected_lang=lang_slo} 
  else if (localStorage.getItem("language") === "en") {selected_lang=lang_en}
  else {console.log("Here be dragons.");}

class App extends Component {

  constructor() {
    super();
    this.state = { markdown: '' };
  }

  componentWillMount() {
    fetch(selected_lang).then(res => res.text()).then(text => this.setState({ markdown: text }));
  }

  render() {
//multi-lang support
    var slo = document.getElementById("slo");
    var en = document.getElementById("en");
    
    if(slo){slo.addEventListener("click", set_slo,false)};
    if(en){en.addEventListener("click", set_en,false)};
        
        function set_slo() {
          localStorage.setItem("language", "slo");
          window.location.reload(false);
        }
        
        function set_en() {
          localStorage.setItem("language", "en");
          window.location.reload(false);
        }

//html    
    const { markdown } = this.state;
    return (
      <div className="App">
      <header className="App-header">
        <div className="buttons"><button id="slo" onclick="slo">SLO</button><button id="en" onclick="en">EN</button></div>
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <span><a href="https://www.facebook.com/anomalo.si/" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-square fa-lg social_icons"></i></a></span>&nbsp;
          <span><a href="https://www.instagram.com/anomalo.si/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram fa-lg social_icons"></i></a></span>
        </div>
        <div className="markdown_file"><ReactMarkdown source={markdown} escapeHtml={false} /></div>
      </header>
      </div>
    );
  }
} 

export default App;
