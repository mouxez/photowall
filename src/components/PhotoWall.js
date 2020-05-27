import React from 'react';
import Photo from './Photo'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const PhotoWall = (props) => {
    return (
        <>
            <Link className="add-icon" to="/AddPhoto"> </Link>
            {/* <button className="add-icon" onClick={props.onNavigate}></button> - один из вариантов <a> */}
            <div className="photo-grid">
                {props.posts.map((post, index) => <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto} />)}
            </div>
        </>
    )
}

PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
}

export default PhotoWall
