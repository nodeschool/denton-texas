'use strict';

/**
 * Module dependencies.
 */
var express = require('express');
var exphbs = require('express-handlebars');
var http = require('https');
var moment = require('moment');

var app = express();
var port = process.env.PORT || 8080;

var options = {
    team: 'TechmillDenton',
    count: 5,
    api_key: '' //TODO add a valid API_KEY - http://www.meetup.com/de-DE/meetup_api/auth/#keysign
};

var url = 'https://api.meetup.com/' + options.team + '/events?page=' + options.count + '&scroll=next_upcoming&sign=true&key=' + options.api_key;

/* Configuration */
// Set handlebars as the templating engine
app.engine('handlebars', exphbs({
    defaultLayout: 'main', helpers: {
        formatDate: function (date, format) {
            return moment(date).format(format);
        }
    }
}));

app.set('view engine', 'handlebars');
// Set /public as our static content dir
app.use("/", express.static(__dirname + "/public/"));
app.set('port', port);

app.get('/', function (req, res) {

    http.get(url, function (response) {
        if (res.statusCode == 200) {

            var body = '';
            response.on('data', function (chunk) {
                body += chunk;
            });
            response.on('end', function () {
                // send parsed body to template
                res.render('meetup_list', {list: JSON.parse(body)});
            });
        }

    }).on('error', function (e) {
        console.log("Got error: " + e.message);
    });
});

/* Start server */
app.listen(app.get('port'), function () {
    console.log('Express server listening on port %d in %s mode', app.get('port'), app.get('env'));
});