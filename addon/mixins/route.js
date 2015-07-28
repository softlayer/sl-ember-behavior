import Ember from 'ember';

/**
 * @module
 * @augments ember/Mixin
 */
export default Ember.Mixin.create({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /**
     * Route to direct user to when they have been denied access to a route
     *
     * @type {?String}
     */
    unableRoute: null,

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    /**
     * The behavior service used to check if behavior is allowed
     *
     * @type {ember/Service}
     */
    behaviorService: Ember.inject.service( 'sl-behavior' ),

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Enforce permission-based access restrictions
     *
     * @function
     * @param {ember/RSVP/Promise} transition
     * @returns {undefined}
     */
    beforeModel( transition ) {
        const superReference = Ember.get( this, '_super' );
        superReference( ...arguments );

        if ( this.get( 'behaviorService' ).isUnable( transition.targetName, 'route' ) ) {
            const unableRoute = this.get( 'unableRoute' );

            if ( Ember.isEmpty( unableRoute ) ) {
                transition.abort();

            } else {
                this.transitionTo( unableRoute );
            }
        }
    }
});
