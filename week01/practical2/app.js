//Open port
const express = require('express');
const app = express();
const port = 3000;

//Part 1: Hello World! on homepage
app.get('/', (req, res) => {
    res.send('Hello World!')
});

////Part 2: Respond to POST req
app.post('/', (req, res) => {
    res.send('Got a POST request!')
});

//Part 3: Respond to PUT req
app.put('/user', (req, res) => {
    res.send('Got a POST request at /user!')
});

//Part 4: Respond to DELETE req
app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user!')
});

//Part 5: Serving static files
app.use(express.static('public'));

//Print out in terminal that port is open
app.listen(port, () => {
    console.log(`Express app listening on port ${port}`)
});
