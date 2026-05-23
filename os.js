// OS - Operating System
const os = require("os");

// User platform

// Software Informations
console.log("System Platform", os.platform()); // System Platform win32
console.log("OS Type", os.type()); // OS Type Windows_NT
console.log("OS Release", os.release()); // OS Release 10.0.26200
console.log("OS Version", os.version()); // OS Version Windows 11 Home Single Language
console.log("OS Architecture", os.arch()); // OS Architecture x64

// Hardware Informations
console.log("Total Memory",(os.totalmem() / (1024 ** 3)).toFixed(2)); //Total Memory 15.82
console.log("Current Free Memory",(os.freemem() / (1024 ** 3)).toFixed(2)); //Current Free Memory 5.79
console.log("Display Uptime", (os.uptime() / 3600).toFixed(2)); // Display Uptime 82.34

// Network Informations
console.log("Network Information", os.networkInterfaces()); // node os.js enter Terminal- full network details result visible
