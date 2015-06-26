import Ember from 'ember';

export default Ember.Route.extend({
    beforeModel() {
        var behaviors = {
            'event': {
                reschedule: false,
                cancel: false,
                setDate: true,
                editDate: true
            },

            route: {}
        };

        this._super.apply( this, arguments );

        Ember.keys( this.get( 'router.router.recognizer.names' ) ).forEach( ( route ) => {
            behaviors[ 'route' ][ route ] = true;
        });

        this.get( 'behaviorService' ).setBehaviors( behaviors );
    },

    behaviorService: Ember.inject.service( 'sl-behavior' ),

    model() {
        return Ember.Object.create({
            behaviorGroup: 'event',

            behaviors: {
                setDate() {
                    return true;
                },
                editDate: true
            }
        });
    }
});
