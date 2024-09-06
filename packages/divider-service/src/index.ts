import * as dotenv from "dotenv";
/* Load .env options into process.env */
dotenv.config();

import express from "express";

/* The port the service will listen on (defaults to 3003) */
const PORT = parseInt(process.env.DIVIDER_SERVICE_PORT || "3003");

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

    /* See if division by zero is attempted */
    if (req.body.b === 0) {
        res.status(400).json({ error: 'Division by zero' });
        return;
    }

    /* Calculate the quotient */
    const { a, b } = req.body;
    const result = a / b;

    /* Send the result */
    res.json({ result });
});

/* Start the service */
app.listen(PORT, () => {
    console.log(`Divider Service listening on port ${PORT}`);
});
