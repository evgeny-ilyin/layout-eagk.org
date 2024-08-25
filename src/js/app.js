import * as fn from "./modules/functions.js";
import * as sw from "./modules/swiper.js";
// import { useDynamicAdapt } from "./modules/dynamicAdapt.js";

addEventListener("DOMContentLoaded", () => {
	fn.isTouchDevice();
	sw.swiperPressHandler();
	
	// useDynamicAdapt();
	// fn.isWebp();
	// fn.stickyHeader();
	// fn.closeMenuHandler();
});

// import "./modules/cookies.js";
// import "./modules/fancyapps.js";
