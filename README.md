# mkdirpm
Like mkdir -p, but in node.js! and create multiple directories at one time **No sync** - refer to "https://www.npmjs.com/package/mkdirp"

### Install
```sh
$ npm install mkdirpm
```
or (globally)
```sh
$ npm install mkdirpm -g 
```
### Example
```sh
const mkdirpm  	= require("mkdirpm");
const path  	= require("path");
mkdirpm([path.join(__dirname,"folder1/folder2/folder3/folder4"),path.join(__dirname,"folder2"),path.join(__dirname,"folder3/folder1")],function(err,index,path)
{
	if(err)
		console.log(err,index,path); 
	// index : index of the path with an error in the array
	// path  : the path
});
```

#### OR only one path

```sh
const mkdirpm  	= require("mkdirpm");
const path  	= require("path");
mkdirpm(path.join(__dirname,"cccccc/aaaaaa"),function(err,index,path)
{
	if(err)
		console.log(err);
});
```

### Example globally
```sh
mkdirpm "/home/user/folder1" "/home/user/folder2/folder1" "/home/user/folder3/folder1/folder2/folder3" "/home/user/folder4"
```
