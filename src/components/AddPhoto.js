import React, {Component} from 'react'

class AddPhoto extends Component {
    render() {
        return (
            <>
                <h1>PhotoWall</h1>
                <div className="form">
                    <form>
                        <input type="text" placeholder="Link"/>
                        <input type="text" placeholder="Description"/>
                        <button>Post</button>
                    </form>
                </div>
            </>
        )
    }
}
export default AddPhoto
