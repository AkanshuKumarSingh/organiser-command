let fs = require('fs');
let path = require('path');

let directoryPath = path.join(__dirname);

(function(){
    fs.readdir(directoryPath, function (err, files) {
        //handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        } 
        //listing all files using forEach
        files.forEach(function (file) {
            // Do whatever you want to do with the file
            console.log(file); 
        });

    });
    
})();