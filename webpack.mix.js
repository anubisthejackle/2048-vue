/*jshint esversion: 6*/
const mix = require('laravel-mix');
let tailwindcss = require('tailwindcss');
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

mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.sass', 'public/css')
   .options({
      processCssUrls: false,
      postCss: [tailwindcss('./tailwind.js')],
   });

mix.browserSync({
    proxy: 'http://127.0.0.1:8000',
    files: [
           'app/**/*',
           'public/**/*',
           'resources/views/**/*',
           'resources/lang/**/*',
           'routes/**/*',
    ],
    notify: {
        styles: {
            top: 'auto',
            bottom: '0',
          },
      },
  });
