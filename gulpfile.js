var gulp = require('gulp');
var handlebars = require('gulp-compile-handlebars');

gulp.task('default', function () {
    var templateData = {
            firstName: 'Kaanon'
        },
        options = {
            ignorePartials: true, //ignores the unknown footer2 partial in the handlebars template, defaults to false
            partials : {
                footer : '<footer>the end</footer>'
            },
            batch : ['./src/partials'],
            helpers : {
                capitals : function(str){
                    return str.toUpperCase();
                }
            }
        }

    return gulp.src('src/hello.handlebars')
        .pipe(handlebars(templateData, options))
        .pipe(rename('hello.html'))
        .pipe(gulp.dest('dist'));
});
