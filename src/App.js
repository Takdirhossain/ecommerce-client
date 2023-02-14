import logo from './logo.svg';
import './App.css';
import Nav from './components/navbar/Nav';
import Flashsale from './components/flashsale/Flashsale';
import Slider from './components/slider/Slider';
import Category from './components/category/Category';
import Feturedproduct from './components/feturedproduct/Feturedproduct';
import Footer from './components/footer/Footer';
import Loadmore from './components/loadmorebtn/Loadmore';
import Home from './pages/Home';
import { RouterProvider } from 'react-router-dom';
import router from './routes/Route';

function App() {
  return (
   <RouterProvider router={router}>

   </RouterProvider>
  );
}

export default App;
