import React from 'react';
import '../css/page.css';
import { connect } from 'react-redux';

class MainLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLogoutOpen: false };
    }

    render() {
        const { loggedInUser } = this.props;

        return (
            <div id="mainLayout" className={`layout-${loggedInUser ? 'row' : 'column'}`}>
                {this.props.children}
            </div>
        );
    };
}


const mapStateToProps = (state) => {
    return {
        loggedInUser: state.loggedInUser,
    }
}


export default connect(
    mapStateToProps
)(MainLayout);