({
    appDir: '.',
    baseUrl: 'lib',
    //Uncomment to turn off uglify minification.
    //optimize: 'none',
    dir: '../demo-build',
    paths: {
        jade: '../../jade'
    },
    //This pragma excludes the CoffeeScript compiler code
    //from the optimized source, since all CoffeeScript files
    //are converted and inlined into the main.js built file.
    //If you still want to allow dynamic loading of CoffeeScript
    //files after a build, comment out the pragmasOnSave section.
    pragmasOnSave: {
        excludeJade: true
    },
    modules: [
        {
            name: "main"
        }
    ]
})
