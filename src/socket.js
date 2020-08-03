import socketIOClient from 'socket.io-client';

const ENDPOINT =
  'http://ebanking-env.eba-b5wfv7am.us-east-2.elasticbeanstalk.com';

export const socket = socketIOClient(ENDPOINT);
