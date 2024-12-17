function isEqual(a, b) {
	// { name: 'myName', age: 12, college: { passed: true, a:['a', { }, ] major: 'engineering', years: [2013, 2014, 2015, 2016]}}

	const isTypeSame = (data_a, data_b) => typeof data_a === typeof data_b;
	const isTypeArray = (data) => Array.isArray(data);
	const isTypeObject = (data) => typeof data === "object" && !isTypeArray(data);

	const isArrayOfUnEqualLength = (data_a, data_b) =>
		isTypeArray(data_a) && data_a.length !== data_b.length;

	const isObjectOfUnequalKeys = (data_a, data_b) =>
		isTypeObject(data_a) &&
		Object.keys(data_a).length !== Object.keys(data_b).length;

	if (!isTypeSame(a, b) || isArrayOfUnEqualLength(a, b) || isObjectOfUnequalKeys(a, b)) {
		return false;
	}

	// type of data is 'Array'
	if (isTypeArray(a)) {
		for (let i = 0; i < a.length; i++) {
			if (isTypeArray(a[i])) {
				if (a === a[i] && b === b[i]) { 
                    // circular references
					continue;
				} else {
					isEqual(a[i], b[i]);
				}
			} else if (isTypeObject(a[i])) {
				isEqual(a[i], b[i]);
			} else if (a[i] !== b[i]) {
				return false;
			}
		}
	} else if (isTypeObject(a)) {
		for (const [key, _] of Object.entries(a)) {
			if (isTypeObject(a[key])) {
				if (a[key] === a && b[key] === b) { 
                    // circular references
					continue;
				} else {
					isEqual(a[key], b[key]);
				}
			} else if (isTypeArray(a[key])) {
				isEqual(a[key], b[key]);
			} else if (a[key] !== b[key]) {
				return false;
			}
		}
	} else if (a !== b) {
		// type of data is 'Primitives' like string/number etc.
		return false;
	}

	return true;
}
