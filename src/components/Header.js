import React from "react";
import './css/Header.css';

export default function(props){

    /*  Header=> (Inside the header)
        If signed in, show the user image + a dropdown menu with an option to logout
        Else, show an option to sign in
    */
   
    return props.isSignedIn ? (
        <div className="Header">
            <div className='Dropdown'>
                <img className='UserImage' src={props.user.picture} alt='User'/>
                <div className='DropdownContent'>
                    <div className='Username'>{props.user.name}</div>
                    <a href="http://localhost:5000/auth/logout">Logout</a>
                </div>
            </div>
            <div className='Header-Flex'>
                <img src={process.env.PUBLIC_URL + '/favicon.ico'} alt='Notes-Logo'/>
                <div className='Heading'>SafeHer</div>
            </div>
        </div>
    ) :
    (
        <div className="Header">
            <div className='SignIn-Button' onClick={()=>window.location.href='http://localhost:5000/auth/google'}>Sign In</div>
            <div className='Header-Flex'>
                <img src={process.env.PUBLIC_URL + '/favicon.ico'} alt='Notes-Logo'/>
                <div className='Heading'>SafeHer</div>
            </div>
        </div>
    )
}
