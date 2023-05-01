const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const HttpError = require('./models/http-error');
const usersRoutes = require('./routes/users-routes');
const lz77Routes = require('./routes/lz77-routes');
const lzwRoutes = require('./routes/lzw-routes');
const cors = require('cors');

const app = express();

app.use(cors());

app.use('/lz77', lz77Routes);

app.use('/lzw', lzwRoutes);

app.use(bodyParser.json());

app.use('/uploads/files', express.static(path.join('uploads', 'files')));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
  );
  next();
});

app.use('/api/users', usersRoutes);

app.use((req, res, next) => {
  const err = new HttpError('Could not find this route!', 404);
  next(err);
});

app.use((error, req, res, next) => {
  if (req.file) {
    fs.unlink(req.file.path, (err) => {
      console.log(err);
    });
  }
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({
    message: error.message || 'An unknown error occured!',
  });
});

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.uhitmnp.mongodb.net/${process.env.DB_NAME}`
  )
  .then(() => {
    app.listen(process.env.PORT || 4000);
    console.log('Connected to DB');
  })
  .catch((err) => {
    console.log(err);
    console.log("Couldn't connect to the DB");
  });
