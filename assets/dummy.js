define("dummy/app", 
  ["ember","ember/resolver","ember/load-initializers","dummy/config/environment","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var Resolver = __dependency2__["default"];
    var loadInitializers = __dependency3__["default"];
    var config = __dependency4__["default"];

    Ember.MODEL_FACTORY_INJECTIONS = true;

    var App = Ember.Application.extend({
      modulePrefix: config.modulePrefix,
      podModulePrefix: config.podModulePrefix,
      Resolver: Resolver
    });

    loadInitializers(App, config.modulePrefix);

    __exports__["default"] = App;
  });
define("dummy/components/sl-able", 
  ["sl-ember-behavior/components/sl-able","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var component = __dependency1__["default"];

    __exports__["default"] = component;
  });
define("dummy/components/sl-unable", 
  ["sl-ember-behavior/components/sl-unable","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var component = __dependency1__["default"];

    __exports__["default"] = component;
  });
define("dummy/controllers/application", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    __exports__["default"] = Ember.Controller.extend({});
  });
define("dummy/initializers/behavior-service", 
  ["sl-ember-behavior/initializers/behavior-service","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var initializer = __dependency1__["default"];

    __exports__["default"] = {
      name: "behavior-service",

      initialize: initializer
    };
  });
define("dummy/initializers/export-application-global", 
  ["ember","dummy/config/environment","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var config = __dependency2__["default"];

    function initialize(container, application) {
      var classifiedName = Ember.String.classify(config.modulePrefix);

      if (config.exportApplicationGlobal) {
        window[classifiedName] = application;
      }
    };
    __exports__.initialize = initialize;

    __exports__["default"] = {
      name: "export-application-global",

      initialize: initialize
    };
  });
define("dummy/router", 
  ["ember","dummy/config/environment","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var config = __dependency2__["default"];

    var Router = Ember.Router.extend({
      location: config.locationType
    });

    Router.map(function () {
      this.route("index", { path: "/" });
      this.route("demo");
    });

    __exports__["default"] = Router;
  });
define("dummy/routes/application", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    __exports__["default"] = Ember.Route.extend({
      beforeModel: function () {
        var behaviors = Ember.Object.create({
          event: Ember.Object.create({
            reschedule: false,
            cancel: false,
            setDate: true
          }),

          route: Ember.Object.create()
        });

        this._super.apply(this, arguments);

        Ember.keys(this.get("router.router.recognizer.names")).forEach(function (route) {
          behaviors.route[route] = true;
        });

        this.controllerFor("application").get("behaviorService").setBehaviors(behaviors);
      },

      model: function () {
        return Ember.Object.create({
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
define("dummy/sl-ember-behavior/tests/sl-ember-behavior/components/sl-able.jshint", 
  [],
  function() {
    "use strict";
    module("JSHint - sl-ember-behavior/components");
    test("sl-ember-behavior/components/sl-able.js should pass jshint", function () {
      ok(true, "sl-ember-behavior/components/sl-able.js should pass jshint.");
    });
  });
define("dummy/sl-ember-behavior/tests/sl-ember-behavior/components/sl-unable.jshint", 
  [],
  function() {
    "use strict";
    module("JSHint - sl-ember-behavior/components");
    test("sl-ember-behavior/components/sl-unable.js should pass jshint", function () {
      ok(true, "sl-ember-behavior/components/sl-unable.js should pass jshint.");
    });
  });
define("dummy/sl-ember-behavior/tests/sl-ember-behavior/initializers/behavior-service.jshint", 
  [],
  function() {
    "use strict";
    module("JSHint - sl-ember-behavior/initializers");
    test("sl-ember-behavior/initializers/behavior-service.js should pass jshint", function () {
      ok(true, "sl-ember-behavior/initializers/behavior-service.js should pass jshint.");
    });
  });
define("dummy/sl-ember-behavior/tests/sl-ember-behavior/mixins/route.jshint", 
  [],
  function() {
    "use strict";
    module("JSHint - sl-ember-behavior/mixins");
    test("sl-ember-behavior/mixins/route.js should pass jshint", function () {
      ok(true, "sl-ember-behavior/mixins/route.js should pass jshint.");
    });
  });
define("dummy/sl-ember-behavior/tests/sl-ember-behavior/services/behavior.jshint", 
  [],
  function() {
    "use strict";
    module("JSHint - sl-ember-behavior/services");
    test("sl-ember-behavior/services/behavior.js should pass jshint", function () {
      ok(true, "sl-ember-behavior/services/behavior.js should pass jshint.");
    });
  });
define("dummy/templates/application", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
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
define("dummy/templates/demo", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
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
define("dummy/templates/index", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
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
define("dummy/tests/app.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - .');
    test('app.js should pass jshint', function() { 
      ok(true, 'app.js should pass jshint.'); 
    });
  });
define("dummy/tests/controllers/application.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - controllers');
    test('controllers/application.js should pass jshint', function() { 
      ok(true, 'controllers/application.js should pass jshint.'); 
    });
  });
define("dummy/tests/dummy/tests/helpers/resolver.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - dummy/tests/helpers');
    test('dummy/tests/helpers/resolver.js should pass jshint', function() { 
      ok(true, 'dummy/tests/helpers/resolver.js should pass jshint.'); 
    });
  });
define("dummy/tests/dummy/tests/helpers/start-app.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - dummy/tests/helpers');
    test('dummy/tests/helpers/start-app.js should pass jshint', function() { 
      ok(true, 'dummy/tests/helpers/start-app.js should pass jshint.'); 
    });
  });
define("dummy/tests/dummy/tests/test-helper.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - dummy/tests');
    test('dummy/tests/test-helper.js should pass jshint', function() { 
      ok(true, 'dummy/tests/test-helper.js should pass jshint.'); 
    });
  });
define("dummy/tests/helpers/resolver", 
  ["ember/resolver","dummy/config/environment","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Resolver = __dependency1__["default"];
    var config = __dependency2__["default"];

    var resolver = Resolver.create();

    resolver.namespace = {
      modulePrefix: config.modulePrefix,
      podModulePrefix: config.podModulePrefix
    };

    __exports__["default"] = resolver;
  });
define("dummy/tests/helpers/start-app", 
  ["ember","dummy/app","dummy/router","dummy/config/environment","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var Application = __dependency2__["default"];
    var Router = __dependency3__["default"];
    var config = __dependency4__["default"];

    __exports__["default"] = function startApp(attrs) {
      var application;

      var attributes = Ember.merge({}, config.APP);
      attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

      Ember.run(function () {
        application = Application.create(attributes);
        application.setupForTesting();
        application.injectTestHelpers();
      });

      return application;
    }
  });
define("dummy/tests/router.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - .');
    test('router.js should pass jshint', function() { 
      ok(true, 'router.js should pass jshint.'); 
    });
  });
define("dummy/tests/routes/application.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - routes');
    test('routes/application.js should pass jshint', function() { 
      ok(true, 'routes/application.js should pass jshint.'); 
    });
  });
define("dummy/tests/test-helper", 
  ["dummy/tests/helpers/resolver","ember-qunit"],
  function(__dependency1__, __dependency2__) {
    "use strict";
    var resolver = __dependency1__["default"];
    var setResolver = __dependency2__.setResolver;

    setResolver(resolver);

    document.write("<div id=\"ember-testing-container\"><div id=\"ember-testing\"></div></div>");

    QUnit.config.urlConfig.push({ id: "nocontainer", label: "Hide container" });
    var containerVisibility = QUnit.urlParams.nocontainer ? "hidden" : "visible";
    document.getElementById("ember-testing-container").style.visibility = containerVisibility;
  });
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
  require("dummy/app")["default"].create({});
}

/* jshint ignore:end */
//# sourceMappingURL=dummy.map