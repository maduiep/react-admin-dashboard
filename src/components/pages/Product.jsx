import React from 'react'
import { Link } from 'react-router-dom'
import Chart from '../../components/features/Chart'
import { productData } from '../../commonData'
import {BASE_URL} from '../../CommonVariable'
import { Publish } from '@material-ui/icons'

function Product() {
    return (
        <div className="product">
            <div className="product__titleContainer">
                <h1 className="product__title">Product</h1>
                <Link to="/newProduct">
                    <button className="product__addBtn">Create</button>
                </Link>
            </div>

            <div className="product__top">
                <div className="product__topLeft">
                    <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
                </div>
                <div className="product__topRight">
                    <div className="product__topInfo">
                    <img className="product__profile"
                        src={`${BASE_URL}/images/img-5.jpg`}
                        alt="img" 
                    />
                    <span className="product__name">iPhone and Watch</span>
                    </div>
                    <div className="product__bottompInfo">
                        <div className="product__infoItem">
                            <span className="product__infoKey">id:</span>
                            <span className="product__infoValue">123</span>
                        </div>

                        <div className="product__infoItem">
                            <span className="product__infoKey">sales:</span>
                            <span className="product__infoValue">5,423</span>
                        </div>

                        <div className="product__infoItem">
                            <span className="product__infoKey">active:</span>
                            <span className="product__infoValue">yes</span>
                        </div>

                        <div className="product__infoItem">
                            <span className="product__infoKey">in stock:</span>
                            <span className="product__infoValue">no</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product__bottom">
                <form className="product__form">
                    <div className="product__formLeft">
                        <label>Product Name</label>
                        <input type="text" placeholder="iPhone and Watch" />
                        <label>In Stock</label>
                        <select name="inStock" id="inStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>

                        <label>Active</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="product__formRight">
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
                        <button className="product__updateBtn">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Product
