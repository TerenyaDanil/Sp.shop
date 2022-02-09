import { gsap } from 'gsap';

// import { ScrollToPlugin } from 'gsap/ScrollToPlugin.js';
// gsap.registerPlugin(ScrollToPlugin);

global.gsap = gsap;

gsap.defaults({
	overwrite: 'auto',
});

class ProjectApp {
	constructor() {
		this.env = require('./utils/env').default;
		this.utils = require('./utils/utils').default;
		this.classes = {
			Signal: require('./classes/Signal').default,
		};
		this.components = {};
		this.helpers = {};
		this.modules = {};
		document.addEventListener('DOMContentLoaded', () => {
			document.documentElement.classList.remove('_loading');
		});
	}
}

const headerAmount = document.querySelector('.shop-header__amount');
const stockItem = document.querySelectorAll('.stock-basket__item');

headerAmount.innerText = stockItem.length;

stockItem.forEach(item => {
	let value = 1;

	item.querySelector('.item-stock__close').addEventListener('click', () => item.remove());

	item.querySelector('.amount-stock__plus').addEventListener('click', function () {
		value = value + 1;
		if (value >= 1) {
			item.querySelector('.amount-stock__value').innerText = value;
			item.querySelector('.amount-stock__price span').innerText = 525 * value;
		}
	});

	item.querySelector('.amount-stock__minus').addEventListener('click', function () {
		value = value - 1;
		if (value >= 1) {
			item.querySelector('.amount-stock__value').innerText = value;
			item.querySelector('.amount-stock__price span').innerText = 525 * value;
		}
	});
});

global.ProjectApp = new ProjectApp();

if (module.hot) {
	module.hot.dispose(() => {
		stockItem.forEach(item => {
			let value = 1;

			item.querySelector('.item-stock__close').removeEventListener('click', () => item.remove());

			item.querySelector('.amount-stock__plus').removeEventListener('click', function () {
				value = value + 1;
				if (value >= 1) {
					item.querySelector('.amount-stock__value').innerText = value;
					item.querySelector('.amount-stock__price span').innerText = 525 * value;
				}
			});

			item.querySelector('.amount-stock__minus').removeEventListener('click', function () {
				value = value - 1;
				if (value >= 1) {
					item.querySelector('.amount-stock__value').innerText = value;
					item.querySelector('.amount-stock__price span').innerText = 525 * value;
				}
			});
		});
	});
}
