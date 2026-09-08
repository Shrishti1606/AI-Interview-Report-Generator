require('dotenv').config()
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');

const app = express();

app.set('trust proxy', 1);

app.use(express.json());

app.use(cookieParser());

app.use(cors({
    origin: ["http://localhost:5173", "https://prepbot-alpha.vercel.app"],
    credentials: true
}));

/*require all routes*/
const authRouter = require('./routes/auth.routes')
const interviewRouter = require('./routes/interview.routes') 


app.use('/api/auth', authRouter);
app.use('/api/interview', interviewRouter);

app.get('/{*path}', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});





module.exports = app;