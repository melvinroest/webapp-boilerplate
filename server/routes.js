const app = require('./config').app
// app.use((req, res, next) => {
// 	if (req.session.username === undefined && req.path !== '/login' && req.url !== '/loginNew' && req.url != '/logout'){
// 		res.redirect('/login')
// 	} else {
// 		next();
// 	}
// })

app.listen(process.env.APPLICATION_PORT, x => {
	console.log(`= Routes are set, listening on port: ${process.env.APPLICATION_PORT}`)
})

exports.app = app