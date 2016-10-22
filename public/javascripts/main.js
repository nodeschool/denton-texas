const API_KEY = '686434d2914566372377704d792539';


// var myHeaders = new Headers();
// myHeaders.append('Access-Control-Allow-Origin', '*');
//
// var myInit = { method: 'GET',
//     headers: myHeaders,
//     mode: 'cors' };


var request = new Request('https://api.meetup.com/TechmillDenton/events?page=10&scroll=next_upcoming&sign=true&key=' + API_KEY);


// var xhr = new XMLHttpRequest();
// if ("withCredentials" in xhr) {
//     // XHR for Chrome/Firefox/Opera/Safari.
//     xhr.open('GET', 'https://api.meetup.com/TechmillDenton/events?page=10&scroll=next_upcoming&sign=true&key=' + API_KEY, true);
// }
//
// console.log(xhr);




fetch(request).then(function(response) {
    console.log(response);
    return response.json();
}).then(function(data) {
    console.log('data');
}).catch(function() {
    console.log("Booo");
});




// var http = require('http');
//
// //The url we want is: 'www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'
// var options = {
//     host: 'www.random.org',
//     path: '/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'
// };
//
// callback = function(response) {
//     var str = '';
//
//     //another chunk of data has been recieved, so append it to `str`
//     response.on('data', function (chunk) {
//         str += chunk;
//     });
//
//     //the whole response has been recieved, so we just print it out here
//     response.on('end', function () {
//         console.log(str);
//     });
// }
//
// http.request(options, callback).end();