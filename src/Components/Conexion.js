import * as mqtt from "mqtt/dist/mqtt";
import Pantalla from './Pantalla';
import Distribucion from "./Distribucion";
import '../Styles/App.css';
import '../Styles/index.css';

import { useState, useEffect } from 'react';

function Conexion() {
    const clientId = "emqx_react_" + Math.random().toString(16).substring(2, 8);
    const username = "emqx_test"; //""
    const password = "emqx_test"; //""

    const [mqttClient, setMqttClient] = useState(null);
    const [mens, setMens] = useState('');
    const [codigo, setCodigo] = useState('')
    
    var suscribed = false;

    if (mqttClient == null) {
        setMqttClient(mqtt.connect("ws://broker.emqx.io:8083/mqtt", {
            clientId,
            username,
            password,
        }));
    }

    useEffect(() => {
        if (mqttClient != null) {
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

                if(message.toString()=='borrar'){
                    setMens('')
                }
                else{
                setMens(prevMens => prevMens + message.toString());
                }
            });
        }

        setCodigo(prevCodigo => prevCodigo + mens)
        console.log(`Codigo es ${codigo}`)

    }, [mqttClient, codigo]);

    if (mqttClient != null && !suscribed) {
        mqttClient.subscribe("miTopicoReact"); //Teclado
        suscribed = true;
    }

    return (
        <div>
            <div className='titleBox' style={{ width: "fit-content", margin: "0 auto", padding: "25px 100px" }}>{mens}</div>
            <Distribucion />
        </div>
    );
}

export default Conexion;
