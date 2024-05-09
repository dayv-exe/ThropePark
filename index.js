const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', {title: 'Home Page'});
});

app.get('/areas', (req, res) => {
  res.render('areas', {title: 'Areas'});
});
app.get('/areas/:areaName', (req, res) => {
  res.render('areapage', {title: `${req.params.areaName}`});
});

app.get('/rides', (req, res) => {
  res.render('rides', {title: 'Rides'});
});
app.get('/rides/:rideName', (req, res) => {
  res.render('ridepage', {title: `${req.params.rideName}`});
});

app.get('/contact', (req, res) => {
  res.render('contact', {title: 'Contact Us'});
});

app.get('/faqs', (req, res) => {
  res.render('faqs', {title: 'FAQs'});
});

app.get('/events', (req, res) => {
  res.render('events', {title: 'Events'});
});
app.get('/events/:eventname', (req, res) => {
  res.render('anevent', {title: `${req.params.eventname}`});
});

app.get('/activity', (req, res) => {
  res.render('activity', {title: 'Activity'});
});

app.get('/create', (req, res) => {
  res.render('create', {title: 'Create'});
});

// !!!ENABLE BEFORE SUBMISSION!!!
// app.listen(5000, () => console.log('Server started!'));

// !!!DISABLE BEFORE SUBMISSION!!!
app.listen(8000, () => console.log('Server started!'));