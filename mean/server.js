var express = require('express');
var app = express();
var bodyParser = require('body-parser')

// app.use((req, res, next) => {
//   console.log(new Date().toISOString());
//   next();
// })

// app.get('/', function(req, res) {
//   res.send('Hello World')
// })

// app.get('/hello', (req, res) => {
//   res.send(`Hello ${req.query.name}`)
// })

// app.get('/hello/:id', (req, res) => {
//   res.send(`Hello ${req.params.id}`)
// })

// app.get('/person', (req, res) => {
//   let body = JSON.stringify(req.body)
//   res.send();
// })

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('<form action="person/create" method="post">' +
        '<input name="name" value="Egor" type="text" />' +
        '<input name="age" value="10" type="text" />' +
        '<button type="submit"> -> </button>' +
        '</form>'
    );
});

const persons = [
    { id: 1, name: 'Ivan', age: 15, },
];

app.post('/person/create', (req, res) => {
    const result = { 
        id: persons.length + 1,
        name: req.body.name,
        age: req.body.age,
    };
    persons.push(result);
    res.send(result);
});

app.get('/person/:id', (req, res) => {
    const result = persons.filter(p => p.id == req.params.id)[0];
    if (result === undefined)
        res.sendStatus(404);
    res.send(result);
});


// app.get('/person/myhtml', (req, res) => {
//   res.sendFile(__dirname + '/index.html')
// })

// app.get('/person/status', (req, res) => {
//   res.sendStatus(200, {})
// })

app.listen(3000, () => console.log('hello from 3000'));