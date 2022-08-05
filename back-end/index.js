const { Router } = require("express");
var cors = require("cors");
const express = require("express");

const app = express();

app.set("port", process.env.PORT || 4000);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("./routes/users"));

app.listen(app.get("port"), () => console.log("Listen on port ", app.get("port")));
