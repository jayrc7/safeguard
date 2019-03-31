const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);


const accountSid = 'ACe11be7ac378940b666a60703769e3595';
const authToken = '34397ae08442e584a4ee7bfe378ad878';

// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);

client.messages.create(
  {
    to: '+16265411335',
    from: '+12039417889',
    body: 'Safeguard member #00000\nCommunity: Los Angeles \nType "Aid" in an emergency.',
  },
  (err, message) => {
    console.log(message.sid);
  }
);


app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});



