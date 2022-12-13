
const parse = (input) => input 
    .split('\n\n')
    .map(x=>x
        .split('\n')
        .map(x=>eval(x))
        .filter(x=>x!==undefined)
    ).map(x=>{
        
    })
    


exports.run = (input) => parse(input);
