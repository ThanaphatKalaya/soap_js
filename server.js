var soap = require('soap');
var express = require('express');
var app = express();

var Service = {
    Application : {
        Application :{  	
            sum:function(args){
                var sum = args.a + args.b ;
                return {sumResult: sum};
            },

            sub:function(args){               
                var sub = args.a - args.b ;
                return {subResult: sub};
            },

            mul:function(args){   
                var mul = args.a * args.b ;
                return {mulResult: mul};
            },

            div:function(args){  
                var div = args.a / args.b ;
                return {divResult: div};
            }

        }
    }
};

var xml = require('fs').readFileSync('./wsdl.wsdl','utf8');
var server = app.listen(3030,function(){
    var host = "127.0.0.1";
    var port = server.address().port;
});
soap.listen(server,'/',Service,xml);
console.log('http://127.0.0.1:3030/?wsdl');
