
exports.run = (input) => input
    .split('\n')
    .map(x=>x.split(',').map(x=>x.split('-').map(x=>parseInt(x))))
    .reduce((a,x)=>{
        if(x.length===2){
            if(x[0][0] >= x[1][0] && x[0][1] <= x[1][1]){
                return a+1;
            }
            if(x[0][0] <= x[1][0] && x[0][1] >= x[1][1]){
                return a+1;
            }
        }
        return a;
    } ,0);



