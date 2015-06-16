[![Latest Release](https://img.shields.io/github/release/softlayer/sl-ember-behavior.svg)](https://github.com/softlayer/sl-ember-behavior/releases) ![Ember CLI version](https://img.shields.io/badge/ember%20cli-0.2.7-orange.svg) [![License](https://img.shields.io/npm/l/sl-ember-behavior.svg)](LICENSE.md) [![Downloads](https://img.shields.io/npm/dm/sl-ember-behavior.svg)](https://www.npmjs.com/package/sl-ember-behavior)

[![Dependencies](https://img.shields.io/david/softlayer/sl-ember-behavior.svg)](https://david-dm.org/softlayer/sl-ember-behavior) [![Dev Dependencies](https://img.shields.io/david/dev/softlayer/sl-ember-behavior.svg)](https://david-dm.org/softlayer/sl-ember-behavior#info=devDependencies)

[![Build Status](https://img.shields.io/travis/softlayer/sl-ember-behavior/develop.svg)](https://travis-ci.org/softlayer/sl-ember-behavior) [![Code Climate](https://img.shields.io/codeclimate/github/softlayer/sl-ember-behavior.svg)](https://codeclimate.com/github/softlayer/sl-ember-behavior)

To see which issues are currently being worked on or are scheduled to be worked on next, visit [https://huboard.com/softlayer/sl-ember-behavior/#/](https://huboard.com/softlayer/sl-ember-behavior/#/)

---

# What is sl-ember-behavior

An [Ember CLI Addon](http://www.ember-cli.com) that provides the ability to define and enforce behaviors, combining the concepts of whether a user has permission to perform an action and whether that action can currently be performed.

For example, does a user have permission to reboot a device and is that device currently able to be rebooted.

Want to restrict access to routes?  It is very easy to use only the permission capabilities of the behaviors and we have included a route behavior mixin for just this purpose.



# Theory of Operation

You define all possible behaviours you wish to present as possibilities in your application.  Setting their values to either true or false represents whether the user has the permission to perform this behavior.  You can define additional logic that should be executed to further refine whether the behavior can be executed once it has been determined that the user has permission to do so.  This additional logic can be contained in any object you desire, such as your models.



# Demo

## Live

[http://softlayer.github.io/sl-ember-behavior/#/demo](http://softlayer.github.io/sl-ember-behavior/#/demo)

## Development Environment

### Installation

* `git clone` this repository
* `npm install`
* `bower install`

### Running

* `ember server`
* View the demo at http://localhost:4200

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).




# How to use this addon in your application

## Install this addon as a Node module

```
ember install sl-ember-behavior
```

## Set behaviors on Behavior Service

Get a reference to the Behavior Service and pass your behaviors as the only argument to *setBehaviors()*

In a route, for example:

```
this.controllerFor( 'application' ).get( 'behaviorService' ).setBehaviors( yourBehaviorData );
```

The structure of your behavior data should be as follows:

```
{
    comments: {
        create : true,
        view   : true,
        edit   : false
    },

    articles: {
        read   : true,
        create : false,
        edit   : false
    },

    route: {
        application         : true,
        application_loading : true,
        error               : true,
        loading             : true,
        devices             : true,
        devices.details     : true,
        devices.error       : true,
        devices.index       : true,
        devices.loading     : true,
        users               : false,
        users.details       : false,
        users.error         : false,
        users.index         : false,
        users.loading       : false
    }
}
```

### Structure breakout

In this example, the `comments`, `articles`, and `routes` keys represent what is referred to internally to the Behavior Service as "Behavior Groups".  Within these groups are the individual "Behaviors" that, in this structure, represent whether a user has permission to perform the listed behavior.  These same behavior key names can be used in other code, as discussed in the "Components" section, to further refine the desired behavior beyond just whether or not a user has permission.

**NOTE:** *Except for the `route` key name it DOES NOT matter what you name the keys (either Behavior Groups or Behaviors) as they represent whatever CONCEPTS you want them to relate to in your application.*

**NOTE:** *Except for the `route` key name it DOES NOT matter what case you use for the keys (either Behavior Groups or Behaviors) though you will need to use the same case when referencing them in use of the Components or in Controllers.*


#### Restricting routes

The `route` key (Behavior Group) entries are only needed if you want to restrict access to routes.  If you are going to restrict route access we recommend using code such as

```
Ember.keys( this.get( 'router.router.recognizer.names' ) ).forEach( function( route ) { ... });
```

from within the `ApplicationRoute` in order to correctly capture all of the routes that are auto-magically generated in your application, such as `error`, `routename.loading`, etc.  In the example given you can see these such routes represented and the user's access to them being managed.  If your application does not make use of the `error` and `loading` routes, for example, then you would not need to populate them.

 **NOTE:** *The `route` key name is important in both spelling and case, as it is used by the [Route Mixin](addon/mixins/route.js) to restrict route access.*


## Components

### sl-able

The `sl-able` component is a block form component that is used to determine whether its content should be rendered.

```
{{#sl-able behavior="setDate" provider="event"}}
    This will be displayed.
    So will the {{sl-calendar}} component
{{/sl-able}}
```

#### `behavior` parameter

This parameter must be a string.  It corresponds to the Behavior key name used in the Behaviors structure previously explained.

#### `provider` parameter

This parameter must be either a string or an object.

If it is a string it corresponds to the Behavior Group key name used in the Behaviors structure previously explained and represents a permission-only use of the data to make a determination.  For example, given these Behaviors and their usage:

```
{
    event: {
        cancel     : false,
        setDate    : true,
        reschedule : false
    }
}

{{#sl-able behavior="setDate" provider="event"}}
    This will be displayed.
    So will the {{sl-calendar}} component
{{/sl-able}}
```

the `provider` and `behavior` values are compared to the related keys to return their associatively combined boolean value, which in this example is `true`.

If the `provider` parameter is an object then additional logic will be employed beyond the initial permission check to determine whether the user is allowed to perform the provided behavior.

As already alluded to, but which will now be stated explicitly, in order for additional logic to considered in the determination of allowable behaviors, the user first must have permission for the behavior in question.  This means that the Behavior must be set to `true`, otherwise even if additional logic is defined it will never be considered because the user doesn't first and foremost have the correct permission.

It is the responsibility of the `provider` object to populate certain properties on itself in order to be compatible with the Behavior Service.

The first property that must be populated is `behaviorGroup` (case-sensitive).  It can be either a string or a function, but if it is a function it must return a string.

```
MyEventModel = Model.extend({
    behaviorGroup: 'event'
});
```

or

```
MyEventModel = Model.extend({
    behaviorGroup: function() {
        return this.get( 'event' );
    }.property( 'event' )
});
```

The second property that must be populated is `behaviors`, which is an object whose keys are the names of Behaviors and whose values must be a function.  For example, if being able to set a date for an event, in the example we've been using, involves more checks than just whether or not the user has permission to set a date you could do something like:

```
MyEventModel = Model.extend({
    behaviorGroup: 'event',

    behaviors: {
        setDate: function() {
            var canSetDate = false;

            if ( this.get( 'venueHasBeenSelected' ) && this.get( 'hasDepositBeenPlaced' ) ) {
                canSetDate = true;
            }

            return canSetDate;
        }
    }
});
```

where the `provider` object in this example is a specific instance of an Event model.

You can specify as many Behavior refinements as desired:

```
MyEventModel = Model.extend({
    behaviorGroup: 'event',

    behaviors: {
        setDate: function() {
            ...
        },

        reschedule: function() {
            ...
        },
    }
});
```


### sl-unable

This component is identical to the `sl-able` component, except that it checks for the inverse condition.



## Routes

Restricting access to a route represents a permission-only use of the Behavior data.  For any route you wish to restrict access to simply mix in the [Route Mixin](addon/mixins/route.js), add the `route` Behavior Group in the Behaviors data, as well as list the appropriate route name and its boolean value representing the users permission.

The [Route Mixin](addon/mixins/route.js) extends beforeModel().  If a user is allowed access to the specified route then Ember is allowed to transition to the route as usual.  If the user is not allowed access to the route one of two things then happen, though they both represent the idea that the user is not allowed to transition to the route.

The [Route Mixin](addon/mixins/route.js) also introduces the `unableRoute` property which defaults to `null`.  If this value remains `null` and a user attempts to transition to a route they have been restricted from then the route transition is aborted through the use of `transition.abort()`.  If however the `unableRoute` property has been populated with a valid route for your application, such as one explaining why they couldn't access the route they were attempting to, the user will instead be transitioned there.

```
import Ember from 'ember';
import Behavior from 'sl-ember-behavior/mixins/route';

export default Ember.Route.extend( Behavior, {
    unableRoute: 'event.restricted'
});
```



## Controllers and Views

Make sure you have read the "Components" section to understand what the `behavior` and `provider` parameters represent and how they are used.

The Behavior Service provides two methods, `isAble()` and `isUnable()` that are the methods behind the Component logic.

The use of these methods and the Behavior Service in Controllers or Views is very simple.  Some examples:

*Controller*

```
if ( this.get( 'behaviorService' ).isAble( 'setData', 'event' ) ) { ... }
```

```
if ( this.get( 'behaviorService' ).isUnable( 'setData', this.get( 'model' ) ) ) { ... }
```

*View*

```
if ( this.get( 'behaviorService' ).isUnable( 'setData', 'event' ) ) { ... }
```




# Versioning
Employs [Semantic Versioning 2.0.0](http://semver.org/)


# Contribution
[See CONTRIBUTING.md](CONTRIBUTING.md)


# Copyright and License
sl-ember-behavior and its source files are Copyright © 2014-2015 [SoftLayer Technologies, Inc.](http://www.softlayer.com/)
The software is [MIT Licensed](LICENSE.md)


# Warranty
This software is provided “as is” and without any express or implied warranties, including, without limitation, the
implied warranties of merchantability and fitness for a particular purpose.
