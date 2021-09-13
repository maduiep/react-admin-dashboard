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
           </form>
        </div>
    )
}

export default CreateUser
