import Ember from 'ember';
import template from '../templates/components/sl-able';

/**
 * @module components
 * @class  sl-able
 */
export default Ember.Component.extend({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /**
     * The tag type of the root element
     *
     * @property {Ember.String} tagName
     * @default  "span"
     */
    tagName: 'span',

    /**
     * The template used to render the view
     *
     * @property {function} layout
     * @default  template:components/sl-able
     */
    layout: template,

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
     * Whether the behavior is allowed
     *
     * @function isAble
     * @return Boolean
     */
    isAble: Ember.computed( function() {
        return this.get( 'behaviorService' ).isAble(
            this.get( 'behavior' ),
            this.get( 'provider' )
        );
    })
});
