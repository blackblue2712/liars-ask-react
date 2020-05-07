import React from 'react';
import "./chat-style.css";

class PrivateChat extends React.Component {

    render() {
        return (
            <div>
                <div id="wrap-left">
                    <div className="container">
                        <div className="tab-panel">
                            <div className="setting">
                                <img className="border-radius-50" width={45} height={45} src="./imgs/867443.jpg" alt="img-setting" />
                            </div>
                            <div className="logo">
                                <img src="./imgs//logo.png" alt="brand-logo" />
                            </div>
                            <div className="search">
                                <form action="#" name="search-friend-form" id="search-friend-form">
                                    <input type="text" id="search-friend" placeholder="Search for conservations ..." />
                                    <button className="button button-link">
                                        <svg style={{ fill: '#2298ff' }} aria-hidden="true" className="svg-icon s-input-icon s-input-icon__search iconSearch" width={16} height={16} viewBox="0 0 18 18"><path d="M18 16.5l-5.14-5.18h-.35a7 7 0 1 0-1.19 1.19v.35L16.5 18l1.5-1.5zM12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0z" /></svg>
                                    </button>
                                </form>
                            </div>
                            <div className="list-group filter">
                                <button className="btn filterMembersBtn active" data-filter="all">
                                    All
                </button>
                                <button className="btn filterMembersBtn" data-filter="favourites">
                                    Favourites
                </button>
                                <button className="btn filterMembersBtn" data-filter="unread">
                                    Unread
                </button>
                            </div>
                            <div className="discussions" id="scroller">
                                <h1>Chats</h1>
                                <div className="btn-group add-group">
                                    <button className="btn btn-secondary dropdown-toggle">
                                        Add +
                  </button>
                                </div>
                                <div className="list-group chats" id="chats">
                                    <a href="#list-chat" className="item-discussions single active unread">
                                        <img className="avatar-md" src="./imgs/867443.jpg" alt="avt" />
                                        <div className="status online" />
                                        <div className="data">
                                            <h5>Bob Frank</h5>
                                            <div className="new bg-red">
                                                <span>9+</span>
                                            </div>
                                            <span>Sun</span>
                                            <p>How can i improve my chances?</p>
                                        </div>
                                    </a>
                                    <a href="#list-chat" className="item-discussions single unread">
                                        <img className="avatar-md" src="./imgs/867443.jpg" alt="avt" />
                                        <div className="status offline" />
                                        <div className="data">
                                            <h5>Bob Frank</h5>
                                            <div className="new bg-red">
                                                <span>9+</span>
                                            </div>
                                            <span>Sun</span>
                                            <p>How can i improve my chances?</p>
                                        </div>
                                    </a>
                                    <a href="#list-chat" className="item-discussions single">
                                        <img className="avatar-md" src="./imgs/867443.jpg" alt="avt" />
                                        <div className="status away" />
                                        <div className="data">
                                            <h5>Bob Frank</h5>
                                            <div className="new bg-red">
                                                <span>9+</span>
                                            </div>
                                            <span>Sun</span>
                                            <p>How can i improve my chances?</p>
                                        </div>
                                    </a>
                                    <a href="#list-chat" className="item-discussions single">
                                        <img className="avatar-md" src="./imgs/867443.jpg" alt="avt" />
                                        <div className="status offline" />
                                        <div className="data">
                                            <h5>Bob Frank</h5>
                                            <div className="new bg-red">
                                                <span>9+</span>
                                            </div>
                                            <span>Sun</span>
                                            <p>How can i improve my chances?</p>
                                        </div>
                                    </a>
                                    <a href="#list-chat" className="item-discussions single">
                                        <img className="avatar-md" src="./imgs/867443.jpg" alt="avt" />
                                        <div className="status offline" />
                                        <div className="data">
                                            <h5>Bob Frank</h5>
                                            <div className="new bg-red">
                                                <span>9+</span>
                                            </div>
                                            <span>Sun</span>
                                            <p>How can i improve my chances?</p>
                                        </div>
                                    </a>
                                    <a href="#list-chat" className="item-discussions single">
                                        <img className="avatar-md" src="./imgs/867443.jpg" alt="avt" />
                                        <div className="status offline" />
                                        <div className="data">
                                            <h5>Bob Frank</h5>
                                            <div className="new bg-red">
                                                <span>9+</span>
                                            </div>
                                            <span>Sun</span>
                                            <p>How can i improve my chances?</p>
                                        </div>
                                    </a>
                                    <a href="#list-chat" className="item-discussions single">
                                        <img className="avatar-md" src="./imgs/867443.jpg" alt="avt" />
                                        <div className="status offline" />
                                        <div className="data">
                                            <h5>Bob Frank</h5>
                                            <div className="new bg-red">
                                                <span>9+</span>
                                            </div>
                                            <span>Sun</span>
                                            <p>How can i improve my chances?</p>
                                        </div>
                                    </a>
                                    <a href="#list-chat" className="item-discussions single">
                                        <img className="avatar-md" src="./imgs/867443.jpg" alt="avt" />
                                        <div className="status offline" />
                                        <div className="data">
                                            <h5>Bob Frank</h5>
                                            <div className="new bg-red">
                                                <span>9+</span>
                                            </div>
                                            <span>Sun</span>
                                            <p>How can i improve my chances?</p>
                                        </div>
                                    </a>
                                    <a href="#list-chat" className="item-discussions single">
                                        <img className="avatar-md" src="./imgs/867443.jpg" alt="avt" />
                                        <div className="status offline" />
                                        <div className="data">
                                            <h5>Bob Frank</h5>
                                            <div className="new bg-red">
                                                <span>9+</span>
                                            </div>
                                            <span>Sun</span>
                                            <p>How can i improve my chances?</p>
                                        </div>
                                    </a>
                                    <a href="#list-chat" className="item-discussions single">
                                        <img className="avatar-md" src="./imgs/867443.jpg" alt="avt" />
                                        <div className="status offline" />
                                        <div className="data">
                                            <h5>Bob Frank</h5>
                                            <div className="new bg-red">
                                                <span>9+</span>
                                            </div>
                                            <span>Sun</span>
                                            <p>How can i improve my chances?</p>
                                        </div>
                                    </a>
                                    <div className="scroller" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="wrap-right">
                    <div className="container tab-content" id="nav-tabContent">
                        <div id="chat-area">
                            <div className="top">
                                <div className="inside">
                                    <div className="status online" />
                                    <div className="data">
                                        <h5><a href="#">Sarah Dalton</a></h5>
                                        <span>Active now</span>
                                    </div>
                                    <button className="btn d-md-block d-none audio-call" title="Audio call">
                                        <i className="ti-headphone-alt" />
                                    </button>
                                    <button className="btn d-md-block d-none audio-call" title="Audio call">
                                        <i className="ti-video-camera" />
                                    </button>
                                    <button className="btn d-md-block d-none audio-call" title="Audio call">
                                        <i className="ti-info" />
                                    </button>
                                </div>
                            </div>
                            <div className="content">
                                <div className="container">
                                    <div className="date">
                                        <hr />
                                        <span>Yesterday</span>
                                        <hr />
                                    </div>
                                    <div className="message">
                                        <img className="avatar-md" src="./imgs/753453.png" data-toggle="tooltip" data-placement="top" title alt="avatar" data-original-title="Karen joye" />
                                        <div className="text-main">
                                            <div className="text-group">
                                                <div className="text">
                                                    <p>Where was i, i worry about my viewrs missing me too much!</p>
                                                </div>
                                            </div>
                                            <span>09:46 AM</span>
                                        </div>
                                    </div>
                                    <div className="message me">
                                        <div className="text-main">
                                            <div className="text-group me">
                                                <div className="text me">
                                                    <p>But if you are not available to talk, then would't they miss you more?</p>
                                                </div>
                                            </div>
                                            <span>11:32 AM</span>
                                        </div>
                                    </div>
                                    <div className="message">
                                        <img className="avatar-md" src="./imgs/753453.png" data-toggle="tooltip" data-placement="top" title alt="avatar" data-original-title="Karen joye" />
                                        <div className="text-main">
                                            <div className="text-group">
                                                <div className="text">
                                                    <p>Aren't you sweet.</p>
                                                </div>
                                            </div>
                                            <span>02:56 PM</span>
                                        </div>
                                    </div>
                                    <div className="message me">
                                        <div className="text-main">
                                            <div className="text-group me">
                                                <div className="text me">
                                                    <p>That's not an answer..</p>
                                                </div>
                                            </div>
                                            <div className="text-group me">
                                                <div className="text me">
                                                    <p>I am tres sorry, what were you saying?</p>
                                                </div>
                                            </div>
                                            <span>10:21 PM</span>
                                        </div>
                                    </div>
                                    <div className="message">
                                        <img className="avatar-md" src="./imgs/753453.png" data-toggle="tooltip" data-placement="top" title alt="avatar" data-original-title="Karen joye" />
                                        <div className="text-main">
                                            <div className="text-group">
                                                <div className="text">
                                                    <p>Great start guys, why can you only talk at certain time on certain days?</p>
                                                </div>
                                            </div>
                                            <span>11:07 PM</span>
                                        </div>
                                    </div>
                                    <div className="date">
                                        <hr />
                                        <span>Today</span>
                                        <hr />
                                    </div>
                                    <div className="message me">
                                        <div className="text-main">
                                            <div className="text-group me">
                                                <div className="text me">
                                                    <p>hmmmm, Well done all. send me document please</p>
                                                </div>
                                            </div>
                                            <span>10:21 PM</span>
                                        </div>
                                    </div>
                                    <div className="message">
                                        <img className="avatar-md" src="./imgs//753453.png" data-toggle="tooltip" data-placement="top" title alt="avatar" data-original-title="Karen joye" />
                                        <div className="text-main">
                                            <div className="text-group">
                                                <div className="text">
                                                    <div className="attachment">
                                                        <button className="btn attach" title="Click to download"><i className="ti-file" /></button>
                                                        <div className="file">
                                                            <h5><a href="#" title="Click to download">Policy Sheet.pdf</a></h5>
                                                            <span>80kb Document</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <span>11:07 PM</span>
                                        </div>
                                    </div>
                                    <div className="message me">
                                        <div className="text-main">
                                            <div className="text-group me">
                                                <div className="text me">
                                                    <p>i have received the .pdf document please send me jpeg file for our requirement..</p>
                                                </div>
                                            </div>
                                            <span><i className="ti-check" />10:21 PM</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="scroller" />
                            </div>
                            <div className="bottom">
                                <form className="text-area">
                                    <textarea className="form-control" placeholder="Start typing for reply..." rows={1} defaultValue={""} />
                                    <div className="add-smiles">
                                        <span title="add icon" className="em em-blush" />
                                    </div>
                                    <div className="smiles-bunch">
                                        <i className="em em---1" />
                                        <i className="em em-smiley" />
                                        <i className="em em-anguished" />
                                        <i className="em em-laughing" />
                                        <i className="em em-angry" />
                                        <i className="em em-astonished" />
                                        <i className="em em-blush" />
                                        <i className="em em-disappointed" />
                                        <i className="em em-worried" />
                                        <i className="em em-kissing_heart" />
                                        <i className="em em-rage" />
                                        <i className="em em-stuck_out_tongue" />
                                        <i className="em em-expressionless" />
                                        <i className="em em-bikini" />
                                        <i className="em em-christmas_tree" />
                                        <i className="em em-facepunch" />
                                        <i className="em em-pushpin" />
                                        <i className="em em-tada" />
                                        <i className="em em-us" />
                                        <i className="em em-rose" />
                                    </div>
                                    <button style={{ height: '56x' }} type="submit" className="btn send"><i className="ti-location-arrow" /></button>
                                </form>
                                <label>
                                    <input type="file" className="d-none" />
                                    <span className="btn attach"><i className="ti-clip" /></span>
                                </label>
                            </div>
                        </div>
                        <div id="call-area">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PrivateChat;
