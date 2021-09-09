import React from 'react'
import { Visibility } from '@material-ui/icons'
import {BASE_URL} from '../../CommonVariable'

function WidgetSm() {
    return (
        <div className="widgetSm">
            <span className="widgetSm__title">New Join Members</span>
            <ul className="widgetSm__list">
                <li className="widgetSm__item">
                    <img className="widgetSm__profile"
                            src={`${BASE_URL}/images/img-1.jpg`}
                            alt="img" 
                    />
                    <div className="widgetSm__user">
                        <span className="widgetSm__username">Emmanuel Madu IP</span>
                        <span className="widgetSm__UserTitle">
                            Software Engineer
                        </span>
                    </div>
                    <button className="widgetSm__btn">
                        <Visibility className="widgetSm__icon" />
                        Display
                    </button>
                </li>

                <li className="widgetSm__item">
                    <img className="widgetSm__profile"
                            src={`${BASE_URL}/images/img-1.jpg`}
                            alt="img" 
                    />
                    <div className="widgetSm__user">
                        <span className="widgetSm__username">Emmanuel Madu IP</span>
                        <span className="widgetSm__UserTitle">
                             Software Engineer
                        </span>
                    </div>
                    <button className="widgetSm__btn">
                        <Visibility  className="widgetSm__icon" />
                        Display
                    </button>
                </li>

                <li className="widgetSm__item">
                    <img className="widgetSm__profile"
                            src={`${BASE_URL}/images/img-1.jpg`}
                            alt="img" 
                    />
                    <div className="widgetSm__user">
                        <span className="widgetSm__username">Emmanuel Madu IP</span>
                        <span className="widgetSm__UserTitle">
                            Software Engineer
                        </span>
                    </div>
                    <button className="widgetSm__btn">
                        <Visibility  className="widgetSm__icon" />
                        Display
                    </button>
                </li>

                <li className="widgetSm__item">
                    <img className="widgetSm__profile"
                            src={`${BASE_URL}/images/img-1.jpg`}
                            alt="img" 
                    />
                    <div className="widgetSm__user">
                        <span className="widgetSm__username">Emmanuel Madu IP</span>
                        <span className="widgetSm__UserTitle">
                            Software Engineer
                        </span>
                    </div>
                    <button className="widgetSm__btn">
                        <Visibility  className="widgetSm__icon" />
                        Display
                    </button>
                </li>

                <li className="widgetSm__item">
                    <img className="widgetSm__profile"
                            src={`${BASE_URL}/images/img-1.jpg`}
                            alt="img" 
                    />
                    <div className="widgetSm__user">
                        <span className="widgetSm__User-title">Emmanuel Madu IP</span>
                        <span className="widgetSm__UserTitle">
                            Software Engineer
                        </span>
                    </div>
                    <button className="widgetSm__btn">
                        <Visibility  className="widgetSm__icon" />
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default WidgetSm
