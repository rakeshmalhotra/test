var http = require('http');
var url = require('url');
http.createServer(function (req, res) {
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    var page = '';
    if(url_parts.path == 'text') {
        page += '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>';
    } else {
        page += '<p>Hello World</p>';
        page += '<p><a href="/text">Please, click me</a></p>';
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(page);
}).listen(8090);