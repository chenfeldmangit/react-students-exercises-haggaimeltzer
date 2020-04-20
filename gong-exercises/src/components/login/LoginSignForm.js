import React, { useEffect, useState } from 'react';
import UserAPI from '../../db/userAPI'
//import store from '../../common/store'
import LoginActions from '../../actions/login_actions';

export default function LoginSignForm(props){
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
            <input className="username" type="text" id="usernameInput" name="usernameInput" required/>
            <input className="password" type="password" id="passwordInput" name="passwordInput"  required/>
            <input className="login-submit-btn" type="submit"/>
        </form>
    );
}