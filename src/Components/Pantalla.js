import '../Styles/App.css';
import '../Styles/index.css';
import {useState, useEffect} from 'react';
import * as mqtt from "mqtt/dist/mqtt";


function Pantalla(props) {

    var mqttClient = props.cliente

    const [mens, setMens] = useState(null)

    


    mqttClient.on("message", (topic, message) => {
        console.log(`received message: ${message} from topic: ${topic}`);
        setMens(message.toString())
        });

    return(
        <div>
            <div className='titleBox'>{mens}</div>         
        </div>
        
    )

}

export default Pantalla