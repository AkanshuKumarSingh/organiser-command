#!/usr/bin/env node

let fs = require('fs');
let path = require('path');

let docFolder = [];
let picFolder = [];
let musicFolder = [];
let videoFolder = [];
let directoryPath = path.join(__dirname);

(function(){
    // console.log(__dirname);
    fs.readdir(directoryPath, function (err, files) {
        //handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        } 
        //listing all files using forEach
        files.forEach(function (file) {
            let name = file.split(".");
            if(name[0] === ""){
                // Do nothing because this is a git file
            }else{
                // check which type of file is this
                let ext = checkExt(file);           
            }
        });
        // console.log("doc : " + docFolder);
        // console.log("pic : " + picFolder);
        // console.log("video : " + videoFolder);
        // console.log("music : " + musicFolder);
        picFolder.forEach(element => {
            MoveIt(element,"pictures");
        });
        
        docFolder.forEach(element => {
            moveIt(element,"Documents");
        });

        videoFolder.forEach(element => {
            moveIt(element,"video");
        });

        musicFolder.forEach(element => {
            moveIt(element,"music");
        });

    });          
    
})();

function checkExt(fileName) {
    let name = fileName.split(".")[1];
    if(name === 'pdf' || name === '.ps' || name === '.html' || name === 'txt' || name === 'docx'){
        docFolder.push(fileName);       
    }else if(name === 'mp3' || name === 'wav' || name === 'aac' ||name === 'flac'){
        musicFolder.push(fileName);
    }else if(name === 'mp4' || name === 'avi' || name === 'mpg' ||name === 'ogg'){
        videoFolder.push(fileName);
    }else if(name === 'jpg'|| name === 'jpeg' || name === 'png'){
        picFolder.push(fileName);
    }
}

function moveIt(file,name) {

    if(!fs.existsSync(`${name}`)){
        fs.mkdirSync(`${name}`);
    }

    var newPath = __dirname + `\\${name}\\${file}`; 
    var oldPath = __dirname + `\\${file}`;
    // console.log(newPath);
    // console.log(oldPath);
    fs.rename(oldPath, newPath, function (err) {
        if (err) console.log(err.message);
        console.log(file + ' moved in '+ name)
      });
}
