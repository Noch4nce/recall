import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import CountComponent from './CountComponent/CountComponent';
import FormComponent from './FormComponent/FormComponent';
import TransferComponent from './TransferComponent/TransferComponent';

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
          <FormComponent />
          <TransferComponent />
        </section>
      </main>
    </div>
  );
}

export default App;
