import Ember from 'ember';
import ComponentMixin from 'sl-ember-behavior/mixins/component';
import { module, test } from 'qunit';

module( 'Unit | Mixin | component' );

test( 'Assert is thrown when isViewable() is not implemented on the derived class', function( assert ) {
    let ComponentObject = Ember.Object.extend( ComponentMixin );
    let subject = ComponentObject.create();

    assert.throws(
        subject.isViewable,
        'Assertion was thrown'
    );
});
