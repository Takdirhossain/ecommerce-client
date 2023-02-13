import logo from './logo.svg';
import './App.css';
import Nav from './components/navbar/Nav';
import Flashsale from './components/flashsale/Flashsale';
import Slider from './components/slider/Slider';
import Category from './components/category/Category';

function App() {
  return (
    <div className="App">
     <Nav></Nav>
     <Slider></Slider>
     <Flashsale></Flashsale>
     <Category></Category>
    </div>
  );
}

export default App;
