/* jshint node:true*/
/* global require, module */
const EmberAddon = require( 'ember-cli/lib/broccoli/ember-addon' );
const packageConfig = require( './package.json' );
const replace = require( 'broccoli-string-replace' );

module.exports = function( defaults ) {
    const app = new EmberAddon( defaults, {
        // Add options here
    });

    /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
    */

    app.import( app.bowerDirectory + '/ember/ember-template-compiler.js', {
        type: 'test'
    });

    const tree = replace( app.toTree(), {
        files: [
            'index.html',
            'assets/dummy.js'
        ],

        patterns: [
            {
                match: /REPLACE_META_DESCRIPTION/g,
                replacement: packageConfig[ 'description' ]
            },
            {
                match: /REPLACE_META_KEYWORDS/g,
                replacement: packageConfig[ 'keywords' ].join( ', ' ) +
                    ', ember, ember cli'
            },
            {
                match: /REPLACE_APPLICATION_VERSION/g,
                replacement: packageConfig[ 'version' ]
            }
        ]
    });

    return tree;
};
