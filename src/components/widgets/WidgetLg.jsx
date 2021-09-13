import React from 'react'
import {BASE_URL} from '../../CommonVariable'

function WidgetLg() {

    const Button = ({type}) => {
        return <button className={"widgetLg__btn " + type}>{type}</button>
    }
    return (
        <div className="widgetLg">
            <h3 className="widgetLg__title">Latest Transactions</h3>
            <table className="widgetLg__table">
                <tr className="widgetLg__tr">
                    <th className="widgetLg__th">Customer</th>
                    <th className="widgetLg__th">Date</th>
                    <th className="widgetLg__th">Amount</th>
                    <th className="widgetLg__th">Status</th>
                </tr>

                <tr className="widgetLg__tr">
                    <td className="widgetLg__user">
                        <img className="widgetLg__profile"
                            src={`${BASE_URL}/images/img-4.jpg`}
                            alt="img" 
                        />
                        <span className="widgetLg__username">
                            Emmanuel Madu IP
                        </span>
                    </td>
                    <td className="widgetLg__date">9 Aug 2021</td>
                    <td className="widgetLg__amount">$122.00</td>
                    <td className="widgetLg__status">
                        <Button type="Approved"/>
                    </td>
                </tr>

                <tr className="widgetLg__tr">
                    <td className="widgetLg__user">
                        <img className="widgetLg__profile"
                                src={`${BASE_URL}/images/img-4.jpg`}
                                alt="img" 
                        />
                        <span className="widgetLg__username">
                            Emmanuel Madu IP
                        </span>
                    </td>
                    <td className="widgetLg__date">9 Aug 2021</td>
                    <td className="widgetLg__amount">$122.00</td>
                    <td className="widgetLg__status">
                        <Button type="Declined"/>
                    </td>
                </tr>

                <tr className="widgetLg__tr">
                    <td className="widgetLg__user">
                        <img className="widgetLg__profile"
                                src={`${BASE_URL}/images/img-4.jpg`}
                                alt="img" 
                        />
                        <span className="widgetLg__username">
                            Emmanuel Madu IP
                        </span>
                    </td>
                    <td className="widgetLg__date">9 Aug 2021</td>
                    <td className="widgetLg__amount">$122.00</td>
                    <td className="widgetLg__status">
                        <Button type="Pending"/>
                    </td>
                </tr>

                <tr className="widgetLg__tr">
                    <td className="widgetLg__user">
                        <img className="widgetLg__profile"
                                src={`${BASE_URL}/images/img-4.jpg`}
                                alt="img" 
                        />
                        <span className="widgetLg__username">
                            Emmanuel Madu IP
                        </span>
                    </td>
                    <td className="widgetLg__date">9 Aug 2021</td>
                    <td className="widgetLg__amount">$122.00</td>
                    <td className="widgetLg__status">
                        <Button type="Approved"/>
                    </td>
                </tr>

                <tr className="widgetLg__tr">
                    <td className="widgetLg__user">
                        <img className="widgetLg__profile"
                                src={`${BASE_URL}/images/img-4.jpg`}
                                alt="img" 
                        />
                        <span className="widgetLg__username">
                            Emmanuel Madu IP
                        </span>
                    </td>
                    <td className="widgetLg__date">9 Aug 2021</td>
                    <td className="widgetLg__amount">$122.00</td>
                    <td className="widgetLg__status">
                        <Button type="Approved"/>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default WidgetLg
