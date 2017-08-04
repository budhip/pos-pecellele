const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.connect('mongodb://mongobudhi:ILoveYou123@cluster0-shard-00-00-frloc.mongodb.net:27017,cluster0-shard-00-01-frloc.mongodb.net:27017,cluster0-shard-00-02-frloc.mongodb.net:27017/dbpecellelepos?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin');

let app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let signin = require('./routers/signin');
let users = require('./routers/users');
let menus = require('./routers/menus');

app.use('/api/signin', signin);
app.use('/api/users', users);
app.use('/api/menus', menus);

app.listen(process.env.PORT || 3000)
