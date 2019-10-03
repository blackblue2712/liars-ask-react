import React from 'react';
import { Link } from 'react-router-dom';

class Blogs extends React.Component {
    render() {
        return (
            <>
                <div className="main-head">
                    {/* <Notify />  
                    {message !== "" &&  <Notify class="on" text={message} clearMess={this.clearMess} />} */}
                    <div className="grid d-flex align-items-centers mb16">
                        <h1 className="fs-headline1 mr-auto">Announcements</h1>
                        <Link to="/admin/blogs/new" className="s-btn s-btn__outline s-btn__primary">Wtire blog</Link>
                    </div>
                    <p className="mb24 f13 fw350">Write blog about whatever you want to share with everyone &lt;3</p>
                </div>
                
            </>
        )
    }
}

export default Blogs;