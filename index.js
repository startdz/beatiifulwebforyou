import express from 'express';

const port = 8000;
const app = express();
app.use(port, () => {
    console.log('Starting')
})
