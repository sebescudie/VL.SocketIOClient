# VL.SocketIOClient

_A set of nodes to interact with a [socket.io](https://socket.io) server._

This plugin is still a work in progress. For some reason I can't handle deconnection correctly (after deconnection, if you reconnect, the server won't receive events anymore). This is why I removed the _Disconnect_ pin from the _Connection_ node.

Documentation is a bit harsh for now, but I'll clean the whole thing soon as I get it working properly. Any help is welcome :)

## Usage

- Latest vvvv alpha
- node.js if you wanna use the provided js test server