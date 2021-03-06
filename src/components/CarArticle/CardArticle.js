import React from 'react'

import './CardArticle.css'

import { VscChromeClose } from 'react-icons/vsc'

const CardArticle = ({ article, removeHandler, setModalOpen, setModalData }) => {

    const truncate = (string, n) => {
        return string?.length > n ? string.substr(0, n-1) + '...' : string
    }

    const openModal = () => {
        setModalOpen(true)
        setModalData(article)
    }

    return (
        <div className="article__Container__card">
        <div className="delete__card" onClick={() => {
            removeHandler(article.id)
        }}>
            <VscChromeClose size="25px" />
        </div>
            <div className="article__card" onClick={openModal}>
                <div className="article__card__Detail">
                    <h2>{truncate(article.title, 35)}</h2>
                    <h3>{truncate(article.summary, 40)}</h3>
                    <p>{article.published}</p>
                </div>
                <img src={article.image ? article.image : 'https://source.unsplash.com/random/210x120'} alt=""/>
            </div>
        </div>
    )
}

export default CardArticle
