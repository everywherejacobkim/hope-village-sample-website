import './App.css';
import MainBg from './components/MainBg';
import { NavBar } from './components/NavBar';
import ProductGrids from './components/ProductGrids/index';

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainBg />
      <ProductGrids />
    </div>
  );
}

export default App;
