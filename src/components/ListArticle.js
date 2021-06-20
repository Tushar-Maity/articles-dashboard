import React from 'react'

import './ListArticle.css'

import { VscChromeClose } from 'react-icons/vsc'

const ListArticle = ({ article }) => {

    const truncate = (string, n) => {
        return string?.length > n ? string.substr(0, n-1) + '...' : string
    }
    return (
        <div className="article__Container">
            <div className="article">
                <img src={article.image ? article.image : 'https://source.unsplash.com/random/40x40'} alt="article"/>

                <div className="article__Detail">
                    <h2>{truncate(article.title, 60)}</h2>
                    <h3>{truncate(article.summary, 70)}</h3>
                    <p>{article.published}</p>
                </div>
            </div>

            <div className="delete">
                <VscChromeClose size="28px"/>
            </div>
        </div>
    )
}

export default ListArticle
