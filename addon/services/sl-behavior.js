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
     * Retrieve Behavior Group string from Provider object
     *
     * @function
     * @param {Object} provider
     * @throws {ember.assert} If parameter is not an object
     * @returns {String}
     */
    getBehaviorGroup( provider ) {
        Ember.assert(
            'services/behavior.getBehaviorGroup() expects a parameter to be provided',
            provider
        );

        let behaviorGroupType = Ember.typeOf( provider.behaviorGroup );
        let behaviorGroupTypeIsString = 'string' === behaviorGroupType;
        let providerType = Ember.typeOf( provider );

        Ember.assert(
            'services/behavior.getBehaviorGroup() expects parameter to be an Object',
            'instance' === providerType ||
            'object' === providerType
        );

        Ember.assert(
            'services/behavior.getBehaviorGroup() `provider.behaviorGroup` must be a String or Function',
            'function' === behaviorGroupType ||
            behaviorGroupTypeIsString
        );

        let behaviorGroup = ( behaviorGroupTypeIsString ) ?
            Ember.get( provider, 'behaviorGroup' ) :
            provider.behaviorGroup();

        return behaviorGroup;
    },

    /**
     * Determine whether the desired behavior is able to be performed
     *
     * If `provider` is a string:
     *     `provider` and `behavior` values are compared to data from `this.behaviors` to make determination.
     *
     * If `provider` is an object:
     *     Object provides string value to be used as `provider` value
     *     `provider` value is first compared to data from `this.behaviors` to make determination
     *     If present then it further looks to `behaviors` hash on object for result of property with `provider` value
     *
     * @function
     * @param {String} behavior
     * @param {String|Object} provider
     * @throws {ember.assert} If no parameters provided, first parameter is not a string, or second parameter is not a
     *     string or object
     * @returns {Boolean}
     */
    isAble( behavior, provider ) {
        Ember.assert(
            'services/behavior.isAble() expects two parameters to be provided',
            behavior && provider
        );

        let behaviors = this.getWithDefault( 'behaviors', null );
        let providerType = Ember.typeOf( provider );
        let providerIsObject = providerType === 'instance' || providerType === 'object';

        Ember.assert(
            'services/behavior.isAble() expects `behavior` parameter to be a String',
            'string' === Ember.typeOf( behavior )
        );

        Ember.assert(
            'services/behavior.isAble() expects `provider` parameter to be either a String or Object',
            'string' === providerType || providerIsObject
        );

        let behaviorGroup = providerIsObject ?
            this.getBehaviorGroup( provider ) : provider;

        let isAble = false;

        if (
            behaviors &&
            behaviors[ behaviorGroup ] &&
            behaviors[ behaviorGroup ][ behavior ]
        ) {

            if ( providerIsObject ) {
                let type = Ember.typeOf( provider.behaviors[ behavior ] );

                if ( 'function' === type ) {
                    isAble = provider.behaviors[ behavior ]();
                } else if ( 'boolean' === type ) {
                    isAble = provider.behaviors[ behavior ];
                }
            } else {
                isAble = true;
            }
        }

        return isAble;
    },

    /**
     * Determine whether the desired behavior is unable to be performed
     *
     * See {@link module:addon/services/behavior~isAble} for description of functionality.  This method returns the
     * inverse of its result.
     *
     * @function
     * @param {String} behavior
     * @param {String|Object} provider
     * @returns {Boolean}
     */
    isUnable( behavior, provider ) {
        return !this.isAble( behavior, provider );
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
        let behaviorType = Ember.typeOf( behaviors );
        let behaviorTypeCheck = 'instance' === behaviorType || 'object' === behaviorType;

        Ember.assert(
            'services/behavior.setBehaviors() expects "behaviors" parameter to be an Object',
            behaviorTypeCheck
        );

        if ( behaviorTypeCheck ) {
            this.set( 'behaviors', behaviors );
        }
    }
});
