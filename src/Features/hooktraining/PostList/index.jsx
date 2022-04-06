import React from 'react'
import { PropTypes } from 'prop-types';
import './style.scss'

PostList.prototype = {
    posts: PropTypes.array,
}

PostList.defaultProps = {
    posts: [],
}

function PostList(props) {
    const { posts } = props
    return (
        <>
            {posts.length === 0 ? (<h1 className="title"><span>No Data available</span></h1>) :
                posts.map(post => (
                    <div className="col" key={post.id}>
                        <div className="card" >
                            <img src={post.imageUrl} className="card-img-top" alt="My" />
                            <div className="card-body">
                                <h5 className="card-title">{post.title}</h5>
                                <p className="card-text">{post.description}</p>

                            </div>
                        </div>
                    </div>
                ))}
        </>

    )
}

export default PostList