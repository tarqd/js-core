import path from 'path';
import fs from 'fs';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';

import App from '../client/App';
import client from '../shared/ldclient';
import { getServerSideClient } from '../shared/ldclient/ldclient';
const serverSideClient = getServerSideClient();

const PORT = process.env.PORT || 3006;
const app = express();

app.get('/', (req, res) => {
    const app = ReactDOMServer.renderToString(<App />);
    const indexFile = path.resolve('./dist/browser/index.html');
  
    fs.readFile(indexFile, 'utf8', (err, data) => {
      if (err) {
        console.error('Something went wrong:', err);
        return res.status(500).send('Oops, better luck next time!');
      }
      
      return res.send(
        data.replace('<div id="app"></div>', `<div id="app">${app}</div>`)
        .replace(`<script id="LD_INIT"></script>`, `<script id="LD_INIT">window.__LD_INIT = ${JSON.stringify(client.flagState.toJSON())};</script>`)
      );
    });
  });
  
  app.use(express.static('./dist/browser'));
  client.waitForInitialization().then(() => {
    
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  });
 