import logo from './../logo.svg';
import '../Styles/App.css';
import {useState, useEffect} from 'react';

function App() {

  const [puntos, setPuntos] = useState(0)

    useEffect(() =>{
      }, puntos)

  return (
    <div className="App">
      <header className="App-header">
        <a onClick={()=>setPuntos(puntos+1)}><img src={logo} className="App-logo" alt="logo" user-select="none"/></a>
        <p>
          Galletas React Horneadas 
          {puntos}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Darle un beso a farina
        </a>
      </header>
    </div>
  );
}

export default App;
