import Ember from 'ember';
import { test, moduleForComponent } from 'ember-qunit';

let behaviorService;

moduleForComponent( 'sl-unable', 'Unit | Component | sl unable', {
    unit: true,

    beforeEach() {
        behaviorService = Ember.Object.create({
            isUnable: window.sinon.stub().returns( false )
        });
    }
});

/**
 * Ensures that the template is wrapping the content in a span tag and not in any block-level tags. While it appears
 * that core Ember functionality is being tested this test is ensuring that the implied contract about how this non-UI
 * component is rendered into the DOM is adhered to.
 */
test( 'Renders as a span tag with no classes', function( assert ) {
    this.subject({
        behaviorService: behaviorService
    });

    assert.equal(
        this.$().prop( 'tagName' ),
        'SPAN'
    );
});

test( 'Does not render content when isUnable() returns false', function( assert ) {
    this.subject({
        behaviorService: behaviorService,
        template: Ember.Handlebars.compile(
            'Should not render'
        )
    });

    assert.equal(
        this.$().text(),
        ''
    );
});

test( 'Renders content when isUnable() returns true', function( assert ) {
    behaviorService.isUnable = window.sinon.stub().returns( true );

    this.subject({
        behaviorService: behaviorService,
        template: Ember.Handlebars.compile(
            'Should render'
        )
    });

    assert.equal(
        Ember.$.trim( this.$().text() ),
        'Should render'
    );
});

test( 'isUnable() calls isUnable() on the behavior service', function( assert ) {
    this.subject({
        behaviorService: behaviorService,
        activity: 'anActivity',
        resource: 'aResource',
        possible: true
    });

    this.render();

    assert.ok(
        behaviorService.isUnable.withArgs( 'anActivity', 'aResource', true ).calledOnce,
        'isUnable() was called with the correct params'
    );
});

test( 'Is responsive to changes in the behavior data on the service', function( assert ) {
    this.subject({
        behaviorService: behaviorService,
        activity: 'anActivity',
        resource: 'aResource'
    });

    this.render();

    Ember.run( () => {
        behaviorService.set( 'behaviors', {
            'aResource': {
                'anActivity': false
            }
        });
    });

    assert.ok(
        behaviorService.isUnable.withArgs( 'anActivity', 'aResource', true ).calledTwice,
        'isUnable() is called twice'
    );
});

test( 'Is responsive to changes to the `possible` parameter', function( assert ) {
    const component = this.subject({
        behaviorService: behaviorService,
        activity: 'anActivity',
        resource: 'aResource'
    });

    this.render();

    assert.ok(
        behaviorService.isUnable.withArgs( 'anActivity', 'aResource', true ).calledOnce,
        'isUnable() is called with `true` as a third param'
    );

    Ember.run( function() {
        component.set( 'possible', false );
    });

    assert.ok(
        behaviorService.isUnable.withArgs( 'anActivity', 'aResource', false ).calledOnce,
        'isUnable() is called with `false` as a third param'
    );
});
