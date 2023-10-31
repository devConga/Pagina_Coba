import logo from './../logo.svg';
import '../Styles/Styles.css';
import {useState, useEffect} from 'react';
import image from '../Images/Grafica.png'

function Images() {

 return(
    <div>
        <img className="titleBox" style={{margin: "0 auto"}} src={image}></img>
    </div>
 )
}

export default Images;
