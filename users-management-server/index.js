const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const users = [
    {id: 1, name: 'Sabana', email: 'sabana@gmail.com'},
    {id: 2, name: 'Sabnoor', email: 'sabnoor@gmail.com'},
    {id: 3, name: 'Sabila', email: 'sabila@gmail.com'},
]

// this is root route (will show if no data is created)
app.get('/', (req, res) => {
    res.send('Users management server Deployed')
  })

//this is user route
app.get('/users', (req, res)=> {
    res.send(users);
})

// 1. create a post api on the server side
app.post('/users', (req, res) => {
    console.log('post api hitting');
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser);
})


app.listen(port, ()=> {
    console.log(`server is running on PORT : ${port}`)
})
// to check its working : goto command line -> nodemon index.js