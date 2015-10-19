import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent( 'sl-able', 'Integration | Component | sl able', {

    beforeEach() {
        this.inject.service( 'sl-behavior' );

        this.set( 'sl-behavior.behaviors', {
            event: {
                create: false,
                reschedule: true
            },
            user: {
                edit: true,
                remove: false
            }
        });
    },

    integration: true
});

test( 'Yielded content passes through when "activity" is true', function( assert ) {

    this.render( hbs`
        {{#sl-able
            activity="reschedule"
            resource="event"
        }}
            <h3>You can reschedule this event</h3>
        {{/sl-able}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'h3' ).text().trim(),
        'You can reschedule this event',
        'Yielded content is passed through correctly'
    );
});

test( 'Yielded content does not pass through when "activity" is false', function( assert ) {

    this.render( hbs`
        {{#sl-able
            activity="create"
            resource="event"
        }}
            <h3>You can create this event</h3>
        {{/sl-able}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'h3' ).length,
        0,
        'Yielded content is not passed through'
    );
});

test( 'Setting "possible" property effects yielded content when activity is true', function( assert ) {

    this.set( 'possible', false );

    const template = hbs`
        {{#sl-able
            activity="edit"
            resource="user"
            possible=possible
        }}
            <h3>You can edit this user</h3>
        {{/sl-able}}
    `;

    this.render( template );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'h3' ).length,
        0,
        'When "possible" is false, yielded content is not passed through'
    );

    this.set( 'possible', true );

    this.render( template );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'h3' ).text().trim(),
        'You can edit this user',
        'Yielded content is passed through correctly'
    );
});

test( 'Setting "possible" property does not effect yielded content when activity is false', function( assert ) {

    this.render( hbs`
        {{#sl-able
            activity="create"
            resource="event"
            possible=false
        }}
            <h3>You can create this event</h3>
        {{/sl-able}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'h3' ).length,
        0,
        'When "possible" is false, yielded content is not passed through'
    );
});
