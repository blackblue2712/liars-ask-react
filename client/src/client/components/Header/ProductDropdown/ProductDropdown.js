import React, { useState, useEffect } from 'react';

import ListRestItem from '../ListRestItem/ListRestItem';
import { isAuthenticated } from '../../../../controllers/userController';

const ProductDropdown = props => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        return () => {
            document.getElementById('root').removeEventListener('click', closeDropdown);
        }
    }, [])

    const closeDropdown = () => {
        setTimeout(() => {
            try {
                document.querySelector("#products-popover").style.display = "none";
                document.getElementById('root').removeEventListener('click', closeDropdown);
                setOpen(false);
            } catch(err) {}
        }, 0)
    }

    const handleToggleProducts = () => {
        if(!open) {
            document.querySelector("#products-popover").style.display = "block";
            document.getElementById('root').addEventListener('click', closeDropdown);
            setOpen(true);
        } else {
            document.querySelector("#products-popover").style.display = "none";
            setOpen(false);
        }
    }

    return (
        <>
            <a
                href="#product"
                onClick={handleToggleProducts}
            >
                Features
                                </a>
            <div id="products-popover" className="s-popover ps-absolute">
                <div className="s-popover--arrow"></div>
                <ul className="list-rest s-anchors">
                    {
                        isAuthenticated() &&
                        <ListRestItem
                            title="Admin"
                            description="Liars ask admin site"
                            href="/admin"
                        />
                    }
                    <ListRestItem
                        title="Advance Search"
                        description="Search with tags, title, date, ..."
                        href="/advance/search"
                    />
                    <ListRestItem
                        title="Teams"
                        description="Private questions and answers for your team"
                        href="#teams"
                    />
                    <ListRestItem
                        title="Enterprise"
                        description="Private self-hosted questions and answers for your enterprise"
                        href="#teams"
                    />
                    <hr className="oc7" />
                    <ListRestItem
                        title="Talent"
                        description="Hire technical talent"
                        href="#teams"
                    />
                    <ListRestItem
                        title="Advertising"
                        description="Reach developers worldwide"
                        href="#teams"
                    />
                </ul>
            </div>
        </>
    )
}

export default ProductDropdown;