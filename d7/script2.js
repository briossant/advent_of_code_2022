
let dir = ['/'];
const tree = {'/':0};

const cd = (path) => {
    switch(path){
        case '/':
            path = ['/'];
            break;
        case '..':
            dir.pop();
            break;
        default:
            dir.push(path);
            const id = dir.join('');
            if(tree[id] === undefined) {
                tree[id] = 0;
            }
            break;
    }
}

const ls = (output) => output
    .map(x=>x.split(' ')[0])
    .filter(x=>x != 'dir' && x.length > 0)
    .forEach(data => {
        dir.forEach((d,i) => {
            tree[dir.slice(0,i+1).join('')] += parseInt(data);
        });
    });


const parse = (input) => input 
    .split('$ ')
    .map(x=>x.split('\n'))
    .forEach(cmd => {
        name = cmd[0].split(' ');
        switch(name[0]){
            case 'cd':
                cd(name[1])
                break;
            case 'ls':
                ls(cmd.slice(1))
                break;
        }
    });

exports.run = (input) => {
    parse(input);
    const needed_space = 30000000 - (70000000 - tree['/']);
    return Object.values(tree)
        .filter(x => x>=needed_space)
        .reduce((a,x)=>x < a ? x : a,Infinity);
}   

