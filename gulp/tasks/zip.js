import zipPlugin from "gulp-zip";

export const zip = () => {
	app.plugins.deleteAsync(`./${app.path.rootFolder}.zip`);
	return app.gulp
		.src(`${app.path.buildFolder}/**/*.*`, { encoding: false })
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: "ZIP",
					message: "<%= error.message %>",
				})
			)
		)
		.pipe(zipPlugin(`${app.path.rootFolder}.zip`))
		.pipe(app.gulp.dest("./"));
};
