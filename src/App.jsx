import React, { useState, useEffect } from 'react';
import './App.css';
import cat from './assets/cat.gif';
import me from "./assets/me.jpg"
import sudoku from "./assets/sudoku.gif";
import ni from "./assets/ni.png";
import crowd_surfer from "./assets/crowdsurfer.gif";
import crossword from "./assets/crossword.gif";
import neuroinfernce from "./assets/neuroinference.png";

function App() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const introTimer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(introTimer);
  }, []);

  return (
    <div>
      {isVisible ? (
        <div>
          <img className="catgif" src={cat} alt="Cat" />
          <div className="container">
            <h1 className="hello">Hello People</h1>
          </div>
        </div>
      ) : (
        <div className ="everything">
          <div className="intro">
            <div id="text">
              <h2>Sultana Yeasmin</h2>
              <p>Aspiring SWE / Researcher. </p>
              <p>Computer Vision, Math, NLP, Neuroscience. </p>
              <div className="button-container">
                <div className="button"><a href="https://docs.google.com/document/d/1SFUKNOpq3KP4U9Z6muSuYC3tE24M_4UmsjWnCkivzEc/edit?usp=sharing" target='_blank'>Resume</a></div>
                <div className="button"><a href="https://github.com/Sultanax" target='_blank'>GitHub</a></div>
              </div>
            </div>
            <img src={me} className="pic"/> 
          </div>
          <div class="row">
            <h1>Projects</h1>
            <div class="column">
              <a href="https://replit.com/@Sultana2/soduku-repl" target="_blank">
                <img src={sudoku} className='projectgif'/> 
              </a>
              <p>Command Line Sudoku</p>
            </div>
            <div class="column">
              <a href="https://devpost.com/software/crowd-surfer" target="_blank">
                <img src={crowd_surfer} className='projectgif'/> 
              </a>
              <p>Crowd Surfers App:</p>
              <p>View Library and Dining Hall Crowds!</p>
            </div>
            <div class="column">
              <a href="https://replit.com/@Sultana2/Crossword-puzzle" target="_blank">
                <img src={crossword} className='projectgif'/> 
              </a>
              <p>Command Line Crossword Puzzle</p>
              <p>Generator & Solver</p>
            </div>
          </div>
          <div class="row">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1>Research</h1>
            <br></br>
            <div class="column">
              <img src={ni} class="ni-logo"/> 
              <p>NeuroInference Labs</p>
              <p>Led By Baihan Lin</p>
            </div>
            <div class="column">
              <p>Led by Dr. Baihan Lin, Neuro Inference Labs conduct interdisciplinary and collaborative research in next-generation AI, human experience and neural interfaces.</p>
            </div>
            <div class="column">
            <img src={neuroinfernce} class="neuroinference"/> 
            </div>

          </div>
          <div class="row">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1>Contact</h1>
            <p>Email: sy3196@columbia.edu</p>
            <p>LinkedIn: https://www.linkedin.com/in/sultana-yeasmin/</p>
            <p>Feel free to reach out with any inquries or collaboration requests!</p>
          </div>
        </div>
      )}
    </div>
  );
  
}

export default App;


  /*
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);

  useEffect(() => {
    const fadeUpTimeout = setTimeout(() => {
      setShowAdditionalInfo(true);
    }, 3000);

    return () => clearTimeout(fadeUpTimeout);
  }, []);

  useEffect(() => {
    if (showAdditionalInfo) {
      const additionalInfoTimeout = setTimeout(() => {
        setShowAdditionalInfo(false);
      }, 2000);

      return () => clearTimeout(additionalInfoTimeout);
    }
  }, [showAdditionalInfo]);

  return (
    <>
      <div>
        <h1 id="heading" className={`animated fadeOutUp`} >
          hello girlies
        </h1>
      </div>
      {showAdditionalInfo && (
      <div>
        <h1>How are you guys</h1>
      </div>
      )}
    </>
  );
}
*/
