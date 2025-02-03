import express from 'express';
import { healhRouter, usersRouter } from './route';
import { addTimestamp, logger } from './middlewares';

const app = express();
const port = 3000;

app.use(addTimestamp);
app.use(logger);

app.use('/health',healhRouter);
app.use('/users',usersRouter);



app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});

