const express = require('express');
const app = express();
const port = process.env.port || 5000;
const cors = require('cors');

app.use(cors());

const courses = require('./data/courses.json');
const courseDetails = require('./data/courseDetails.json');

app.get('/', (req, res) => {
    res.send("Server is running");
})

app.get('/all-courses', (req, res) => {
    res.send(courses);
})

app.get('/all-courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courseDetails.find(course => course.id == id);
    res.send(selectedCourse);
})

app.listen(port, () => {
    console.log('server is running on ', port);
})