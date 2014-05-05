var colorutils = require('./colorutil.js');

// var result = colorutils.luminosity();

var result = colorutils.luminosity( +(process.argv[2]), +(process.argv[3]), +(process.argv[4]) );

console.log(result);