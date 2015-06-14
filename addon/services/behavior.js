import Ember from 'ember';

/**
 * @module services
 * @class behavior
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
     * @property {Ember.Object} behaviors
     * @default null
     */
    behaviors: null,

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Retrieve Behavior Group string from Provider object
     *
     * @argument {Ember.Object} provider
     * @throws {Ember.assert} If argument is not an object
     * @return {Ember.String}
     */
    getBehaviorGroup( provider ) {
        var behaviorGroupType = Ember.typeOf( provider.behaviorGroup ),
            behaviorGroupTypeIsString = 'string' === behaviorGroupType,
            behaviorGroup;

        Ember.assert(
            'services/behavior.getBehaviorGroup() expects parameter to be an Object',
            'object' === Ember.typeOf( provider ) && !Array.isArray( provider )
        );

        Ember.assert(
            'services/behavior.getBehaviorGroup() "provider.behaviorGroup" must be a String or Function',
            behaviorGroupTypeIsString || 'function' === behaviorGroupType
        );

        behaviorGroup = ( behaviorGroupTypeIsString ) ?
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
     * @function isAble
     * @argument {Ember.String} behavior
     * @argument {Ember.String|Ember.Object} provider
     * @throws {Ember.assert} If: no arguments provided, first argument is not a string, or second argument is not a string or object
     * @returns {boolean}
     */
    isAble( behavior, provider ) {
        var behaviors = this.getWithDefault( 'behaviors', null ),
            isAble = false,
            behaviorGroup,
            providerIsObject;

        Ember.assert(
            'services/behavior.isAble() expects two parameters to be provided',
            behavior && provider
        );

        Ember.assert(
            'services/behavior.isAble() expects "behavior" parameter to be a String',
            'string' === Ember.typeOf( behavior )
        );

        providerIsObject = ( 'object' === Ember.typeOf( provider ) && !Array.isArray( provider ) );

        Ember.assert(
            'services/behavior.isAble() expects "provider" parameter to be either a String or Object',
            'string' === Ember.typeOf( provider ) || providerIsObject
        );

        behaviorGroup = ( providerIsObject  ) ? this.getBehaviorGroup( provider ) : provider;

        if ( behaviors && behaviors[behaviorGroup] && behaviors[behaviorGroup][behavior] ) {
            isAble = ( providerIsObject  ) ? provider.behaviors[behavior]() : true;
        }

        return isAble;
    },

    /**
     * Determine whether the desired behavior is unable to be performed
     *
     * See isAble() for description of functionality.  This method returns the inverse of its result.
     *
     * @function isUnable
     * @argument {Ember.String} behavior
     * @argument {Ember.String|Ember.Object} provider
     * @returns {boolean}
     */
    isUnable( behavior, provider ) {
        return !this.isAble( behavior, provider );
    },

    /**
     * Set behaviors
     *
     * @function setBehaviors
     * @argument {Ember.Object} behaviors
     * @throws {Ember.assert} If argument is not an object
     * @returns {void}
     */
    setBehaviors( behaviors ) {
        Ember.assert(
            'services/behavior.setBehaviors() expects "behaviors" parameter to be an Object',
            'object' === Ember.typeOf( behaviors )
        );

        this.set( 'behaviors', behaviors );
    }
});
