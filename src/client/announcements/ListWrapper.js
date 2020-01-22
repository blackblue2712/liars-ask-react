import React from 'react';
import ListItem from './ListItem';


class ListWrapper extends React.Component {
    constructor() {
        super();
        this.state = {
            acms: []
        }
    }

    componentWillReceiveProps(props) {
        this.setState({acms: props.data})
    }

    render() {
        const { acms } = this.state;
        return (
            <div id="list-wrapper">
                <div className="mini-list">
                    {
                        acms && acms.map( (acm, i) => {
                            return <ListItem key={i} title={acm.title} body={acm.body} tags={acm.tags} isImportant={acm.isImportant} id={acm._id} owner={acm.owner} /> 
                        })
                    }
                </div>
            </div>
        )
    }
}
export default ListWrapper;