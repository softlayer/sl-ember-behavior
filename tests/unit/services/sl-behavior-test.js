import BehaviorService from 'sl-ember-behavior/services/sl-behavior';
import { moduleFor, test } from 'ember-qunit';

let BS;

moduleFor( 'service:sl-behavior', 'Unit | Service | sl behavior', {
    unit: true,

    beforeEach() {
        BS = BehaviorService.create();
    }
});

test( '"behaviors" property defaults to null', function( assert ) {
    assert.equal(
        BS.get( 'behaviors' ),
        null
    );
});

test( 'setBehaviors() requires an Object to be provided', function( assert ) {

    // Array
    let callSetBehaviors = () => BS.setBehaviors( [] );

    assert.throws(
        callSetBehaviors,
        'Parameter was an Array'
    );

    // Boolean
    callSetBehaviors = () => BS.setBehaviors( false );

    assert.throws(
        callSetBehaviors,
        'Parameter was a Boolean'
    );

    // Function
    callSetBehaviors = () => BS.setBehaviors( () => {} );

    assert.throws(
        callSetBehaviors,
        'Parameter was a Function'
    );

    // Null
    callSetBehaviors = () => BS.setBehaviors( null );

    assert.throws(
        callSetBehaviors,
        'Parameter was Null'
    );

    // Number
    callSetBehaviors = () => BS.setBehaviors( 123 );

    assert.throws(
        callSetBehaviors,
        'Parameter was a Number'
    );

    // String
    callSetBehaviors = () => BS.setBehaviors( 'a string' );

    assert.throws(
        callSetBehaviors,
        'Parameter was a String'
    );

    // Undefined
    callSetBehaviors = () => BS.setBehaviors();

    assert.throws(
        callSetBehaviors,
        'Parameter was Undefined'
    );

    // Object
    let assertionThrown = false;

    try {
        BS.setBehaviors( {} );
    } catch ( error ) {
        assertionThrown = true;
    }

    assert.ok(
        !assertionThrown,
        'Parameter was an Object'
    );
});

test( 'setBehaviors() sets data on the behaviors property', function( assert ) {
    const testBehaviors = {
        'the_key': 'my value'
    };

    BS.setBehaviors( testBehaviors );

    assert.deepEqual(
        BS.get( 'behaviors' ),
        testBehaviors
    );
});

test( 'isAble() requires at least two parameters to be provided', function( assert ) {

    // No arguments
    let callIsAble = () => BS.isAble();

    assert.throws(
        callIsAble,
        'No parameters were provided'
    );

    // One argument
    callIsAble = () => BS.isAble( 'one' );

    assert.throws(
        callIsAble,
        'One parameter was provided'
    );

    // Two arguments
    let assertionThrown = false;

    try {
        BS.isAble( 'one', 'two' );
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        !assertionThrown,
        'Two parameters were provided'
    );

    // Three arguments
    assertionThrown = false;

    try {
        BS.isAble( 'one', 'two', false );
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        !assertionThrown,
        'Three parameters were provided'
    );
});

test( 'isAble() requires first parameter to be a String', function( assert ) {

    // Array Parameter
    let callIsAble = () => BS.isAble( [], 'notUnderTest' );

    assert.throws(
        callIsAble,
        'Parameter was an Array'
    );

    // Boolean parameter
    callIsAble = () => BS.isAble( false, 'notUnderTest' );

    assert.throws(
        callIsAble,
        'Parameter was a Boolean'
    );

    // Function
    callIsAble = () => BS.isAble( () => {}, 'notUnderTest' );

    assert.throws(
        callIsAble,
        'Parameter was an Function'
    );

    // Null parameter
    callIsAble = () => BS.isAble( null, 'notUnderTest' );

    assert.throws(
        callIsAble,
        'Parameter was Null'
    );

    // Number parameter
    callIsAble = () => BS.isAble( 123, 'notUnderTest' );

    assert.throws(
        callIsAble,
        'Parameter was a Number'
    );

    // Object Parameter
    callIsAble = () => BS.isAble( {}, 'notUnderTest' );

    assert.throws(
        callIsAble,
        'Parameter was an Object'
    );

    // Undefined
    callIsAble = () => BS.isAble();

    assert.throws(
        callIsAble,
        'Parameter was Undefined'
    );

    // String Parameter
    let assertionThrown = false;

    try {
        BS.isAble( 'test', 'notUnderTest' );
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        !assertionThrown,
        'Parameter was a String'
    );
});

test( 'isAble() requires second argument to be a String', function( assert ) {

    // Array Parameter
    let callIsAble = () => BS.isAble( 'notUnderTest', [] );

    assert.throws(
        callIsAble,
        'Parameter was an Array'
    );

    // Boolean parameter
    callIsAble = () => BS.isAble( 'notUnderTest', false );

    assert.throws(
        callIsAble,
        'Parameter was a Boolean'
    );

    // Function
    callIsAble = () => BS.isAble( 'notUnderTest', () => {} );

    assert.throws(
        callIsAble,
        'Parameter was an Function'
    );

    // Null parameter
    callIsAble = () => BS.isAble( 'notUnderTest', null );

    assert.throws(
        callIsAble,
        'Parameter was Null'
    );

    // Number parameter
    callIsAble = () => BS.isAble( 'notUnderTest', 123 );

    assert.throws(
        callIsAble,
        'Parameter was a Number'
    );

    // Object Parameter
    callIsAble = () => BS.isAble( 'notUnderTest', {} );

    assert.throws(
        callIsAble,
        'Parameter was an Object'
    );

    // Undefined
    callIsAble = () => BS.isAble( 'notUnderTest' );

    assert.throws(
        callIsAble,
        'Parameter was Undefined'
    );

    // String Parameter
    let assertionThrown = false;

    try {
        BS.isAble( 'notUnderTest', 'test' );
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        !assertionThrown,
        'Parameter was a String'
    );
});

test( 'isAble() requires third argument to be a boolean or undefined', function( assert ) {

    // Array Parameter
    let callIsAble = () => BS.isAble( 'notUnderTest', 'notUnderTest', [] );

    assert.throws(
        callIsAble,
        'Parameter was an Array'
    );

    // Function
    callIsAble = () => BS.isAble( 'notUnderTest', 'notUnderTest', () => {} );

    assert.throws(
        callIsAble,
        'Parameter was an Function'
    );

    // Null parameter
    callIsAble = () => BS.isAble( 'notUnderTest', 'notUnderTest', null );

    assert.throws(
        callIsAble,
        'Parameter was Null'
    );

    // Number parameter
    callIsAble = () => BS.isAble( 'notUnderTest', 'notUnderTest', 123 );

    assert.throws(
        callIsAble,
        'Parameter was a Number'
    );

    // Object Parameter
    callIsAble = () => BS.isAble( 'notUnderTest', 'notUnderTest', {} );

    assert.throws(
        callIsAble,
        'Parameter was an Object'
    );

    // String Parameter
    callIsAble = () => BS.isAble( 'notUnderTest', 'notUnderTest', {} );

    assert.throws(
        callIsAble,
        'Parameter was an String'
    );

    // Boolean parameter
    let assertionThrown = false;

    try {
        BS.isAble( 'notUnderTest', 'notUnderTest', false );
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        !assertionThrown,
        'Parameter was a Boolean'
    );

    // Undefined
    assertionThrown = false;

    try {
        BS.isAble( 'notUnderTest', 'notUnderTest' );
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        !assertionThrown,
        'Parameter was undefined'
    );
});

test(
    'isAble() 3rd parameter is provided - value is used in addition to Behavior data to make a determination',
    function( assert ) {
        BS.setBehaviors({
            device: {
                reboot: true
            }
        });

        assert.ok(
            !BS.isAble( 'reboot', 'device', false ),
            'Was not able'
        );

        assert.ok(
            BS.isAble( 'reboot', 'device', true ),
            'Was able'
        );

        BS.setBehaviors({
            device: {
                reboot: false
            }
        });

        assert.ok(
            !BS.isAble( 'reboot', 'device', true ),
            'Was not able'
        );

        assert.ok(
            !BS.isAble( 'reboot', 'device', false ),
            'Was not able'
        );
    }
);

test( 'isAble() returns false if no Behavior data has been set', function( assert ) {
    assert.ok(
        !BS.isAble( 'reboot', 'device' ),
        'Returned false'
    );

    assert.ok(
        !BS.isAble( 'reboot', 'device', true ),
        'Returned false'
    );
});

test( 'isAble() returns false if specified Behavior Group has not been configured', function( assert ) {
    BS.setBehaviors({
        device: {
            reboot: false
        }
    });

    assert.ok(
        !BS.isAble( 'reboot', 'product' ),
        'Returned false'
    );

    assert.ok(
        !BS.isAble( 'reboot', 'product', true ),
        'Returned false'
    );
});

test( 'isAble() returns false if specified Behavior has not been configured', function( assert ) {
    BS.setBehaviors({
        device: {
            reboot: false
        }
    });

    assert.ok(
        !BS.isAble( 'restart', 'device' ),
        'Returned false'
    );

    assert.ok(
        !BS.isAble( 'restart', 'device', true ),
        'Returned false'
    );
});

test( 'isUnable() is the negated result of a call to isAble()', function( assert ) {
    BS.setBehaviors({
        device: {
            reboot: false
        }
    });

    assert.ok(
        BS.isUnable( 'reboot', 'device', true ),
        'Was unable'
    );

    BS.setBehaviors({
        device: {
            reboot: true
        }
    });

    assert.ok(
        !BS.isUnable( 'reboot', 'device', true ),
        'Was not unable'
    );

    assert.ok(
        BS.isUnable( 'reboot', 'device', false ),
        'Was unable'
    );
});
