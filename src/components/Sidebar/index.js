import { FaSearch,FaFireAlt } from "react-icons/fa";
import { RiHome3Fill } from "react-icons/ri";
import { IoMdSwitch,IoIosSwitch } from "react-icons/io";
import { BiBarChartSquare,BiMessageAltDetail } from "react-icons/bi";
import { TiMessages } from "react-icons/ti";
import { PiCircleNotchFill } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";

import "./index.css"

const Sidebar = () => {
    return(
        <div className="side-bar-container">
            <div className="side-main-container">
                <img src="https://res.cloudinary.com/dadmzulfj/image/upload/v1704775128/istaarrwv7gwsytdvnet.jpg" className="logo" alt="logo" />
                <div className="search-container">
                    <FaSearch className="search-icon" />
                    <input
                        placeholder="Search..."
                        type="search"
                        className="input-ele"
                    />
                </div>
                <div className="tab-con-first">
                    <button className="side-btn">
                        <RiHome3Fill className="tab-icon-first" />
                        <p className="tab-text">Dashboard</p>
                    </button>
                    
                </div>
                <hr className="side-sep" />

                <div className="tab-con">
                    <button className="side-btn">
                        <FaFireAlt className="tab-icon" />
                        <p className="tab-text">Conversations</p>
                    </button>
                </div>
                <div className="tab-con">
                <button className="side-btn">
                    <IoMdSwitch className="tab-icon" />
                    <p className="tab-text">Automations</p>
                </button>
                </div>
                <div className="tab-con">
                <button className="side-btn">
                    <BiBarChartSquare className="tab-icon" />
                    <p className="tab-text">Campaigns</p>
                </button>
                </div>
                <div className="tab-con">
                    <button className="side-btn">
                        <TiMessages className="tab-icon" />
                        <p className="tab-text">Popup</p>
                    </button>
                </div>
                <div className="tab-con">
                    <button className="side-btn">
                        <BiMessageAltDetail className="tab-icon" />
                        <p className="tab-text">Livechat</p>
                    </button>
                </div>
                <div className="tab-con">
                    <button className="side-btn">
                        <PiCircleNotchFill className="tab-icon" />
                        <p className="tab-text">Segments</p>
                    </button>
                </div>
                <div className="tab-con">
                    <button className="side-btn">
                        <IoIosSwitch className="tab-icon" />
                        <p className="tab-text">Integrations</p>
                    </button>
                </div>
            </div>
            <div className="profile-con">
                <CgProfile className="profile-pic"/>
                <div className="name-con">
                    <h1 className="Profile-name-head">
                        Oguz Yagiz Kara
                    </h1>
                    <p className="Profile-name-para">
                        Store Name
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar