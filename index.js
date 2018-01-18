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

  // XPath for first link in the document
  var oNode = text.evaluate('//a[1]', document, null, 0, 0).iterateNext();
  console.log('Retrieved link: [' + oNode.text + '](' + oNode.href + ')');

  http.request({ host: oNode.href, method: 'GET' }, function(res) {
      console.log('Completed ' + oNode.text);
  }).end();
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
