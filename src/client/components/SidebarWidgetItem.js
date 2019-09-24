import React, { Component } from 'react';

class SidebarWidgetItem extends Component {
    render() {
        return (
                <div className="s-sidebar-widget--content s-sidebar-widget--items">
                    <div className="d-flex align-items-center">
                        <div className={`widget-favicon ${this.props.classIcon}`}></div>
                        <div className="widget-content">
                            <a href="#w">{this.props.widgetContent}</a>
                        </div>
                    </div>
                </div>
        )
    }
}

export default SidebarWidgetItem;