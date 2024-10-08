import VanillaCalendar from "vanilla-calendar-pro";

addEventListener("DOMContentLoaded", () => {
	const calendar = document.querySelector(".calendar"),
		options = {
			settings: {
				lang: "ru",
				visibility: {
					daysOutside: false,
					theme: "light",
				},
				selection: {
					day: false,
				},
			},
			date: {
				min: "2023-06-01",
				max: "2034-04-30",
			},
			actions: {
				clickMonth(e, self) {
					toggleMonth(`${self.selectedYear}-${self.selectedMonth + 1}`);
				},
				clickYear(e, self) {
					toggleMonth(`${self.selectedYear}-${self.selectedMonth + 1}`);
				},
				clickArrow(e, self) {
					toggleMonth(`${self.selectedYear}-${self.selectedMonth + 1}`);
				},
			},
		};

	if (!calendar) return;

	window.cal = new VanillaCalendar(calendar, options);
	cal.init();

	// даты для подсветки выставляются в шаблоне
	// cal.selectedDates = ["2024-10-19-2024-10-20", "2025-03-01", "2025-07-01", "2025-09-01"];
	// cal.update();

	let toggleMonth = (d) => {
		// console.log(d);
		const events = document.querySelectorAll("[data-month]"),
			activeClass = "is-active";
		events.forEach((event) => {
			event.classList.remove(activeClass);
			if (event.dataset.month === d) {
				event.classList.add(activeClass);
			}
		});
	};
});
