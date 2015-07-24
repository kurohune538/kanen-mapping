var gulp = require('gulp');
var cssmin = require('gulp-cssmin');
var jsmin = require('gulp-jsmin');


gulp.task('cssmin', function() {
	gulp.src('./Build/css/*.css')
		.pipe(cssmin())
		.pipe(gulp.dest('./Build/css/'));

	gulp.src('./Build/Cesium/Widgets/InfoBox/*.css')
		.pipe(cssmin())
		.pipe(gulp.dest('./Build/Cesium/Widgets/InfoBox/'));

	gulp.src('./Build/Cesium/Widgets/widgets.css')
		.pipe(cssmin())
		.pipe(gulp.dest('./Build/Cesium/Widgets/'));
});

gulp.task('jsmin', function() {
	gulp.src('./Build/Cesium/Cesium.js')
		.pipe(jsmin())
		.pipe(gulp.dest('./Build/Cesium/'));
});

gulp.task('default', ['cssmin', 'jsmin']);