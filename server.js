const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt-nodejs');
const knex = require('knex');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profileId = require('./controllers/profileId');
const image = require('./controllers/image');

 const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'oussama',
    database : 'facerecognition'
  }
});
	
const app = express();

app.use(bodyParser.json());
app.use(cors());


app.get('/' , (req , res) => { res.send(database) })
app.post('/signin' , (req , res) => { signin.handleSignin(req ,res, db , bcrypt) });
app.post('/register' , (req , res) => { register.handleRegister(req , res , db , bcrypt) })
app.get('/profile/:id' , (req , res) => { profileId.handleProfileId(req , res , db) })
app.put('/image' , (req , res) => { image.handleImage(req , res , db) })
app.post('/imageurl' , (req , res) => { image.handleApiCall(req , res)})

app.listen(3001 , () => {
	console.log('app is running at port 3001');
})