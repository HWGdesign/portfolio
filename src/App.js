import React, { useState } from 'react';
import { Icon } from './components/Icons/Icon.jsx';
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
    }, 2000);
  }

  //----------------------------------------------------------------
  //Current App:
  return (
    !loading && (
      <div>
        <div className=' bg-gray-light'>
          <span className='flex items-center justify-center p-4'>
            <span className=' text-stone-900 w-20 text-dark '>
              <Icon.Logo />
            </span>
          </span>
        </div>

        <div className='grid grid-rows-2 items-center justify-center p-4'>
          <h1>Here will be something cool. I guess...</h1>
          <span className='flex items-center justify-center'>
            <span className=' text-stone-900 w-4 text-dark '>
              <Icon.Arrow />
            </span>
          </span>
        </div>

        <Footer />
      </div>
    )
  );
}

export default App;
