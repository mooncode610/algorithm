

const main = () => {
	const arr = [10, 20, 25, 30, 40, 50,80, 100, 130, 170];
	const target = 130;
	let lower = 0;
	let upper = arr.length - 1;
	while(upper-lower > 1 ){
		let mid = lower + Math.floor((upper - lower) / 2);

		if(arr[mid] < target) lower = mid + 1;
		else if (arr[mid] > target) upper = mid - 1;
		else {
			console.log("result is ", mid + 1)
			break;
		}

	}
}

main()