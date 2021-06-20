import React, { useState } from 'react'

import './NewsFeed.css'

import Pagination from './Pagination'
import ListArticle from '../../ListArticle/ListArticle'
import CardArticle from '../../CarArticle/CardArticle'

const NewsFeed = ({ data, cardView, listView }) => {

    const [currentPage, setCurrentPage] = useState(1)
    const [articlesPerPage, setArticlesPerPage] = useState(6)

    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentArticles = data.slice(indexOfFirstArticle, indexOfLastArticle)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    return (
        <div className="articles__container">
           <div className="list__Grid">
                {listView && currentArticles.map(article => (
                    <ListArticle key={article.id} article={article}/>
                ))}
           </div>

           <div className="card__Grid">
                {cardView && currentArticles.map(article => (
                    <CardArticle key={article.id} article={article}/>
                ))}
           </div>
           <Pagination 
           currentPage={currentPage}
           setCurrentPage={setCurrentPage}
           articlesPerPage={articlesPerPage}
           totalArticles={data.length}
           paginate={paginate}    
           />
        </div>
    )
}

export default NewsFeed
