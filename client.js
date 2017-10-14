var soap = require('soap');
var url = 'http://192.168.1.6:7789/?wsdl';

soap.createClient(url, function(err, client) {
    var args = {a:1, b:2};
    client.sum(args,function(err, result) {
        console.log('1 + 2 =',result['sumResult']);
    });
    client.sub(args,function(err, result) {
        console.log('1 - 2 =',result['subResult']);
    });
    client.mul(args,function(err, result) {
        console.log('1 * 2 =',result['mulResult']);
    });
    client.div(args,function(err, result) {
        console.log('1 / 2 =',result['divResult']);
    });
});