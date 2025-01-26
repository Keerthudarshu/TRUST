const express = require('express');
const mongoose = require('mongoose');
const uploadRoute = require('./routes/upload');
const path = require('path');

const app = express();
const PORT = 3000;

mongoose.connect('mongodb://127.0.0.1:27017/trust');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api', uploadRoute);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});