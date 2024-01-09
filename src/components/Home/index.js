import {Component} from "react"

import { format } from 'date-fns';
import { CgProfile } from "react-icons/cg";
// import { FaAngleDown } from "react-icons/fa";
import { FaCalendarWeek } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { FaArrowRight } from "react-icons/fa6";
import Charts from "../Charts"
import Sidebar from "../Sidebar"
import Calender from "../Calender"
import PieChart from "../Piechart";
import "./index.css"

class Home extends Component{

    state={showCalender:false}

    onClickCalendar = (event) => {
        this.setState((prevState) => ({ showCalendar: !prevState.showCalendar }));
    }

    render(){
        const {showCalender} = this.state
        let currentDate = format(new Date(), 'MMMM do yyyy');

        return(
            <div className="app-container">
                <Sidebar/>
                <div className="dash-board-container">
                    <div className="profile-row">
                        <div className="profile-container">
                            <CgProfile className="home-prof-icon"/>
                            <div className="profile-name-container">
                                <h1 className="name">Good Morning Oguz</h1>
                                <p className="date-line">Here are Your stats for Today, {currentDate}</p>
                            </div>
                        </div>
                        <div className="cal-drop-container">
                            <button className="cal-button" type="button" onClick={this.onClickCalendar}>
                                <FaCalendarWeek className="cal-icon"/>
                                <p className="cal-name">Today</p>
                            </button>
                            {
                                showCalender? <Calender/>: null
                            }
                            <p className="bet-matter">Compared to</p>
                            <select className="drop-down">
                                <option className="options">
                                    Previous Period
                                </option>
                                <option className="options">Previous Week</option>
                                <option className="options">Previous Month</option>
                                <option className="options">Previous Year</option>
                            </select>
                        </div>
                    </div>
                    <div className="details-container">
                        <div className="details">
                            <p className="detail-head">
                                Total Revenue
                                <span className="reven-percent">+12.5%</span>
                            </p>
                            <h1 className="amount-figure">$32,621.72</h1>
                            <p className="ex-details">433 Orders</p>
                        </div>
                        <div className="details extra">
                            <p className="detail-head">
                                Subscribers
                                <span className="reven-percent">+32.5%</span>
                            </p>
                            <h1 className="amount-figure">484,205</h1>
                            <p className="ex-details">$56 Average Order</p>
                        </div>
                        <div className="details extra">
                            <p className="detail-head">
                                Conversations
                                <span className="dec-percent">-3.4%</span>
                            </p>
                            <h1 className="amount-figure">552,553</h1>
                            <p className="ex-details">5min Average Response Time</p>
                        </div>
                        <div className="details extra">
                            <p className="detail-head">
                                Popup Conversion Rate
                                <span className="reven-percent">+32.5%</span>
                            </p>
                            <h1 className="amount-figure">25%</h1>
                            <p className="ex-details">5% Sales Conversion Rate</p>
                        </div>
                    </div>
                    <Charts/>

                    <div className="bottom-container">
                        <div className="tabs-container">
                            <div className="tabs-list">
                                <button className="tab-btn-home">
                                    <p className="tab-name">Automations</p>
                                </button>
                                <button className="tab-btn-home">
                                    <p className="tab-name">Campaigns</p>
                                </button>
                                <button className="tab-btn-home">
                                    <p className="tab-name">Segments</p>
                                </button>
                                <select className="bottom-drop-down">
                                    <option className="bottom-optins">
                                        Last Month
                                    </option>
                                    <option className="bottom-optins">
                                        Last Year
                                    </option>
                                    <option className="bottom-optins">
                                        Last 5 Years
                                    </option>
                                </select>
                            </div>
                            <div className="tab-item">
                                <div className="list-item">
                                    <TiShoppingCart className="cart-icon"/>
                                    <div className="item-info-container">
                                        <h1 className="item-info-heading">
                                            Abondoned Cart 7 Days
                                            <span className="forward-arrow">
                                                <FaArrowRight />
                                            </span>
                                        </h1>
                                        <p className="item-info-para">4024 Sent | 124 Clicks</p>
                                    </div>
                                    <div className="item-pricing">
                                        <h1 className="item-price">$5231</h1>
                                        <p className="item-des">41 Orders | $150 AOV</p>
                                    </div>
                                </div>
                                <div className="list-item">
                                    <TiShoppingCart className="cart-icon"/>
                                    <div className="item-info-container">
                                        <h1 className="item-info-heading">
                                            Abondoned Cart 15 Min
                                            <span className="forward-arrow">
                                                <FaArrowRight />
                                            </span>
                                        </h1>
                                        <p className="item-info-para">4024 Sent | 124 Clicks</p>
                                    </div>
                                    <div className="item-pricing">
                                        <h1 className="item-price">$24521</h1>
                                        <p className="item-des">41 Orders | $150 AOV</p>
                                    </div>
                                </div>
                                <div className="list-item">
                                    <TiShoppingCart className="cart-icon"/>
                                    <div className="item-info-container">
                                        <h1 className="item-info-heading">
                                            Abondoned Cart 15 Min
                                            <span className="forward-arrow">
                                                <FaArrowRight />
                                            </span>
                                        </h1>
                                        <p className="item-info-para">4024 Sent | 124 Clicks</p>
                                    </div>
                                    <div className="item-pricing">
                                        <h1 className="item-price">$24521</h1>
                                        <p className="item-des">41 Orders | $150 AOV</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="half-chart-con">
                            <h1 className="level-head">Lavel 5
                                <span>
                                    <FaArrowRight className="arrow"/>
                                </span>
                            </h1>
                            <p className="level-para">
                                +320,050 in the last month
                            </p>
                            <PieChart value={75} />
                            <h1 className="level-price">
                                $14,495
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home