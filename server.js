import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import config from './config';

const server = express();

server.use(express.static(__dirname))
  .use(cookieParser())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }))

server.get('/', (req, res) => {
  res.render('index', {
  });
});



server.listen(config.port, () => {
  console.info('Express listening on port ', config.port);
});
