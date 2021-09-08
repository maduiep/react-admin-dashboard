import React from 'react'
import FeaturedInfo from '../features/FeaturedInfo'
import Chart from '../features/Chart'
import { userData } from '../../commonData'

function Home() {
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
        </div>
    )
}

export default Home
