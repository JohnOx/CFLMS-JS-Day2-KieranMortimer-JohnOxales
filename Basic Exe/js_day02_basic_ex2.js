let some_array = [12,35,1,7,6,-3,9,15];
var maxValue = null;

for (let i of some_array){
	if ( i > maxValue){
		maxValue = i;
	}
}
document.write(maxValue);