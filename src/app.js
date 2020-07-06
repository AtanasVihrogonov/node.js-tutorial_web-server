const path = require('path');

// load express library --> create new express aplication
const express = require('express');

// store express aplication
const app = express();

// generate the path to the public folder
const publicDirectoryPath = path.join(__dirname, '../public');

// set hbs to use dinamic template
app.set('view engine', 'hbs');

// providet to static aplication
app.use(express.static(publicDirectoryPath));

// tell express what exactly should do
// setup server
// app.get('', (req, res) => {
//   res.send('<h1>A.V</h1>');
// });

// app.get('/help', (req, res) => {
//   res.send({
//     name: 'Atanas',
//     age: 36
//   });
// });

// app.get('/about', (req, res) => {
//   res.send('<h2>About</h2>');
// });

app.get('/weather', (req, res) => {
  res.send({
    forcast: '50 degree',
    location: 'London'
  })
});

// start server up
app.listen(3000, () => {
  console.log('Server is up on port 3000.');
});



