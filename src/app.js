const express = require('express');
const path = require('path');
const imagesRouter = require('./routes/images');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/images', imagesRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});