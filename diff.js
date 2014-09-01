//this whole programs should work on the basis of server client mechanism not
//this copying method.
var fs = require('fs'),
	lhs_url = process.argv[2],
	rhs_url = process.argv[3];

//these are temp urls
//ideally they should be delted after comparison or
//full paths should not be required.
var lhs_durl = 'diffoutp/lhs.txt',
	rhs_durl = 'diffoutp/rhs.txt';

//TODO: find out why this fully qualified paths are not working.
//this also causes the files to be not running when called from another program
//like git difftool.
//var lhs_durl = '~/mypocs/Study/mypocs/gdifftool/mergelydifftool/diffui/lhs.txt',
//	rhs_durl = '~/mypocs/Study/mypocs/gdifftool/mergelydifftool/diffui/rhs.txt';
var lhsReadStream = fs.createReadStream(lhs_url);
lhsReadStream.pipe(fs.createWriteStream(lhs_durl));

var rhsReadStream = fs.createReadStream(rhs_url);
rhsReadStream.pipe(fs.createWriteStream(rhs_durl));

lhsReadStream.on('end', function () {
	console.log('read ended on lhs');
});

rhsReadStream.on('end', function () {
	console.log('read ended on rhs');
});

console.log('Files getting diff are', process.argv.slice(2));
