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
                <h2>{modalData.summary}</h2>
                <p>{modalData.published}</p>
            </div>
        </div>
    )
}

export default Modal
