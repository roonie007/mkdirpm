const mkdirp = require('mkdirp');
module.exports = function(dirs,cb) 
{
	if(typeof dirs === "string")
	{
		if(dirs.length>0)
		{
			mkdirp(dirs, function(err)
			{
				cb(err,0,dirs);
			});
		}
		else
		{
			cb("Please enter a valid path");
		}
	}
	else if(Array.isArray(dirs))
	{
		if(dirs.length>0)
		{
			dirs.forEach(function(dir,i)
			{
				mkdirp(dir, function(err)
				{
					cb(err,i,dir);
				});
			});
		}
		else
		{
			cb("Please enter a valid array of paths");
		}
	}
	else
	{
		cb("Please enter a path or an Array of paths");
	}
}