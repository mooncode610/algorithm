const getRange = (arr, target, index = 1) => {
	if(index >= arr.length){
		return [0, arr.length - 1]
	}
	if(arr[index] >= target) return[0, index]
	return getRange(arr, target, index * 2)
}

const binarySearch = (arr, target, lower, upper) => {
	const mid = lower + Math.floor((upper - lower) / 2);
	if(upper - lower < 0) return "Null"
	if(arr[mid] == target) return mid + 1;
	if(arr[mid] < target) lower = mid + 1;
	if(arr[mid] > target) upper = mid - 1;
	return binarySearch(arr, target, lower, upper);
}

const main = () => {
	const arr = [10, 20, 25, 30, 40, 50,80, 100, 130, 170];
	const target = 10;
	let [lower, upper] = getRange(arr, target);

	const result = binarySearch(arr, target, lower, upper);
	console.log("Result is ", result)
}

main();