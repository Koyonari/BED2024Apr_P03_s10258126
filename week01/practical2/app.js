const express = require('express');
const app = express();
const port = 3000;

//Hello World! on homepage
app.get('/', (req, res) => {
    res.send('Hello World!')
});

//Respond to POST req
app.post('/', (req, res) => {
    res.send('Got a POST request!')
});

//Respond to PUT req
app.put('/user', (req, res) => {
    res.send('Got a POST request at /user!')
});

//Respond to DELETE req
app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user!')
});

//Serving static files
app.use(express.static('public'));

//Print out in terminal that port is open
app.listen(port, () => {
    console.log(`Express app listening on port ${port}`)
});
