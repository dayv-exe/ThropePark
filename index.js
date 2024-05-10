const express = require('express');
const app = express();
const sqlite3 = require('sqlite3').verbose();
app.use(express.urlencoded({ extended: true }));

const db = new sqlite3.Database("database.db", err => {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log("Connected to the db!");
});

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json())

app.get('/', (req, res) => {
  res.render('index', { title: 'Home Page' });
});

app.get('/areas', (req, res) => {
  res.render('areas', { title: 'Areas', addDb: false });
});
app.get('/areas/:areaName', (req, res) => {
  res.render('areapage', { title: `${req.params.areaName}` });
});

app.get('/rides', (req, res) => {
  res.render('rides', { title: 'Rides' });
});
app.get('/rides/:rideName', (req, res) => {
  res.render('ridepage', { title: `${req.params.rideName}` });
});

app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Us' });
});

app.get('/faqs', (req, res) => {
  res.render('faqs', { title: 'FAQs' });
});

app.get('/events', (req, res) => {
  res.render('events', { title: 'Events' });
});
app.get('/events/:eventname', (req, res) => {
  res.render('anevent', { title: `${req.params.eventname}` });
});

app.get('/activity', (req, res) => {
  res.render('activity', { title: 'Activity' });
});

app.get('/create', (req, res) => {
  res.render('create', { title: 'Create' });
});

app.post("/sendData", (req, res) => {
  db.run(req.body.sql, req.body.params, err => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).send('Error inserting data' + err);
    } else {
      res.json({message: "submit success!"});
    }
  });
});

app.post('/getData', (req, res) => {
  db.all(req.body.sql, [], (err, rows) => {
      if (err) {
          console.error('Error retrieving data:', err);
          res.status(500).json({ error: 'Error retrieving data' });
      } else {
          res.json(rows);
      }
  });
});

// !!!ENABLE BEFORE SUBMISSION!!!
// app.listen(5000, () => console.log('Server started!'));

// !!!DISABLE BEFORE SUBMISSION!!!
app.listen(8000, () => console.log('Server started!'));