import express from './express';

let app = express();
app.listen('127.0.0.1', '80');

app.get('/', (req, res) => {
    console.log(`i am in /`);
    console.log(req.user);
    res.end(`hello world`);
});

app.use((req, res) => {
    req.user = `hzp`;
});
