const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/playground')
    .then(() => console.log('Connected to Mongo DB.'))
    .catch((err) => console.log('Connected to Mongo DB.', err));