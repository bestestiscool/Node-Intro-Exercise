const fs = require("fs");

function cat(path){
  
  fs.readFile(path,'utf-8',(err,data) => {
    if (err) {
      console.log("Error",err);
      process.exit(1)
    }
    console.log("DATA...", data);

  })

}

cat('./one.txt')