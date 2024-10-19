var http = import ('http');
var date= import ("./date");
var getURL = import("./getURL")
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type':
         'text/html;charset=utf-8'});
         res.write (date()+"<br");
         res.write (getURL.getpath(req)+"<br>");
         res.write (getURL.getparamsURL(req)+"<br>");
        res.end('Hello KTPM0121, chúc bạn thành công với Nodejs');
}).listen(8080);