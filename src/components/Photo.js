import React from 'react';

const Photo = (props) => {
    const post = props.post
    return <figure className="figure">
        <img className="photo" src={post.imageLink} alt={post.description} />
        <figcaption>
            <p>{post.description}</p>
        </figcaption>
        <button className="remove-button">Remove</button>
        <div className="button-container"></div>
    </figure>
}

export default Photo
