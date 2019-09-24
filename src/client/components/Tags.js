import React from 'react';

const Tags = props => {
    return (
        <div className="tags d-flex align-items-center">
            <a href="#tag" className="post-tag">
                python
            </a>
            <a href="#tag" className="post-tag">
                javascript
            </a>
            <a href="#tag" className="post-tag">
                reactjs
            </a>
        </div>
    )
}

export default Tags;