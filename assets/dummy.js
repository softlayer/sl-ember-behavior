/* jshint ignore:start */

/* jshint ignore:end */

define('dummy/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'dummy/config/environment'], function (exports, Ember, Resolver, loadInitializers, config) {

  'use strict';

  Ember['default'].MODEL_FACTORY_INJECTIONS = true;

  var App = Ember['default'].Application.extend({
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix,
    Resolver: Resolver['default']
  });

  loadInitializers['default'](App, config['default'].modulePrefix);

  exports['default'] = App;

});
define('dummy/components/sl-able', ['exports', 'sl-ember-behavior/components/sl-able'], function (exports, component) {

	'use strict';

	exports['default'] = component['default'];

});
define('dummy/components/sl-unable', ['exports', 'sl-ember-behavior/components/sl-unable'], function (exports, component) {

	'use strict';

	exports['default'] = component['default'];

});
define('dummy/controllers/application', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller.extend({});

});
define('dummy/initializers/app-version', ['exports', 'dummy/config/environment', 'ember'], function (exports, config, Ember) {

  'use strict';

  var classify = Ember['default'].String.classify;

  exports['default'] = {
    name: "App Version",
    initialize: function (container, application) {
      var appName = classify(application.toString());
      Ember['default'].libraries.register(appName, config['default'].APP.version);
    }
  };

});
define('dummy/initializers/behavior-service', ['exports', 'sl-ember-behavior/initializers/behavior-service'], function (exports, initializer) {

  'use strict';

  exports['default'] = {
    name: "behavior-service",

    initialize: initializer['default']
  };

});
define('dummy/initializers/export-application-global', ['exports', 'ember', 'dummy/config/environment'], function (exports, Ember, config) {

  'use strict';

  exports.initialize = initialize;

  function initialize(container, application) {
    var classifiedName = Ember['default'].String.classify(config['default'].modulePrefix);

    if (config['default'].exportApplicationGlobal && !window[classifiedName]) {
      window[classifiedName] = application;
    }
  };

  exports['default'] = {
    name: "export-application-global",

    initialize: initialize
  };

});
define('dummy/router', ['exports', 'ember', 'dummy/config/environment'], function (exports, Ember, config) {

    'use strict';

    var Router = Ember['default'].Router.extend({
        location: config['default'].locationType
    });

    Router.map(function () {
        this.route("index", { path: "/" });
        this.route("demo");
    });

    exports['default'] = Router;

});
define('dummy/routes/application', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Route.extend({
        beforeModel: function () {
            var behaviors = Ember['default'].Object.create({
                event: Ember['default'].Object.create({
                    reschedule: false,
                    cancel: false,
                    setDate: true
                }),

                route: Ember['default'].Object.create()
            });

            this._super.apply(this, arguments);

            Ember['default'].keys(this.get("router.router.recognizer.names")).forEach(function (route) {
                behaviors.route[route] = true;
            });

            this.controllerFor("application").get("behaviorService").setBehaviors(behaviors);
        },

        model: function () {
            return Ember['default'].Object.create({
                behaviorGroup: "event",

                behaviors: {
                    setDate: function () {
                        return true;
                    }
                }
            });
        }
    });

});
define('dummy/sl-ember-behavior/tests/modules/sl-ember-behavior/components/sl-able.jshint', function () {

  'use strict';

  module("JSHint - modules/sl-ember-behavior/components");
  test("modules/sl-ember-behavior/components/sl-able.js should pass jshint", function () {
    ok(true, "modules/sl-ember-behavior/components/sl-able.js should pass jshint.");
  });

});
define('dummy/sl-ember-behavior/tests/modules/sl-ember-behavior/components/sl-unable.jshint', function () {

  'use strict';

  module("JSHint - modules/sl-ember-behavior/components");
  test("modules/sl-ember-behavior/components/sl-unable.js should pass jshint", function () {
    ok(true, "modules/sl-ember-behavior/components/sl-unable.js should pass jshint.");
  });

});
define('dummy/sl-ember-behavior/tests/modules/sl-ember-behavior/initializers/behavior-service.jshint', function () {

  'use strict';

  module("JSHint - modules/sl-ember-behavior/initializers");
  test("modules/sl-ember-behavior/initializers/behavior-service.js should pass jshint", function () {
    ok(true, "modules/sl-ember-behavior/initializers/behavior-service.js should pass jshint.");
  });

});
define('dummy/sl-ember-behavior/tests/modules/sl-ember-behavior/mixins/route.jshint', function () {

  'use strict';

  module("JSHint - modules/sl-ember-behavior/mixins");
  test("modules/sl-ember-behavior/mixins/route.js should pass jshint", function () {
    ok(true, "modules/sl-ember-behavior/mixins/route.js should pass jshint.");
  });

});
define('dummy/sl-ember-behavior/tests/modules/sl-ember-behavior/services/behavior.jshint', function () {

  'use strict';

  module("JSHint - modules/sl-ember-behavior/services");
  test("modules/sl-ember-behavior/services/behavior.js should pass jshint", function () {
    ok(true, "modules/sl-ember-behavior/services/behavior.js should pass jshint.");
  });

});
define('dummy/templates/application', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

  function program1(depth0,data) {
    
    
    data.buffer.push("<i class=\"fa fa-home\"></i> Home");
    }

    data.buffer.push("<br>\n<div class=\"container\">\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"btn-group pull-right\">\n                <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">\n                    <i class=\"fa fa-reorder\"></i> <span class=\"caret\"></span>\n                </button>\n\n                <ul class=\"dropdown-menu\" role=\"menu\">\n                <li>");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</li>\n                <li><a href=\"https://github.com/softlayer/sl-ember-behavior/blob/master/README.md\"><i class=\"fa fa-wrench\"></i> Get Started</a></li>\n                <li><a href=\"https://github.com/softlayer/sl-ember-behavior/blob/master/CONTRIBUTING.md\"><i class=\"fa fa-cog\"></i> Contribution Guide</a></li>\n                <li><a href=\"https://github.com/softlayer/sl-ember-behavior/stargazers\"><i class=\"fa fa-star\"></i> Star Our Repo</a></li>\n                <li><a href=\"https://github.com/softlayer/sl-ember-behavior/fork\"><i class=\"fa fa-code-fork\"></i> Fork Our Repo</a></li>\n                </ul>\n            </div>\n        </div>\n    </div>\n\n    ");
    stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    <br><br>\n    <div class=\"row\">\n        <div class=\"col-md-12 text-center\">\n            <p>ember install:addon sl-ember-behavior</p>\n            <p><a href=\"https://github.com/softlayer/sl-ember-behavior/blob/master/LICENSE.md\">MIT Licensed</a></p>\n        </div>\n    </div>\n</div>");
    return buffer;
    
  });

});
define('dummy/templates/demo', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

  function program1(depth0,data) {
    
    
    data.buffer.push("\n            <h3>You cannot reschedule this event</h3>\n        ");
    }

  function program3(depth0,data) {
    
    
    data.buffer.push("\n            <h3>You can set a date for this event.</h3>\n        ");
    }

    data.buffer.push("<div class=\"row\">\n    <div class=\"col-md-12 text-center\">\n        <h1>Usage Demonstration</h1>\n        <p class=\"lead\">View the source code of the dummy application for syntax employed in this demo</p>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        Given this Behavior data\n        <pre>\n{\n    events:\n        reschedule: false,\n        cancel: false,\n        setDate: true\n}</pre>\n\n        and the use of this component\n\n    <pre>\n{{#sl-unable behavior=\"reschedule\" provider=\"event\"}}\n    &lt;h3&gt;You cannot reschedule this event&lt;/h3&gt;\n{{/sl-unable}}</pre>\n\n        and this one on the page\n        <pre>\n{{#sl-able behavior=\"setDate\" provider=model}}\n    &lt;h3&gt;You can set a date for this event.&lt;/h3&gt;\n{{/sl-able}}</pre>\n\n        where the second component usage example is a model that has these values defined on it\n        <pre>\n{\n    behaviorGroup: 'event',\n\n    behaviors: {\n        setDate: function() {\n            return true;\n        }\n    }\n}</pre>\n\n        you will see the results below:\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        ");
    stack1 = (helper = helpers['sl-unable'] || (depth0 && depth0['sl-unable']),options={hash:{
      'behavior': ("reschedule"),
      'provider': ("event")
    },hashTypes:{'behavior': "STRING",'provider': "STRING"},hashContexts:{'behavior': depth0,'provider': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-unable", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n        ");
    stack1 = (helper = helpers['sl-able'] || (depth0 && depth0['sl-able']),options={hash:{
      'behavior': ("setDate"),
      'provider': ("model")
    },hashTypes:{'behavior': "STRING",'provider': "ID"},hashContexts:{'behavior': depth0,'provider': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-able", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    </div>\n</div>");
    return buffer;
    
  });

});
define('dummy/templates/index', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

  function program1(depth0,data) {
    
    
    data.buffer.push("<i class=\"fa fa-cubes fa-5x\"></i>");
    }

  function program3(depth0,data) {
    
    
    data.buffer.push("<b>Demo</b>");
    }

    data.buffer.push("<div class=\"row\">\n    <div class=\"col-md-12 text-center\">\n        <h1>sl-ember-behavior</h1>\n        <p class=\"lead\">An Ember CLI Addon that provides the ability to define and enforce behaviors, combining the concepts of whether a user has permission to perform an action and whether that action can currently be performed.</p>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-md-4 text-center\">\n        <h3>");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "demo", options) : helperMissing.call(depth0, "link-to", "demo", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</h3>\n        <p>");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "demo", options) : helperMissing.call(depth0, "link-to", "demo", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</p>\n    </div>\n    <div class=\"col-md-4 text-center\">\n        <h3><a href=\"https://github.com/softlayer/sl-ember-behavior/blob/master/README.md\"><i class=\"fa fa-book fa-5x\"></i></a></h3>\n        <p><a href=\"https://github.com/softlayer/sl-ember-behavior/blob/master/README.md\"><b>Documentation</b></a></p>\n    </div>\n    <div class=\"col-md-4 text-center\">\n        <h3><a href=\"https://github.com/softlayer/sl-ember-behavior\"><i class=\"fa fa-github fa-5x\"></i></a></h3>\n        <p><a href=\"https://github.com/softlayer/sl-ember-behavior\"><b>Available on GitHub</b></a></p>\n    </div>\n</div>");
    return buffer;
    
  });

});
define('dummy/tests/app.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('app.js should pass jshint', function() { 
    ok(true, 'app.js should pass jshint.'); 
  });

});
define('dummy/tests/controllers/application.jshint', function () {

  'use strict';

  module('JSHint - controllers');
  test('controllers/application.js should pass jshint', function() { 
    ok(true, 'controllers/application.js should pass jshint.'); 
  });

});
define('dummy/tests/helpers/resolver', ['exports', 'ember/resolver', 'dummy/config/environment'], function (exports, Resolver, config) {

  'use strict';

  var resolver = Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix
  };

  exports['default'] = resolver;

});
define('dummy/tests/helpers/resolver.jshint', function () {

  'use strict';

  module('JSHint - helpers');
  test('helpers/resolver.js should pass jshint', function() { 
    ok(true, 'helpers/resolver.js should pass jshint.'); 
  });

});
define('dummy/tests/helpers/start-app', ['exports', 'ember', 'dummy/app', 'dummy/router', 'dummy/config/environment'], function (exports, Ember, Application, Router, config) {

  'use strict';



  exports['default'] = startApp;
  function startApp(attrs) {
    var application;

    var attributes = Ember['default'].merge({}, config['default'].APP);
    attributes = Ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    Ember['default'].run(function () {
      application = Application['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }

});
define('dummy/tests/helpers/start-app.jshint', function () {

  'use strict';

  module('JSHint - helpers');
  test('helpers/start-app.js should pass jshint', function() { 
    ok(true, 'helpers/start-app.js should pass jshint.'); 
  });

});
define('dummy/tests/router.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('router.js should pass jshint', function() { 
    ok(true, 'router.js should pass jshint.'); 
  });

});
define('dummy/tests/routes/application.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/application.js should pass jshint', function() { 
    ok(true, 'routes/application.js should pass jshint.'); 
  });

});
define('dummy/tests/test-helper', ['dummy/tests/helpers/resolver', 'ember-qunit'], function (resolver, ember_qunit) {

	'use strict';

	ember_qunit.setResolver(resolver['default']);

});
define('dummy/tests/test-helper.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('test-helper.js should pass jshint', function() { 
    ok(true, 'test-helper.js should pass jshint.'); 
  });

});
define('dummy/tests/unit/components/sl-able-test', ['ember', 'ember-qunit'], function (Ember, ember_qunit) {

    'use strict';

    var behaviorService = Ember['default'].Object.create({
        isAble: function (behavior, provider) {
            this.set("behavior", behavior);
            this.set("provider", provider);
            return true;
        }
    });

    ember_qunit.moduleForComponent("sl-able", "Unit - component:sl-able");

    /**
     * Ensures that the template is wrapping the content in a span tag and not in any block-level tags. While it appears
     * that core Ember functionality is being tested this test is ensuring that the implied contract about how this non-UI
     * component is rendered into the DOM is adhered to.
     */
    ember_qunit.test("Renders as a span tag with no classes", function (assert) {
        var component = this.subject({ behaviorService: behaviorService }),
            $component = this.render();

        assert.equal($component.prop("tagName"), "SPAN");
    });

    ember_qunit.test("Renders content", function (assert) {
        var component = this.subject({
            behaviorService: behaviorService,
            template: Ember['default'].Handlebars.compile("I can do it")
        }),
            $component = this.render();

        assert.equal($.trim($component.text()), "I can do it");
    });

    ember_qunit.test("isAble() calls isAble() on the behavior service", function (assert) {
        var component = this.subject({
            behaviorService: behaviorService,
            behavior: "the_behavior",
            provider: "the_provider"
        });

        this.render();

        assert.equal(behaviorService.get("behavior"), "the_behavior");
        assert.equal(behaviorService.get("provider"), "the_provider");
    });

});
define('dummy/tests/unit/components/sl-able-test.jshint', function () {

  'use strict';

  module('JSHint - unit/components');
  test('unit/components/sl-able-test.js should pass jshint', function() { 
    ok(true, 'unit/components/sl-able-test.js should pass jshint.'); 
  });

});
define('dummy/tests/unit/components/sl-unable-test', ['ember', 'ember-qunit'], function (Ember, ember_qunit) {

    'use strict';

    var behaviorService = Ember['default'].Object.create({
        isUnable: function (behavior, provider) {
            this.set("behavior", behavior);
            this.set("provider", provider);
            return false;
        }
    });

    ember_qunit.moduleForComponent("sl-unable", "Unit - component:sl-unable");

    /**
     * Ensures that the template is wrapping the content in a span tag and not in any block-level tags. While it appears
     * that core Ember functionality is being tested this test is ensuring that the implied contract about how this non-UI
     * component is rendered into the DOM is adhered to.
     */
    ember_qunit.test("Renders as a span tag with no classes", function (assert) {
        var component = this.subject({ behaviorService: behaviorService }),
            $component = this.render();

        assert.equal($component.prop("tagName"), "SPAN");
    });

    ember_qunit.test("Does not render content", function (assert) {
        var component = this.subject({
            behaviorService: behaviorService,
            template: Ember['default'].Handlebars.compile("Should not render")
        }),
            $component = this.render();

        assert.equal($component.text(), "");
    });

    ember_qunit.test("isUnable() calls isUnable() on the behavior service", function (assert) {
        var component = this.subject({
            behaviorService: behaviorService,
            behavior: "the_behavior",
            provider: "the_provider"
        }),
            $component = this.render();

        assert.equal(behaviorService.get("behavior"), "the_behavior");
        assert.equal(behaviorService.get("provider"), "the_provider");
    });

});
define('dummy/tests/unit/components/sl-unable-test.jshint', function () {

  'use strict';

  module('JSHint - unit/components');
  test('unit/components/sl-unable-test.js should pass jshint', function() { 
    ok(true, 'unit/components/sl-unable-test.js should pass jshint.'); 
  });

});
define('dummy/tests/unit/initializers/behavior-service-test', ['ember', 'ember-qunit', 'dummy/tests/helpers/start-app'], function (Ember, ember_qunit, startApp) {

    'use strict';

    var App;

    module("Unit - initializer:behavior-service", {
        beforeEach: function () {
            App = startApp['default']();
        },

        afterEach: function () {
            Ember['default'].run(App, App.destroy);
        }
    });

    ember_qunit.test("Registered on container as a singleton", function (assert) {
        assert.equal(typeof App.__container__.lookup("behaviorService:main"), "object");
        assert.notEqual(App.__container__._options["behaviorService:main"].instantiate, "undefined");
        assert.equal(App.__container__._options["behaviorService:main"].instantiate, false);
    });

    ember_qunit.test("Injected on routess", function (assert) {
        var findBy = App.__container__.typeInjections.route.findBy("fullName", "behaviorService:main");

        assert.notEqual(findBy, "undefined");
        assert.equal(findBy.property, "behaviorService");
    });

    ember_qunit.test("Injected on controllers", function (assert) {
        var findBy = App.__container__.typeInjections.controller.findBy("fullName", "behaviorService:main");

        assert.notEqual(findBy, "undefined");
        assert.equal(findBy.property, "behaviorService");
    });

    ember_qunit.test("Injected on views", function (assert) {
        var findBy = App.__container__.typeInjections.view.findBy("fullName", "behaviorService:main");

        assert.notEqual(findBy, "undefined");
        assert.equal(findBy.property, "behaviorService");
    });

    ember_qunit.test("Injected on components", function (assert) {
        var findBy = App.__container__.typeInjections.component.findBy("fullName", "behaviorService:main");

        assert.notEqual(findBy, "undefined");
        assert.equal(findBy.property, "behaviorService");
    });

});
define('dummy/tests/unit/initializers/behavior-service-test.jshint', function () {

  'use strict';

  module('JSHint - unit/initializers');
  test('unit/initializers/behavior-service-test.js should pass jshint', function() { 
    ok(true, 'unit/initializers/behavior-service-test.js should pass jshint.'); 
  });

});
define('dummy/tests/unit/mixins/route-test', ['ember', 'sl-ember-behavior/mixins/route'], function (Ember, mixinUnderTest) {

    'use strict';

    var Mixin;

    module("Unit - mixins:route", {
        beforeEach: function () {
            Mixin = Ember['default'].Route.extend(mixinUnderTest['default']);
            Mixin = Mixin.create();
        }
    });

    // Though appears to be a duplicate of the module.setup() call this is an actual test,
    // whereas the other is configuration and might change in the future
    test("Successfully mixed", function (assert) {
        var testObject = Ember['default'].Route.extend(mixinUnderTest['default']),
            subject = testObject.create();

        assert.ok(subject);
    });

    test("\"unableRoute\" property defaults to null", function (assert) {
        assert.equal(Mixin.get("unableRoute"), null);
    });

    test("Call to isUnable() uses transition.targetName as first argument value", function (assert) {
        var testStringValue = "test value",
            transition = {},
            parameterValuePassed;

        transition.targetName = testStringValue;

        Mixin.behaviorService = {
            isUnable: function (value1, value2) {
                parameterValuePassed = value1;
            }
        };

        Mixin.beforeModel(transition);

        assert.ok(testStringValue, parameterValuePassed);
    });

    test("Call to isUnable() uses \"route\" as second argument value", function (assert) {
        var transition = {},
            hardCodedValue;

        transition.targetName = "test";

        Mixin.behaviorService = {
            isUnable: function (value1, value2) {
                hardCodedValue = value2;
            }
        };

        Mixin.beforeModel(transition);

        assert.ok("route", hardCodedValue);
    });

    test("If isUnable() and \"unableRoute\" is null, transition.abort() is called", function (assert) {
        var transition = {},
            iWasCalled = false;

        transition.targetName = "test";
        transition.abort = function () {
            iWasCalled = true;
        };

        Mixin.behaviorService = {
            isUnable: function (value1, value2) {
                return true;
            }
        };

        Mixin.beforeModel(transition);

        assert.ok(iWasCalled, "transition.abort() was called");
    });

    test("If isUnable() and \"unableRoute\" is not null, transitionTo() is called with \"unableRoute\" value", function (assert) {
        var transition = {},
            routeToTransitionTo;

        transition.targetName = "test";

        Mixin.unableRoute = "notEmpty";

        Mixin.transitionTo = function (value) {
            routeToTransitionTo = value;
        };

        Mixin.behaviorService = {
            isUnable: function (value1, value2) {
                return true;
            }
        };

        Mixin.beforeModel(transition);

        assert.ok(routeToTransitionTo, "notEmpty");
    });

    test("If not isUnable() then beforeModel() introduces no varying code path", function (assert) {
        var transition = {},
            abortWasCalled = false,
            transitionWasCalled = false;

        transition.targetName = "test";

        transition.abort = function () {
            abortWasCalled = true;
        };

        Mixin.unableRoute = "notEmpty";

        Mixin.transitionTo = function (value) {
            transitionWasCalled = true;
        };

        Mixin.behaviorService = {
            isUnable: function (value1, value2) {
                return false;
            }
        };

        Mixin.beforeModel(transition);

        assert.ok(!(abortWasCalled || transitionWasCalled), "There is no varying code path");
    });

});
define('dummy/tests/unit/mixins/route-test.jshint', function () {

  'use strict';

  module('JSHint - unit/mixins');
  test('unit/mixins/route-test.js should pass jshint', function() { 
    ok(true, 'unit/mixins/route-test.js should pass jshint.'); 
  });

});
define('dummy/tests/unit/services/behavior-test', ['ember', 'sl-ember-behavior/services/behavior'], function (Ember, BehaviorService) {

    'use strict';

    var BS;

    module("Unit - services:behavior", {
        beforeEach: function () {
            BS = BehaviorService['default'].create();
        }
    });

    test("\"behaviors\" property defaults to null", function (assert) {
        assert.equal(BS.get("behaviors"), null);
    });

    test("getBehaviorGroup() requires an Object to be provided", function (assert) {
        // Empty parameter

        var assertionThrown = false;

        try {
            BS.getBehaviorGroup();
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(assertionThrown, "Parameter was empty");

        // Number parameter

        assertionThrown = false;

        try {
            BS.getBehaviorGroup(4);
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(assertionThrown, "Parameter was a Number");

        // Array Parameter

        assertionThrown = false;

        try {
            BS.getBehaviorGroup([]);
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(assertionThrown, "Parameter was an Array");

        // Function

        assertionThrown = false;

        try {
            BS.getBehaviorGroup(function () {});
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(assertionThrown, "Parameter was a Function");

        // String Parameter

        assertionThrown = false;

        try {
            BS.getBehaviorGroup("test");
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(assertionThrown, "Parameter was a String");

        // Object Parameter

        assertionThrown = false;

        try {
            BS.getBehaviorGroup({ behaviorGroup: "notUnderTest" });
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(!assertionThrown, "Parameter was an Object");
    });

    test("getBehaviorGroup() \"provider.behaviorGroup\" must be a String or Function", function (assert) {
        // Empty parameter

        var assertionThrown = false;

        try {
            BS.getBehaviorGroup({ behaviorGroup: null });
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(assertionThrown, "Property was empty");

        // Number Property

        assertionThrown = false;

        try {
            BS.getBehaviorGroup({ behaviorGroup: 4 });
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(assertionThrown, "Property was a Number");

        // Array Property

        assertionThrown = false;

        try {
            BS.getBehaviorGroup({ behaviorGroup: [] });
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(assertionThrown, "Property was an Array");

        // Object Property

        assertionThrown = false;

        try {
            BS.getBehaviorGroup({ behaviorGroup: {} });
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(assertionThrown, "Property was an Object");

        // Function

        assertionThrown = false;

        try {
            BS.getBehaviorGroup({ behaviorGroup: function () {} });
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(!assertionThrown, "Property was a Function");

        // String Property

        assertionThrown = false;

        try {
            BS.getBehaviorGroup({ behaviorGroup: "test" });
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(!assertionThrown, "Property was a String");
    });

    test("If getBehaviorGroup() \"provider.behaviorGroup\" is a string its value is returned", function (assert) {
        var testValue = "testGroup";

        assert.equal(testValue, BS.getBehaviorGroup({ behaviorGroup: testValue }));
    });

    test("If getBehaviorGroup() \"provider.behaviorGroup\" is a function it is executed", function (assert) {
        var result = BS.getBehaviorGroup({
            behaviorGroup: function () {
                return "test group";
            }
        });

        assert.equal("test group", result);
    });

    test("setBehaviors() requires an Object to be provided", function (assert) {
        // Empty parameter

        var assertionThrown = false;

        try {
            BS.setBehaviors();
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(assertionThrown, "Parameter was empty");

        // Number parameter

        assertionThrown = false;

        try {
            BS.setBehaviors(4);
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(assertionThrown, "Parameter was a Number");

        // Array Parameter

        assertionThrown = false;

        try {
            BS.setBehaviors([]);
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(assertionThrown, "Parameter was an Array");

        // Function

        assertionThrown = false;

        try {
            BS.getBehaviorGroup(function () {});
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(assertionThrown, "Parameter was a Function");

        // String Parameter

        assertionThrown = false;

        try {
            BS.setBehaviors("test");
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(assertionThrown, "Parameter was a String");

        // Object Parameter

        assertionThrown = false;

        try {
            BS.setBehaviors({});
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(!assertionThrown, "Parameter was an Object");
    });

    test("setBehaviors() sets data on the behaviors property", function (assert) {
        var testBehaviors = Ember['default'].Object.create({ the_key: "my value" });

        BS.setBehaviors(testBehaviors);

        assert.deepEqual(BS.get("behaviors"), testBehaviors);
    });

    test("isAble() requires two arguments to be provided", function (assert) {
        // No arguments

        var assertionThrown = false;

        try {
            BS.isAble();
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(assertionThrown, "No arguments were provided");

        // One argument

        assertionThrown = false;

        try {
            BS.isAble("one");
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(assertionThrown, "One argument was provided");

        // Two arguments

        assertionThrown = false;

        try {
            BS.isAble("one", "two");
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(!assertionThrown, "Two arguments were provided");
    });

    test("isAble() requires first argument to be a String", function (assert) {
        // Empty parameter

        var assertionThrown = false;

        try {
            BS.isAble();
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(assertionThrown, "Parameter was empty");

        // Number parameter

        assertionThrown = false;

        try {
            BS.isAble(4, "notUnderTest");
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(assertionThrown, "Parameter was a Number");

        // Array Parameter

        assertionThrown = false;

        try {
            BS.isAble([], "notUnderTest");
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(assertionThrown, "Parameter was an Array");

        // Function

        assertionThrown = false;

        try {
            BS.getBehaviorGroup(function () {});
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(assertionThrown, "Parameter was a Function");

        // String Parameter

        assertionThrown = false;

        try {
            BS.isAble({}, "notUnderTest");
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(assertionThrown, "Parameter was an Object");

        // Object Parameter

        assertionThrown = false;

        try {
            BS.isAble("test", "notUnderTest");
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(!assertionThrown, "Parameter was a String");
    });

    test("isAble() requires second argument to be a String or Object", function (assert) {
        // Number parameter

        var assertionThrown = false;

        try {
            BS.isAble("notUnderTest", 4);
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(assertionThrown, "Parameter was a Number");

        // Array Parameter

        assertionThrown = false;

        try {
            BS.isAble("notUnderTest", []);
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(assertionThrown, "Parameter was an Array");

        // Function

        assertionThrown = false;

        try {
            BS.getBehaviorGroup(function () {});
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(assertionThrown, "Parameter was a Function");

        // String Parameter

        assertionThrown = false;

        try {
            BS.isAble("notUnderTest", "test");
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(!assertionThrown, "Parameter was a String");

        // Object Parameter

        assertionThrown = false;

        BS.getBehaviorGroup = function () {
            return true;
        };

        try {
            BS.isAble("notUnderTest", {});
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(!assertionThrown, "Parameter was an Object");
    });

    test("isAble() 2nd argument is a string - argument values are compared to Behavior data to make determination", function (assert) {
        BS.setBehaviors({
            device: {
                reboot: true
            }
        });

        assert.ok(BS.isAble("reboot", "device"), "Was able");

        BS.setBehaviors({
            device: {
                reboot: false
            }
        });

        assert.ok(!BS.isAble("reboot", "device"), "Was not able");
    });

    test("isAble() 2nd argument is an object - getBehaviorGroup() is called", function (assert) {
        var wasCalled = false;

        BS.getBehaviorGroup = function () {
            wasCalled = true;
        };

        BS.isAble("notUnderTest", {});

        assert.ok(wasCalled, "getBehaviorGroup() was called");
    });

    test("isAble() 2nd argument is an object - getBehaviorGroup() value is compared to Behavior data to make determination", function (assert) {
        BS.setBehaviors({
            device: {
                reboot: false
            }
        });

        assert.ok(!BS.isAble("reboot", {
            behaviorGroup: "device",
            behaviors: {
                reboot: function () {
                    return true;
                }
            }
        }), "getBehaviorGroup() value was compared to Behavior data");
    });

    test("isAble() 2nd argument is an object and is allowed - \"behaviors\" hash refines determination", function (assert) {
        BS.setBehaviors({
            device: {
                reboot: true
            }
        });

        assert.ok(!BS.isAble("reboot", {
            behaviorGroup: "device",
            behaviors: {
                reboot: function () {
                    return false;
                }
            }
        }), "\"behaviors\" hash refined determination");

        assert.ok(BS.isAble("reboot", {
            behaviorGroup: "device",
            behaviors: {
                reboot: function () {
                    return true;
                }
            }
        }), "\"behaviors\" hash refined determination");
    });

    test("isAble() returns false if no Behavior data has been set", function (assert) {
        assert.ok(!BS.isAble("reboot", "device"), "Returned false");
    });

    test("isAble() returns false if specified Behavior Group has not been configured", function (assert) {
        BS.setBehaviors({
            device: {
                reboot: false
            }
        });

        assert.ok(!BS.isAble("reboot", "product"), "Returned false");
    });

    test("isAble() returns false if specified Behavior has not been configured", function (assert) {
        BS.setBehaviors({
            device: {
                reboot: false
            }
        });

        assert.ok(!BS.isAble("restart", "device"), "Returned false");
    });

    test("isUnable() is the negated result of a call to isAble()", function (assert) {
        BS.setBehaviors({
            device: {
                reboot: false
            }
        });

        assert.ok(BS.isUnable("reboot", "device"), "Was unable");

        BS.setBehaviors({
            device: {
                reboot: true
            }
        });

        assert.ok(!BS.isUnable("reboot", "device"), "Was not unable");
    });

});
define('dummy/tests/unit/services/behavior-test.jshint', function () {

  'use strict';

  module('JSHint - unit/services');
  test('unit/services/behavior-test.js should pass jshint', function() { 
    ok(true, 'unit/services/behavior-test.js should pass jshint.'); 
  });

});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('dummy/config/environment', ['ember'], function(Ember) {
  var prefix = 'dummy';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("dummy/tests/test-helper");
} else {
  require("dummy/app")["default"].create({"name":"sl-ember-behavior","version":"1.1.0.08b071f5"});
}

/* jshint ignore:end */
//# sourceMappingURL=dummy.map