import Reader, { useState } from 'react';
import './Header.css';
import logo from '../../Assets/Group114.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faClose } from '@fortawesome/free-solid-svg-icons'

const Header = () => {

const [toggle,setToggle] = useState(false);
const [togglename,setToggleNAme] = useState("mySidenav");  


  const handleToggleClick = () => {

    if(toggle === false){
      setToggle(true);
      setToggleNAme("mySidenav__active")
      console.log(toggle);
  
    }
    

  }

  const handleToggleClose = () => {

    if(toggle === true){
      setToggle(false);
      setToggleNAme("mySidenav")

      console.log(toggle);

    }

    

  }

return (
    <>
    <nav>
  <div className = "header">
  <div className = "header__inner">
  <div className = "header__inner__logo">
   <img src = {logo} />
  </div>
  <div className = "header__inner__links">
      <span>Home    </span>
      <span>Services</span>
      <span>Pricing </span>
      <span>About Us</span>
     <button className = "header__inner__button">Start a Company</button>
  </div>
  <div className = "header__inner__links--toggle" onClick = {()=>handleToggleClick()}> 
  <FontAwesomeIcon icon={faBars} />


  </div>  

  </div>
  </div>
  <div className = {togglename} onClick = {()=>handleToggleClose()} >
  <FontAwesomeIcon icon={faClose}/>
  <div className = "side__nav" >
      <a href = "https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_sidenav" target = "_blank">Home    </a>
      <div>Services</div>
      <div>Pricing </div>
      <div>About Us</div>
  </div>
  </div>
  </nav>
    </>
);
};

export default Header;