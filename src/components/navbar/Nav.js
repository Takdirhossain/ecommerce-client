import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./nav.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from "react";
import LoginIcon from '@mui/icons-material/Login';
const Nav = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
      }
      useEffect(() => {

        const changeWidth = () => {
          setScreenWidth(window.innerWidth);
        }
    
        window.addEventListener('resize', changeWidth)
    
      }, [])
  return (
    <div className="navwarpper">
      <div className="logo">
        <h2>Logo</h2>
      </div>
     
      
     
      {( toggleMenu || screenWidth >800) && (
        <div className="naviteam">
        <span>Home</span>
        <span>Shop</span>
        <span>Product</span>
        <span>About</span>
        <span>Contact</span>
        
        <span> <ShoppingCartIcon  /></span>
           <span> <LoginIcon/> </span>
      <span >  <input type="search" name=""   placeholder="search product" />
       </span>
        
        <div className="navaccount">
           
       
        <button className="loginbutton"  id="bigscreen">Login</button>
      </div>
      </div>
      )
      }
     
     
        <MenuIcon className="mobiletoggle" onClick={toggleNav} />
     
    </div>
  );
};

export default Nav;
