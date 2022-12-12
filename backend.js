const express = require('express');
const app = express();
const port = 3000;
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

app.use(express.static('static'));
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
    res.render(__dirname + '/pages/index', {  });
});

app.get('/developers', async (req, res) => {
    res.render(__dirname + '/pages/developers', {  });
});

app.get("/mauro", (req, res) => {
    res.redirect("https://discord.com/users/271285474516140033");
})

app.get("/jasper", (req, res) => {
    res.redirect("https://discord.com/users/710853310361370624");
})

app.get("/martin", (req, res) => {
    res.redirect("https://discord.com/users/459252483902930955");
})

app.get('/discord', (req, res) => {
    res.redirect("https://discord.gg/cs5Jukrnt7");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));