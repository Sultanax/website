import React from 'react';
import './App.css';
import me from "./assets/me.jpg";
import sudoku from "./assets/sudoku.gif";
import crowd_surfer from "./assets/crowdsurfer.gif";
import crossword from "./assets/crossword.gif";

function App() {
  return (
    <div className="everything">
      <div className="intro">
        <div id="text">
          <h2>Sultana Yeasmin</h2>
          <p>Aspiring SWE / Researcher.</p>
          <p>Computer Vision, Math, NLP, Neuroscience.</p>
          <div className="button-container">
            <div className="button">
              <a href="https://docs.google.com/document/d/1SFUKNOpq3KP4U9Z6muSuYC3tE24M_4UmsjWnCkivzEc/edit?usp=sharing" target="_blank">Resume</a>
            </div>
            <div className="button">
              <a href="https://github.com/Sultanax" target="_blank">GitHub</a>
            </div>
          </div>
        </div>
        <img src={me} className="pic" alt="Sultana Yeasmin" />
      </div>

      <div className="row">
        <h1>Projects & Research</h1>
        <div className="column">
          <a href="https://replit.com/@Sultana2/soduku-repl" target="_blank">
            <img src={sudoku} className="projectgif" alt="Sudoku Project" />
          </a>
          <p>Command Line Sudoku</p>
        </div>
        <div className="column">
          <a href="https://devpost.com/software/crowd-surfer" target="_blank">
            <img src={crowd_surfer} className="projectgif" alt="Crowd Surfers App" />
          </a>
          <p>Crowd Surfers App:</p>
          <p>View Library and Dining Hall Crowds!</p>
        </div>
        <div className="column">
          <a href="https://replit.com/@Sultana2/Crossword-puzzle" target="_blank">
            <img src={crossword} className="projectgif" alt="Crossword Puzzle" />
          </a>
          <p>Command Line Crossword Puzzle</p>
          <p>Generator & Solver</p>
        </div>
      </div>
    </div>
  );
}

export default App;
