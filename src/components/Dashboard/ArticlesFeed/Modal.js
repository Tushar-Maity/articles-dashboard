import React from 'react'

import './Modal.css'

const Modal = ({ modalData, setModalOpen }) => {

    const handleClick = (e) => {
        if(e.target.classList.contains('backdrop')) {
            setModalOpen(null)
        }
    }

    console.log("modalData" ,modalData);
    return (
        <div className="modal__Container backdrop" onClick={handleClick}>
            <div className="modal__main">
                <h1>{modalData.title}</h1>
                <div className="img">
                    <img 
                        src={modalData.image
                            ? modalData.image
                            : 'https://source.unsplash.com/random/300x200'
                        }
                        alt="post" 
                    />
                </div>
                <h2>{modalData.summary}</h2>
                <p>{modalData.published}</p>
            </div>
        </div>
    )
}

export default Modal
