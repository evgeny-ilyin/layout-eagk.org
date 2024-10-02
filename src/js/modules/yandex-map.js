addEventListener("DOMContentLoaded", () => {
	const mapContainer = document.querySelector(".map-resort");

	if (!window.mapInit) {
		window.mapInit = () => {
			if (!mapContainer) return;

			let pointerIcon = data.pointerIcon,
				zoomDefault = 10,
				options = { suppressMapOpenBlock: true, minZoom: 5, maxZoom: 16 };

			const map = new ymaps.Map(
				mapContainer,
				{
					center: [0, 0],
					zoom: zoomDefault,
					controls: ["zoomControl", "fullscreenControl", "typeSelector"],
				},
				options
			);

			let objectManager = new ymaps.ObjectManager({});

			objectManager.objects.options.set({
				preset: "islands#blueDotIconWithCaption",
				// iconLayout: "default#image",
				// iconImageHref: pointerIcon,
				// iconImageSize: [45, 45],
				// balloonMaxWidth: 254,
			});

			objectManager.add(data);

			map.geoObjects.add(objectManager);
			// zoomMargin нужен, если точки при getBounds оказались слишком близко к краю прямоугольника
			map.setBounds(objectManager.getBounds(), { checkZoomRange: true, zoomMargin: 10 }).then(function () {
				if (map.getZoom() > zoomDefault) map.setZoom(zoomDefault);
			});
		};
	}

	if (mapContainer) {
		ymaps.ready(mapInit);
	}
});
