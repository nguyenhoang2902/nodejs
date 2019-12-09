console.log('app.js');

const $ = require('jquery');
const Peer = require('simple-peer');
const p = new Peer({initiator : location.hash === '#1', trickle: false});
p.on('signal', token => $('#txtMySignal').val(JSON.stringify(token)));

//click send button
$('#btnSend').click(() =>{
	const sendToken = $('#txtSendToken').val();
	p.signal(JSON.parse(sendToken));
});
p.on('connect',() =>{
	console.log('connect');
})
// receive data 
p.on('data', data =>{
	console.log('data');
});
const openCamera = require('./CameraController');
openCamera();
