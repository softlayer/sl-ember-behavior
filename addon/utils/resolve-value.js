import Ember from 'ember';

/**
 * @module
 */

/**
 * When passed a function, returns the return value of that function,
 * otherwise returns the value passed
 *
 * @function
 * @param {*} unresolved
 * @returns {*}
 */
const resolveValue = function( unresolved ) {
    let resolved;

    if ( 'function' === Ember.typeOf( unresolved ) ) {
        resolved = unresolved();
    } else {
        resolved = unresolved;
    }

    return resolved;
};

export default resolveValue;
