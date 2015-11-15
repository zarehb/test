module.exports = function(grunt) {
	grunt.registerTask('hello',function() {
		console.log('hi');
	})
	grunt.registerTask('default',['hello']);
}