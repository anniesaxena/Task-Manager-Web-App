const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://taskmanager:taskmanager123@ds235378.mlab.com:35378/heroku_dcc94q43', { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("Database connected"))
    .catch((error) => console.log(error));

module.exports = mongoose;