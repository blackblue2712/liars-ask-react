import React, { Component } from 'react';


class Notify extends Component {

    ani = () => {
        setTimeout( () => {
            
            document.getElementById("notify").classList.add("off");
        }, 3000);

        setTimeout( () => {
            document.getElementById("notify").classList.remove("on");
            document.getElementById("notify").classList.remove("off");
        }, 3190);
    }
    
    render() {
        if(this.props.class === "on") {
            document.getElementById("notify").classList.add("on");
            document.querySelector("#notify span").innerHTML = this.props.text;
            this.ani();
            this.props.clearMess("");
        }
        return (
            <div id="notify" className={`notify`}>
                <div className="notify--body">
                    <span></span>
                </div>
            </div>
        ) 
    }
}

export default Notify;
