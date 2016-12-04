const Sequelize = require('sequelize')

let db = new Sequelize('test', process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, {
	host: 'localhost',
	dialect: 'postgres'
})


exports.db = db

console.log('database connection established')