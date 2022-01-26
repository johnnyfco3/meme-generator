//import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Meme from './Components/Meme';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='body'>
        <Meme />
      </div>
    </div>
  );
}

export default App;
