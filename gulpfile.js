let gulp = require('gulp');
let {watch, task} = require('gulp');
let babel = require('gulp-babel');
let console = require('child_process').spawn;
let concat = require('gulp-concat');

let path = {
	src: {
		backend: ['./src/**']
	},
	dist: {
		backendOut: ['./dist/']
	},
	test: {
		backend: ['./test/**.js']
	}
};

task('npm-run-test', () => {

});

task('compile-src', () => {
	return gulp.src(path.src.backend)
		.pipe(babel())
		.pipe(gulp.dest(path.dist.backendOut));
});

task('watch-dev', gulp.parallel(() => {
	watch(path.src.backend, gulp.series('compile-src'));
}));

task('watch-test', gulp.parallel(() => {
	watch(path.test.backend)
}));

task('dev', gulp.series('compile-src', gulp.parallel('watch-dev')));
// task('test', gulp.series(gulp.parallel()))