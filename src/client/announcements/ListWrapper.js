import React from 'react';
import ListItem from './ListItem';
import Skeleton from '../components/Skeleton';


class ListWrapper extends React.Component {
    constructor() {
        super();
        this.state = {
            acms: null
        }
    }

    componentWillReceiveProps(props) {
        this.setState({acms: props.data})
    }

    render() {
        const { acms } = this.state;
        if(!acms) {
            return <Skeleton />
        } else {
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
}
export default ListWrapper;