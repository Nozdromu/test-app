import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react'
axios.defaults.port = 3001;

function App() {
  const [ip, setip] = useState('')

  useEffect(() => {
    axios({
      method: 'get',
      port: 3001,
      url: '/ip',
      proxy: {
        port: 3001
      }
    }).then((data) => {
      console.log(data)
      setip(data.data)
    }).catch((err) => {
      console.log(err)
    })
    // axios.get('/ip').then((data) => {
    //   console.log(data)
    //   setip(data.data)
    // }).catch((err) => {
    //   console.log(err)
    // })
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          ip: {ip}
        </a>
      </header>
    </div>
  );
}

export default App;
