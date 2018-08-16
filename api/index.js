const express   = require('express')
const app       = express()
const path      = require('path');

const port = 3000;
var postsObject = require('./mock-posts.json')

app.use(function(req, res, next){
  if (path.extname(req.path) === '.js'){
    res.set("content-type", "application/javascript; charset=utf-8");
  }
  next();
});

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', express.static(path.join(__dirname, '../dist')));

// respond with "hello world" when a GET request is made to the homepage
app.get('/post/:id', function (req, res) {
  return res.json({"data":{"type": "post", "id":"12312342", "date":"asdf", "post-id":1, "title":"asdf", "condensedtitle":"gsdhe", "content":"adsfag", "coverphoto":"aheteh" }});
});

app.get('/posts', function (req, res) {
    //return res.json({data:{ "type": "post", "id":"12312342", "post_id":1, "title":"asdf", "condensedtitle":"gsdhe", "content":"adsfag", "coverphoto":"aheteh" }});
    return res.json(postsObject);
  })

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port);

exports = module.exports = app;