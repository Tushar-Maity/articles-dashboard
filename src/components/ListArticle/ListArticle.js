import React from 'react'

import './ListArticle.css'

import { VscChromeClose } from 'react-icons/vsc'

const ListArticle = ({ article, removeHandler, setModalOpen, setModalData }) => {

    const truncate = (string, n) => {
        return string?.length > n ? string.substr(0, n-1) + '...' : string
    }

    const openModal = () => {
        setModalOpen(true)
        setModalData(article)
    }
    return (
        <div className="article__Container__list">
            <div className="article__list" onClick={openModal}>
                <img src={article.image ? article.image : 'https://source.unsplash.com/random/40x40'} alt="article"/>

                <div className="article__list__Detail">
                    <h2>{truncate(article.title, 50)}</h2>
                    <h3>{truncate(article.summary, 60)}</h3>
                    <p>{article.published}</p>
                </div>
            </div>

            <div className="delete__list" onClick={() => removeHandler(article.id)}>
                <VscChromeClose size="28px"/>
            </div>
        </div>
    )
}

export default ListArticle
