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

async function getCourse() {
    const result = await Course.find({ author: 'Ubaid', isPublished: true })
        .limit(10)
        .limit(10)
        .sort({ name: 1 })
        .select({ name: 1, tags: 1 });
    console.log(result);
}

getCourse();