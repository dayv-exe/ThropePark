const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', {title: 'Home Page'});
});

// !!!ENABLE BEFORE SUBMISSION!!!
// app.listen(5000, () => console.log('Server started!'));

// !!!DISABLE BEFORE SUBMISSION!!!
app.listen(8000, () => console.log('Server started!'));