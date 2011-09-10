# require-jade

A [Jade](http://jade-lang.org/) loader plugin for [RequireJS](http://requirejs.org).

It is known to work with RequireJS 0.26.0+.

In development, it uses XMLHttpRequest to fetch the .jade files, so you can only
fetch files that are on the same domain as the HTML page, and most browsers place
restrictions on using XMLHttpRequest from local file URLs, so use a web server to
serve your .jade files.

## Usage

1) Download the latest release version of jade.js. It includes Jade (0.15.4).

2) Reference Jade files via the jade! plugin name:

    require(['jade!userview'], function (userView) {
      $('.user').html(userView());
    });

# Optimizing

jade.js includes optimizer instructions.  To use the activate the instructions just include: 

    pragmasOnSave: {
      excludeJade : true
    }

## License

Available via the MIT or new BSD license.

The Jade parts are governed by [the Jade license](https://github.com/visionmedia/jade/blob/master/LICENSE).