import { useState, useEffect } from 'react';
import './App.css';
import cat from '/Users/sultana/Downloads/website/mywebsite/src/assets/cat.gif';

function App() {

  return (
    <div>
      <img class="catgif" src={cat} alt="Cat" />
      <div class="container">
        <p class="hello">Hello People</p>
      </div>
    </div>
  );
}

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

export default App;
