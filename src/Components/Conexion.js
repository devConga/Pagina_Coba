import * as mqtt from "mqtt/dist/mqtt";
import Pantalla from './Pantalla';
import '../Styles/App.css';
import '../Styles/index.css';
import {useState, useEffect} from 'react';

function Conexion(){

    const clientId = "emqx_react_" + Math.random().toString(16).substring(2, 8);
    const username = "emqx_test"; //""
    const password = "emqx_test"; //""

    const [mqttClient, setMqttClient] = useState(null)

    const [mens, setMens] = useState(" ")
    
    var suscribed  = false;

    if(mqttClient == null){
        setMqttClient(mqtt.connect("ws://broker.emqx.io:8083/mqtt", {
        clientId,
        username,
        password,
        }))
    }

    
    
    
    //                                             ws://10.0.3.201:1883/mqtt

    useEffect(() => {


        if(mqttClient != null){

            mqttClient.on("error", (err) => {
            console.log("Error: ", err);
            mqttClient.end();
            });

            mqttClient.on("reconnect", () => {
            console.log("Reconnecting...");
            });

            mqttClient.on("connect", () => {
            console.log("Client connected: " + clientId);
            });

            mqttClient.on("message", (topic, message) => {
            console.log(`received message: ${message} from topic: ${topic}`);
            setMens(message.toString())
            });
        }
    }
    , [mqttClient])

    if(mqttClient != null && !suscribed){
        
        mqttClient.subscribe("miTopicoReact"); //Teclado
        suscribed = true
    }

    /* mqttClient.publish('testtopic/react', 'Hello, HiveMQ!'); */
    /* return(
    <button className='boton' style={{width: '10%'}} onClick={()=>mqttClient.publish('testtopic/react', '<- dos veces')}>ENVIAR</button>
    ) */

    
 return(

     <div>
     {/* <Pantalla cliente = {mqttClient} /> */}

     <div>
         <div className='titleBox' style={{width: "fit-content", margin: "0 auto", padding: "25px 100px"}}>{mens}</div>         
     </div>

     <div className="teclado-grid">
        <div className="caja-grid bAi">
            1
        </div>
        <div className="caja-grid">
            2
        </div>
        <div className="caja-grid">
            3
        </div>
        <div className="caja-grid bAd">
            4
        </div>
        <div className="caja-grid">
            5
        </div>
        <div className="caja-grid">
            6
        </div>
        <div className="caja-grid">
            7
        </div>
        <div className="caja-grid">
            8
        </div>
        <div className="caja-grid">
            9
        </div>
        <div className="caja-grid">
            10
        </div>
        <div className="caja-grid">
            11
        </div>
        <div className="caja-grid">
            12
        </div>
        <div className="caja-grid bai">
            13
        </div>
        <div className="caja-grid">
            14
        </div>
        <div className="caja-grid">
            15
        </div>
        <div className="caja-grid bad">
            16
        </div>
     </div>

     </div>
 )

}

export default Conexion
