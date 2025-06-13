import * as fn from "./modules/functions.js";
import * as sw from "./modules/swiper.js";
import { useDynamicAdapt } from "./modules/dynamicAdapt.js";
import * as ck from "./modules/cookies.js";

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
	sw.swiperNewsHandler();
	
	ck.cookieAccept();

	// fn.isWebp();
	// fn.stickyHeader();
	// fn.closeMenuHandler();
});

import "./modules/calendar.js";
import "./modules/yandex-map.js";
// import "./modules/fancyapps.js";
