import React from 'react';

const Tags = props => {
    return (
        <a href="#tag" className="post-tag">
            <code>{props.name}</code>
            {
                props.close === true && 
                <a href="#closetag" class="js-delete-tag s-tag--dismiss" title="Remove tag">
                    <svg style={{"pointer-events": "none"}} className="svg-icon iconClearSm" width="13" height="13" viewBox="0 0 14 14"><path d="M12 3.41L10.59 2 7 5.59 3.41 2 2 3.41 5.59 7 2 10.59 3.41 12 7 8.41 10.59 12 12 10.59 8.41 7z"></path></svg>
                </a>
            }
            
        </a>
    )
}

export default Tags;