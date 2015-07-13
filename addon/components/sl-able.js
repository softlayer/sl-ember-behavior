import Ember from 'ember';
import ComponentMixin from '../mixins/component';

/**
 * A block form component that renders its content when an activity on a resource is possible and allowed
 *
 * @module
 * @augments ember/Component
 * @augments mixins/component
 */
export default Ember.Component.extend( ComponentMixin, {

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Calls the appropriate method on the behavior service to determine if it should be viewable
     *
     * @function
     * @param {String} activity
     * @param {String} resource
     * @param {Boolean} possible
     * @returns {Boolean}
     */
    isViewable( activity, resource, possible ) {
        return this.get( 'behaviorService' ).isAble( activity, resource, possible );
    }

});
