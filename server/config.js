// This module sets up an express server dependent on pug and body-parser.
// Pug templates are in the 'views' folder and are client-side resources are in the 'public' folder.
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const session = require('express-session')

// Pug
app.set('views', __dirname + '/views')
app.set('view engine', 'pug')

// Bodyparser
app.use(bodyParser.json());      
app.use(bodyParser.urlencoded({ 
	extended: true,
	verify:function(req,res,buf){req.rawBody=buf}
}));

// Express-session
app.use(session({
	secret:process.env.SESSION_SECRET,
	resave:true,
	saveUninitialized: false
}))

// Folder to serve to client-side
app.use(express.static(__dirname + '/../public'));

exports.app = app

console.log('= Server config is set')