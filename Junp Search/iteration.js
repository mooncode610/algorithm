const main = () => {
	const arr = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610];
	const step = 3;
	const target = 610;
	let index = 0;
	while(index < arr.length){
		if(arr[index] == target){
			console.log("Result is ", index + 1);
			break;
		}
		if(arr[index] < target) index += step;
		if(arr[index] > target) index --;
	}
}

main();