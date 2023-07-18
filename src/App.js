import React, { useState } from 'react';
import { Icon } from './components/Icons/Icon.jsx';
import Services from './components/Services/Services.jsx';
import Projects from './components/Projects/Projects.jsx';
import Footer from './components/Footer/Footer.jsx';
import './App.css';

//----------------------------------------------------------------
// PreloadScreen:
function App() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById('spinner');
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = 'none';
      setLoading(false);
    }, 1350);
  }
  //----------------------------------------------------------------
  //Current App:
  return (
    !loading && (
      <div>
        <Services />
        <Projects />
        <Footer />
      </div>
    )
  );
}

export default App;
