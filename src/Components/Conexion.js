import * as mqtt from "mqtt/dist/mqtt";

function conectar(){

    const clientId = "emqx_react_" + Math.random().toString(16).substring(2, 8);
    const username = "emqx_test"; //""
    const password = "emqx_test"; //""
    
    
    const mqttClient = mqtt.connect("ws://broker.emqx.io:8083/mqtt", {
    clientId,
    username,
    password,
    }); //ws://10.0.3.201:1883/mqtt
    
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
        });

}

export default conectar;
