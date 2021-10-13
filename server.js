const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello world eben");
});

app.listen(port, () => {
    console.log(`express server listening on port ${port}`);
});