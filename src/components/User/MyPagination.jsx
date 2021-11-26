import React, { useContext } from 'react';
import { clientContext } from '../../context/ClientContext';

const MyPagination = () => {
    const { totalPosts, postsPerPage, handlePage, currentPage } = useContext(clientContext)
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <div className='pagination' >
            <ul>
                {
                    pageNumbers.map((page) => (
                        <li key={page} >
                            <button
                                className={page === currentPage ? 'cur-page-btn' : ''}
                                onClick={() => handlePage(page)} >{page}</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default MyPagination;
