import React, { useState } from 'react';
import Home from './components/Home/Home.jsx';
import Services from './components/Services/Services.jsx';
import Projects from './components/Projects/Projects.jsx';
import Footer from './components/Footer/Footer.jsx';
import Contact from './components/Contact/Contact.jsx';
import './App.css';

//----------------------------------------------------------------
// PreloadScreen:
function App() {
  //PreLoadScreen
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById('spinner');
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = 'none';
      setLoading(false);
    }, 1050);
  }
  //----------------------------------------------------------------
  //Current App:
  return (
    !loading && (
      <main>
        <Home />
        <Services />
        <Projects />
        <Contact />
        <Footer />
      </main>
    )
  );
}

export default App;
