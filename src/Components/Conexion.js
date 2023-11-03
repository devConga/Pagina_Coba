import * as mqtt from "mqtt/dist/mqtt";
import Pantalla from './Pantalla';
import '../Styles/App.css';
import '../Styles/index.css';
import {useState, useEffect} from 'react';

function Conexion(){

    const clientId = "emqx_react_" + Math.random().toString(16).substring(2, 8);
    const username = "emqx_test"; //""
    const password = "emqx_test"; //""
    
    const [mens, setMens] = useState("a")
    
    
    const mqttClient = mqtt.connect("ws://broker.emqx.io:8083/mqtt", {
    clientId,
    username,
    password,
    }); 
    
    
    //ws://10.0.3.201:1883/mqtt

    
    
    mqttClient.on("error", (err) => {
    console.log("Error: ", err);
    mqttClient.end();
    });

    mqttClient.on("reconnect", () => {
    console.log("Reconnecting...");
    });

    mqttClient.on("connect", () => {
    console.log("Client connected:" + clientId);
    mqttClient.subscribe("testtopic/react"); //Teclado
    });


    mqttClient.on("message", (topic, message) => {
    console.log(`received message: ${message} from topic: ${topic}`);
    setMens(message)
    });

    /* mqttClient.publish('testtopic/react', 'Hello, HiveMQ!'); */
    /* return(
    <button className='boton' style={{width: '10%'}} onClick={()=>mqttClient.publish('testtopic/react', '<- dos veces')}>ENVIAR</button>
    ) */

    return(

        <div>
            <div className='titleBox'>{mens}</div>         
        </div>
    )

}

export default Conexion
