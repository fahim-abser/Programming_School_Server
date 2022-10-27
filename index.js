const express = require('express')
const app = express()
const port = 5000
const cors = require ('cors')
app.use(cors())
const courses = require('./data/courses.json')
app.get('/', (req, res) => {
  res.send('API Running')
})
app.get('/courses-categories',(req,res)=>{
    res.send(courses)
})
app.get('/course/:id',(req, res)=>{
  const id = req.params.id;
  const category_course = courses.filter(c=>c.course===id);
  res.send(category_course);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})