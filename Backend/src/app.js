const express = require('express');
const aiRoutes = require('./routes/ai.routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// 🔍 Add this logging middleware RIGHT HERE
app.use((req, res, next) => {
    console.log('Incoming Request:', req.method, req.url);
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/ai', aiRoutes);

module.exports = app;
