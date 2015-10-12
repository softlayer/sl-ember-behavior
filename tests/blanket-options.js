/* globals blanket, module */

const options = {
    modulePrefix: 'sl-ember-behavior',
    filter: '//.*sl-ember-behavior/.*/',
    antifilter: '//.*(tests|template).*/',
    loaderExclusions: [],
    enableCoverage: true,
    modulePattern: '\/(\\w+)',
    branchTracking: true,
    cliOptions: {
        reporters: [ 'json' ],
        autostart: true
    }
};

if ( 'undefined' === typeof exports ) {
    blanket.options( options );
} else {
    module.exports = options;
}
