const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const Twitter = require('twit');

require('dotenv').config()

const app = express()
app.use(cors())
app.use(bodyParser.json());

const port = process.env.PORT || 4000;

const homeTimeline = require('./controllers/home_timeline');
const searchUser = require('./controllers/search_user')

const client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
});
//----------------------------------------------------------
app.get('/home_timeline', 
    (req, res) => 
        {homeTimeline.homeTimeline(req, res, client)})
//----------------------------------------------------------
app.post('/user', 
    (req, res) => 
        {searchUser.tweetsFromUser(req, res, client)})
//----------------------------------------------------------
  app.listen(port, error => {
    if (error) throw error;
    console.log('Server running on port ' + port);
  });