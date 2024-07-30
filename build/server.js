import express from 'express';
import hospitalRouter from './routes/HospitalRouter.js';
const app = express();
const port = 32;
app.use(express.json());
app.use(hospitalRouter);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
