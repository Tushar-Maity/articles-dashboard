import React from 'react'

import './NewsFeed.css'

import ListArticle from './ListArticle'
import CardArticle from './CardArticle'

const NewsFeed = ({ data, cardView, listView }) => {
    return (
        <div className="articles__container">
            {data.map(article => (
                <div key={article.id}>
                    {listView && <ListArticle article={article}/>}
                    {cardView && <CardArticle article={article}/>}
                </div>
            ))}
        </div>
    )
}

export default NewsFeed
