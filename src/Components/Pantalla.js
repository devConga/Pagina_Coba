import '../Styles/App.css';
import '../Styles/index.css';
import {useState, useEffect} from 'react';
import * as mqtt from "mqtt/dist/mqtt";


function Pantalla(props) {

    var mqttClient = props.cliente

    const [mens, setMens] = useState()

    var mensaje = "hola";

    useEffect(() => {

        
        /* setMens(mensaje) */
        console.log("Mens cambiado")

    },[mensaje])    


    mqttClient.on("message", (topic, message) => {
        console.log(`received message: ${message} from topic: ${topic}`);
        mensaje = message.toString()
        
        /* setMens(message.toString()) */
        });

    
    
    /* console.log(`Mensaje es: ${mensaje}`) */

    return(
        <div>
            <div className='titleBox'>{mens}</div>         
        </div>
        
    )

}

export default Pantalla