import Ember from 'ember';
import template from '../templates/components/sl-unable';

/**
 * @module components
 * @class  sl-unable
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
     * @default  template:components/sl-unable
     */
    layout: template,

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

    isUnable: function() {
        return this.get( 'behaviorService' ).isUnable(
            this.get( 'behavior' ),
            this.get( 'provider' )
        );
    }.property( )
});
