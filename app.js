const express = require("express");
const app = express();
const connectDB = require("./config/db");
const memories = require("./routes/memory")

connectDB();

app.get("/", (request, response) => response.send("Hello World!"));
app.use("/api/memories", memories);

const port = process.env.PORT || 8082;


app.listen(port, () => console.log(`Server running on port ${port}`));
