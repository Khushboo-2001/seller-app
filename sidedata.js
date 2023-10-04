import React, { useState } from "react";
import "./side.css";
import { list } from "./data";
import { FaLocationDot } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";
import { FaBed } from "react-icons/fa6";
import { FaBath } from "react-icons/fa6";
import { FaUpDownLeftRight } from "react-icons/fa6";
import {FaRegHeart } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";

// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const SideBar = () => {

    const[showMore,setshowMore]=useState(6)

    // const toggleshowMore = () => {
    //     setshowMore(!showMore);
    //   };
    const loadMore = () =>{
        setshowMore(showMore+showMore);
    }
    const slice=list.slice(0,showMore);

  return (
    <>
      <div className="side-estate">
        <ul className="container-grid">
          {slice.map((list) => {
            const { id, photo, type, price, name } = list;
            return (
                <div className="newlist">
              <li key={id} >
                <div style={{display:'flex'}}>
              <div style={{ background:'white', height:'30px', width:'80px', fontSize:'15px', display:"flex" , marginLeft:'20px', marginTop:'20px', paddingTop:'3px', paddingLeft:"15px", borderColor:"white", borderRadius:'20px',color:'blue'} }>{type}</div>
                <div style={{ background:'white', height:'30px', width:'30px', fontSize:'15px', display:"flex" , marginLeft:'250px', marginTop:'20px', paddingTop:'5px', paddingLeft:"5px", borderColor:"white", borderRadius:'100%',color:'blue'} }><FaRegHeart/></div>
              </div>
                <img src={photo} style={{marginTop:'20px', borderRadius:"10px", width:'353px', height:"250px"}}/>

                <p style={{textAlign:'start', marginLeft:'40px'}}><FaLocationDot/>8558 liberty </p>
                <p style={{textAlign:'start', marginLeft:'40px'}}> {name}</p>
                <div  className="titleIcon" >
                  <span style={{marginLeft:'15px'}} ><FaHouse/> </span>
                  <span style={{marginLeft:'10px'}}><FaBed/> </span>
                  <span><FaBath/> </span>
                  <span><FaUpDownLeftRight/></span>
                </div>
                <div className="title">
                  <span>3 Room </span>
                  <span>4 Bed </span>
                  <span>1 Bath </span>
                  <span>732 sft</span>
                </div>
                <p
                  className="price-tag"
                  style={{
                    fontSize: "20px",
                    color: "blue",
                    fontWeight: "900",
                  }}
                >
                  {price}
                  <span style={{color:'grey', fontSize:'15px', fontWeight:'100'}}>/month</span>{" "}
                  <span style={{ marginLeft: "140px" }}>
                    <button
                      style={{
                        height: "30px",
                        width: "110px",
                        fontSize: "12px",
                      }}
                    >
                      Read more
                    </button>
                  </span>
                </p>
              </li>
              </div>
            );
          })}
        </ul>
        <button onClick={()=>loadMore()} style={{  marginLeft:'600px',width:'200px'}}> <FaChevronDown/> Show More</button>
        
      </div>
    </>
  );
};

export default SideBar;
