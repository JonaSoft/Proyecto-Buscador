var bodyParser = require('body-parser'),
    http       = require('http'),
    express    = require('express')
    routing    = require('./requestRouting')

var port       = port = process.env.PORT || 8080,
    app        = express(),
    Server     = http.createServer(app)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('../public'))
app.use('/bdjson', routing)
Server.listen(port, () => {
  console.log("Servidor corriendo en el puerto: " + port)
})
