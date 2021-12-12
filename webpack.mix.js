const mix = require('laravel-mix');
// require('vuetifyjs-mix-extension')
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
// const options = {
//    progressiveImages: true,
//    extract: 'dist/css/vuetify-components.css'
// }
// mix.js('resources/js/app.js', 'public/dist/js').vuetify('vuetify-loader', options).vue();
//
// //icons
// mix.sass('resources/sass/icon.scss', 'public/dist/icon');

mix.js('resources/js/app.js', 'public/dist/js')
    .vue()
    .sass('resources/sass/icon.scss', 'public/dist/icon');
