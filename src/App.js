import { Icon } from './components/Icons/Icon.jsx';
import './App.css';

function App() {
  return (
    <div>
      <div className=' bg-slate-100'>
        <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
          <span style={{ color: 'blue', width: '3rem' }}>
            <Icon.TypeScript />
          </span>
        </span>
      </div>
    </div>
  );
}

export default App;
