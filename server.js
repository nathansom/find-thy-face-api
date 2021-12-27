require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

const PORT = process.env.PORT;

const db = knex({
    client: 'pg',
    connection: {
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
        //host : process.env.DB_HOST,
        //user : process.env.DB_USER,
        //password : process.env.DB_PASS,
        //database : process.env.DB_NAME
    }
});

db.select('*').from('users');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    //res.send(database.users);
    res.send('success');
})

app.post('/signin', (req, res) => {signin.handleSignin(req, res, db, bcrypt)});
app.post('/register', (req, res) => {register.handleRegister(req, res, db, bcrypt)});
app.get('/profile/:id', (req, res) => {profile.handleProfile(req, res, db)});
app.put('/image', (req, res) => {image.handleImage(req, res, db)});
app.post('/imageurl', (req, res) => {image.handleApiCall(req, res)})

app.listen(PORT || 3000, ()=> {
    console.log(`app is runnning on port ${PORT}`)
})

/*
/--> res = this is running
/sigin --> POST = success/fail
/register --> POST = user
/profiles/:uerId --> GET = user
/image --> PUT --> user
*/