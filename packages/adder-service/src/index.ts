import * as dotenv from 'dotenv';
/* Load .env options into process.env */
dotenv.config();

import express from 'express';

/* The port the service will listen on (defaults to 3000) */
const PORT = parseInt(process.env.ADDER_SERVICE_PORT || '3000');

/* Create an Express app */
const app = express();

/* Set up middleware to parse JSON request bodies */
app.use(express.json());

/* Create the micro-service endpoint */
app.post('/', (req, res) => {

    /* See if request is valid */
    if (!req.body || typeof req.body.a !== 'number' || typeof req.body.b !== 'number') {
        res.status(400).json({ error: 'Invalid request' });
        return;
    }

    /* Calculate the sum */
    const { a, b } = req.body;
    const result = a + b;

    /* Send the result */
    res.json({ result });
});

/* Start the service */
app.listen(PORT, () => {
    console.log(`Adder Service listening on port ${PORT}`);
});