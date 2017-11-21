const path = require('path')
const Express = require('express')

// initialize the server
const app = new Express()

// define the folder that will be used for static assets
app.use(Express.static(path.join(__dirname, 'dist')))

// start the server
const port = process.env.PORT || 8000
const env = process.env.NODE_ENV || 'production'

app.listen(port, function() {
    console.log('server Running')
});
