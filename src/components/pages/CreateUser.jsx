import React from 'react'

function CreateUser() {
    return (
        <div className="createUser">
           <h1 className="createUser__title">New User</h1>
           <form className="createUser__form">
               <div className="createUser__item">
                   <label>Username</label>
                   <input type="text" placeholder="Madu IP" />
               </div>

               <div className="createUser__item">
                   <label>Fullname</label>
                   <input type="text" placeholder="Emmanuel Madu IP" />
               </div>

               <div className="createUser__item">
                   <label>Email</label>
                   <input type="text" placeholder="emmanuelmaduip@gmai.com" />
               </div>

               <div className="createUser__item">
                   <label>Password</label>
                   <input type="password" placeholder="password" />
               </div>

               <div className="createUser__item">
                   <label>Phone</label>
                   <input type="text" placeholder="+2347067777571" />
               </div>

               <div className="createUser__item">
                   <label>Address</label>
                   <input type="text" placeholder="Enugu | Nigeria" />
               </div>

               <div className="createUser__item">
                   <label>Gender</label>
                   <div className="createUser__gender">
                        <input type="radio" name="gender" id="male" value="male" />
                        <label for="male">Male</label>

                        <input type="radio" name="gender" id="female" value="female" />
                        <label for="female">Female</label>

                        <input type="radio" name="gender" id="other" value="other" />
                        <label for="other">Other</label>
                   </div>
               </div>

               <div className="createUser__item">
                   <label>Active</label>
                   <select className="createUser__select" name="active" id="active">
                       <option value="yes">Yes</option>
                       <option value="no">No</option>
                   </select>
               </div>

               <button className="createUser__Btn">Create</button>
           </form>
        </div>
    )
}

export default CreateUser
