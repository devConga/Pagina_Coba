import '../Styles/App.css';
import '../Styles/index.css';
import {useState, useEffect} from 'react';
import * as mqtt from "mqtt/dist/mqtt";


function Pantalla(props) {

    const mqttClient = props.cliente

    const [mens, setMensaje] = useState(0)


    mqttClient.on("message", (topic, message) => {
        console.log(`received message: ${message} from topic: ${topic}`);
        setMensaje(mens + 1)
        });

    return(
        <div>
            <div className='titleBox'>{mens}</div>         
        </div>
        
    )

}

export default Pantalla