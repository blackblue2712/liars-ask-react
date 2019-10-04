import React, {useState, useEffect} from 'react';
import ListItem from './ListItem';

const ListWrapper = props => {
    const [questions, setQues] = useState([]);

    useEffect( () => {
        setQues(props.data);
    })

    return (
        <div id="list-wrapper">
            <div className="mini-list">
                {
                    questions && questions.map( (blog, i) => {
                        return <ListItem key={i} title={blog.title} body={blog.body} tags={blog.anonymousTags} id={blog._id} /> 
                    })
                }
            </div>
        </div>
    )
}

export default ListWrapper;