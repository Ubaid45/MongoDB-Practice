const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('Connected to Mongo DB.'))
    .catch((err) => console.log('Connected to Mongo DB.', err));

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublished: Boolean
});

const Course = mongoose.model('Course', courseSchema);

async function createCourse() {
    const course = new Course({
        name: 'Express.js Course',
        author: 'Ubaid',
        tags: ['express', 'backend'],
        isPublished: true
    });

    const result = await course.save();
    console.log(result);
}

createCourse();