const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");

const app = express();
app.use(cors());

let user = {
    name: 'Elvira',
    username: 'Mistress of the Dark',
    phone: '6-666-666-66',
    email: 'cassandra@yahoo.com',
    website: 'www.jointhedarkside.com'
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