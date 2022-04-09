const	jsonServer = require('json-server'),
		server = jsonServer.create(),
		router = jsonServer.router('./public/db.json'),
		middlewares = jsonServer.defaults({
			static: './build'
		}),
		PORT = process.env.PORT || 3001;

server.use(middlewares);
server.use(router);

server.listen(PORT, () => {
	console.log('Server is running ;)');
});