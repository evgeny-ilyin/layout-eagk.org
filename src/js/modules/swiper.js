import Swiper from "swiper";
import { Pagination } from "swiper/modules";

// init swiper-press Swiper
export function swiperPressHandler() {
	let swiperPress;
	swiperPress = new Swiper(".swiper-press", {
		modules: [Pagination],
		slidesPerView: 1,
		spaceBetween: 20,
		breakpoints: {
			577: {
				slidesPerView: 2,
				slidesPerGroup: 2,
			},
			1024: {
				slidesPerView: 3,
				slidesPerGroup: 3,
			},
			1280: {
				slidesPerView: 4,
				slidesPerGroup: 4,
			},
		},
		pagination: {
			el: ".swiper-press .swiper-pagination",
			clickable: true,
		},
	});
}

// addEventListener("DOMContentLoaded", () => {
// 	swiperPressHandler();
// });
