import { adviceNumberElement, adviceQuoteElement } from './dom';

export const newAdvice = advice => {
	console.log(advice);
	const adviceNumber = advice.slip.id;
	const adviceQuote = advice.slip.advice;

	adviceNumberElement.textContent = `advice #${adviceNumber}`;
	adviceQuoteElement.textContent = `"${adviceQuote}"`;
};
