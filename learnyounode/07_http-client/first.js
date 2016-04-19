var fs = require('fs');
var path = require('path');

module.exports = function(x, y) {
​  fs.readdir(x, function callback(err, files){
		var arr = []
		if(err){
			return callback(err);
		}
		for(var i = 0; i < files.length; i++){
			if(path.extname(files[i]).slice(1) === y){
				arr.push(files[i]);
			}
		}
		return arr;
	})
}
