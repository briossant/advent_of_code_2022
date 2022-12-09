
Array.prototype.trans = function(){return this[0].map((x,i) => this.map(x => x[i]));}

Array.prototype.count = function(x){
    for(let i=0; i<this.length; i++){
        if(this[i]>=x){
            return i+1;
        }
    }
    return this.length
}



const parse = (input) => input 
    .split('\n')
    .slice(0,-1)
    .map(x=>x
        .split('')
        .map(x=>parseInt(x))
    );

const calculate = (grid, tgrid) => grid
    .map((x,i) => x
        .map((y,j) => x.slice(0,j).reverse().count(y)
            * x.slice(j+1).count(y)
            * tgrid[j].slice(0,i).reverse().count(y)
            * tgrid[j].slice(i+1).count(y)
        )
    );


exports.run = (input) => {
    const grid = parse(input);
    return Math.max(...calculate(grid, grid.trans()).map(x=>Math.max(...x)));
}

