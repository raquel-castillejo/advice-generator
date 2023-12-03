import { newAdviceBtnElement } from './dom';
import { fetchData } from './request-quote';

newAdviceBtnElement.addEventListener('click', fetchData);
