import React, { useEffect, useState, } from 'react';
import LoginSignForm from './LoginSignForm'
import LoginActions from '../../actions/login_actions';
import {connect} from 'react-redux';

 function SignupContainer(props){
    return (
        <>
        <LoginSignForm type="signup" {...props} /> 
        </>
    );
}

const mapStateToProps = (state)=>{
    return { 
        loginData: state.loginData,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLoggedIn: username=>{
            dispatch(LoginActions.createLoggedInAction(username));
        },
        onLoggedOut: username=>{
            dispatch(LoginActions.createLoggedOutAction(username));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignupContainer);