import Ember from 'ember';
import mixinUnderTest from 'sl-ember-behavior/mixins/route';

var Mixin;

module( 'Unit - mixins:route', {
    setup: function() {
        Mixin = Ember.Route.extend( mixinUnderTest );
        Mixin = Mixin.create();
    }
});

// Though appears to be a duplicate of the module.setup() call this is an actual test,
// whereas the other is configuration and might change in the future
test( 'Successfully mixed', function() {
    var testObject = Ember.Route.extend( mixinUnderTest ),
        subject    = testObject.create();

    ok( subject );
});

test( '"unableRoute" property defaults to null', function() {
    equal( Mixin.get( 'unableRoute' ), null );
});

test( 'Call to isUnable() uses transition.targetName as first argument value', function() {
    var testStringValue = 'test value',
        transition      = {},
        parameterValuePassed;

    transition.targetName = testStringValue;

    Mixin.behaviorService = {
        isUnable: function( value1, value2 ) {
            parameterValuePassed = value1;
        }
    };

    Mixin.beforeModel( transition );

    ok( testStringValue, parameterValuePassed );
});

test( 'Call to isUnable() uses "route" as second argument value', function() {
    var transition = {},
        hardCodedValue;

    transition.targetName = 'test';

    Mixin.behaviorService = {
        isUnable: function( value1, value2 ) {
            hardCodedValue = value2;
        }
    };

    Mixin.beforeModel( transition );

    ok( 'route', hardCodedValue );
});

test( 'If isUnable() and "unableRoute" is null, transition.abort() is called', function() {
    var transition  = {},
        iWasCalled = false;

    transition.targetName = 'test';
    transition.abort      = function() {
        iWasCalled = true;
    };

    Mixin.behaviorService = {
        isUnable: function( value1, value2 ) {
            return true;
        }
    };

    Mixin.beforeModel( transition );

    ok( iWasCalled, 'transition.abort() was called' );
});

test( 'If isUnable() and "unableRoute" is not null, transitionTo() is called with "unableRoute" value', function() {
    var transition  = {},
        routeToTransitionTo;

    transition.targetName = 'test';

    Mixin.unableRoute = 'notEmpty';

    Mixin.transitionTo = function( value ) {
        routeToTransitionTo = value;
    };

    Mixin.behaviorService = {
        isUnable: function( value1, value2 ) {
            return true;
        }
    };

    Mixin.beforeModel( transition );

    ok( routeToTransitionTo, 'notEmpty' );
});

test( 'If not isUnable() then beforeModel() introduces no varying code path', function() {
    var transition          = {},
        abortWasCalled      = false,
        transitionWasCalled = false;

    transition.targetName = 'test';

    transition.abort   = function() {
        abortWasCalled = true;
    };

    Mixin.unableRoute = 'notEmpty';

    Mixin.transitionTo = function( value ) {
        transitionWasCalled = true;
    };

    Mixin.behaviorService = {
        isUnable: function( value1, value2 ) {
            return false;
        }
    };

    Mixin.beforeModel( transition );

    ok( !( abortWasCalled || transitionWasCalled ), 'There is no varying code path' );
});
