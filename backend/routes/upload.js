const express = require('express');
const multer = require('multer');
const Image = require('../models/Image');
const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

router.post('/upload', upload.single('image'), async (req, res) => {
    const { title, category } = req.body;
    const imagePath = req.file.path;

    const newImage = new Image({ title, category, imagePath });
    await newImage.save();

    res.json({ message: 'Image uploaded successfully' });
});

router.get('/images', async (req, res) => {
    const images = await Image.find();
    res.json(images);
});

module.exports = router;