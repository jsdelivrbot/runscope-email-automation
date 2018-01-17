var cool = require('cool-ascii-faces');
var express = require('express');
var multer  = require('multer')
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index')
});

app.get('/cool', function(request, response) {
  response.send(cool());
});

var upload = multer({ dest: './uploads' });

app.post('/parse', function (req, res) {
  var from = req.body.from;
  var text = req.body.text;
  var subject = req.body.subject;
  var num_attachments = req.body.attachments;
  for (i = 1; i <= num_attachments; i++){
    var attachment = req.files['attachment' + i];
    // attachment will be a File object
  }

  var oNode = text.evaluate('//a[1]', // XPath for first link in the document
        document, null, 0, 0
        ).iterateNext();
  console.log('[' + oNode.text + '](' + oNode.href + ')');

});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
