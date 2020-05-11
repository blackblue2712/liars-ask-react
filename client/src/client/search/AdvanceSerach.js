import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';
import Notify from '../components/Notify';
import { onAdvanceSearch } from '../../controllers/searchController';
import './AdvanceSerach.css';
import Tag from '../components/Tag';

class AdvanceSearch extends Component {
    constructor() {
        super();
        this.state = {
            message: '',
            data: [],
            dataHL: [],
            category: "",
            query: "",
            tags: []
        }
    }

    handleAddTag = event => {
        if(event.keyCode === 13) {
            this.setState({ tags: [...this.state.tags, event.target.value] })
            event.target.value = "";
        }
    }

    closeTag = tagName => {
        this.setState({
            tags: this.state.tags.filter(tag => tag !== tagName)
        })
    }

    stringifyQuery = query => {
        let queryString = "?";
        for(let key in query) {
            if(query[key]) {
                queryString += key + "=" + query[key] + "&";
            }
        }
        return queryString.substr(0, queryString.length-1);
    }
    
    handleSearchAdvance = async () => {
        let bntLoading = document.getElementById("wrap-btn-loading");
        bntLoading.classList.add("btn-loading");
        try {
            let category = document.getElementById("s-category").value;
            let query = document.getElementById("s-query").value;
            let dateFrom = document.getElementById("s-date-from").value;
            let dateTo = document.getElementById("s-date-to").value;
            let tags = this.state.tags.join("__");

            let queryObject = { category, tags, query, dateFrom, dateTo }

            let querytString = this.stringifyQuery(queryObject);

            let data = await onAdvanceSearch(querytString);
            console.log(data);
            if(data) {  
                this.setState( { data, category: category === "questions" ? category + "/ask" : category, query } );
                bntLoading.classList.remove("btn-loading");
            }
        } catch (err) {
            console.log(err)
            bntLoading.classList.remove("btn-loading");
        }
    }

    render() {
        let { message, data, category, query } = this.state;
        return (
            <div id="content">
                <div id="mainbar">
                    <div className="main-head">
                        <Notify />  
                        {message !== "" &&  <Notify class="on" text={message} clearMess={this.clearMess} />}
                        <div className="grid d-flex align-items-centers mb16">
                            <h1 className="fs-headline1 mr-auto">Advance Search</h1>
                        </div>
                        <p className="mb24 f13 fw350"></p>
                    </div>
    
                    <div id="advance-search-box" className="bg-white bar-sm bs-md p16 md-content w-100">
                        <div className="form-group">
                            <label htmlFor="s-category" className="d-block">Category</label>
                            <select name="s-category" id="s-category">
                                <option value="announcements">Announcements</option>
                                <option value="questions">Questions</option>
                                <option value="blogs">Blogs</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="s-tags">Tags (Hit enter to add tag)</label>
                            <input
                                onKeyDown={this.handleAddTag}
                                type="text" id="s-tags" className="s-input s-input__search w-100"
                            />

                            <div className="list-tags" style={{marginTop: "10px"}}>
                                {
                                    this.state.tags.map(tag => {
                                        return (
                                            <Tag close closeTag={this.closeTag} name={tag} key={tag} id={tag} />
                                        )
                                    })
                                }
                            </div>

                        </div>
                        <div className="form-group">
                            <label htmlFor="s-query">Query</label>
                            <input type="text" id="s-query" className="s-input s-input__search w-100"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="s-date-from">Date From</label>
                            <input type="date" id="s-date-from" className="s-input s-input__search w-100"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="s-date-to">Date To</label>
                            <input type="date" id="s-date-to" className="s-input s-input__search w-100"/>
                        </div>

                        <div id="wrap-btn-loading" className="ps-relative form-group mt24">
                            <button
                                className="s-btn btn-sm btn-outlined colorGreen"
                                onClick={this.handleSearchAdvance}
                            >Search</button>
                        </div>
                    </div>

                    <div className="bg-white bar-sm bs-md p16 md-content w-100 mt24">
                        {
                            data.length > 0 && <div style={{marginBottom: "16px"}}><strong>{category.toUpperCase()}</strong> {"(" + data.length + ")"}</div>
                        }
                        {
                            data.map( (d, i) => {
                                return (
                                    <div className="list-sumary w-100" key={i}>
                                        <h3>
                                            <a className="hyper-link" target="_blank" href={`/${category}/${d._id}`}>
                                                {
                                                    // d.title.replace(query, <b>{query}</b>)
                                                    "- " + d.title
                                                }
                                            </a>
                                        </h3>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className="clear-fix"></div>
                </div>
                <Sidebar />
                <div className="clear-fix"></div>
            </div>
        )
    }
}

export default AdvanceSearch;