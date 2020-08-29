import React from 'react'

const Pagination =({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++ ) {
        pageNumbers.push(i);
    }
    return (
        <nav style={{marginTop: '30px'}}>
            <ul className='pagination'>
                {
                    pageNumbers.map(number => (
                        <li key={number} className='page-item'>
                            <a href="!#"  onClick={()=> paginate(number)}className='page-link'>{number}</a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Pagination;
