const search = (arr, step, target, index) => {
	if(index >= arr.length) return null;
	if(target == arr[index]) return index + 1;
	if(arr[index] < target) index += step;
	if(arr[index] > target) index --;
	return search(arr, step, target, index)
}

const main = () => {
	const arr = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610];
	const step = 3;
	const target = 610;
	let index = 0;
	const result = search(arr, step, target, index)
	console.log("Result is ", result)
}

main();