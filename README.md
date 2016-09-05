# peng-express
### personal NodeJS framework  which imitated [Express](https://github.com/expressjs/express) and made by es6

***
### it contains:
* Route System
* Midware - bodyParser

***
### App

#### usage
* `import express from './express';`
* `const app = new Express( );`

***
### Route System

#### usage
* without params `app.get('/', (req, res) => {
    res.end(`hello world`);
    });`
* with one param `app.get('/user/:name', ( req, res ) => {
    res.end(`user`);
    });`
* with some params `app.get('/animal/:name/:sex', ( req, res ) => {
    res.end(`animal`);
    });`

***

### Midware - bodyParser

#### usage
* `import { BodyParser } from './express/Midwares';
`
* `app.use(BodyParser());`

#### result
* app.get('/welcome', (req, res) => { //... })

 when: 127.0.0.1/welcome   
 result: req.path = 'welcome'; req.query = { }; req.params = { }

* app.get('/welcome', (req, res) => {
    //...
  })

  when: 127.0.0.1/welcome?name=hzp&num=123
  result: req.path = 'welcome'; req.query = { name:'hzp', num: 123 }; req.params = { }
* app.get('/user/:name', (req, ers) => {
   //...
  })

  when: 127.0.0.1/user/hzp
  result: req.path = '/user/.hzp'; req.query = { }; req.params = { name: 'hzp' }
