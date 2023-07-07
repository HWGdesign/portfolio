import React, { useState } from 'react';
import { Icon } from './components/Icons/Icon.jsx';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById('spinner');
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = 'none';
      setLoading(false);
    }, 2000);
  }

  return (
    !loading && (
      <div>
        <div className=' bg-slate-100'>
          <span className='flex items-center justify-center p-4'>
            <span className=' text-stone-900 w-4 '>
              <Icon.Arrow />
            </span>
          </span>
        </div>
      </div>
    )
  );
}

export default App;
