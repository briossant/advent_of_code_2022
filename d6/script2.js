
const test_sub = (l) => l
	.every((x,i,l)=>
		!(l.slice(0,i).includes(x)) && !(l.slice(i+1).includes(x))
	);


Array.prototype.first = function(test,len){
	for(let i=0;i<this.length-len;i++){
		if(test(this.slice(i, i+len))){
			return i;
		}
	}
	return -1;
}


exports.run = (input) => input
	.split('')
	.first(test_sub,14) + 14;



