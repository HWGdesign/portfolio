import { Icon } from './components/Icons/Icon.jsx';
import './App.css';

function App() {
  return (
    <div>
      <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
        <span style={{ color: 'blue', width: '2rem' }}>
          <Icon.Arrow />
        </span>
      </span>
    </div>
  );
}

export default App;
