var gulp = require("gulp");
var babel = require("gulp-babel");
var webpack = require("webpack-stream");

gulp.task("xact", function(){
    return gulp.src("./xact/src/*.js")
        .pipe(babel())
        .pipe(gulp.dest("./xact/dist/"))
});

gulp.task("app", function() {
    return gulp.src("app.js")
        .pipe(webpack({
            watch: true,
            output: {
                filename: "appBundle.js"
            },
            module: {
                loaders: [
                    {test: /\.js$/, exclude: /node_modules/, loader:"babel-loader"}
                ]
            }
        }))
        .pipe(gulp.dest("./"))
})
