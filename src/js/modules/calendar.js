import VanillaCalendar from "vanilla-calendar-pro";

addEventListener("DOMContentLoaded", () => {
	const calendar = document.querySelector(".calendar"),
		options = {
			settings: {
				lang: "ru",
				visibility: {
					daysOutside: false,
				},
				selection: {
					day: false,
				},
			},
			date: {
				min: "2024-05-01",
				max: "2034-04-30",
			},
			actions: {
				clickMonth(e, self) {
					// fetch
					// console.log(self.selectedMonth + 1);
				},
			},
		};

	if (!calendar) return;

	window.cal = new VanillaCalendar(calendar, options);
	cal.init();

	// при загрузке дергать текущий месяц из базы и обновлять тут

	cal.selectedDates = ["2024-08-01-2024-08-03", "2024-08-10", "2024-08-12", "2024-08-15", "2024-08-31", "2024-09-27"];
	cal.update();
});
