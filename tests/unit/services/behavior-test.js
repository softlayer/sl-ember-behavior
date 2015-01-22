import Ember from 'ember';
import BehaviorService from 'sl-ember-behavior/services/behavior';

var BS;

module( 'Unit - services:behavior', {
    setup: function() {
        BS = BehaviorService.create();
    }
});

test( '"behaviors" property defaults to null', function() {
    equal( BS.get( 'behaviors' ), null );
});

test( 'getBehaviorGroup() requires an Object to be provided', function() {

    // Empty parameter

    var assertionThrown = false;

    try {
        BS.getBehaviorGroup();
    } catch( error ) {
        assertionThrown = true;
    }

    ok( assertionThrown, 'Parameter was empty' );

    // Number parameter

    assertionThrown = false;

    try {
        BS.getBehaviorGroup( 4 );
    } catch( error ) {
        assertionThrown = true;
    }

    ok( assertionThrown, 'Parameter was a Number' );

    // Array Parameter

    assertionThrown = false;

    try {
        BS.getBehaviorGroup( [] );
    } catch( error ) {
        assertionThrown = true;
    }

    ok( assertionThrown, 'Parameter was an Array' );

    // Function

    assertionThrown = false;

    try {
        BS.getBehaviorGroup( function(){} );
    } catch( error ) {
        assertionThrown = true;
    }

    ok( assertionThrown, 'Parameter was a Function' );

    // String Parameter

    assertionThrown = false;

    try {
        BS.getBehaviorGroup( 'test' );
    } catch( error ) {
        assertionThrown = true;
    }

    ok( assertionThrown, 'Parameter was a String' );

    // Object Parameter

    assertionThrown = false;

    try {
        BS.getBehaviorGroup( { behaviorGroup: 'notUnderTest' } );
    } catch( error ) {
        assertionThrown = true;
    }

    ok( !assertionThrown, 'Parameter was an Object' );
});

test( 'getBehaviorGroup() "provider.behaviorGroup" must be a String or Function', function() {

    // Empty parameter

    var assertionThrown = false;

    try {
        BS.getBehaviorGroup({ behaviorGroup: null });
    } catch( error ) {
        assertionThrown = true;
    }

    ok( assertionThrown, 'Property was empty' );

    // Number Property

    assertionThrown = false;

    try {
        BS.getBehaviorGroup({ behaviorGroup: 4 });
    } catch( error ) {
        assertionThrown = true;
    }

    ok( assertionThrown, 'Property was a Number' );

    // Array Property

    assertionThrown = false;

    try {
        BS.getBehaviorGroup({ behaviorGroup: [] });
    } catch( error ) {
        assertionThrown = true;
    }

    ok( assertionThrown, 'Property was an Array' );

    // Object Property

    assertionThrown = false;

    try {
        BS.getBehaviorGroup({ behaviorGroup: {} });
    } catch( error ) {
        assertionThrown = true;
    }

    ok( assertionThrown, 'Property was an Object' );

    // Function

    assertionThrown = false;

    try {
        BS.getBehaviorGroup({ behaviorGroup: function(){} });
    } catch( error ) {
        assertionThrown = true;
    }

    ok( !assertionThrown, 'Property was a Function' );

    // String Property

    assertionThrown = false;

    try {
        BS.getBehaviorGroup({ behaviorGroup: 'test' });
    } catch( error ) {
        assertionThrown = true;
    }

    ok( !assertionThrown, 'Property was a String' );
});

test( 'If getBehaviorGroup() "provider.behaviorGroup" is a string its value is returned', function() {
    var testValue = 'testGroup';

    equal( testValue, BS.getBehaviorGroup({ behaviorGroup: testValue }) );
});

test( 'If getBehaviorGroup() "provider.behaviorGroup" is a function it is executed', function() {
    var result = BS.getBehaviorGroup({
        behaviorGroup: function() {
            return 'test group';
        }
    });

    equal( 'test group', result );
});

test( 'setBehaviors() requires an Object to be provided', function() {

    // Empty parameter

    var assertionThrown = false;

    try {
        BS.setBehaviors();
    } catch( error ) {
        assertionThrown = true;
    }

    ok( assertionThrown, 'Parameter was empty' );

    // Number parameter

    assertionThrown = false;

    try {
        BS.setBehaviors( 4 );
    } catch( error ) {
        assertionThrown = true;
    }

    ok( assertionThrown, 'Parameter was a Number' );

    // Array Parameter

    assertionThrown = false;

    try {
        BS.setBehaviors( [] );
    } catch( error ) {
        assertionThrown = true;
    }

    ok( assertionThrown, 'Parameter was an Array' );

    // Function

    assertionThrown = false;

    try {
        BS.getBehaviorGroup( function(){} );
    } catch( error ) {
        assertionThrown = true;
    }

    ok( assertionThrown, 'Parameter was a Function' );

    // String Parameter

    assertionThrown = false;

    try {
        BS.setBehaviors( 'test' );
    } catch( error ) {
        assertionThrown = true;
    }

    ok( assertionThrown, 'Parameter was a String' );

    // Object Parameter

    assertionThrown = false;

    try {
        BS.setBehaviors( {} );
    } catch( error ) {
        assertionThrown = true;
    }

    ok( !assertionThrown, 'Parameter was an Object' );
});

test( 'setBehaviors() sets data on the behaviors property', function() {
    var testBehaviors = Ember.Object.create( { 'the_key': 'my value' } );

    BS.setBehaviors( testBehaviors );

    deepEqual( BS.get( 'behaviors' ), testBehaviors );
});

test( 'isAble() requires two arguments to be provided', function() {

    // No arguments

    var assertionThrown = false;

    try {
        BS.isAble();
    } catch( error ) {
        assertionThrown = true;
    }

    ok( assertionThrown, 'No arguments were provided' );

    // One argument

    assertionThrown = false;

    try {
        BS.isAble( 'one' );
    } catch( error ) {
        assertionThrown = true;
    }

    ok( assertionThrown, 'One argument was provided' );

    // Two arguments

    assertionThrown = false;

    try {
        BS.isAble( 'one', 'two' );
    } catch( error ) {
        assertionThrown = true;
    }

    ok( !assertionThrown, 'Two arguments were provided' );
});

test( 'isAble() requires first argument to be a String', function() {
    // Empty parameter

    var assertionThrown = false;

    try {
        BS.isAble();
    } catch( error ) {
        assertionThrown = true;
    }

    ok( assertionThrown, 'Parameter was empty' );

    // Number parameter

    assertionThrown = false;

    try {
        BS.isAble( 4, 'notUnderTest' );
    } catch( error ) {
        assertionThrown = true;
    }

    ok( assertionThrown, 'Parameter was a Number' );

    // Array Parameter

    assertionThrown = false;

    try {
        BS.isAble( [], 'notUnderTest' );
    } catch( error ) {
        assertionThrown = true;
    }

    ok( assertionThrown, 'Parameter was an Array' );

    // Function

    assertionThrown = false;

    try {
        BS.getBehaviorGroup( function(){} );
    } catch( error ) {
        assertionThrown = true;
    }

    ok( assertionThrown, 'Parameter was a Function' );

    // String Parameter

    assertionThrown = false;

    try {
        BS.isAble( {}, 'notUnderTest' );
    } catch( error ) {
        assertionThrown = true;
    }

    ok( assertionThrown, 'Parameter was an Object' );

    // Object Parameter

    assertionThrown = false;

    try {
        BS.isAble( 'test', 'notUnderTest' );
    } catch( error ) {
        assertionThrown = true;
    }

    ok( !assertionThrown, 'Parameter was a String' );
});

test( 'isAble() requires second argument to be a String or Object', function() {
    // Number parameter

    var assertionThrown = false;

    try {
        BS.isAble( 'notUnderTest', 4 );
    } catch( error ) {
        assertionThrown = true;
    }

    ok( assertionThrown, 'Parameter was a Number' );

    // Array Parameter

    assertionThrown = false;

    try {
        BS.isAble( 'notUnderTest', [] );
    } catch( error ) {
        assertionThrown = true;
    }

    ok( assertionThrown, 'Parameter was an Array' );

    // Function

    assertionThrown = false;

    try {
        BS.getBehaviorGroup( function(){} );
    } catch( error ) {
        assertionThrown = true;
    }

    ok( assertionThrown, 'Parameter was a Function' );

    // String Parameter

    assertionThrown = false;

    try {
        BS.isAble( 'notUnderTest', 'test' );
    } catch( error ) {
        assertionThrown = true;
    }

    ok( !assertionThrown, 'Parameter was a String' );

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

    ok( !assertionThrown, 'Parameter was an Object' );
});

test( 'isAble() 2nd argument is a string - argument values are compared to Behavior data to make determination', function() {
    BS.setBehaviors({
        device: {
            reboot: true
        }
    });

    ok( BS.isAble( 'reboot', 'device' ), 'Was able' );

    BS.setBehaviors({
        device: {
            reboot: false
        }
    });

    ok( !BS.isAble( 'reboot', 'device' ), 'Was not able' );
});

test( 'isAble() 2nd argument is an object - getBehaviorGroup() is called', function() {
    var wasCalled = false;

    BS.getBehaviorGroup = function() {
        wasCalled = true;
    };

    BS.isAble( 'notUnderTest', {});

    ok( wasCalled, 'getBehaviorGroup() was called' );
});

test( 'isAble() 2nd argument is an object - getBehaviorGroup() value is compared to Behavior data to make determination', function() {
    BS.setBehaviors({
        device: {
            reboot: false
        }
    });

    ok( !BS.isAble( 'reboot', {
        behaviorGroup: 'device',
        behaviors: {
            reboot: function() {
                return true;
            }
        }
    }) , 'getBehaviorGroup() value was compared to Behavior data' );
});

test( 'isAble() 2nd argument is an object and is allowed - "behaviors" hash refines determination', function() {
    BS.setBehaviors({
        device: {
            reboot: true
        }
    });

    ok( !BS.isAble( 'reboot', {
        behaviorGroup: 'device',
        behaviors: {
            reboot: function() {
                return false;
            }
        }
    }) , '"behaviors" hash refined determination' );

    ok( BS.isAble( 'reboot', {
        behaviorGroup: 'device',
        behaviors: {
            reboot: function() {
                return true;
            }
        }
    }) , '"behaviors" hash refined determination' );
});

test( 'isAble() returns false if no Behavior data has been set', function() {
    ok( !BS.isAble( 'reboot', 'device' ), 'Returned false' );
});

test( 'isAble() returns false if specified Behavior Group has not been configured', function() {
    BS.setBehaviors({
        device: {
            reboot: false
        }
    });

    ok( !BS.isAble( 'reboot', 'product' ), 'Returned false' );
});

test( 'isAble() returns false if specified Behavior has not been configured', function() {
    BS.setBehaviors({
        device: {
            reboot: false
        }
    });

    ok( !BS.isAble( 'restart', 'device' ), 'Returned false' );
});

test( 'isUnable() is the negated result of a call to isAble()', function() {
    BS.setBehaviors({
        device: {
            reboot: false
        }
    });

    ok( BS.isUnable( 'reboot', 'device' ), 'Was unable' );

    BS.setBehaviors({
        device: {
            reboot: true
        }
    });

    ok( !BS.isUnable( 'reboot', 'device' ), 'Was not unable' );
});
