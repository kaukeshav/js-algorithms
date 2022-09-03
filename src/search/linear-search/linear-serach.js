const Search = ({ data, value }) => {
	if (!data || !(data instanceof Object)) {
		return Error('search not suppported');
	}

	// type Array
	if (Array.isArray(data)) {
		for (let index = 0; index < data.length; index++) {
			if (value === data[index]) {
				return index;
			}
		}
		return;
	}

	// type Object
	const keys = Object.keys(data);
	for (let index = 0; index < keys.length; index++) {
		if (value === data[keys[index]]) {
			return keys[index];
		}
	}
};

const indexOf = ({ data, value }) => {
	if (!data || !data.length) {
		return Error('No data found');
	}

	const dataArray = typeof data === 'string' ? data.split('') : data;

	for (let index = 0; index < dataArray.length; index++) {
		if (dataArray[index] === value) {
			return index;
		}
	}

	return -1;
};

const includes = ({ data, value }) => {
	if (!data || !data.length) {
		return Error('No data found');
	}

	const dataArray = typeof data === 'string' ? data.split('') : data;

	for (let index = 0; index < dataArray.length; index++) {
		if (dataArray[index] === value) {
			return true;
		}
	}

	return false;
};

export { indexOf, includes };
export default Search;

// EXAMPLE:
const unorderedNumberArray = [1, 3, 4, 5, 2, 6, 7, 8, 10, 9];
const unorderedNumberObject = { ...unorderedNumberArray };
// RUN
console.log(Search({ value: 2, data: unorderedNumberArray })); // OUTPUT
console.log(Search({ value: 3, data: unorderedNumberArray })); // OUTPUT

console.log(Search({ value: 2, data: unorderedNumberObject })); // OUTPUT
console.log(Search({ value: 3, data: unorderedNumberObject })); // OUTPUT

// TIME COMPLEXITY linear - O(n)
