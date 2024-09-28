import React from 'react';
import { BiMenuAltRight } from "react-icons/bi";


 import './Header.css'
import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

const Header = () => {
  const [menuopend, Setopend] = useState(false)
  const gamestyle = (menuopend)=>{
    if(document.documentElement.clientWidth <= 800){
      return{right: !menuopend && "-100%"}
    }
  }
  return (
    <section className='h-wrapper'>
        <div className="  h-container  inner-width">
            <img src="./logo.png" alt="log0" />
            <OutsideClickHandler onOutsideClick={()=>{
              Setopend(false)
            }}> 
            <div className="h-menu" style={gamestyle(menuopend)}>
                <a href="" >Residencies</a>
                <a href="" >Our value</a>
                <a href="" >Contact Us</a>
                <a href="" >Get Started</a>
                <button className='button'>
                    <a href="">Contact</a>
                </button>

            </div>
            </OutsideClickHandler>
            <div className="menu-icon" onClick={()=>{Setopend((prev)=>!prev)}}>
        <BiMenuAltRight size={30} />

        </div>
        </div>
        
    </section>
  )
}

export default Header
