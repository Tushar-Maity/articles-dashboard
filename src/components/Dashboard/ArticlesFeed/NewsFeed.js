import React, { useState } from 'react'

import './NewsFeed.css'

import Pagination from './Pagination'
import ListArticle from '../../ListArticle/ListArticle'
import CardArticle from '../../CarArticle/CardArticle'

const NewsFeed = ({ data, cardView, listView, setData }) => {

    const [currentPage, setCurrentPage] = useState(1)
    const [articlesPerPage] = useState(6)

    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentArticles = data.slice(indexOfFirstArticle, indexOfLastArticle)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    const removeHandler = (id) => {
        console.log(id);

        const newData = data.filter((item) => item.id !== id);

        setData(newData);
    }
    return (
        <div className="articles__container">
           <div className="list__Grid" listView={listView} style={{marginBottom: listView ? '15px' : ''}}>
                {listView && currentArticles.map(article => (
                    <ListArticle key={article.id} article={article} removeHandler={removeHandler}/>
                ))}
           </div>

           <div className="card__Grid" cardView={cardView} style={{marginBottom: cardView ? '20px' : ''}}>
                {cardView && currentArticles.map(article => (
                    <CardArticle key={article.id} article={article} removeHandler={removeHandler}/>
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
