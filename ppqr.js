
const generatePayload = require('promptpay-qr')
//const qrcode = require('qrcode') 
//const fs = require('fs') 

const mobileNumber = '095-908-7752'
//const IDCardNumber = '0-0000-00000-00-0'
const amount = 10
const payload = generatePayload(mobileNumber, { amount }) //First parameter : mobileNumber || IDCardNumber
console.log(payload)

/*
// Convert to SVG QR Code
const options = { type: 'svg', color: { dark: '#000', light: '#fff' } }
qrcode.toString(payload, options, (err, svg) => {
    if (err) return console.log(err)
    fs.writeFileSync('./qr.svg', svg)
    console.log(svg)
})
*/

var mqtt = require('mqtt');

const MQTT_SERVER = "soldier.cloudmqtt.com";
const MQTT_PORT = "11970";
//if your server don't have username and password let blank.
const MQTT_USER = "snackvending";
const MQTT_PASSWORD = "1234";

// Connect MQTT
var client = mqtt.connect({
    host: MQTT_SERVER,
    port: MQTT_PORT,
    username: MQTT_USER,
    password: MQTT_PASSWORD
});

client.on('connect', function () {
    // Subscribe any topic
    console.log("MQTT Connect");
    client.subscribe('/NodeMCU', function (err) {
        if (err) {
            console.log(err);
        }
    });
});

// Receive Message and print on terminal
client.on('message', function (topic, message) {
    // message is Buffer
    console.log(message.toString());
});

/*setInterval(() => {
    client.publish("test", "hello from NodeJS");
}, 5000);*/