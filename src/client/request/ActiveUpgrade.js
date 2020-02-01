import React from 'react';
import { getVerifyRequestUpgradeToSpecialAccount } from "../../controllers/requestUpgrade";

class ActiveUpgrade extends React.Component {

    async componentWillMount() {
        console.log(this.props)
        let { activeCode } = this.props.match.params;
        
        await getVerifyRequestUpgradeToSpecialAccount(activeCode)
              .then( () => {window.location = "/"} );
    }

    render() {
        return <></>;
    }
}

export default ActiveUpgrade