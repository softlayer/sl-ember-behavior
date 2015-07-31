import Ember from 'ember';
import ComponentMixin from 'sl-ember-behavior/mixins/component';
import { module, test } from 'qunit';

let AugmentedObject;

module( 'Unit | Mixin | component', {
    beforeEach() {
        AugmentedObject = Ember.Object.extend( ComponentMixin );
    }
});

test( 'The correct service is being injected into the component', function( assert ) {
    const subject = AugmentedObject.create();

    assert.equal(
        subject.behaviorService.name,
        'sl-behavior',
        'The correct service is being injected into the component'
    );
});

test( 'Assert is thrown when isViewable() is not implemented on the derived class', function( assert ) {
    const subject = AugmentedObject.create();

    assert.throws(
        subject.isViewable,
        'Assertion was thrown'
    );
});
