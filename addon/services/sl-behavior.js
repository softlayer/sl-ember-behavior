import Ember from 'ember';

/**
 * @module
 * @augments ember/Service
 */
export default Ember.Service.extend({

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

    /**
     * Behaviors
     *
     * @type {?Object}
     */
    behaviors: null,

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Determine whether the desired activity is able to be performed on the resource
     *
     * @function
     * @param {String} activity
     * @param {String} resource
     * @param {Boolean} possible
     * @throws {ember.assert} If no parameters provided, first parameter is not a string, second parameter is not a
     *     string, or third parameter is not a boolean or undefined
     * @returns {Boolean}
     */
    isAble( activity, resource, possible ) {
        Ember.assert(
            'services/sl-behavior.isAble() expects at least two parameters to be provided',
            activity && resource
        );

        const behaviors = this.get( 'behaviors' );

        Ember.assert(
            'services/sl-behavior.isAble() expects `activity` parameter to be a String',
            'string' === Ember.typeOf( activity )
        );

        Ember.assert(
            'services/sl-behavior.isAble() expects `resource` parameter to be a String',
            'string' === Ember.typeOf( resource )
        );

        Ember.assert(
            'services/sl-behavior.isAble() expects `possible` parameter to be a Boolean or undefined',
            'boolean' === Ember.typeOf( possible ) ||
            'undefined' === Ember.typeOf( possible )
        );

        if ( 'undefined' === Ember.typeOf( possible ) ) {
            possible = true;
        }

        let isAble = false;

        if (
            behaviors &&
            behaviors[ resource ] &&
            behaviors[ resource ][ activity ]
        ) {
            isAble = possible;
        }

        return isAble;
    },

    /**
     * Determine whether the desired activity is unable to be performed on the resource
     *
     * See {@link module:addon/services/sl-behavior~isAble} for description of functionality.  This method returns the
     * inverse of its result.
     *
     * @function
     * @param {String} activity
     * @param {String} resource
     * @param {Boolean} possible
     * @returns {Boolean}
     */
    isUnable( activity, resource, possible ) {
        return !this.isAble( activity, resource, possible );
    },

    /**
     * Set behaviors
     *
     * @function
     * @param {Object} behaviors
     * @throws {ember.assert} If argument is not an object
     * @returns {undefined}
     */
    setBehaviors( behaviors ) {
        /* jshint ignore:start */
        Ember.assert(
            'services/sl-behavior.setBehaviors() expects "behaviors" parameter to be an Object',
            (
                'instance' === Ember.typeOf( behaviors ) ||
                'object' === Ember.typeOf( behaviors )
            ) &&
            'symbol' !== Ember.typeOf( behaviors )
        );
        /* jshint ignore:end */

        this.set( 'behaviors', behaviors );
    }
});
