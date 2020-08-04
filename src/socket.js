import socketIOClient from 'socket.io-client';

const ENDPOINT = 'https://qbanking.herokuapp.com';

export const socket = socketIOClient(ENDPOINT);
