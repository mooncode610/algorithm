const search = (arr, index, target) => {
	if(index == arr.length) return null;
	if(arr[index] == target) return index;
	return search(arr, index+1, target);

}
const main = () => {
	const arr = [1,10,3,20,34];
	const target = 10;
	const result = search(arr, 0, target);
	console.log(result + 1);
};

main()