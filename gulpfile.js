/**
 * Variables
 */
const gulp = require("gulp");
const browserSync = require("browser-sync").create();

/**
 * Déclaration
 */
gulp.task("default", ["liveBrowser"], () => {
    gulp.watch("./src/*.html", browserSync.reload);
    gulp.watch("./src/*.css", browserSync.reload);
});
gulp.task("liveBrowser", () => {
    browserSync.init({
        server: {
            baseDir: "src"
        }
    });
});