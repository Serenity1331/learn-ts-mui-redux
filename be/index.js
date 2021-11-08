const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let user = {
    name: 'Jack',
    username: 'Bret',
    phone: '1-770-736-8031',
    email: 'jack@mail.ru',
    website: 'jackisback.com'
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