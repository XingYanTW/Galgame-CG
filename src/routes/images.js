const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

router.get('/random', (req, res) => {
    const imagesDir = path.join(__dirname, '../images');
    fs.readdir(imagesDir, (err, files) => {
        if (err) {
            return res.status(500).send('Error reading images directory');
        }
        const imageFiles = files.filter(file => /\.(jpg|jpeg|png|gif)$/.test(file));
        if (imageFiles.length === 0) {
            return res.status(404).send('No images found');
        }
        const randomImage = imageFiles[Math.floor(Math.random() * imageFiles.length)];
        res.sendFile(path.join(imagesDir, randomImage));
    });
});

module.exports = router;