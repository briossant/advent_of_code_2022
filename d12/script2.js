

const parse = (input) => input 
    .split('\n\n')
    .map(x => x
        .split('\n').map(x=>x.split(' '))
    ).map(x => {return {
        queue: x[1].slice(4).map(x=>parseInt(x.replace(/,/g, ""))),
        opp: x[2][x[2].length-2],
        strg: x[2][x[2].length-1],
        modo: parseInt(x[3][x[3].length-1]),
        test: (y) => y % parseInt(x[3][x[3].length-1])==0 ? parseInt(x[4][x[4].length-1]) : parseInt(x[5][x[5].length-1]),
        insp: 0
    }});


const loop = (monkeys, iter) => {
    const modo = monkeys.reduce((a,x)=>a*x.modo,1);
    for(let i=0;i<iter;i++){
        monkeys.forEach(x => {
            x.queue.forEach(y=>{
                strg = x.strg == 'old' ? y : parseInt(x.strg);
                y = (x.opp == '*' ? y*strg : y+strg) % modo;
                monkeys[x.test(y)].queue.push(y);
                x.insp += 1;
            });
            x.queue = [];
        });
    }
    return monkeys;
}

exports.run = (input) => loop(parse(input), 10000)
    .map(x=>x.insp)
    .sort((a,b)=>b-a)
    .reduce((a,x,i)=>i<2 ? a*x : a,1);

