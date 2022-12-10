
const parse = (input) => input 
    .split('\n')
    .slice(0,-1)
    .map(x=>x
        .split(' ')
        .map((x,i)=>i==1?parseInt(x):x)
    );


const tocoo = (grid, nodes) => {
    let x = new Array(nodes).fill(0);
    let y = new Array(nodes).fill(0);
    const ng = grid
        .map(k => {
            switch (k[0]){
                case 'R':
                    x[0] += k[1]
                    break;
                case 'L':
                    x[0] -= k[1]
                    break;
                case 'U':
                    y[0] += k[1]
                    break;
                case 'D':
                    y[0] -= k[1]
                    break;
            }

            const pos = [];
            let b = true;
            while (b){
                b=false;
                for(let i = 0; i<nodes-1; i++){
                    if(Math.abs(x[i]-x[i+1]) > 1 || Math.abs(y[i]-y[i+1])>1) b=true;
                    else continue;
                    x[i+1] = x[i+1]-x[i] >= 1 ? x[i+1]-1 : x[i+1]-x[i] <= -1 ? x[i+1]+1 : x[i+1];
                    y[i+1] = y[i+1]-y[i] >= 1 ? y[i+1]-1 : y[i+1]-y[i] <= -1 ? y[i+1]+1 : y[i+1];
                    if(i==nodes-2) pos.push(x[i+1]+":"+y[i+1])
                }
            }
            return pos;
        }).flat();
    ng.push("0-0");
    return ng;
}

Array.prototype.remove_mltple = function() {return this
    .filter((item,index) => this.indexOf(item) === index);
}

exports.run = (input) => {
    const grid = parse(input);
	
    return tocoo(grid, 10).remove_mltple().length;
}

