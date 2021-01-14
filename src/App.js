import logo from './logo.svg';
import './App.css';

function App() {
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
          learn react
          {/* docker run -it -p 3000:3000 -v /usr/src/app/node_modules -v $(pwd):/usr/src/app syglee7/docker-react-app */}

          {
            /* docker 환경에서 테스트 명려어
            docker run -it syglee7/docker-react-app npm run test
             */
          }
        </a>
      </header>
    </div>
  );
}

export default App;
