
Array.prototype.trans = function(){return this[0].map((x,i) => this.map(x => x[i]));}


exports.run = (input) => input
    .split('\n\n')
    .map((x,i)=>i!=0 ? x : x
        .split('\n')
        .slice(0,-1)
        .map(x=>x.split('').filter((x,i)=>i%4 == 1))
        .trans()
        .map(x=>x.filter(x=>x!==' '))
    ).map((x,i,arr) => i==0?x:x
        .split('\n')
        .map(x=>x
            .split(' ')
            .filter((_,i)=>i%2==1)
            .map(x=>parseInt(x))
        ).filter(x=>x.length===3)
        .reduce((a,b) => {
            a[b[2]-1].unshift(a[b[1]-1].slice(0,b[0]).reverse())
            a[b[2]-1] = a[b[2]-1].flat()
            a[b[1]-1].splice(0,b[0])
            //console.log(a,b)
            return a
        },arr[0])
    )[1].map(x=>x.filter((x,i)=>i==0))
    .flat()
    .join('');
    



