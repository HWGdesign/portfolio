import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import Headroom from 'react-headroom';
//Components:
import Navigation from './components/Navigation/Navigation.jsx';
import Home from './components/Home/Home.jsx';
import Services from './components/Services/Services.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';
import Footer from './components/Footer/Footer.jsx';
import Contact from './components/Contact/Contact.jsx';

import './App.css';

// PreloadScreen:
function App() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById('spinner');

  if (spinner) {
    setTimeout(() => {
      spinner.style.display = 'none';
      setLoading(false);
    }, 1050);
  }

  //DarkMode
  const [darkMode, setDarkMode] = useState(true);

  //Current App:
  return (
    !loading && (
      <body class={darkMode && 'dark'}>
        <main class='bg-white dark:bg-dark'>
          <Headroom>
            <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
          </Headroom>
          <Fade>
            <Home />
            <Services />
            <Portfolio />
            <Contact />
          </Fade>
          <Footer />
        </main>
      </body>
    )
  );
}

export default App;
