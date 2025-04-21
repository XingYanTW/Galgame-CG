const express = require('express');
const path = require('path');
const imagesRouter = require('./routes/images');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (if needed)
app.use(express.static(path.join(__dirname, 'public')));

// Route for the main page
app.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>How to Use</title>
            </head>
            <body>
                <h1>Welcome to Galgame-CG Viewer</h1>
                <p>To view images, navigate to <code>/images/random</code>.</p>
                <p>Example: <a href="/images">http://localhost:${PORT}/images/random</a></p>
            </body>
        </html>
    `);
});

app.use('/images', imagesRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});