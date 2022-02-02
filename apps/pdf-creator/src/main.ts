/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import { unlinkSync } from 'fs';
import { generatePDF } from './app/generate-pdf';

var cors = require('cors')
const app = express();
app.use(cors());
app.use(express.json())

app.post('/generate-pdf', async (req, res) => {
  try {
    const path = await generatePDF(req.body.content);
    res.download(path, () => {
      unlinkSync(path);
    });
  } catch (err) {
    res.status(500).send({message: 'could not create pdf'});
  }
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/generate-pdf`);
});
server.on('error', console.error);
