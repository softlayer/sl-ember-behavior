import Ember from 'ember';
import { test, moduleForComponent } from 'ember-qunit';
import startApp from '../../helpers/start-app';

var App;

module( 'Unit - initializer:behavior-service', {
    beforeEach: function() {
        App = startApp();
    },

    afterEach: function() {
        Ember.run( App, App.destroy );
    }
});

test( 'Registered on container as a singleton', function( assert ) {
    assert.equal( typeof App.__container__.lookup( 'behaviorService:main' ), 'object' );
    assert.notEqual( App.__container__._options['behaviorService:main'].instantiate, 'undefined' );
    assert.equal( App.__container__._options['behaviorService:main'].instantiate, false );
});

test( 'Injected on routess', function( assert ) {
    var findBy = App.__container__.typeInjections.route.findBy( 'fullName', 'behaviorService:main' );

    assert.notEqual( findBy, 'undefined' );
    assert.equal( findBy.property, 'behaviorService' );
});

test( 'Injected on controllers', function( assert ) {
    var findBy = App.__container__.typeInjections.controller.findBy( 'fullName', 'behaviorService:main' );

    assert.notEqual( findBy, 'undefined' );
    assert.equal( findBy.property, 'behaviorService' );
});

test( 'Injected on views', function( assert ) {
    var findBy = App.__container__.typeInjections.view.findBy( 'fullName', 'behaviorService:main' );

    assert.notEqual( findBy, 'undefined' );
    assert.equal( findBy.property, 'behaviorService' );
});

test( 'Injected on components', function( assert ) {
    var findBy = App.__container__.typeInjections.component.findBy( 'fullName', 'behaviorService:main' );

    assert.notEqual( findBy, 'undefined' );
    assert.equal( findBy.property, 'behaviorService' );
});