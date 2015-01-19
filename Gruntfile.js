module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        browserify: {
            "open-donation-widget": {
                src: ['lib/OpenDonationForm.js'],
                dest: 'build/open-donation-widget-<%=pkg.version%>.js',
                options: {
                    watch: true,
                    keepAlive: true,
                    basedir: 'lib',
                    browserifyOptions: {
                        standalone: "OpenDonationForm"
                    }
                }
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-browserify');
    
    grunt.registerTask('default', 'Build javascript to single file', function() {
        grunt.log.write("not implemented").error();
    });
};
