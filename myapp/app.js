const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const multipart = require('connect-multiparty');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const passport = require('passport');
const userRouter = require('./routes/user');
const postRouter = require('./routes/post');
const likeRouter = require('./routes/like');
const app = express();
const session = require('express-session');
const flash = require('express-flash');

app.use(multipart());
app.use(expressLayouts);
app.use(passport.initialize());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: false,
  cookie: {
    maxAge: 30 * 60 * 1000
  }
}))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(flash());

app.use('/', userRouter);
app.use('/post', postRouter);
app.use('/like', likeRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
