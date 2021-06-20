import React from 'react'

import './NewsFeed.css'

import ListArticle from '../../ListArticle/ListArticle'
import CardArticle from '../../CarArticle/CardArticle'

const NewsFeed = ({ data, cardView, listView }) => {
    return (
        <div className="articles__container">
           <div className="list__Grid">
                {listView && data.map(article => (
                    <ListArticle key={article.id} article={article}/>
                ))}
           </div>

           <div className="card__Grid">
                {cardView && data.map(article => (
                    <CardArticle key={article.id} article={article}/>
                ))}
           </div>
        </div>
    )
}

export default NewsFeed
