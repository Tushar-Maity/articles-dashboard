import React from 'react'

import './Sidebar.css'

import { AiOutlineUnorderedList } from 'react-icons/ai'
import { BsCardHeading } from 'react-icons/bs'

const Sidebar = ({ cardView, setCardView, listView, setListView, formActive, setFormActive }) => {

    const CardActive = () => {
        setCardView(true)
        setListView(false)
    }

    const ListActive = () => {
        setListView(true)
        setCardView(false)
    }

    return (
        <div className="sidebar__Container">
            <div className="profile">
                <img src="https://source.unsplash.com/random/40x40" alt="user"/>
                <div>
                    <h3>Hi Reader,</h3>
                    <p>Hers's your New!</p>
                </div>
            </div>

            {!formActive && 
            <div className="toggle">
                <h2>View Toggle</h2>
                <div className="toggle__Icon">
                    <div className="card" 
                    cardView={cardView} 
                    onClick={CardActive} 
                    style={{backgroundColor: cardView ? '#96EBC7' : "#D3DAE3"}}>
                        <BsCardHeading size="35px"/>
                    </div>
                    <div className="list" 
                    listView={listView} 
                    onClick={ListActive} 
                    style={{backgroundColor: listView ? '#96EBC7' : "#D3DAE3"}}>
                        <AiOutlineUnorderedList size="35px"/>
                    </div>
                </div>
            </div>
            }

            <div className="feedback">
                <h2>Have a Feedback?</h2>
                <button onClick={() => setFormActive(!formActive)}>We're Listening</button>
            </div>
        </div>
    )
}

export default Sidebar
