import React, {useState, useEffect} from 'react';
import SidebarWidgetItem from './SidebarWidgetItem';
import { getBlogs } from '../../controllers/blogController';

const SidebarWidget = props => {
    let [blogs, setBlogs] = useState([]);

    useEffect( () => {
        getBlogs()
        .then( res => {
            setBlogs(res);
        })
    }, [blogs.length]);

    return (
        <>
            {
                blogs.map( blog => {
                    return <SidebarWidgetItem classIcon=""
                        widgetContent={blog.title}
                    />
                })
            }
            
            {/*<SidebarWidgetItem classIcon="fav-liarsflow"
                widgetContent="2020 Developer Survey: any topic suggestions?"
            /> */}
        </>
    )
}

export default SidebarWidget;