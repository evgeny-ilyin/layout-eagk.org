import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

// init swiper-resorts Swiper
export function swiperResortsHandler() {
	let swiperResorts;
	swiperResorts = new Swiper(".swiper-resorts .swiper", {
		modules: [Navigation],
		slidesPerView: 2.5,
		slidesPerGroup: 1,
		spaceBetween: 20,
		breakpoints: {
			577: {
				slidesPerView: 3.5,
				spaceBetween: 40,
			},
			1024: {
				slidesPerView: 4.5,
				spaceBetween: 60,
			},
			1280: {
				slidesPerView: 5,
				spaceBetween: 80,
				navigation: {
					nextEl: ".swiper-resorts .swiper-button-next",
					prevEl: ".swiper-resorts .swiper-button-prev",
				},
			},
		},
	});

	const resortLinks = document.querySelectorAll(".js-resort"),
		resortsSwiper = document.querySelector(".swiper-resorts"),
		isActiveClass = "is-active";

	resortLinks.forEach((link) => {
		link.addEventListener("click", (e) => {
			let resort = e.target.closest(".js-resort");
			if (!resort) return;
			resortHandler(resort);
		});
	});

	let deactivateAll = () => {
		const isActive = document.querySelectorAll(`.js-resort.${isActiveClass}`);
		if (isActive.length > 0) {
			isActive.forEach((e) => {
				e.classList.remove(isActiveClass);
				console.log(e.dataset.map);
			});
		}
	};

	let setActive = (id) => {
		const target = id.dataset.map;
		if (!target) return;

		resortsSwiper.classList.add(isActiveClass);
		const element = document.querySelectorAll(`[data-map="${target}"]`);
		element.forEach((el) => {
			el.classList.add(isActiveClass);
		});
	};

	let resortHandler = (id) => {
		/**
		 * если уже активно - отключить все, показать календарь
		 * если не активно - отключить все, активировать нажатое, сделать fetch, обновить слой с данными
		 */

		if (id.classList.contains(isActiveClass)) {
			resortsSwiper.classList.remove(isActiveClass);
			deactivateAll();
			// showCalendar();
			return;
		}

		deactivateAll();
		setActive(id);
	};
}

// init swiper-press Swiper
export function swiperPressHandler() {
	let swiperPress;
	swiperPress = new Swiper(".swiper-press", {
		modules: [Pagination],
		slidesPerView: 1.5,
		slidesPerGroup: 1,
		spaceBetween: 20,
		breakpoints: {
			577: {
				slidesPerView: 2.5,
				slidesPerGroup: 2,
			},
			1024: {
				slidesPerView: 3.5,
				slidesPerGroup: 2,
			},
			1280: {
				slidesPerView: 4,
				slidesPerGroup: 2,
			},
		},
		pagination: {
			el: ".swiper-press .swiper-pagination",
			clickable: true,
		},
	});
}

// init swiper-quotes Swiper
export function swiperQuotesHandler() {
	let swiperQuotes;
	swiperQuotes = new Swiper(".swiper-quotes", {
		modules: [Pagination],
		slidesPerView: 1,
		spaceBetween: 60,
		pagination: {
			el: ".swiper-quotes .swiper-pagination",
			clickable: true,
		},
	});
}
