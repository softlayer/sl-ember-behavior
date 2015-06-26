import Ember from 'ember';
import layout from '../templates/components/sl-able';

/**
 * @module
 * @augments ember/Component
 */
export default Ember.Component.extend({

    // -------------------------------------------------------------------------
    // Dependencies

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
     * The behavior service used to check if the supplied behavior is allowed
     *
     * @type {ember/Service}
     */
    behaviorService: Ember.inject.service( 'sl-behavior' ),

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Whether the behavior is allowed
     *
     * @function
     * @returns {Boolean}
     */
    isAble: Ember.computed( function() {
        return this.get( 'behaviorService' ).isAble(
            this.get( 'behavior' ),
            this.get( 'provider' )
        );
    })
});
