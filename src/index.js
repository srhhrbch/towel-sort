module.exports = function towelSort(matrix) {
	if (!matrix || matrix.length === 0) {
		return [];
	} else {
		let num = 0;
		let res = [];
		for (let i of matrix) {
			if (num % 2 !== 0)
				i = i.reverse();
			num++;
			res.push(i);
		}
		return res.join().split(',');
	}
};