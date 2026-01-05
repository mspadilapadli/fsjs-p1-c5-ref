const express = require("express");
const app = express();
const port = 3000;

//set view engine
app.set("view engine", "ejs");

//set middleware get data from html
app.use(express.urlencoded({ extended: true }));

//set routers
app.use("/", require("./routers/index"));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
