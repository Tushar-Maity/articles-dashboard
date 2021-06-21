import React, { useState } from 'react'

import './Dashboard.css'

import Sidebar from './SideBar/Sidebar'
import NewsFeed from './ArticlesFeed/NewsFeed'
import FeedForm from './SideBar/FeedForm'

const Dashboard = ({ data, setData }) => {

    const [cardView, setCardView] = useState(false)
    const [listView, setListView] = useState(true)

    const [formActive, setFormActive] = useState(false)

    return (
        <div className="container">
            <Sidebar 
            cardView={cardView} 
            setCardView={setCardView} 
            listView={listView} 
            setListView={setListView}
            formActive={formActive}
            setFormActive={setFormActive}
            />

            <NewsFeed 
            data={data} 
            cardView={cardView} 
            listView={listView}
            setData={setData}
            />
            {formActive && <FeedForm />}
        </div>
    )
}

export default Dashboard
