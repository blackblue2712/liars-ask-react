import React from 'react';

const AsyncComponent = loadComponent => {
    return class extends React.Component {
        state = {
            component: null
        }

        componentDidMount() {
            loadComponent().then(cpm => this.setState({ component: cpm.default }))
        }

        render() {
            const C = this.state.component;
            return C ? <C {...this.props} /> : null
        }
    }
}

export default AsyncComponent;