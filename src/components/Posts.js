import React from 'react'

const Posts = ({posts, loading}) => {
    if(loading) {
        return <h2>Loading...</h2>
    }
    return <div className='row'>
        {posts.map(post => 
            <div key={post.id} className="col-lg-4" style={{marginBottom: '10px'}}>
                <div className="card">
                    <img src={post.urlToImage} className="card-img-top" alt="iamgenae" />
                    <div className="card-body">
                        <h5 className="card-title">{post.title}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href={post.url} target='_blank' className="btn btn-danger">Go somewhere</a>
                    </div>
                </div>
            </div>
        )}
    </div>
}

export default Posts;

