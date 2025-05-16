import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Slider from './components/Slider';
import ProductsList from './components/ProductsList';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Slider />
      <ProductsList />
    </div>
  );
}

export default App;
