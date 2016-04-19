var fs = require('fs');
var path = require('path');

module.exports = function(dir, ext, callback) {

	fs.readdir(dir, function(err, list) {
		if(err) {
			return callback(err)
		} else {

			var data = [];

			for(var i = 0; i < list.length; i++){

				if(path.extname(list[i]) === '.' + ext) {
					data.push(list[i]);
				}
			}
			callback(err, data);
		}
	});
}
