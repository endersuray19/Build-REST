import express from 'express';

const app = express();
const port = 3000;

app.get('/',(req, res)=>{
    res.send('Hello World');
});

app.get('/health',(req, res)=>{
    res.send('OK');
})

app.get('/users/:id',(req, res)=>{
    console.log(`Query Parameters : ${JSON.stringify(req.query)}`);
    console.log(`Headers : ${JSON.stringify(req.query)}`);
    console.log(`Method: ${req.method}`);
    res.status(202).header({'X-Custom-Header':'foo', 'X-Custom-Header-2':'fuu'}).send(`Hello ID ${req.params.id}`);
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});

