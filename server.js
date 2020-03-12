const WebSocket = require('ws');
const port = 8081;
const wss = new WebSocket.Server({ port: port });
let last = 1;
wss.on('connection', function connection(ws) {
  console.log(wss.clients.size);
  ws.send(last);
  //console.log("Connected");
  ws.on('message', function incoming(data) {
    //console.log(data);
    if(data==='ping'){
      ws.send('ping');
    }
    else{
      last = Number(data);
      wss.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
          client.send(data);
        }
      });
    }
  });
});
