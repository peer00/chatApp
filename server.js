var WebSocketServer = require("ws").Server;
var server = new WebSocketServer({port: 3000});

var userDb = [];

server.on("connection", function(wsc){
	wsc.send("Connected");
	var user = {
		name: "",
		client: wsc
	}
	client.on("message", function(message){
		if(this.name === ""){
			this.name = message
		}else{
			userDb.forEach(function(user){
				if(user.client != this){
					user.client.send(message);
				}
			}
		}
	})
	userDb.push(user);
})

//david