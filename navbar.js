import React, { useState } from "react";
import { links } from "./data";
import './nav.css';
import { FaArrowRight } from "react-icons/fa";


const Navbar = () => {
  
 

  return (
    <nav>
     
      <div className="nav-center">
        
        <div className="nav-header">
          <div className=" links-container ">
          <ul className='links' >
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}
                >
                  
                  <a   className='list' 
                  href={url}>{text}</a>
                </li>

                
              );
            })}
          <button style={{ marginLeft:'700px'}} >View all <FaArrowRight/> </button>
          </ul>
          </div>
          
          
         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
