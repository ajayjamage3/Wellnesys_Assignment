const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;
const User_Data = 'users.json';
const {logger,errorHandler} = require("./middleware")

app.use(express.json());

// error handling.
app.use(errorHandler)


//  Route 1: Handle GET requests for the root URL ("/") and display a welcome message.
app.get('/', logger,(req, res) => {
  res.send('Welcome!');
});


// Route 2: Handle POST requests to "/api/users" and save user information to a JSON file.
app.post('/users',logger, (req, res) => {
  const user = req.body;
  fs.readFile(User_Data, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send({ error: 'Error while reading data' });
    } else {
      const users = JSON.parse(data);
      user.userId = users.length+1
      users.push(user);
      fs.writeFile(User_Data, JSON.stringify(users), err => {
        if (err) {
          console.error(err);
          res.status(500).send({ error: 'Error while creating user' });
        } else {
          res.status(201).send({ message: 'User created successfully' });
        }
      });
    }
  });
});


//  Route 3: Handle GET requests to "/api/users" and retrieve user information from the JSON file.
app.get('/users',logger, (req, res) => {
  fs.readFile(User_Data, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send({ error: 'Error while reading data' });
    } else {
      const users = JSON.parse(data);
      res.status(200).send(users);
    }
  });
});


// Handle invalid routes
app.use(logger,(req, res) => {
  res.status(404).send({ error: 'Not found' });
});


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
