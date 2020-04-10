import React from 'react';
import logo from './img/am_logo.png';
import fb from './img/fb.png';
import ig from './img/ig.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <img src={logo} className="App-logo" alt="logo" />
        <p> </p>
        <p>
        Anomalo živi.<br />
        Ustvarjava luštne stvari.</p>
        <a
          className="AnoMalo-Dnevnik"
          href=" https://bit.ly/anomalodnevnik"
          target="_blank"
          rel="noopener noreferrer"
        >
          Prenesi #ostanidoma dnevnik!
        </a>
        <a
          className="AnoMalo-Dnevnik"
          href=" https://bit.ly/anomaloaktivnosti"
          target="_blank"
          rel="noopener noreferrer"
        >
          Želiš zbirko Aktivnosti #ostanidoma?
        </a>
        <a
          className="AnoMalo-Dnevnik"
          href="https://bit.ly/anomaloactivitybook"
          target="_blank"
          rel="noopener noreferrer"
        >
          Or would you rather have Stay-at-home Activity Book?
        </a>
        <p> </p>
        <div>
          <span><a href="https://www.facebook.com/anomalo.si/" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-square fa-lg"></i></a></span>&nbsp;
          <span><a href="https://www.instagram.com/anomalo.si/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram fa-lg"></i></a></span>
        </div>
      </header>
    </div>
  );
}

export default App;
