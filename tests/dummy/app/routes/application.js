import Ember from 'ember';

export default Ember.Route.extend({

    beforeModel() {
        const superReference = Ember.get( this, '_super' );
        superReference( ...arguments );

        const behaviors = this.get( 'behaviors' );

        Ember.keys( this.get( 'router.router.recognizer.names' ) ).forEach( ( route ) => {
            behaviors.route[ route ] = true;
        });

        this.get( 'behaviorService' ).setBehaviors( behaviors );
    },

    behaviors: {
        'event': {
            create: true,
            reschedule: true
        },
        user: {
            edit: false,
            remove: false
        },
        route: {}
    },

    behaviorService: Ember.inject.service( 'sl-behavior' ),

    model() {
        const returnsFalse = () => false;

        const MyModel = Ember.Object.extend({
            computedReturnsFalse: Ember.computed( returnsFalse )
        });

        return MyModel.create();
    }

});
