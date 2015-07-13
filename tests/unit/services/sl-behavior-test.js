import Ember from 'ember';
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

    // Empty parameter

    let assertionThrown = false;

    try {
        BS.setBehaviors();
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'Parameter was empty'
    );

    // Number parameter

    assertionThrown = false;

    try {
        BS.setBehaviors( 4 );
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'Parameter was a Number'
    );

    // Boolean parameter

    assertionThrown = false;

    try {
        BS.setBehaviors( false );
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'Parameter was a Boolean'
    );

    // Array Parameter

    assertionThrown = false;

    try {
        BS.setBehaviors( [] );
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'Parameter was an Array'
    );

    // Function

    assertionThrown = false;

    try {
        BS.getBehaviorGroup( function(){} );
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'Parameter was a Function'
    );

    // String Parameter

    assertionThrown = false;

    try {
        BS.setBehaviors( 'test' );
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'Parameter was a String'
    );

    // Object Parameter

    assertionThrown = false;

    try {
        BS.setBehaviors( {} );
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        !assertionThrown,
        'Parameter was an Object'
    );
});

test( 'setBehaviors() sets data on the behaviors property', function( assert ) {
    let testBehaviors = {
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

    let assertionThrown = false;

    try {
        BS.isAble();
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'No parameters were provided'
    );

    // One argument

    assertionThrown = false;

    try {
        BS.isAble( 'one' );
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'One parameter was provided'
    );

    // Two arguments

    assertionThrown = false;

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
    // Empty parameter

    let assertionThrown = false;

    try {
        BS.isAble();
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'Parameter was empty'
    );

    // Number parameter

    assertionThrown = false;

    try {
        BS.isAble( 4, 'notUnderTest' );
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'Parameter was a Number'
    );

    // Boolean parameter

    assertionThrown = false;

    try {
        BS.isAble( false, 'notUnderTest' );
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'Parameter was a Boolean'
    );

    // Array Parameter

    assertionThrown = false;

    try {
        BS.isAble( [], 'notUnderTest' );
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'Parameter was an Array'
    );

    // Function

    assertionThrown = false;

    try {
        BS.getBehaviorGroup( function(){} );
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'Parameter was a Function'
    );

    // String Parameter

    assertionThrown = false;

    try {
        BS.isAble( {}, 'notUnderTest' );
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'Parameter was an Object'
    );

    // Object Parameter

    assertionThrown = false;

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
    // Number parameter

    let assertionThrown = false;

    try {
        BS.isAble( 'notUnderTest', 4 );
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'Parameter was a Number'
    );

    // Boolean parameter

    assertionThrown = false;

    try {
        BS.isAble( 'notUnderTest', false );
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'Parameter was a Boolean'
    );

    // Array Parameter

    assertionThrown = false;

    try {
        BS.isAble( 'notUnderTest', [] );
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'Parameter was an Array'
    );

    // Function

    assertionThrown = false;

    try {
        BS.getBehaviorGroup( function(){} );
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'Parameter was a Function'
    );

    // String Parameter

    assertionThrown = false;

    try {
        BS.isAble( 'notUnderTest', 'test' );
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        !assertionThrown,
        'Parameter was a String'
    );

    // Object Parameter

    assertionThrown = false;

    BS.getBehaviorGroup = function() {
        return true;
    };

    try {
        BS.isAble( 'notUnderTest', {});
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'Parameter was an Object'
    );
});

test( 'isAble() requires third argument to be a boolean or undefined', function( assert ) {
    // Number parameter

    let assertionThrown = false;

    try {
        BS.isAble( 'notUnderTest', 'notUnderTest', 4 );
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'Parameter was a Number'
    );

    // Boolean parameter

    assertionThrown = false;

    try {
        BS.isAble( 'notUnderTest', 'notUnderTest', false );
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        !assertionThrown,
        'Parameter was a Boolean'
    );

    // Array Parameter

    assertionThrown = false;

    try {
        BS.isAble( 'notUnderTest', 'notUnderTest', [] );
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'Parameter was an Array'
    );

    // Function

    assertionThrown = false;

    try {
        BS.isAble( 'notUnderTest', 'notUnderTest', function(){} );
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'Parameter was a Function'
    );

    // String Parameter

    assertionThrown = false;

    try {
        BS.isAble( 'notUnderTest', 'notUnderTest', 'test' );
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'Parameter was a String'
    );

    // Object Parameter

    assertionThrown = false;

    BS.getBehaviorGroup = function() {
        return true;
    };

    try {
        BS.isAble( 'notUnderTest', {});
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'Parameter was an Object'
    );

    // No Parameter

    assertionThrown = false;

    BS.getBehaviorGroup = function() {
        return true;
    };

    try {
        BS.isAble( 'notUnderTest', 'notUnderTest');
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        !assertionThrown,
        'Parameter was undefined'
    );
});

test( 'isAble() 3rd parameter is provided - value is used in addition to Behavior data to make a determination', function( assert ) {
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
});

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
