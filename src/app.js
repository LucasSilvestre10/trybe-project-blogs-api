const express = require('express');
const loginRouter = require('./routes/loginRouter');
const userRouter = require('./routes/userRouter');
const categoryRouter = require('./routes/categoryRouter');
const blogPostRouter = require('./routes/blogPostRouter');
// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

// ...

app.use(loginRouter);
app.use(userRouter);
app.use(categoryRouter);
app.use(blogPostRouter);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
