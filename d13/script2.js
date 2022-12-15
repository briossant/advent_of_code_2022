
const next = (l1,l2) => {
    for(let i=0;i<l1.length;i++){
        let k=0
        if(l2.length <= i) return -1;

        if(Array.isArray(l1[i])){
            k = next(l1[i], Array.isArray(l2[i]) ? l2[i] : [l2[i]]);
        }else if(Array.isArray(l2[i])){
            k = next(Array.isArray(l1[i]) ? l1[i] : [l1[i]], l2[i]);
        }else{
            k = Math.sign(l2[i]-l1[i])
        }          
        if(k!==0){
            return k;
        }
    }
    return l2.length == l1.length ? 0 : 1;
}

const parse = (input) => input 
    .split('\n\n')
    .map(x=>x
        .split('\n')
        .map(x=>eval(x))
        .filter(x=>x!==undefined)
    ).flat();


exports.run = (input) => {
    let ls = parse(input)
    ls.push([[2]]);
    ls.push([[6]]);
    ls = ls.sort((a,b)=>-next(a,b)).map(x=>x.toString());
    return (1+ls.indexOf("2")) * (1+ls.indexOf("6"));
};
