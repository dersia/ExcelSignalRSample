import { HubConnection,HubConnectionBuilder, HttpTransportType, LogLevel } from '@aspnet/signalr'

let signalRTokenEndpoint = "";

function getSignalRInfo() {
  return fetch(signalRTokenEndpoint)
         .then(res => res.text())
         .catch(error => console.log(error));
}

function initSignalR(messagetype: string, callback) {
  getSignalRInfo()
  .then(res => {
    if(typeof res === "string") {
      var response = JSON.parse(res);
      var options = {
        accessTokenFactory: () => response.accessToken
      }
      var connection: HubConnection = new HubConnectionBuilder()
                      .withUrl(response.url, options)
                      .build();
      connection.on(messagetype, (message:any) => { 
        console.log(message); 
        callback.setResult("Message Received: " + message);
      });
      connection.start()
                .then(() => console.log("connected"))
                .catch(console.error);
    }
    callback.onCanceled = () => {
      connection.off(messagetype);
    };
  })
  .catch(console.error);
}

CustomFunctions.associate("CONNECT_TO_SIGNALR", initSignalR);

