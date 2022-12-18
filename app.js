const express = require("express");
const app = express();
const connectDB = require("./config/db");

connectDB();

app.get("/", (request, response) => response.send("Hello World!"));

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
