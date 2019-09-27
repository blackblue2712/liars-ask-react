import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserInfo from './UserInfo';

class TagsComponent extends Component {
    render() {
        return (
            <>
                <div className="main-head">
                    <div className="grid d-flex align-items-centers mb16">
                        <h1 className="fs-headline1 mr-auto">Users</h1>
                        <Link to="/admin/users/new" className="s-btn s-btn__outline s-btn__primary">Add new user</Link>
                    </div>
                </div>

                <div id="tags-list">
                    <div id="tags-browser">
                        <UserInfo
                            username={Math.random().toString(36).substring(7)}
                            userLocation="Bratislava, Slovakia"
                            userImage={`https://api.adorable.io/avatars/55/${Date.now() + Math.random(1 * 10)}`}
                            userReputation="1,110"
                        />
                        <UserInfo
                            username={Math.random().toString(36).substring(7)}
                            userLocation="Bratislava, Slovakia"
                            userImage={`https://api.adorable.io/avatars/55/${Date.now() + Math.random(1 * 10)}`}
                            userReputation="1,110"
                        />
                        <UserInfo
                            username={Math.random().toString(36).substring(7)}
                            userLocation="Bratislava, Slovakia"
                            userImage={`https://api.adorable.io/avatars/55/${Date.now() + Math.random(1 * 10)}`}
                            userReputation="1,110"
                        />
                        <UserInfo
                            username={Math.random().toString(36).substring(7)}
                            userLocation="Bratislava, Slovakia"
                            userImage={`https://api.adorable.io/avatars/55/${Date.now() + Math.random(1 * 10)}`}
                            userReputation="1,110"
                        />
                        <UserInfo
                            username={Math.random().toString(36).substring(7)}
                            userLocation="Bratislava, Slovakia"
                            userImage={`https://api.adorable.io/avatars/55/${Date.now() + Math.random(1 * 10)}`}
                            userReputation="1,110"
                        />
                        <UserInfo
                            username={Math.random().toString(36).substring(7)}
                            userLocation="Bratislava, Slovakia"
                            userImage={`https://api.adorable.io/avatars/55/${Date.now() + Math.random(1 * 10)}`}
                            userReputation="1,110"
                        />
                        <UserInfo
                            username={Math.random().toString(36).substring(7)}
                            userLocation="Bratislava, Slovakia"
                            userImage={`https://api.adorable.io/avatars/55/${Date.now() + Math.random(1 * 10)}`}
                            userReputation="1,110"
                        />
                        <UserInfo
                            username={Math.random().toString(36).substring(7)}
                            userLocation="Bratislava, Slovakia"
                            userImage={`https://api.adorable.io/avatars/55/${Date.now() + Math.random(1 * 10)}`}
                            userReputation="1,110"
                        />
                        <UserInfo
                            username={Math.random().toString(36).substring(7)}
                            userLocation="Bratislava, Slovakia"
                            userImage={`https://api.adorable.io/avatars/55/${Date.now() + Math.random(1 * 10)}`}
                            userReputation="1,110"
                        />
                        <UserInfo
                            username={Math.random().toString(36).substring(7)}
                            userLocation="Bratislava, Slovakia"
                            userImage={`https://api.adorable.io/avatars/55/${Date.now() + Math.random(1 * 10)}`}
                            userReputation="1,110"
                        />
                        <UserInfo
                            username={Math.random().toString(36).substring(7)}
                            userLocation="Bratislava, Slovakia"
                            userImage={`https://api.adorable.io/avatars/55/${Date.now() + Math.random(1 * 10)}`}
                            userReputation="1,110"
                        />
                        <UserInfo
                            username={Math.random().toString(36).substring(7)}
                            userLocation="Bratislava, Slovakia"
                            userImage={`https://api.adorable.io/avatars/55/${Date.now() + Math.random(1 * 10)}`}
                            userReputation="1,110"
                        />
                        <UserInfo
                            username={Math.random().toString(36).substring(7)}
                            userLocation="Bratislava, Slovakia"
                            userImage={`https://api.adorable.io/avatars/55/${Date.now() + Math.random(1 * 10)}`}
                            userReputation="1,110"
                        />
                        <UserInfo
                            username={Math.random().toString(36).substring(7)}
                            userLocation="Bratislava, Slovakia"
                            userImage={`https://api.adorable.io/avatars/55/${Date.now() + Math.random(1 * 10)}`}
                            userReputation="1,110"
                        />
                        <UserInfo
                            username={Math.random().toString(36).substring(7)}
                            userLocation="Bratislava, Slovakia"
                            userImage={`https://api.adorable.io/avatars/55/${Date.now() + Math.random(1 * 10)}`}
                            userReputation="1,110"
                        />
                        <UserInfo
                            username={Math.random().toString(36).substring(7)}
                            userLocation="Bratislava, Slovakia"
                            userImage={`https://api.adorable.io/avatars/55/${Date.now() + Math.random(1 * 10)}`}
                            userReputation="1,110"
                        />
                        <UserInfo
                            username={Math.random().toString(36).substring(7)}
                            userLocation="Bratislava, Slovakia"
                            userImage={`https://api.adorable.io/avatars/55/${Date.now() + Math.random(1 * 10)}`}
                            userReputation="1,110"
                        />
                        <UserInfo
                            username={Math.random().toString(36).substring(7)}
                            userLocation="Bratislava, Slovakia"
                            userImage={`https://api.adorable.io/avatars/55/${Date.now() + Math.random(1 * 10)}`}
                            userReputation="1,110"
                        />
                        <UserInfo
                            username={Math.random().toString(36).substring(7)}
                            userLocation="Bratislava, Slovakia"
                            userImage={`https://api.adorable.io/avatars/55/${Date.now() + Math.random(1 * 10)}`}
                            userReputation="1,110"
                        />
                        <UserInfo
                            username={Math.random().toString(36).substring(7)}
                            userLocation="Bratislava, Slovakia"
                            userImage={`https://api.adorable.io/avatars/55/${Date.now() + Math.random(1 * 10)}`}
                            userReputation="1,110"
                        />
                    </div>
                </div>
                
            </>
        )
    }
}

export default TagsComponent;