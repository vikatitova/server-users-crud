const express = require("express");
const router = require('./routes/user-routes');

const hostname = "127.0.0.1";
const port = 3333;
const app = express();

app.use(express.json());
app.use('/users', router);
app.use(express.static("./client"));
app.listen(port, hostname, () => console.log(`Server running at http://${hostname}:${port}/`));
