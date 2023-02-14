import React from 'react';
import Category from '../components/category/Category';
import Feturedproduct from '../components/feturedproduct/Feturedproduct';
import Flashsale from '../components/flashsale/Flashsale';
import Footer from '../components/footer/Footer';
import Nav from '../components/navbar/Nav';
import Slider from "../components/slider/Slider"
const Home = () => {
    return (
        <div>
           
           <Slider></Slider>
            <Flashsale></Flashsale>
            <Category></Category>
            <Feturedproduct></Feturedproduct>
           
        </div>
    );
};

export default Home;