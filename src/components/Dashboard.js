import React, { useState } from "react";
import './css/Dashboard.css';
import Notes from  './Notes'
import Textbox from "./Textbox";
import img1 from "./css/bg.png";


   

  
 

    
export default function Dashboard(props){

    var lat;
    var lon;
    
    navigator.geolocation.getCurrentPosition(function(position) {
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        console.log("Latitude is :", lat);
        console.log("Longitude is :", lon);
      });


    function handleSos(lat,lon){
       
       
       
        fetch("http://sea-turtle-app-52yvl.ondigitalocean.app/sos",
        {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin":true
            },
            mode: "cors",
            body: JSON.stringify({
                lat:lat,
                lon:lon
            })
        })
        .then(()=>{
            // after adding the note, reload the page to reflect the changes
            // alert("SOS SENT");
        })
        .catch(err => {
            throw(err)
        });
        alert("SOS SENT");
    }


    // When loading, show loading svg
    if (props.isLoading) return (
        <div className='LoadingDashboard'>
            <img src={process.env.PUBLIC_URL+'/loading.svg'} alt='Loading'/>
        </div>
    )
    // When not signed in, show an option to sign in with google
    else if (props.isSignedIn===false) return (
        <div className='NotSignedInDashboard'>
            <img className="bg-img" src={img1} alt="img"></img>
            <div className='Notes-Head'>
                <img className='Notes-Logo' src={process.env.PUBLIC_URL + '/favicon.ico'} alt='Icon'/>
                <div className='Notes-Head-Text'>SafeHer</div>
            </div>
            {/* <div>
                <h1>For the Women </h1>
            </div> */}
            <div className='Typewriter'>
                <div>The simplest way to keep you safe</div>
                {/* <div></div> */}
            </div>
            <div className="Google-Btn" onClick={()=>window.location.href='https://sea-turtle-app-52yvl.ondigitalocean.app/auth/google'}>
                <img className="Google-Icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt='google'/>
                <div className="Btn-Text">Sign in with Google</div>
            </div>
            <div className="sos">
                <button onClick={()=>{
                    handleSos(lat,lon)
                }}>SOS</button>
            </div>
           
        </div>
        
    )
    // If signed in, show the regular dashboard with notes and textbox
    else if(props.isSignedIn) return(   
        <div className="Dashboard">
            <Textbox {...props} />
            <Notes {...props} />
        </div>
    )
}
