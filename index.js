
const fs = require('fs');
const path = require('path');

if(process.argv.length !== 5){
    console.log("usage : node index.js [day] [0: input; 1: exple] [0: pt1; 1: pt2]");
    process.exit(0);
}

const d = require(`./d${process.argv[2]}/script${process.argv[4] == 1 ? '2' : ''}.js`);
console.log(d.run(fs.readFileSync(path.resolve(__dirname, `./d${process.argv[2]}/${process.argv[3] == 0 ? 'input' : 'exple'}.txt`), 'utf8')));
