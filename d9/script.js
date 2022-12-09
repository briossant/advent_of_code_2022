
const parse = (input) => input 
    .split('\n')
    .slice(0,-1)
    .map(x=>x
        .split(' ')
        .map((x,i)=>i==1?parseInt(x):x)
    );


const tocoo = (grid) => {
    let x = 0;
    let y = 0;
    let nx = 0;
    let ny = 0;
    const ng = grid
        .map(k => {
            switch (k[0]){
                case 'R':
                    nx += k[1]
                    break;
                case 'L':
                    nx -= k[1]
                    break;
                case 'U':
                    ny += k[1]
                    break;
                case 'D':
                    ny -= k[1]
                    break;
            }

            const pos = [];
            while (Math.abs(nx-x) > 1 || Math.abs(ny-y)>1){
                x = x-nx >= 1 ? x-1 : x-nx <= -1 ? x+1 : x;
                y = y-ny >= 1 ? y-1 : y-ny <= -1 ? y+1 : y;
                pos.push(x+"-"+y)
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
	
    return tocoo(grid).remove_mltple().length;
}

