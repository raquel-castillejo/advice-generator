import { newAdvice } from './print-quote';

const catchAndPrint = err => console.log(err);
const request = url => fetch(url);

export const fetchData = async () => {
	try {
		const response = await request('https://api.adviceslip.com/advice');
		const data = await response.json();
		newAdvice(data);
	} catch (err) {
		catchAndPrint(err);
	}
};
