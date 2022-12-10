

const test = (c,x) => (c-20) % 40 == 0 && c<=220 ? c*x : 0; 

const parse = (input) => input 
    .split('\n')
    .slice(0,-1)
    .map(x=>x
        .split(' ')
        .map((x,i)=>i==1?parseInt(x):x)
    ).reduce((a,b) => b[0] == 'noop' ? 
        {
            clock: a.clock+1,
            X: a.X,
            res: a.res + test(a.clock, a.X)
        } :
        { 
            clock: a.clock+2,
            X: a.X + b[1],
            res: a.res + test(a.clock, a.X) + test(a.clock+1, a.X)
        },
        {
            clock: 1,
            X: 1,
            res: 0
        }
    ).res;


exports.run = (input) => parse(input);

