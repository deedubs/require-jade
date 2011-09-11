# require-jade

A [Jade](http://jade-lang.com/) loader plugin for [RequireJS](http://requirejs.org).

It is known to work with RequireJS 0.26.0+.

In development, it uses XMLHttpRequest to fetch the .jade files, so you can only
fetch files that are on the same domain as the HTML page, and most browsers place
restrictions on using XMLHttpRequest from local file URLs, so use a web server to
serve your .jade files.

## Usage

Reference Jade files via the jade! plugin name:

    require(['jade!userview'], function (userView) {
      $('.user').html(userView(locals));
    });

They will be returned as a Jade template function that accepts locals as the first arg.

# Optimizing

When you are ready to deploy your application and want to compile your JS into a single file 
you can make used of the requireJS optimizer. Jade.js includes optimizer instructions that will 
precompile the templates and remove the Jade compiler from the compiled source.  Only do this
if you are not going to be dynamically including more Jade templates. 

To use the activate the instructions just include: 

    pragmasOnSave: {
      excludeJade : true
    }

## License

Available via the MIT or new BSD license.

The Jade parts are governed by [the Jade license](https://github.com/visionmedia/jade/blob/master/LICENSE).