import { adviceNumberElement, adviceQuoteElement } from './dom';
import { fetchData } from './request-quote';

export const printNewAdvice = async url => {
	const advice = await fetchData(url);
	const adviceNumber = advice.slip.id;
	const adviceQuote = advice.slip.advice;

	adviceNumberElement.textContent = `advice #${adviceNumber}`;
	adviceQuoteElement.textContent = `${adviceQuote}`;
};
