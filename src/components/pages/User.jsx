import React from 'react'
import { Link } from 'react-router-dom'
import {BASE_URL} from '../../CommonVariable'
import { PermIdentity, CalendarToday, PhoneAndroid, MailOutline, LocationSearching, Publish } from '@material-ui/icons'

function User() {
    return (
        <div className="user">
           <div className="user__info">
               <h1 className="user__title">Edit User</h1>
               <Link to="/createUser">
                <button className="user__addBtn">Create</button>
               </Link>
           </div>
           <div className="user__container">
               <div className="user__show">
                   <div className="user__showTop">
                   <img className="widgetLg__profile"
                        src={`${BASE_URL}/images/img-4.jpg`}
                        alt="img" 
                    />
                    <div className="user__showTopTitle">
                        <span className="user__showUsername">Emmanuel Madu IP</span>
                        <span className="user__showJob">Software Engineer</span>
                    </div>
                   </div>
                   <div className="user__showBottom">
                       <span className="user__showBottomTitle">Account Details</span>
                       <div className="user__showBottomInfo">
                        <PermIdentity className="user__showBottomIcon"/>
                        <span className="user__showBottomUserTitle">Madu IP</span>
                       </div>

                       <div className="user__showBottomInfo">
                        <CalendarToday className="user__showBottomIcon"/>
                        <span className="user__showBottomUserTitle">10.10.2000</span>
                       </div>

                       <span className="user__showBottomTitle">Contact Details</span>

                       <div className="user__showBottomInfo">
                        <PhoneAndroid className="user__showBottomIcon"/>
                        <span className="user__showBottomUserTitle">+2347067777571</span>
                       </div>

                       <div className="user__showBottomInfo">
                        <MailOutline className="user__showBottomIcon"/>
                        <span className="user__showBottomUserTitle">emmanuelmaduip@gmail.com</span>
                       </div>

                       <div className="user__showBottomInfo">
                        <LocationSearching className="user__showBottomIcon"/>
                        <span className="user__showBottomUserTitle">Enugu |    Nigeria</span>
                       </div>
                   </div>
               </div>
               <div className="user__update">
                    <span className="user__updateTitle">Edit</span>
                    <form className="user__updateForm">
                        <div className="user__updateLeft">
                            <div className="user__updateItem">
                                <label>Username</label>
                                <input type="text" placeholder="Madu IP" className="user__updateInput" />
                            </div>

                            <div className="user__updateItem">
                                <label>Fullanme</label>
                                <input type="text" placeholder="Emmanuel Madu IP" className="user__updateInput" />
                            </div>

                            <div className="user__updateItem">
                                <label>Email</label>
                                <input type="text" placeholder="emmanuelmaduip@gmail.com" className="user__updateInput" />
                            </div>

                            <div className="user__updateItem">
                                <label>Phone</label>
                                <input type="text" placeholder="+2347067777571" className="user__updateInput" />
                            </div>

                            <div className="user__updateItem">
                                <label>Address</label>
                                <input type="text" placeholder="Enugu | Nigeria" className="user__updateInput" />
                            </div>
                        </div>
                        <div className="user__updateRight">
                            <div className="user__updateUpload">
                            <img className="user__updateProfile"
                                src={`${BASE_URL}/images/img-4.jpg`}
                                alt="img" 
                            />
                            <label htmlFor="file"><Publish className="user__updateIcon" /> </label>
                            <input type="file" id="file" style={{display: 'none'}} />
                            </div>
                            <button className="user__updateBtn">Update</button>
                        </div>
                    </form>
               </div>
           </div>
        </div>
    )
}

export default User
