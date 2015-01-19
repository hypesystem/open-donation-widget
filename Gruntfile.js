module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json')
    });
    
    grunt.registerTask('default', 'Build javascript to single file', function() {
        grunt.log.write("not implemented").error();
    });
};
