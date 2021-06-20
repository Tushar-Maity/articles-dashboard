import React from 'react'

const CardArticle = ({ article }) => {
    return (
        <div className="article">
        <img src={article.image} alt=""/>
            <div className="article__Detail">
                <h3>{article.title}</h3>
            </div>
        </div>
    )
}

export default CardArticle
