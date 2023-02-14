import logo from './logo.svg';
import './App.css';
import Nav from './components/navbar/Nav';
import Flashsale from './components/flashsale/Flashsale';
import Slider from './components/slider/Slider';
import Category from './components/category/Category';
import Feturedproduct from './components/feturedproduct/Feturedproduct';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
     <Nav></Nav>
     <Slider></Slider>
     <Flashsale></Flashsale>
     <Category></Category>
     <Feturedproduct></Feturedproduct>
     <Footer></Footer>
    </div>
  );
}

export default App;
