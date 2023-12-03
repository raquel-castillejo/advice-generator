// DOM
// ===

const adviceNumberElement = document.getElementById('advice-number');
const adviceQuoteElement = document.getElementById('advice-quote');
const newAdviceBtnElement = document.getElementById('new-advice-btn');

// FUNCIONES
// =========

const newAdvice = advice => {
	console.log(advice);
	const adviceNumber = advice.slip.id;
	const adviceQuote = advice.slip.advice;

	adviceNumberElement.textContent = `advice #${adviceNumber}`;
	adviceQuoteElement.textContent = `"${adviceQuote}"`;
};

const catchAndPrint = err => console.log(err);
const request = url => fetch(url);

const fetchData = async () => {
	try {
		const response = await request('https://api.adviceslip.com/advice');
		const data = await response.json();
		newAdvice(data);
	} catch (err) {
		catchAndPrint(err);
	}
};

// EVENTOS
// =======
newAdviceBtnElement.addEventListener('click', fetchData);
