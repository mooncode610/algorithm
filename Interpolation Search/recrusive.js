const search = (arr, target, lower, upper) => {

	const mid = lower + Math.floor(((upper - lower) / (arr[upper] - arr[lower])) * (target - arr[lower]));

	if(arr[mid] == target) return mid;
	if(upper - lower < 1){
		return null;
	}
	if(arr[mid] < target) lower = mid + 1;
	if(arr[mid] > target) upper = mid - 1;

	return search(arr, target, lower, upper)
}
const main = () => {
	const arr = [10, 20, 25, 30, 40, 50,80, 100, 130, 150];
	const target = 150;
	const result = search(arr, target, 0, arr.length - 1);
	console.log("result is ", result);
}

main();