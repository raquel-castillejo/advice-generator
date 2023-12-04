const catchAndPrint = err => console.log(err);
// const request = url => fetch(url);

export const fetchData = async url => {
	try {
		const response = await fetch(url);
		const data = await response.json();
		return data;
	} catch (err) {
		catchAndPrint(err);
	}
};
