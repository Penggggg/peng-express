import express from './express';
import { BodyParser } from './express/Midwares';

let app = express();
app.listen('127.0.0.1', '80');

app.use(BodyParser( ));

app.get('/', (req, res) => {
    res.end(`hello world`);
});

app.get('/cat', (req, res) => {
    console.log(`cat`);
    res.end(`cat`);
});

app.get('/user/:name', ( req, res ) => {
    res.end(`user`);
});

app.get('/a/b', (req, res) => {
    res.end('a.b');
});

app.get('/animal/:name/:sex', ( req, res ) => {
    res.end(`animal`);
});

app.get('/beau/girl/:name', (req, res) => {
    res.end(`beau`);
});




app.node(`../static/sayhello.js`, 1, ( err, stdout, stderr ) => {
    console.log(stdout);
});
