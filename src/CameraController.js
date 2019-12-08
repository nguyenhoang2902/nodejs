console.log('CameraController.js');
var {playVideo} = require('./PlayVideo');
var openCamera = () =>{
	navigator.mediaDevices.getUserMedia({audio:true, video:true})
	.then(stream => playVideo(stream,'localStream'))
	.catch(err => console.log(err));	
}
module.exports = openCamera;
