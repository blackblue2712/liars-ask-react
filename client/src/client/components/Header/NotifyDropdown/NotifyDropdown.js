import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import dfimg from '../../../../images/solar-system.png';
import { isAuthenticated } from '../../../../controllers/userController';
import { getNotifications } from "../../../../controllers/notifyController";

const NotifyDropDown = props => {
    const [notifications, setNotifications] = useState([]);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        getNotifications(isAuthenticated().user._id, isAuthenticated().token)
            .then(res => {
                if(res) setNotifications(res)
            })
            .catch(console.log)

        return () => {
            document.getElementById('root').removeEventListener('click', closeDropdown);
        }

    }, [])

    const closeDropdown = () => {
        setTimeout(() => {
            document.querySelector(".list-notify-box").style.display = "none";
            document.getElementById('root').removeEventListener('click', closeDropdown);
            setOpen(false);
        }, 0)
    }

    const handleToggleNotify = () => {
        if(!open) {
            document.querySelector(".list-notify-box").style.display = "block";
            document.getElementById('root').addEventListener('click', closeDropdown);
            setOpen(true);
        } else {
            document.querySelector(".list-notify-box").style.display = "none";
            setOpen(false);
        }
    }

    return (
        <div class="notification-box" onClick={handleToggleNotify}>
            <span class="notification-count">{notifications.length}</span>
            <div class="notification-bell">
                <span class="bell-top"></span>
                <span class="bell-middle"></span>
                <span class="bell-bottom"></span>
                <span class="bell-rad"></span>
            </div>
            <div className="list-notify-box">
                <ul className="">
                    {
                        notifications.length > 0 ? notifications.map((ntf, i) => {
                            return <li className="item-notify">
                                <Link className="w-100 content-notify-item " to="/#">
                                    <img style={{ float: "left", marginRight: "10px" }} className="bd50" width="50" height="50" src={ntf.photo || dfimg} alt="avatar" />
                                    <span>
                                        {ntf.content.length > 100 ? ntf.content.substr(0, 100) : ntf.content} ...
                                                                </span>
                                </Link>
                            </li>
                        }) : <span style={{ padding: "0 16px" }}>No notification</span>
                    }
                </ul>
            </div>
        </div>
    )
}

export default NotifyDropDown;