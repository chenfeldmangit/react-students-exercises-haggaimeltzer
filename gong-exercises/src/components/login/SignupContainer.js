import React, { useEffect, useState, } from 'react';
import LoginSignForm from './LoginSignForm'

 export default function SignupContainer(props){
    return (
        <>
        <LoginSignForm type="signup" {...props} /> 
        </>
    );
};