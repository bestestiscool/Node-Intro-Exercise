const fs = require("fs");
const axios = require("axios");

function cat(path){
  
  fs.readFile(path,'utf-8',(err,data) => {
    if (err) {
      console.log("Error",err);
      process.exit(1)
    }
    console.log("DATA...", data);

  })

}


async function webCat(url) {
  try {
    const response = await axios.get(url);
    console.log("DATA...", response.data);
  } catch (err) {
    console.log("Error", err);
    process.exit(1);
  }
}

// Determine if the argument is a file path or a URL
const arg = process.argv[2];
if (arg.startsWith('http://') || arg.startsWith('https://')) {
  webCat(arg);
} else {
  cat(arg);
}

