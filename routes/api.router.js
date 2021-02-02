const router = require("express").Router();
const longpoll = require("express-longpoll")(router);
longpoll.create("/routerpoll");

const messages = [
    {sender: "Admin", text: "Добро пожаловать в чат", date: new Date().toLocaleTimeString()}
]

router.post("/createMessage", (req, res)=>{
    messages.push(req.body)
    longpoll.publish("/routerpoll", messages);
    res.sendStatus(200);
})
 

router.get("/getAllMessages", (req, res) => {
    longpoll.publish("/routerpoll", messages);
    res.sendStatus(200);
})

module.exports = router;

