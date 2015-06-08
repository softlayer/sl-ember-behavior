import Ember from 'ember';

export default Ember.Route.extend({
    beforeModel() {
        var behaviors = Ember.Object.create({
            'event': Ember.Object.create({
                reschedule: false,
                cancel: false,
                setDate: true
            }),

            route: Ember.Object.create()
        });

        this._super.apply( this, arguments );

        Ember.keys( this.get( 'router.router.recognizer.names' ) ).forEach( ( route ) => {
            behaviors[ 'route' ][ route ] = true;
        });

        this.get( 'behaviorService' ).setBehaviors( behaviors );
    },

    behaviorService: Ember.inject.service( 'behavior' ),

    model() {
        return Ember.Object.create({
            behaviorGroup: 'event',

            behaviors: {
                setDate() {
                    return true;
                }
            }
        });
    }
});
