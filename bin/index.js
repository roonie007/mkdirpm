#! /usr/bin/env node
const mkdirpm  	= require("../index");
const path  	= require("path");


if(process.argv.length >1)
{
	mkdirpm(process.argv,function(err,index,path)
	{
		if(err)
			console.log(err);
		else
			console.log("pow! \""+path+"\" has been created huzzah! ");
	});
}
else if(process.argv.length == 1)
{
	mkdirpm(process.argv[0],function(err)
	{
		if(err)
			console.log(err);
		else
			console.log("pow! \""+process.argv[0]+"\" has been created huzzah! ");
	});
}
else
{
	console.log("Please entre some Path(s)");
}

