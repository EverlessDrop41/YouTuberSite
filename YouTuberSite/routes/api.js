﻿var http = require('https');
var querystring = require('querystring');

module.exports = function (app) {
	app.get('/api/list/:channelId', function (req, res) {
		var channel = req.params.channelId;
		console.log(channel);
    //https://www.googleapis.com/youtube/v3/search
    //?part=snippet&channelId=UC9DiuD3z0btMOAMG_FvDRag&key=AIzaSyCtBppALGmSX13Cn8lLSxYHs486cmSJadE&maxResults=10&q=h
    var qs = querystring.stringify({
      part: 'snippet',
      channelId: channel,
      key: app.locals.key,
      maxResults: 15,
      type: 'video',
      order: 'date'
    });
    qs += (req.query.pt ? '&pageToken=' + req.query.pt: '')
    console.log('/youtube/v3/search?' + qs);
    http.get({
      host: 'www.googleapis.com',
      path: '/youtube/v3/search?' + qs
    }, function (response) {
      var body = '';
        response.on('data', function(d) {
          body += d;
        });
      response.on('end', function() {
        //console.log(body);
        res.json(JSON.parse(body));
      });
    }).on('error', function(e) {
      console.error(e);
    });
  });
}