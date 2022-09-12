const getRange = (arr, target) => {
	let index = 1;
	while(arr[index] < target) {
		index *= 2;
	}
	if(index >= arr.length) index = arr.length - 1
	return [0, index];
}



const main = () => {
	const arr = [10, 20, 25, 30, 40, 50,80, 100, 130, 170];
	const target = 170;
	let [lower, upper] = getRange(arr, target);

	while(upper - lower >= 0){
		const mid = lower + Math.floor((upper - lower) / 2)
		if(arr[mid] == target){
			console.log("Result is ", mid + 1);
			break;
		}
		if(arr[mid] < target) lower = mid + 1;
		if(arr[mid] > target) upper = mid - 1;
	}
	
}

main();