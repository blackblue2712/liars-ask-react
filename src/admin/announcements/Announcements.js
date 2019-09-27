import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Announcements extends Component {
    render() {
        return (
            <>
                <div className="main-head">
                    <div className="grid d-flex align-items-centers mb16">
                        <h1 className="fs-headline1 mr-auto">Announcements</h1>
                        <Link to="/admin/announcements/new" className="s-btn s-btn__outline s-btn__primary">Add new announcement</Link>
                    </div>
                    <p className="mb24 f13 fw350">A tag is a keyword or label that categorizes your question with other, similar questions. Using the right tags makes it easier for others to find and answer your question.</p>
                    <div className="grid-ai grid-tags mb16 d-flex align-items-center">
                        <div className="ps-relative mr-auto">
                            <input type="text" name="tagsfilter" placeholder="Filter by tag name" maxLength="240" className="s-input s-input__search js-search-tags" />
                            <svg aria-hidden="true" className="svg-icon s-input-icon s-input-icon__search iconSearch" width="18" height="18" viewBox="0 0 18 18"><path d="M18 16.5l-5.14-5.18h-.35a7 7 0 1 0-1.19 1.19v.35L16.5 18l1.5-1.5zM12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0z"></path></svg>
                        </div>
                        <div className="s-btn-group">
                            <a href="#popular" className="s-btn s-btn__outline s-btn__primary">Interesting</a>
                            <a href="#popular" className="s-btn s-btn__outline s-btn__primary">Popular</a>
                            <a href="#popular" className="s-btn s-btn__outline s-btn__primary">Hot</a>
                            <a href="#popular" className="s-btn s-btn__outline s-btn__primary">Week</a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Announcements;