import resolveValue from 'sl-ember-behavior/utils/resolve-value';
import { module, test } from 'qunit';

module( 'Unit | Utility | resolve value' );

test( 'Returns the passed value if the value is not a function', function( assert ) {
    let result = resolveValue( true );

    assert.equal(
        result,
        true,
        'resolveValue is a Boolean'
    );

    result = resolveValue( 'arbitrary string' );

    assert.equal(
        result,
        'arbitrary string',
        'resolveValue is a String'
    );

    result = resolveValue( 123 );

    assert.equal(
        result,
        123,
        'resolveValue is a Number'
    );

    result = resolveValue( [] );

    assert.deepEqual(
        result,
        [],
        'resolveValue is an Array'
    );

    result = resolveValue( {} );

    assert.deepEqual(
        result,
        {},
        'resolveValue is an Object'
    );
});

test( 'Returns the return value of the function if value is a function', function(assert) {
    let result = resolveValue( () => 'a return value' );

    assert.equal(
        result,
        'a return value',
        'resolveValue is a Function'
    );
});
