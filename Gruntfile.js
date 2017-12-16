module.exports = function(grunt){
	require('jit-grunt')(grunt);	
	grunt.initConfig({
		less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "Styles/style.css": "Styles/style.less" // destination file and source file
        }
      }
    },	
	cssmin:{
		build:{
		src:"Styles/style.css",
		dest:"Styles/style.min.css"
	  }
	},
	 uglify: {
	  build: {
		files: {
			'scripts/app.min.js': ['scripts/app.js'],
			'scripts/questions.min.js': ['scripts/questions.js'],
			'scripts/quiz_controller.min.js': ['scripts/quiz_controller.js']
		}
	  }
	}

			
});
	grunt.registerTask('default', ["less","cssmin","uglify"]);
	//grunt.registerTask('default', ["less","cssmin"]);
//	grunt.registerTask('less', ["less"]);
}