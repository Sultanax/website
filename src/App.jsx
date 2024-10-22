import React from 'react';
import './App.css';
import me from "./assets/me.jpg";
import sudoku from "./assets/sudoku.gif";
import crowd_surfer from "./assets/crowdsurfer.gif";
import crossword from "./assets/crossword.gif";
import tswiftbot from "./assets/tswiftbot.gif";
import linlab from "./assets/linlab.jpg";
import ddr from "./assets/ddr.gif";

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

      <div className="intro">
      <img src={linlab} className="linlab" alt="Lin Lab Logo" />
        <div>
          <h1>Research</h1>
          <p className="right-align">Under the guidance of Dr. Baihan Lin, developed a saliency estimation model with configuration options 
          for visual, auditory, and novel semantic input, whereas previous models were solely audio-visual based. 
          Incorporated semantic information as BERT sentence embeddings and extracted features using ResNets. 
          Redesigned the fusion module to support multimodal input combinations (audio-visual, audio-semantic, 
          visual-semantic, and audio-visual-semantic) using Bilinear layers and Linear transformations for 
          comprehensive saliency prediction.</p>
        </div>
      </div>

      <div className="row">
        <h1>Projects</h1>
        <div className="column">
          <a href="https://github.com/saloni-jain-code/AI-Support-Bot" target="_blank">
            <img src={tswiftbot} className="projectgif" alt="Taylor Swift Chatbot" />
          </a>
          <p>Taylor Swift ChatBot</p>
        </div>
        <div className="column">
          <a href="https://github.com/Sultanax/Dance-Dance-Revolution-Arduino-Game.git" target="_blank">
            <img src={ddr} className="projectgif" alt="Dance Dance Revolution Game" />
          </a>
          <p>Dance Dance Revolution Arcade Game</p>
        </div>
        <div className="column">
          <a href="https://devpost.com/software/crowd-surfer" target="_blank">
            <img src={crowd_surfer} className="projectgif" alt="Crowd Surfers App" />
          </a>
          <p>Crowd Surfers</p>
        </div>
        <div className="column">
          <a href="https://github.com/Sultanax/Sudoku" target="_blank">
            <img src={sudoku} className="projectgif" alt="Sudoku Project"></img>
          </a>
          <p>Command Line Sudoku</p>
        </div>
        <div className="column">
          <a href="https://github.com/Sultanax/Crossword-Puzzle" target="_blank">
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
