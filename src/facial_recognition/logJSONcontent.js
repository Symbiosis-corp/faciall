const fs = require('fs');

let filePath = './static/persons/test/howard.json';
async function logJSON(filePath){
    let file = fs.readFileSync(filePath, (err, data) => {
        if (err) throw err;
    });
    let parsedFile = JSON.parse(file);
    parsedFile = Object.values(parsedFile);
    console.log(parsedFile);
}
logJSON(filePath);

module.exports.logJSON = logJSON;