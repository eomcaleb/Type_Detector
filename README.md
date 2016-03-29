# Type_Detector #
#### Detects typing and notifies to all users ####
![Interface Image](/img/demonstration.gif)

## Setup ##
Note: this is an add-on to the existing project that demonstrates a simple chatroom. More information on: http://socket.io/get-started/chat/

Pre-installation required (installation guide: http://socket.io/get-started/chat/):
* Express
* Socket.io


Open up a command prompt in the current directory (./Type_Detector) and run the following command:
* node index.js

###Folder Structure###
* index.html - Client side page
* index.js - Server side script
* package.json - manifest file for this project


## Languages / Syntax ##
* CSS, HTML, Javascript, JQuery, JSON, Socket.io

## Server Side Magic Code ##
The function below will receive a socket object 'true' or 'false' that listens for the socket on 'untyped'. It will then emit to all users the status (true of false).

  socket.on('untyped', function(status){
    io.emit('type alert', status);
  });

## Client Side Magic Code (JQuery) ##
The function below detects every keyboard change and checks the logic to see if the user is typing or not.


  $('#msg').on('keyup', function(event) {
  
	if (document.getElementById('msg').value != "" && !notified){
	
		socket.emit('untyped', 'true');
		
		notified = true;
		
	}	
	else if (document.getElementById('msg').value == "" && notified){
	
		socket.emit('untyped', 'false');
		
		notified = false;
		
	} 
	
  });
  
Logic: 

* if message field is not empty and server is not notified notify server typing.
* else if message field is empty and server is notified of typing notify server not typing.



## Customization/ ##
more features to come...

## FAQ ##
name: Caleb SeBin Eom.

email: eomcaleb@gmail.com


Readme Updated: 28-Mar 2016
