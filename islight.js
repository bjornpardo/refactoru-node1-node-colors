
// var islight = function(r,g,b){
// 	if((0.2126*r + 0.7152*g + 0.0722*b) > 155) {
// 		return 'dark';
// 	}
// 	else {
// 		return 'light';
// 	}
// };

// console.log(islight(process.argv[2],process.argv[3],process.argv[4]));


var islight = function(r,g,b){
	if((0.2126*r + 0.7152*g + 0.0722*b) > 155) {
		return 0.2126*r + 0.7152*g + 0.0722*b + ' is dark';
	}
	else {
		return 0.2126*r + 0.7152*g + 0.0722*b + ' is light';
	}
};

console.log(islight(process.argv[2],process.argv[3],process.argv[4]));