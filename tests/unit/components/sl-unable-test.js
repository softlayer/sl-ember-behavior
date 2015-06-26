import Ember from 'ember';
import { test, moduleForComponent } from 'ember-qunit';

let behaviorService = Ember.Object.create({
    isUnable( behavior, provider ) {
        this.set( 'behavior', behavior );
        this.set( 'provider', provider );
        return false;
    }
});

moduleForComponent( 'sl-unable', 'Unit | Component | sl unable', {
    unit: true
});

test ( 'The correct service is being injected into the component', function( assert ) {
    let component = this.subject();

    assert.equal(
        component.behaviorService['name'],
        'sl-behavior',
        'The correct service is being injected into the component'
    );
});

/**
 * Ensures that the template is wrapping the content in a span tag and not in any block-level tags. While it appears
 * that core Ember functionality is being tested this test is ensuring that the implied contract about how this non-UI
 * component is rendered into the DOM is adhered to.
 */
test( 'Renders as a span tag with no classes', function( assert ) {
    let component = this.subject({
        behaviorService: behaviorService
    });

    assert.equal(
        this.$().prop( 'tagName' ),
        'SPAN'
    );
});

test( 'Does not render content', function( assert ) {
    let component = this.subject({
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

test( 'isUnable() calls isUnable() on the behavior service', function( assert ) {
    let component = this.subject({
        behaviorService: behaviorService,
        behavior: 'the_behavior',
        provider: 'the_provider'
    });

    this.render();

    assert.equal(
        behaviorService.get( 'behavior' ),
        'the_behavior'
    );

    assert.equal(
        behaviorService.get( 'provider' ),
        'the_provider'
    );
});
