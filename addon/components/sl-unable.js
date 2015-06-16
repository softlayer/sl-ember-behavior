import Ember from 'ember';
import layout from '../templates/components/sl-unable';

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
    behaviorService: Ember.inject.service( 'behavior' ),

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Whether the behavior is not allowed
     *
     * @function
     * @returns {Boolean}
     */
    isUnable: Ember.computed( function() {
        return this.get( 'behaviorService' ).isUnable(
            this.get( 'behavior' ),
            this.get( 'provider' )
        );
    })
});
