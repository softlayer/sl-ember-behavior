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
let resolveValue = function( unresolved ) {
    let resolved;

    if ( typeof unresolved === 'function' ) {
        resolved = unresolved();
    } else {
        resolved = unresolved;
    }

    return resolved;
};

export default resolveValue;
