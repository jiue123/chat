const io = require('socket.io-client');

var socket = io('http://socket.local:8002', {
    query: {
        email : userEmailGlobal
    }
});

const socketObj = {
    socket: socket
};

module.exports = socketObj;