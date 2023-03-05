import express from 'express';
import logger from './middleware/logger';
import { resizeImage } from './utils/imageUtils';

const app = express();

const port = 3000;

app.get('/api/images', logger, (req, res) => {
  resizeImage(req.query.filename as string, {
    size: {
      width: Number.parseInt(req.query.width as string) || 200,
      height: Number.parseInt(req.query.height as string) || 200,
    },
  })
    .then((file) => {
      res.sendFile(file);
    })
    .catch((err) => {
      res.status(400).send(err.message);
    });
});

app.get('/api', logger, (req, res) => {
  res.send('Welcome Image Processing API');
});
app.get('*', logger, (req, res) => {
  res.send('Welcome Image Processing');
});

app.listen(port, () => {
  console.log(`server started at localhost:${port}`);
});
