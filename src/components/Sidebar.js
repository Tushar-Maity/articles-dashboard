import React from 'react'

import { AiOutlineUnorderedList } from 'react-icons/ai'
import { BsCardHeading } from 'react-icons/bs'

const Sidebar = () => {
    return (
        <div className="sidebar__Container">
            <div className="profile">
                <img src="https://source.unsplash.com/random/40x40" alt="user"/>
                <div>
                    <h3>Hi Reader,</h3>
                    <p>Hers's your New!</p>
                </div>
            </div>

            <div className="toggle">
                <h2>View Toggle</h2>
                <div className="toggle__Icon">
                    <div className="card">
                        <BsCardHeading size="35px"/>
                    </div>
                    <div className="list">
                        <AiOutlineUnorderedList size="35px"/>
                    </div>
                </div>
            </div>

            <div className="feedback">
                <h2>Have a Feedback</h2>
                <button>We're Listening</button>
            </div>
        </div>
    )
}

export default Sidebar
