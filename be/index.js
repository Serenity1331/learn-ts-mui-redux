const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const cors = require("cors");
app.use(cors());

let user = {
    name: 'Elvira',
    username: 'Mistress of the Dark',
    phone: '6-999-666-999',
    email: 'cassandra@yahoo.com',
    website: 'boobsinthedarkness.com'
}

app.use(bodyParser.json());

app.get('/user', (req, res) => {
    res.send(user);
})

app.post('/user', (req, res) => {
    user = {...req.body};

    res.send(user);
})

app.listen(3000, () => console.log('web-server running on 3000 port'))