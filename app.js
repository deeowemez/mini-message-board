
const express = require('express');
const path = require("node:path");
const app = express();
const messagesRoute = require('./routes/messagesRoute.js');

app.use(express.static('public'));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use('/', messagesRoute);

const PORT = 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}!`));