import logo from '../src/assets/gif/in-progress.gif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to diego-tellez.com
        </p>
        <p class="landing__career">
          SOFTWARE DEVELOPER
        </p>
        <p>Check some of my <a
          className="App-link"
          href="https://github.com/dtellz"
          target="_blank"
          rel="noopener noreferrer"
        >
          best projects
        </a> </p>

        <p>Visit my <a
          className="App-link"
          href="https://www.linkedin.com/in/diegotellezbarrero/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a> </p>


      </header>
    </div>
  );
}

export default App;
