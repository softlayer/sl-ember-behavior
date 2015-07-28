import Ember from 'ember';
import layout from '../templates/sl-behavior';
import resolveValue from '../utils/resolve-value';

/**
 * Adds ability to hide template content of a component under a given set of conditions
 *
 * @module
 * @augments ember/Mixin
 */
export default Ember.Mixin.create({

    // -------------------------------------------------------------------------
    // Dependencies

    /**
     * The behavior service used to check if a supplied behavior is allowed
     *
     * @type {ember/Service}
     */
    behaviorService: Ember.inject.service( 'sl-behavior' ),

    // -------------------------------------------------------------------------
    // Attributes

    /** @type {Object} */
    layout,

    /** @type {String} */
    tagName: 'span',

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    /**
     * Indicates whether an activity is allowed if the behaviors set on the service allow it
     *
     * When set to a function, the return value must be a Boolean and will not
     * be observed by the showContent() method.
     *
     * @type {Boolean|Function}
     */
    possible: true,

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Implement this function to customize the block content's viewability
     *
     * @function
     * @abstract
     * @throws {ember.assert} If this function has not been implemented on the derived class
     * @returns {Boolean} true if the content is viewable, otherwise false
     */
    isViewable( activity, resource, possible ) {
        Ember.assert( 'The mixins/component.isViewable() method should be implemented on the derived class' );

        return activity && resource && possible && false;
    },

    /**
     * Determines whether or not to show the content in the template
     *
     * @function
     * @throws {ember.assert} If the `possible` property is not a Boolean or a function that evaluates to a Boolean
     * @returns {Boolean}
     */
    showContent: Ember.computed(
        'behaviorService.behaviors',
        'possible',
        function() {
            const possible = resolveValue( this.get( 'possible' ) );

            Ember.assert(
                'Expects `possible` property to be a Boolean or a function that evaluates to a Boolean',
                Ember.typeOf( possible ) === 'boolean'
            );

            return this.isViewable(
                this.get( 'activity' ),
                this.get( 'resource' ),
                possible
            );
        }
    )
});
