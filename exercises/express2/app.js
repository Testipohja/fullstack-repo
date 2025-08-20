import express from "express";

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.get("/",(req, res)=> {
    res.render("index",{
        title:"Welcome",
        message:"Hello from EJS",
        people:["John", "Jane", "Jim"],
    });
});

app.listen(8000, ()=> console.log("Server started"));