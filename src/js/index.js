import { URL_API } from './constants';
import { newAdviceBtnElement } from './dom';
import { printNewAdvice } from './print-quote';

newAdviceBtnElement.addEventListener('click', () => {
	printNewAdvice(URL_API);
});
