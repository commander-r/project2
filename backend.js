const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('static'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/pages/index.html');
});

app.get('/discord', (req, res) => {
    res.redirect("https://discord.gg/cs5Jukrnt7");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));