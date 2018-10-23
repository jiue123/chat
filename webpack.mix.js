let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig({
        node: {
            fs: "empty",
        },
        externals: {
            uws: "uws"
        }
    })
    .autoload({
    jquery: ['$', 'window.jQuery', 'jQuery', 'window.$'],
    })
   .js('resources/assets/js/app.js', 'public/js')
   .extract([
    'jquery'
    ])
   .sass('resources/assets/sass/app.scss', 'public/css').version();
