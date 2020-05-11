const express = require("express");
const compression = require("compression");
const path = require("path");

const app = express();

app.use(compression());
app.use(express.static(path.resolve("client", "build")));

if(process.env.NODE_ENV === "production") {
    app.get("*", (req, res) => {
        res.sendFile(path.resolve("client", "build", "index.html"));
    });
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server listen on port" + PORT);
});


