const express = require("express");
const path = require("path");
const app = express();
const userRouter = require("./routes/userRoute");

app.use(express.static(path.join(__dirname, "public")));
app.use(userRouter);
app.listen(8080);
