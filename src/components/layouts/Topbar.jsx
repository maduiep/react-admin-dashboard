import React from 'react'
import {NotificationsNone, Language, Settings} from '@material-ui/icons'
import { BASE_URL } from '../../CommonVariable'

function Topbar() {
    return (
        <div className="topbar">
            <div className="topbar__wrapper">
                <div className="topbar__wrapper-left">
                    <span className="logo">Admin</span>
                </div>
                <div className="topbar__wrapper-right">
                    <div className="icons">
                        <NotificationsNone />
                        <span className="badge">2</span>
                    </div>
                    <div className="icons">
                        <Language />
                        <span className="badge">2</span>
                    </div>
                    <div className="icons">
                        <Settings />
                    </div>
                    <img className="profile"
                        src={`${BASE_URL}/images/img-0.jpg`}
                        alt="img" 
                    />
                </div>
            </div>
        </div>
    )
}

export default Topbar
