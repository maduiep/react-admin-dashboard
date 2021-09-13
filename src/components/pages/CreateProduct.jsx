import React from 'react'
import {BASE_URL} from '../../CommonVariable'
import { Publish } from '@material-ui/icons'

function CreateProduct() {
    return (
        <div className="createProduct">
            <h1 className="createUser__title">New product</h1>
           <form className="createUser__form">
               <div className="createUser__item">
                   <label>Product Name</label>
                   <input type="text" placeholder="iPhone and Watch" />
               </div>

               <div className="createUser__item">
                   <label>Product Type</label>
                   <input type="text" placeholder="Apple" />
               </div>

               <div className="createUser__item">
                   <label>Stock</label>
                   <input type="password" placeholder="123" />
               </div>

               <div className="createUser__item">
                   <label>Active</label>
                   <select className="createUser__select" name="active" id="active">
                       <option value="yes">Yes</option>
                       <option value="no">No</option>
                   </select>
               </div>
               <div className="createUser__item">
               <div className="product__upload">
                    <img className="product__updateProfile"
                        src={`${BASE_URL}/images/img-5.jpg`}
                        alt="img" 
                    />
                    <label for="file">
                        <Publish />
                    </label>
                    <input type="file" id="file" style={{display: 'none'}} />
                </div>
               <button className="createUser__Btn">Create</button>
               </div>
           </form>
        </div>
    )
}

export default CreateProduct
