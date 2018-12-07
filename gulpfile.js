var gulp = require('gulp'),
    pug = require('gulp-pug'),
    sass = require('gulp-sass'),
    del = require('del'),
    fs = require("fs"),
    browserSync = require('browser-sync'),
    browserInstance;

sass.compiler = require('node-sass');

var sassPaths = ['./src/style/**/[^_]*.sass', './src/style/**/[^_]*.scss'],
    sassPrivatePaths = ['./src/style/**/*.sass', './src/style/**/*.scss'];

gulp.task('compile-pug:dist', function () {
    return compilePug('dist', {
        data: requireJson('./data.json')
    });
});

gulp.task('compile-sass:temp', function () {
    return compileSass(sassPaths, './temp/style/');
});

gulp.task('clien:dist', function () {
    return del(['dist']);
});

gulp.task('compile-pug:temp', function () {
    return compilePug('temp', {
        pretty: true,
        data: requireJson('./data.json')
    });
});

gulp.task('clien:temp', function () {
    return del(['temp']);
});

gulp.task('browser:run:temp', function (done) {
    browserInstance = browserSync.create();

    browserInstance.init({
        server: {
            baseDir: './temp'
        },
        serveStatic: [
            {
                route: '/libs/bootstrap',
                dir: './node_modules/bootstrap/dist/'
            },
            {
                route: '/libs/jquery',
                dir: './node_modules/jquery/dist/'
            },
            {
                route: '/libs/reset-css',
                dir: './node_modules/reset-css/'
            },
            {
                route: '/js',
                dir: './src/js/'
            },
            {
                route: '/image',
                dir: './image/'
            }
        ]
    });

    done();
});

gulp.task('browser:reload', function (done) {
    browserInstance.reload();

    done();
});

gulp.task('build', gulp.series('clien:dist', 'compile-pug:dist'));

gulp.task('dev:comppile', gulp.parallel('compile-pug:temp', 'compile-sass:temp'));

gulp.task('dev', gulp.series('clien:temp', 'dev:comppile', 'browser:run:temp', function watch() {
    gulp.watch(sassPrivatePaths, gulp.series('compile-sass:temp', 'browser:reload'));
    return gulp.watch(['src/**/*.pug', './data.json'], gulp.series('compile-pug:temp', 'browser:reload'));
}));

function compilePug(dest, option) {
    option = option || {};

    return gulp.src('src/**/[^_]*.pug')
        .pipe(pug(option))
        .pipe(gulp.dest(dest));
}

function compileSass(from, to) {
    return gulp.src(from)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(to));
}

function requireJson(url) {
    var content = fs.readFileSync(url);

    return JSON.parse(content)
}
