// fs - File System
const fs = require("fs");

// 3 parameters:
// FileName
// File Content
// Callback Function
fs.writeFile("entri.txt","Hello It's a Entri Live Session",(err) => {
if(err){
    console.log("File Creation Failed");
    return;
}
console.log("File Operation Successful");
});

// after put node file.js in terminal & enter
// Result ->   "File Operation Successful" visible  at the sametime new file automatically created with typed text  
