import Ember from 'ember';
import { test, moduleForComponent } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import sinon from 'sinon';

let behaviorService;

moduleForComponent( 'sl-unable', 'Unit | Component | sl unable', {
    unit: true,

    beforeEach() {
        behaviorService = Ember.Object.create({
            isUnable: sinon.stub().returns( false )
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

    assert.strictEqual(
        this.$().prop( 'tagName' ),
        'SPAN'
    );
});

test( 'Does not render content when isUnable() returns false', function( assert ) {
    this.registry.register( 'template:test-template',  hbs`Should not render` );

    this.subject({
        behaviorService: behaviorService,
        templateName: 'test-template'
    });

    assert.strictEqual(
        this.$().text(),
        ''
    );

    this.registry.unregister( 'template:test-template' );
});

test( 'Renders content when isUnable() returns true', function( assert ) {
    this.registry.register( 'template:test-template',  hbs`Should render` );

    behaviorService.isUnable = sinon.stub().returns( true );

    this.subject({
        behaviorService: behaviorService,
        templateName: 'test-template'
    });

    this.render();

    assert.strictEqual(
        Ember.$.trim( this.$().text() ),
        'Should render'
    );

    this.registry.unregister( 'template:test-template' );
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
