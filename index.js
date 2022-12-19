const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

const courses = require('./Data/courses.json')
app.use(cors());
app.get('/', (req, res) => { //previous
  res.send('API Running')
})
app.get('/courses', (req, res) => {
  res.send(courses)
})
app.get('/courses/:id', (req, res) => {
  const id = req.params.id;
  const categoryCourse = courses.find(c => c.id == id);
  res.send(categoryCourse);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})