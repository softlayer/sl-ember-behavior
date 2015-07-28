import resolveValue from 'sl-ember-behavior/utils/resolve-value';
import { module, test } from 'qunit';

module( 'Unit | Utility | resolve value' );

test( 'Returns the passed value if the value is not a function', function( assert ) {
    let result = resolveValue( true );

    assert.strictEqual(
        result,
        true,
        'resolveValue is a Boolean'
    );

    result = resolveValue( 'arbitrary string' );

    assert.strictEqual(
        result,
        'arbitrary string',
        'resolveValue is a String'
    );

    result = resolveValue( 123 );

    assert.strictEqual(
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

    result = resolveValue( null );

    assert.strictEqual(
        result,
        null,
        'resolveValue is null'
    );

    result = resolveValue();

    assert.strictEqual(
        result,
        undefined,
        'resolveValue is undefined'
    );
});

test( 'Returns the return value of the function if value is a function', function( assert ) {
    const result = resolveValue( () => 'a return value' );

    assert.strictEqual(
        result,
        'a return value',
        'resolveValue is a Function'
    );
});
