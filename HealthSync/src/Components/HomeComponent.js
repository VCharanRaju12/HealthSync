import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faHouseMedicalCircleCheck } from '@fortawesome/free-solid-svg-icons';
import "../App.css";


function Home(props) {
  return (
    <>
    <div className="page">
    <div className="center">
    <FontAwesomeIcon icon={faHouseMedicalCircleCheck} style={{ color: "#9575cd" }} className="fa-bounce" size="3x" bounce-size="10x" />
    <br /> 
   <h4>HealthSync</h4>
    </div>
    
    <div className="newstory">
      <pre>
      <h1 >Decentralized <br />  Hospitalization</h1></pre>
    <div className="newstory1">
      <h5>Transforming Healthcare Data Management with Blockchain Technology for Secure and Transparent Exchange</h5>
    </div>
    <div className="newstory2">
        <p><b> <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#4000ff" }} /> Secure and Immutable Data Exchange:</b> The Blockchain Powered Healthcare Data Exchange ensures the secure and immutable exchange of medical information.</p> 
          
             <p><b><FontAwesomeIcon icon={faCircleCheck} style={{ color: "#4000ff" }} /> Efficient Access Control and Privacy Protection:</b> Health Sync incorporates various levels of access controls and privacy policies, maximizing user benefits while safeguarding sensitive medical information.</p>
         
             <p><b><FontAwesomeIcon icon={faCircleCheck} style={{ color: "#4000ff" }} />  Scalable and Future-Ready Architecture:</b> Designed with scalability in mind, the system is poised for widespread adoption and integration with other healthcare applications.</p>
        </div>
    </div>
    <div id="photo">
          
        </div>
    </div>
    </>
  );
}

export default Home;
