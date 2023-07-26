// const cluster = require('cluster');
const express = require('express');
const dotenv = require('dotenv');
const dbConnection = require('./config/dbConn');
const routes = require('./routes/routes');

const app = express();

// const os = require('os');

// // if (cluster.isMaster) {
// /     cluster.fork();
// //   }
// // }/   for (let i = 0; i < os.cpus().length; i++) {
// //     console.log(process.pid);
// //

// console.log(os.cpus().length);

dotenv.config();

routes(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  dbConnection();
  // console.log(`Listening on PORT ${PORT}`);
});
