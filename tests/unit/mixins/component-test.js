import Ember from 'ember';
import ComponentMixin from 'sl-ember-behavior/mixins/component';
import { module, test } from 'qunit';

let AugmentedObject;
let behaviorService;

module( 'Unit | Mixin | component', {
    beforeEach() {
        AugmentedObject = Ember.Object.extend( ComponentMixin );
        behaviorService = Ember.Object.create({
            behaviors: Ember.Object.create()
        });
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

test( 'Accepts a function as the `possible` parameter', function( assert ) {
    const isViewable = window.sinon.spy();

    const subject = AugmentedObject.create({
        behaviorService: behaviorService,
        isViewable: isViewable,
        activity: 'anActivity',
        resource: 'aResource',
        possible: () => false
    });

    subject.get( 'showContent' );

    assert.ok(
        isViewable.withArgs( 'anActivity', 'aResource', false ).calledOnce,
        'isViewable() was called with the correct params'
    );
});

test( 'Assert is thrown when `possible` is a function not returning a Boolean', function( assert ) {
    const subject = AugmentedObject.create({
        behaviorService: behaviorService,
        activity: 'anActivity',
        resource: 'aResource'
    });

    const callShowContent = () => subject.get( 'showContent' );

    subject.set( 'possible', () => null );

    assert.throws(
        callShowContent,
        'possible returns null'
    );

    subject.set( 'possible', () => 'a string' );

    assert.throws(
        callShowContent,
        'possible is a string'
    );

    subject.set( 'possible', () => {
        return;
    });

    assert.throws(
        callShowContent,
        'possible is undefined'
    );

    subject.set( 'possible', () => 123 );

    assert.throws(
        callShowContent,
        'possible is a number'
    );
});
