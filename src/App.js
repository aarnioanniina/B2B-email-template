
import './styles/App.css';
import images from './images/images';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>sähköpostipohja</h1>
        <p>testing</p>
        <a  href="https://www.ikea.com/fi/fi/ikea-business/" target="_blank"> <img className='office-image' src={images.defaultOffice} />
       </a>

      </header>
    </div>
  );
}

export default App;
