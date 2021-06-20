import React from 'react'

import './Pagination.css'

import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

const Pagination = ({ currentPage, setCurrentPage, articlesPerPage, totalArticles, paginate }) => {

    const pageNumbers = []

    const totalPages = Math.ceil(totalArticles / articlesPerPage)

    for(let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i)
    }

    const handleNextPageButton = () => {
        setCurrentPage(currentPage + 1)
    }

    const handlePreviousPageButton = () => {
        setCurrentPage(currentPage - 1)
    }
    return (
        <div className="container__Paginate">
            <ul>
                {currentPage > 1 && 
                    <li onClick={handlePreviousPageButton}>
                        <AiOutlineLeft />
                    </li>
                }
                {pageNumbers.map(number =>
                    <li
                    key={number}
                    onClick={() => paginate(number)}
                    className={currentPage === number ? "active" : null}>
                        {number}
                    </li>
                )}
                {currentPage < totalPages && 
                    <li onClick={handleNextPageButton}>
                        <AiOutlineRight />
                    </li>
                }
            </ul>
        </div>
    )
}

export default Pagination
