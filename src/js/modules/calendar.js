import VanillaCalendar from "vanilla-calendar-pro";

addEventListener("DOMContentLoaded", () => {
	const options = {
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
				console.log(self.selectedMonth + 1);
			},
		},
	};

	window.calendar = new VanillaCalendar(".calendar", options);
	calendar.init();

	// при загрузке дергать текущий месяц из базы и обновлять тут

	calendar.selectedDates = ['2024-08-09-2024-08-12', '2024-08-20'];
	calendar.update();
});
