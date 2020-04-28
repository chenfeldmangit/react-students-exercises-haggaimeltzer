import React from 'react';
import '../css/page.css';
import { connect } from 'react-redux';
import NotificationActions from '../actions/notifications_actions'

class MainLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLogoutOpen: false };
    }

    componentDidMount(){
        this.props.loadContent();
    }

    render() {
        const loggedInUser = localStorage.getItem("logged-in-user");
        
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


const mapDispatchToProps = (dispatch) => {
    return {
        loadContent: ()=>{
            dispatch(NotificationActions.reloadNotifications());
        },
    }
}


export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(MainLayout);