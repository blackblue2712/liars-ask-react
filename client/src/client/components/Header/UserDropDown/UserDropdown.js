import React, { useState, useEffect } from 'react';

import Default from '../../../../images/default.png';
import ListRests from './ListRests';


const UserDropdown = props => {
    const [open, setOpen] = useState(false);

    const closeDropdown = () => {
        setTimeout(() => {
            document.querySelector("#user-popover").style.display = "none";
            document.getElementById("root").removeEventListener("click", closeDropdown);
            setOpen(false)
        }, 0)
    }

    const handleOpenUserDropdown = () => {
        if(!open) {
            document.querySelector("#user-popover").style.display = "block";
            document.getElementById("root").addEventListener("click", closeDropdown)
            setOpen(true);
        } else {
            document.querySelector("#user-popover").style.display = "none";
            setOpen(false);
        }
    }

    useEffect(() => {
        return () => {
            document.getElementById("root").removeEventListener("click", closeDropdown)
        }
    }, [])

    return (
        <>
            <div
                className="d-flex align-items-center bd50 cs-pointer"
                onClick={handleOpenUserDropdown}
            >
                <img className="bd50" width="40" height="40" src={props.photo || Default} alt="avatar" />
            </div>
            <div id="user-popover" className="s-popover ps-absolute">
                <div className="s-popover--arrow"></div>
                <ListRests handleSignout={props.handleSignout} uid={props.uid} />
            </div>
        </>
    )
}

export default UserDropdown;