import logo from './logo_transparent.png';  
import './App.css';
import logo2 from './logo.svg';
import HelloText from './HelloText';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <HelloText />
        
        <img className="React-logo"  src={logo2} alt="react logo"></img>
      </header>
      
    </div>
  );
}

export default App;
