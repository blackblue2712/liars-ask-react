import React, {useState, useEffect} from 'react';
import ListItem from './ListItem';
import Skeleton from '../components/Skeleton';

const ListWrapper = props => {
    const [blogs, setBlogs] = useState([]);

    useEffect( () => {
        setBlogs(props.data);
    })

    if(!props.data) {
        return <Skeleton />
    } else {
        return (
            <div id="list-wrapper">
                <div className="mini-list">
                    {
                        blogs && blogs.map( (blog, i) => {
                            return <ListItem key={i} title={blog.title} body={blog.body} tags={blog.tags} id={blog._id} /> 
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ListWrapper;