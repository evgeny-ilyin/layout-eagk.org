import * as fn from "./modules/functions.js";
import * as sw from "./modules/swiper.js";
import { useDynamicAdapt } from "./modules/dynamicAdapt.js";

addEventListener("DOMContentLoaded", () => {
	useDynamicAdapt();
	fn.isTouchDevice();
	fn.noticeHandler();
	fn.clickAndDrag();
	fn.scrollHorisontallyByWheel();
	fn.loadmore();

	sw.swiperResortsHandler();
	sw.swiperQuotesHandler();
	sw.swiperPressHandler();
	sw.swiperAllianceHandler();
	sw.swiperReferenceHandler();
	sw.swiperMainHandler();
	
	// fn.isWebp();
	// fn.stickyHeader();
	// fn.closeMenuHandler();
});

import "./modules/calendar.js";
import "./modules/yandex-map.js";
// import "./modules/cookies.js";
// import "./modules/fancyapps.js";
