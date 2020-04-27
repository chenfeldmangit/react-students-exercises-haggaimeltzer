import React, { useEffect, useState } from 'react';
import UserAPI from '../../db/userAPI'
//import store from '../../common/store'
import LoginActions from '../../actions/login_actions';
import {connect} from 'react-redux';

function LoginSignForm(props){
    let {type} = props;
    /*const [tweets, setTweets] = useState([]);

     useEffect(()=> {
        async function loadContent() {
            const result = await TweetsApi.getTweets();
            result.reverse();
            setTweets(result);
          }
          loadContent();
    }, []); */
    
    function onLoggedIn(username){
        props.onLoggedIn(username);
        //store.dispatch(LoginActions.creatLoggedInAction(username));
    }

    function getSubmitText(){
       return type;
    }

    async function onFormSubmit(event){
        event.preventDefault();
        console.log(type + " submitted");
        let form = document.getElementById("login-form");
        var inputs = form.elements;
        let txt = inputs.usernameInput.value;
        switch(type){
            case "signup":
               { let ok = await UserAPI.signup(inputs.usernameInput.value, inputs.passwordInput.value);
                    console.log("signup" + (ok? " succeeded" : " failed"));
                    if(ok){
                    }
                    else{
                        alert("signup failed");
                    }                
                    break;
               }
            case "login":
                {
                    let username = inputs.usernameInput.value;
                    let ok = await UserAPI.login(username, inputs.passwordInput.value);
                    console.log("login" + (ok? " succeeded" : " failed"));
                    if(ok){
                        onLoggedIn(username);
                    }
                    else{
                        alert("bad username or password");
                    }
                    break;
                }
            default:
                console.log("error");
                break;
        };
                    
        return true;
    }

    return (
        <form id="login-form" className="login-form"  onSubmit={onFormSubmit}>
            <input className="username" type="text" id="usernameInput" name="usernameInput" placeholder="username" required/>
            <input className="password" type="password" id="passwordInput" name="passwordInput"  placeholder="password" required/>
            <input className="login-submit-btn" type="submit" value={getSubmitText()}/>
        </form>
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
            dispatch(LoginActions.createLoggedOutAction());
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginSignForm);