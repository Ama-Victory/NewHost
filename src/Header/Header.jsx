import React from 'react'
import "./header.css"
import { IoHome } from "react-icons/io5";
import { IoPeople } from "react-icons/io5";
import { IoIosBriefcase } from "react-icons/io";
import { AiFillMessage } from "react-icons/ai";
import { IoNotifications } from "react-icons/io5";
import { MdViewCompact } from "react-icons/md";
import Nail from "../assets/BabyGirl.jpg"
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="headerInner">
        <div className="logoDiv">
          <h3 className="logo">in</h3>
          {/* <div> */}
          <input type="text" placeholder="search" className="search" />
          <CiSearch className="SearchIcon" />

          {/* </div> */}
        </div>
        <div className="icons">
          <div className="logoNow">
            <IoHome size={30}  />
            <p>Home</p>
          </div>

          <div className="logoNow">
            <IoPeople size={30} />
            <p>My network</p>
          </div>

          <div className="logoNow">
            <IoIosBriefcase size={30} />
            <p>Jobs</p>
          </div>

          <div className="logoNow">
            <AiFillMessage size={30} />
            <p>Messaging</p>
          </div>

          <div className="logoNow">
            <IoNotifications size={30} />
            <p>Notifications</p>
          </div>

          <div className="logoNow">
            <img src={Nail} alt="" className="img" />
            <p>Me</p>
          </div>
        </div>
        <div className="LastPart">
          <div>
            <MdViewCompact className='mdView' size={30} />
            <p>For Business</p>
          </div>
          <div className='PTags'>
            <p>Don't Miss</p>
            <p>Premium for NGNO</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header