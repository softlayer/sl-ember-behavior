import Ember from 'ember';

export default Ember.Route.extend({
    beforeModel: function() {
        var behaviors = Ember.Object.create({
            'event': Ember.Object.create({
                reschedule: false,
                cancel: false,
                setDate: true
            }),

            route: Ember.Object.create()
        });

        this._super.apply( this, arguments );

        Ember.keys( this.get( 'router.router.recognizer.names' ) ).forEach( function( route ) {
            behaviors[ 'route' ][ route ] = true;
        });

        this.controllerFor( 'application' ).get( 'behaviorService' ).setBehaviors( behaviors );
    },

    model: function() {
        return Ember.Object.create({
            behaviorGroup: 'event',

            behaviors: {
                setDate: function() {
                    return true;
                }
            }
        });
    }
});