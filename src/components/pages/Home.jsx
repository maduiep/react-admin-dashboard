import React from 'react'
import FeaturedInfo from '../features/FeaturedInfo'
import Chart from '../features/Chart'
import { userData } from '../../commonData'
import WidgetSm from '../widgets/WidgetSm'
import WidgetLg from '../widgets/WidgetLg'

function Home() {
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
            <div className="home__widgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}

export default Home
