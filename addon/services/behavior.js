import Ember from 'ember';

/**
 * @module services
 * @class  behavior
 */
export default Ember.Object.extend({

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
     * @default  null
     */
    behaviors: null,

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

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
     * @returns  {boolean}
     */
    isAble: function( behavior, provider ) {
        var getBehaviorGroup = function( provider ) {
                var behaviorGroupType         = typeof provider.behaviorGroup,
                    behaviorGroupTypeIsString = 'string' === behaviorGroupType,
                    behaviorGroup;

                if ( !behaviorGroupTypeIsString && 'function' !== behaviorGroupType ) {
                    Ember.assert( 'services/behavior.isAble() "provider.behaviorGroup" must be a string or function' );
                }

                behaviorGroup = ( behaviorGroupTypeIsString ) ?
                                    provider.get( 'behaviorGroup' ) :
                                    provider.behaviorGroup();

                return behaviorGroup;
            },
            behaviors = this.getWithDefault( 'behaviors', null ),
            isAble    = false,
            behaviorGroup,
            providerIsObject;

        if ( !behavior || !provider ) {
            Ember.assert( 'services/behavior.isAble() expects two parameters to be provided' );
        }

        if ( 'string' !== typeof behavior ) {
            Ember.assert( 'services/behavior.isAble() expects "behavior" parameter to be a string' );
        }

        providerIsObject = 'object' === typeof provider;

        if ( 'string' !== typeof provider && !providerIsObject ) {
            Ember.assert( 'services/behavior.isAble() expects "provider" parameter to be either a string or object' );
        }

        behaviorGroup = ( providerIsObject  ) ? getBehaviorGroup( provider ) : provider;

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
     * @returns  {boolean}
     */
    isUnable: function( behavior, provider ) {
        return !this.isAble( behavior, provider );
    },

    /**
     * Set behaviors
     *
     * @function setBehaviors
     * @argument {Ember.Object} behaviors
     * @returns  {void}
     */
    setBehaviors: function( behaviors ) {
        if ( 'object' !== typeof behaviors ) {
            Ember.assert( 'services/behavior.setBehaviors() expects "behaviors" parameter to be an object' );
        }

        this.set( 'behaviors', behaviors );
    }
});
