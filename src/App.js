import logo from './logo.svg';
import './App.css';
import CountComponent from './CountComponent/CountComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <main>
        <section>
          <CountComponent />
        </section>
      </main>
    </div>
  );
}

export default App;
