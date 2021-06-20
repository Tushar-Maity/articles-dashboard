import React, { useState } from 'react'

import './Dashboard.css'

import Sidebar from './Sidebar'
import NewsFeed from './NewsFeed'

const Dashboard = ({ data }) => {

    const [cardView, setCardView] = useState(false)
    const [listView, setListView] = useState(true)

    return (
        <div className="container">
            <Sidebar 
            cardView={cardView} 
            setCardView={setCardView} 
            listView={listView} 
            setListView={setListView}/>

            <NewsFeed 
            data={data} 
            cardView={cardView} 
            listView={listView}/>
        </div>
    )
}

export default Dashboard
