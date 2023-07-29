const cluster = require('cluster');
const os = require('os');
const express = require('express');
const dotenv = require('dotenv');
const dbConnection = require('./config/dbConn');
const routes = require('./routes/routes');

const app = express();

dotenv.config();

if (cluster.isMaster) {
  for (let i = 0; i < os.cpus().length; i += 1) {
    cluster.fork();
  }
} else {
  routes(app);

  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    dbConnection();
  });
}
