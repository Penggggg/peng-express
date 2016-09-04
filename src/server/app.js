import express from './express';

let app = express();
app.listen('127.0.0.1', '80');

app.get('/', (req, res) => {
    console.log(req.user);
    res.end(`hello world`);
});

app.get('/cat', (req, res) => {
    console.log(`cat`);
    res.end(`cat`);
});

app.use((req, res) => {
    req.user = `hzp`;
});

app.node(`../static/sayhello.js`, 1, ( err, stdout, stderr ) => {
    console.log(stdout);
});
