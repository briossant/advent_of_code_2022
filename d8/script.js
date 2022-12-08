
Array.prototype.trans = function(){return this[0].map((x,i) => this.map(x => x[i]));}
Array.prototype.count = function(x){return this.filter(y=>y===x).length}


const parse = (input) => input 
    .split('\n')
    .slice(0,-1)
    .map(x=>x
        .split('')
        .map(x=>parseInt(x))
    );

const count = (grid, g2) => grid.map((x,i1)=>x
        .filter((x,i2,arr) =>{ 
            const res = Math.max(...arr.slice(0,i2+1)) == x && arr.slice(0,i2+1).count(x) == 1 && g2[i1][i2] == x;
            if (res) {
                g2[i1][i2] = -1;
            }
            return res;
        }).length
    ).reduce((a,x)=>a+x,0);


exports.run = (input) => {
    let g2 = parse(input);
    const grid = parse(input);
    
    let sum = count(grid, g2) 
    
    g2 = g2.trans();
    sum += count(grid.trans(), g2)
        
    g2 = g2.trans().reverse().trans();
    sum += count(grid.reverse().trans(), g2);
    
    g2 = g2.reverse().trans();
    sum += count(grid.trans().reverse().trans(), g2);
    
    return sum;
}

