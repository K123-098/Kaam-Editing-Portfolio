// server.js
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/content', (req, res) => {
    fs.readFile(path.join(__dirname, 'src/index.html'), 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading file.');
        }
        res.send(data);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
