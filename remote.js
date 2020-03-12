class Remote {
    constructor(wsInstance) {
            if(document.location.href.indexOf("nocontrol")!==-1){
                console.log("You are in nocontrol.");
            }
            else{
                let socket = new WebsocketHeartbeatJs({
                    url: 'ws://127.0.0.1:8081',
                    pingTimeout: 5000, 
                    pongTimeout: 1000, 
                    reconnectTimeout: 2000,
                    pingMsg: "ping"
                });
                if(document.location.href.indexOf("speaker")!==-1){
                    socket.onopen = function (event) {
                    };
                    socket.onmessage = function (event) {
                        if(event.data!=="ping"){
                            var a=Number(event.data);
                            wsInstance.goToSlide(a-1);
                        }
                    };
                    socket.onreconnect = function(event){
                        console.log("Reconnect initiated");
                    };
                    wsInstance.el.addEventListener("ws:slide-change",function (event){
                        socket.send(event.detail.currentSlide);
                    });
                }
                else{
                    
                    socket.onopen = function (event) {
                    };
                    socket.onmessage = function (event) {
                        if(event.data!=="ping"){
                            var a=Number(event.data);
                            wsInstance.goToSlide(a-1);
                        }
                    };
                    socket.onreconnect = function(event){
                        console.log("Reconnect initiated");
                    };
                }
        }
    }
}
    
