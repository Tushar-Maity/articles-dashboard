import React from 'react'

import './Dashboard.css'

import Sidebar from './Sidebar'
import NewsFeed from './NewsFeed'

const Dashboard = () => {
    return (
        <div className="container">
            <Sidebar />
            <NewsFeed />
        </div>
    )
}

export default Dashboard
