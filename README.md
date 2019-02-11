# Sample to use SignalR in Excel with Excel Custom Functions

> To lean more about Excel Custom Functions see [Custom Functions Overview](https://docs.microsoft.com/office/dev/add-ins/excel/custom-functions-overview)

## Azure SignalR Service
For this Sample we'll use Azure SignalR Service in the serverless mode

* [Create an Azure SignalR Service instance](https://docs.microsoft.com/en-us/azure/azure-signalr/signalr-quickstart-azure-functions-csharp#create-an-azure-signalr-service-instance)
* Go to the Azure Signal Service Resouce that you just created in the portal and click `Settings`
* Change the `Service Mode` to `Serverless`
* Click `Save`

## Endpoint for AccessToken
In order to connect to the Azure SignalR Service instance, you'll need an endpoint to obtain an oAuth Bearer-Token(JWT).
You can use Azure Functions for this.
* See: [SignalR Service bindings for Azure Functions](https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-signalr-service)
* Get token from: [SignalR Service bindings for Azure Functions - Authenticated tokens](https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-signalr-service#authenticated-tokens)

## Configure Excel Custom Function
* open `customfunctions.ts`
* set `signalRTokenEndpoint` to the URL of your Azure Functions negotiate endpoint

## Use this sample in Excel-Online
* Open command-line
* `cd` into the root directory of this sample
* use `yarn` or `npm` to restore all packages
```bash
yarn install
```
```bash
npm install
```
* start web server using `yarn` or `npm`
```bash
yarn start-web
```
```bash
npm run start-web
```
* Open Excel Online
* On the `Insert` Ribbon, click on `Office Add-ins`
* In the new Dialog click `Upload my Add-in`
* Browse and upload `manifest.xml`
* in any call the custom function
```excel
=SIA.CONNECT_TO_SIGNALR("MessageType")
```
* use Azure Functions or anything else to send messages to the hub
