const mkdirpm  	= require("../../mkdirpm");
const path  	= require("path");
mkdirpm([path.join(__dirname,"aaaaaa/bbbbbb/cccccc/dddddd"),path.join(__dirname,"bbbbbb"),path.join(__dirname,"cccccc/aaaaaa")],function(err)
{
	if(err)
		console.log(err);
});