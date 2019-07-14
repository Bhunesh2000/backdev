function average(arr){
	var total=0;                          
	arr.forEach(function(score){    // OR    for (var i=0;i<arr.length;i++){  
		total+=score;				// 	     total+=arr[i];	
	});							    //		 }
	var avg=total/arr.length;
	return Math.round(avg);
}
console.log("scores list 1 average ->")
var scores=[90,98,89,100,100,86,94];
console.log(average(scores));

console.log("scores list 2 average ->")
var scores2=[40,65,77,82,80,54,73,63,95,49];
console.log(average(scores2));