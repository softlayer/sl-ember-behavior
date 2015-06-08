import BehaviorService from '../services/behavior';

/**
 * @modules initializers
 * @class   behavior-service
 */
export default function( container, app ) {
    var behaviorService  = BehaviorService.create();

    // Inject Translate Service
    container.register( 'behaviorService:main', behaviorService, { instantiate: false } );
    app.inject( 'route', 'behaviorService', 'behaviorService:main' );
    app.inject( 'component', 'behaviorService', 'behaviorService:main' );
    app.inject( 'controller', 'behaviorService', 'behaviorService:main' );
    app.inject( 'view', 'behaviorService', 'behaviorService:main' );
}
