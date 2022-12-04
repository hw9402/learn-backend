const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/view/index.html'));
});

app.get('/example', (req, res) => {
    res.send(`asjdfkljsaldkjflksajdfl;jlskjflk`);
});

app.listen(port, () => {
    console.log(`Connected on ${port}`);
});