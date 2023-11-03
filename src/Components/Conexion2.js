import * as mqtt from "mqtt/dist/mqtt";
import Pantalla from './Pantalla';
import {useState, useEffect} from 'react';

function Conexion2() {
    const [client, setClient] = useState(null);
    const clientId = "emqx_react_" + Math.random().toString(16).substring(2, 8);
    const username = "emqx_test"; //""
    const password = "emqx_test"; //""

    const mqttConnect = () => {
      setClient(mqtt.connect("ws://broker.emqx.io:8083/mqtt", {
        clientId,
        username,
        password,
        }));
    };

    useEffect(() => {
      if (client) {

        console.log(client)

        client.on('connect', () => {
            console.log("Client connected: " + clientId);
            /* client.subscribe("testtopic/react"); //Teclado */
        });

        client.on('error', (err) => {
            console.log("Error: ", err);
            client.end();
        });

        client.on('reconnect', () => {
            console.log("Reconnecting...");
        });

        

        client.on("message", (topic, message) => {
            console.log(`received message: ${message} from topic: ${topic}`);
            });
      }
    }, [client]);

    const mqttSub = (subscription) => {
        if (client) {
          const { topic, qos } = subscription;
          client.subscribe(topic, { qos }, (error) => {
            if (error) {
              console.log('Subscribe to topics error', error)
              return
            }
            
          });
        }
      };


      return(

        <div>
        <Pantalla cliente = {client} />

        {/* <div>
            <div className='titleBox'>{mens}</div>         
        </div> */}
        </div>
    )

}

export default Conexion2