
/* vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2 cc=76; */

/**
 * NeatlineFloatingBubble Jasmine runner.
 *
 * @package     omeka
 * @subpackage  neatline-FloatingBubble
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

module.exports = function(grunt) {

  // Load tasks.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-symbolic-link');

  grunt.initConfig({

    uglify: {
      bubble: {
        src: './views/shared/javascripts/FloatingBubble/*.js',
        dest: './views/shared/javascripts/payloads/FloatingBubble.js',
        separator: ';'
      }
    },

    watch: {
      files: ['<%= min.bubble.src %>'],
      tasks: ['uglify']
    },

    jasmine: {
      wms: {
        src: './views/shared/javascripts/payloads/FloatingBubble.js',
        options: {
          helpers: [
            './tests/jasmine/helpers/*.js',
            './components/jasmine-jquery/lib/jasmine-jquery.js',
            './components/sinon.js/sinon.js',
          ],
          vendor: './tests/jasmine/payloads/neatline.js',
          specs: './tests/jasmine/**/*.spec.js'
        }
      }
    },

    symlink: {
      options: {
        overwrite: true
      },
      components: {
        target: '../Neatline/components',
        link: './components'
      },
      fixtures: {
        target: '../../../Neatline/tests/jasmine/fixtures',
        link: './tests/jasmine/fixtures'
      },
      helpers: {
        target: '../../../Neatline/tests/jasmine/helpers',
        link: './tests/jasmine/helpers'
      },
      payloads: {
        target: '../../../Neatline/views/shared/javascripts/payloads',
        link: './tests/jasmine/payloads'
      }
    },

    connect: {
      server: {
        options: {
          keepalive: true,
          port: 1337
        }
      }
    }

  });

  // Run tests by default.
  grunt.registerTask('default', 'jasmine');

  // Build the plugin.
  grunt.registerTask('build', ['uglify', 'symlink']);

};