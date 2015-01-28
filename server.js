var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('Hello, Kyle and Miles');
});

app.get('/netid', function(request, response){
    response.send('netiddddd');
});

app.get('/nickname', function(request, response){
    response.send('misty wolverine');
});

app.listen(process.env.PORT || 4000);