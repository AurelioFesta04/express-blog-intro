const postsList = require("./post")

const express = require("express");
const app = express();
const port = 3001;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("Server del mio blog")
})

app.get("/bacheca/", (req, res) => {
    const post = {
        "posts": postsList,
        "numero di posts": postsList.length,
    }
    res.json(post);
})

app.listen(port, () => {
    console.log("Vediamo se il server parte");
})