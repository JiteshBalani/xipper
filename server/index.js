const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());

app.use(cors({
    origin: process.env.FRONTEND_URL, 
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true // If you're using cookies/sessions
}));

app.options('*', cors());

const PORT = 3000;

app.listen(PORT, ()=>{
    try{
        console.log('Server is running on', PORT);
    } catch(err) {
        console.log(err);
    }
});