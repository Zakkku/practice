import logo from './logo_transparent.png';  
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Click below to view my
        </p>
        <a
          className="App-link"
          href="https://zach-japan.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Portfolio
        </a>
        
      </header>
    </div>
  );
}

export default App;
