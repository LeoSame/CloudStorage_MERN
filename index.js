const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const userRouter = require('./routes/user.routes');
const fileRouter = require('./routes/file.routes');
const app = express();
const PORT = process.env.PORT || config.get('serverPort');
const corsMiddleware = require('./middleware/cors.middleware');
const serverPathMiddleware = require('./middleware/serverpath.middleware');
const fileUpload = require('express-fileupload');
const path = require('path');

app.use(fileUpload({}));
app.use(corsMiddleware);
app.use(serverPathMiddleware(path.resolve(__dirname)));
app.use(express.json());
app.use(express.static('static'));
app.use(express.static(path.resolve(__dirname, 'client', 'build')));

app.use('/api/auth', userRouter);
app.use('/api/files', fileRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

const start = async () => {
  try {
    await mongoose.connect(config.get('dbUrl'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    app.listen(PORT, () => {
      console.log('Server started on port ', PORT);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
