const express = require("express");
// const mainRouter = require("./routes/mainRouter.js");
const apiRouter = require("./routes/api.router.js");


const app = express();

app.use(express.json({extended: true}));
// app.use(express.static(__dirname + "/src"));
// app.use(express.static(__dirname + "/node_modules"));
app.use("/api", apiRouter);
// app.use(mainRouter);

app.get("/", (req, res) => {
    res.status(200).send("Здарова ебать");
});


app.listen(80, ()=>{
    console.log("listening at 80")
});