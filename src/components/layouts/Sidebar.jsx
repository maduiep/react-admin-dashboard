import React from 'react'
import { Link } from 'react-router-dom'
import {LineStyle, 
     Timeline, 
     TrendingUp, 
     PermIdentity,
     AttachMoney,
     MailOutline, 
     Storefront, 
     BarChart, 
     DynamicFeed, 
     WorkOutline,
     ChatBubbleOutline, 
     Report} from '@material-ui/icons'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__wrapper">
                <div className="sidebar__menu">
                    <h3 className="sidebar__title">Dashboard</h3>
                    <ul className="sidebar__list">
                        <Link to="/home" className="link">
                            <li className="item active">
                                <LineStyle className="item__icon"/>
                                Home
                            </li>
                        </Link>
                        <li className="item">
                            <Timeline className="item__icon"/>
                            Anaytics
                        </li>
                        <li className="item">
                            <TrendingUp className="item__icon"/>
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebar__menu">
                    <h3 className="sidebar__title">Quick Menu</h3>
                    <ul className="sidebar__list">
                        <Link to="/users" className="link">
                            <li className="item">
                                <PermIdentity className="item__icon"/>
                                Users
                            </li>
                        </Link>
                        <Link to="/products" className="link">
                            <li className="item">
                                <Storefront className="item__icon"/>
                                Products
                            </li>
                        </Link>
                        <li className="item">
                            <AttachMoney className="item__icon"/>
                            Transactions
                        </li>
                        <li className="item">
                            <BarChart className="item__icon"/>
                            Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebar__menu">
                    <h3 className="sidebar__title">Notifications</h3>
                    <ul className="sidebar__list">
                        <li className="item">
                            <MailOutline className="item__icon"/>
                            Mail
                        </li>
                        <li className="item">
                            <DynamicFeed className="item__icon"/>
                            Feedback
                        </li>
                        <li className="item">
                            <ChatBubbleOutline className="item__icon"/>
                            Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebar__menu">
                    <h3 className="sidebar__title">Staff</h3>
                    <ul className="sidebar__list">
                        <li className="item">
                            <WorkOutline className="item__icon"/>
                            Manage
                        </li>
                        <li className="item">
                            <Timeline className="item__icon"/>
                            Anaytics
                        </li>
                        <li className="item">
                            <Report className="item__icon"/>
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
