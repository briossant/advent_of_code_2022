const done_char = "~";

const test = (grid, x, y, h) => (x2, y2) => x2 >= 0 && y2 >= 0 && x2<grid.length 
    && y2<grid[0].length && grid[x2][y2] != done_char && h-grid[x2][y2] >= -1;


const find_val = (grid, val) => {
    let res = {x:0,y:0}
    grid.forEach((x,i)=>x.forEach((y,j)=>{
        if(y==val) res = {x:i,y:j};
    }));
    return res;
}

const calculate_cost = (grid) => {
    const ed = find_val(grid, 69);
    const st = find_val(grid,83);
    
    grid[ed.x][ed.y] = 123;
    grid[st.x][st.y] = 97;
    
    st.cost = 1;
    st.h = 97;
    const file = [st];
 
    
    const next = (t,x,y,c) => { 
        if(t(x,y)){
            if(grid[x][y] == 123){
                return true;
            }
            file.push({x:x, y:y, cost:c+1, h: grid[x][y]});
            grid[x][y] = done_char;
        }
        return false;
    }
    
    while(file.length > 0){
        const k = file[0];
        file.shift();

        const t = test(grid,k.x,k.y,k.h);
        if(next(t,k.x+1,k.y,k.cost)) return k.cost;
        if(next(t,k.x-1,k.y,k.cost)) return k.cost;
        if(next(t,k.x,k.y-1,k.cost)) return k.cost;
        if(next(t,k.x,k.y+1,k.cost)) return k.cost;

        if(Math.random()<1.75) console.log(grid.map(x=>x.map(x=>x==done_char?x:"#").join('')).join('\n'))
    }

    return -1;
}

const parse = (input) => input 
    .split('\n')
    .slice(0,-1)
    .map(x=>x.split('').map(x=>x.charCodeAt(0)))    


exports.run = (input) => {
    const grid = parse(input);
    return calculate_cost(grid);
}
