// gulp'u dahil edelim
const gulp = require('gulp');
const changed = require('gulp-changed');

// eklentileri dahil edelim
// const tinypng = require('gulp-tinypng-compress');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const pug = require('gulp-pug');
const fsCache = require('gulp-fs-cache');
const autoprefix = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const iconfont = require('gulp-iconfont');
const iconfontCss = require('gulp-iconfont-css');

const browser_sync = require('browser-sync').create();

const images_path = './src/img/**/*.{gif,svg,jpg,jpeg,png,webp,html}';
const fonts_path = './src/fonts/**/*.{eot,svg,ttf,woff,woff2}';
const icons_path = './src/icons/**/*.{svg}';

// SVG Sprite

const svgSprite = require('gulp-svg-sprite'),
    // Basic configuration example
    config = {
        mode: {
            symbol: { // symbol mode to build the SVG
                render: {
                    css: false, // CSS output option for icon sizing
                    scss: false // SCSS output option for icon sizing
                },
                dest: '', // destination folder
                // prefix: '.icon-', // BEM-style prefix if styles rendered
                sprite: 'icons.svg', //generated sprite name
                example: true // Build a sample page, please!
            }
        }
    };


gulp.task('iconfont', async function () {
    gulp.src('**/*.svg', {
        cwd: './src/icons'
    })
        .pipe(svgSprite(config))
        .on('error', function (error) {
            /* Do some awesome error handling ... */
        })
        .pipe(gulp.dest('dist/assets/icons'));
});


// Sass dosyalarını işler, browser uyumluluğu sağlar,
// ve oluşturulan CSS dosyasını CSS klasörüne kaydeder.
gulp.task('css', function () {
    const cssFsCache = fsCache('tmp/csscache');

    return gulp.src('./src/scss/style.scss')
        .pipe(cssFsCache)
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(sass({outputStyle: ''})).on('error', function (err) {
            console.log(err.toString());
            this.emit('end');
        })
        .pipe(autoprefix('last 15 version'))
        .pipe(sourcemaps.write('./'))
        .pipe(cssFsCache.restore)
        .pipe(gulp.dest('dist/assets/css'))
        .pipe(browser_sync.stream());
    /*  return gulp.src('./src/scss/style.scss')
          .pipe(cssFsCache)
          .pipe(sourcemaps.init({loadMaps: true}))
          .pipe(sass({outputStyle: 'compressed'})).on('error', function (err) {
              console.log(err.toString());
              this.emit('end');
          })
          .pipe(autoprefix('last 15 version'))
          .pipe(sourcemaps.write('./'))
          .pipe(cssFsCache.restore)
          .pipe(gulp.dest('dist/assets/css'))
          .pipe(browser_sync.stream());*/
});

// JS dosyalarını sıkıştırır
// ve hepsini birleştirerek JS klasörüne kaydeder.
gulp.task('js', function () {
    const jsFsCache = fsCache('tmp/jscache');
    return gulp.src('./src/js/**/*.js')
        .pipe(jsFsCache)
        .pipe(uglify()).on('error', function (err) {
            console.log(err.toString());
            this.emit('end');
        })
        .pipe(jsFsCache.restore)
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist/assets/js'))
        .pipe(browser_sync.stream());
});


gulp.task('pug', function () {
    return gulp.src('./src/views/*.pug')
        //.pipe(changed('dist', {extension: '.html'}))
        .pipe(pug({
            pretty: true
        }).on('error', function (err) {
            console.log(err.toString());
            this.emit('end');
        }))
        .pipe(gulp.dest('dist'))
        .pipe(browser_sync.stream());

});
// İzlemeye alınan işlemler

gulp.task('move_images', function () {
    return gulp.src(images_path).pipe(gulp.dest('dist/assets/img'));
});

gulp.task('move_fonts', function () {
    return gulp.src(fonts_path).pipe(gulp.dest('dist/assets/fonts'));
});

gulp.task('move_icons', function () {
    return gulp.src(icons_path).pipe(gulp.dest('dist/assets/icons'));
});

gulp.task('watch', function () {
    browser_sync.init({
        server: 'dist',
        files: ["dist/assets/css/style.css", "dist/assets/js/*.js", "dist/*.html"],
        browser: "chrome",
        online: true,
        tunnel: true,
    })
    // gulp.watch('./*.html', ['html']);
    gulp.watch('./src/views/**/*.pug', {usePolling: true}, gulp.series('pug'));
    gulp.watch('./src/scss/**/*.scss', gulp.series('css'));
    gulp.watch('./src/js/**/*.js', gulp.series('js'));
    gulp.watch(fonts_path, gulp.series('move_fonts'));
    gulp.watch(icons_path, gulp.series('move_icons'));
    gulp.watch(icons_path, gulp.series('iconfont'));
    gulp.watch(images_path, gulp.series('move_images'));
    //gulp.watch('./src/images/**/*.{png,jpg,jpeg}', ['img']);
});

// Gulp çalıştığı anda yapılan işlemler
gulp.task('default', gulp.series('css', 'js', 'pug', 'move_fonts', 'move_icons', 'move_images', 'iconfont', 'watch', function () {
}));
