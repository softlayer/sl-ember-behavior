/* jshint ignore:start */

/* jshint ignore:end */

define('dummy/acceptance-tests/sinon', ['exports', 'ember-sinon/acceptance-tests/sinon'], function (exports, sinon) {

	'use strict';



	exports.default = sinon.default;

});
define('dummy/app', ['exports', 'ember', 'ember/resolver', 'dummy/config/environment'], function (exports, Ember, Resolver, config) {

    'use strict';

    var App = undefined;

    Ember['default'].MODEL_FACTORY_INJECTIONS = true;

    App = Ember['default'].Application.extend({
        modulePrefix: config['default'].modulePrefix,
        podModulePrefix: config['default'].podModulePrefix,
        Resolver: Resolver['default']
    });

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
define('dummy/controllers/array', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('dummy/controllers/object', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('dummy/initializers/app-version', ['exports', 'dummy/config/environment', 'ember'], function (exports, config, Ember) {

  'use strict';

  var classify = Ember['default'].String.classify;
  var registered = false;

  exports['default'] = {
    name: 'App Version',
    initialize: function initialize(container, application) {
      if (!registered) {
        var appName = classify(application.toString());
        Ember['default'].libraries.register(appName, config['default'].APP.version);
        registered = true;
      }
    }
  };

});
define('dummy/initializers/export-application-global', ['exports', 'ember', 'dummy/config/environment'], function (exports, Ember, config) {

  'use strict';

  exports.initialize = initialize;

  function initialize(container, application) {
    if (config['default'].exportApplicationGlobal !== false) {
      var value = config['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember['default'].String.classify(config['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  ;

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };

});
define('dummy/router', ['exports', 'ember', 'dummy/config/environment'], function (exports, Ember, config) {

    'use strict';

    var Router = Ember['default'].Router.extend({
        location: config['default'].locationType
    });

    Router.map(function () {
        this.route('index', { path: '/' });
        this.route('demo');
    });

    exports['default'] = Router;

});
define('dummy/routes/application', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Route.extend({

        beforeModel: function beforeModel() {
            Ember['default'].get(this, '_super').apply(undefined, arguments);

            var behaviors = this.get('behaviors');

            Ember['default'].keys(this.get('router.router.recognizer.names')).forEach(function (route) {
                behaviors.route[route] = true;
            });

            this.get('behaviorService').setBehaviors(behaviors);
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

        behaviorService: Ember['default'].inject.service('sl-behavior'),

        model: function model() {
            var returnsFalse = function returnsFalse() {
                return false;
            };

            var MyModel = Ember['default'].Object.extend({
                computedReturnsFalse: Ember['default'].computed(returnsFalse)
            });

            return MyModel.create();
        }

    });

});
define('dummy/services/sl-behavior', ['exports', 'sl-ember-behavior/services/sl-behavior'], function (exports, BehaviorService) {

	'use strict';

	exports['default'] = BehaviorService['default'];

});
define('dummy/sl-ember-behavior/tests/modules/sl-ember-behavior/components/sl-able.jshint', function () {

  'use strict';

  module('JSHint - modules/sl-ember-behavior/components');
  test('modules/sl-ember-behavior/components/sl-able.js should pass jshint', function () {
    ok(true, 'modules/sl-ember-behavior/components/sl-able.js should pass jshint.');
  });

});
define('dummy/sl-ember-behavior/tests/modules/sl-ember-behavior/components/sl-unable.jshint', function () {

  'use strict';

  module('JSHint - modules/sl-ember-behavior/components');
  test('modules/sl-ember-behavior/components/sl-unable.js should pass jshint', function () {
    ok(true, 'modules/sl-ember-behavior/components/sl-unable.js should pass jshint.');
  });

});
define('dummy/sl-ember-behavior/tests/modules/sl-ember-behavior/mixins/component.jshint', function () {

  'use strict';

  module('JSHint - modules/sl-ember-behavior/mixins');
  test('modules/sl-ember-behavior/mixins/component.js should pass jshint', function () {
    ok(true, 'modules/sl-ember-behavior/mixins/component.js should pass jshint.');
  });

});
define('dummy/sl-ember-behavior/tests/modules/sl-ember-behavior/mixins/route.jshint', function () {

  'use strict';

  module('JSHint - modules/sl-ember-behavior/mixins');
  test('modules/sl-ember-behavior/mixins/route.js should pass jshint', function () {
    ok(true, 'modules/sl-ember-behavior/mixins/route.js should pass jshint.');
  });

});
define('dummy/sl-ember-behavior/tests/modules/sl-ember-behavior/services/sl-behavior.jshint', function () {

  'use strict';

  module('JSHint - modules/sl-ember-behavior/services');
  test('modules/sl-ember-behavior/services/sl-behavior.js should pass jshint', function () {
    ok(true, 'modules/sl-ember-behavior/services/sl-behavior.js should pass jshint.');
  });

});
define('dummy/templates/application', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.12.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("i");
          dom.setAttribute(el1,"class","fa fa-home");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" Home");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.12.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("i");
          dom.setAttribute(el1,"class","fa fa-cubes");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" Demo");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      revision: "Ember@1.12.0",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","container");
        var el2 = dom.createTextNode("\n\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","row");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","col-md-12");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","btn-group pull-right");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("button");
        dom.setAttribute(el5,"type","button");
        dom.setAttribute(el5,"class","btn btn-default dropdown-toggle");
        dom.setAttribute(el5,"data-toggle","dropdown");
        dom.setAttribute(el5,"aria-expanded","false");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("i");
        dom.setAttribute(el6,"class","fa fa-reorder");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(" ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6,"class","caret");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("ul");
        dom.setAttribute(el5,"class","dropdown-menu");
        dom.setAttribute(el5,"role","menu");
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"href","http://softlayer.github.io/sl-ember-behavior/docs");
        dom.setAttribute(el7,"target","new");
        var el8 = dom.createElement("i");
        dom.setAttribute(el8,"class","fa fa-book");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode(" Documentation");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"href","https://github.com/softlayer/sl-ember-behavior/blob/master/CONTRIBUTING.md");
        var el8 = dom.createElement("i");
        dom.setAttribute(el8,"class","fa fa-cog");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode(" Contribution Guide");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"href","https://github.com/softlayer/sl-ember-behavior/stargazers");
        var el8 = dom.createElement("i");
        dom.setAttribute(el8,"class","fa fa-star");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode(" Star Our Repo");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"href","https://github.com/softlayer/sl-ember-behavior/fork");
        var el8 = dom.createElement("i");
        dom.setAttribute(el8,"class","fa fa-code-fork");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode(" Fork Our Repo");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","row");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","col-md-12 text-center");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createTextNode("ember install sl-ember-behavior");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"href","https://github.com/softlayer/sl-ember-behavior/blob/master/LICENSE.md");
        var el6 = dom.createTextNode("MIT Licensed");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, block = hooks.block, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [2]);
        var element1 = dom.childAt(element0, [1, 1, 1, 3]);
        var morph0 = dom.createMorphAt(dom.childAt(element1, [1]),0,0);
        var morph1 = dom.createMorphAt(dom.childAt(element1, [3]),0,0);
        var morph2 = dom.createMorphAt(element0,3,3);
        block(env, morph0, context, "link-to", ["index"], {}, child0, null);
        block(env, morph1, context, "link-to", ["demo"], {}, child1, null);
        content(env, morph2, context, "outlet");
        return fragment;
      }
    };
  }()));

});
define('dummy/templates/demo', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.12.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h3");
          var el2 = dom.createTextNode("You can create this event");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.12.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h3");
          var el2 = dom.createTextNode("You can reschedule this event");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child2 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.12.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h3");
          var el2 = dom.createTextNode("You cannot edit this user");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child3 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.12.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h3");
          var el2 = dom.createTextNode("You cannot remove this user");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child4 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.12.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h3");
          var el2 = dom.createTextNode("Creating an event is not possible.");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child5 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.12.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h3");
          var el2 = dom.createTextNode("Rescheduling an event is not possible.");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child6 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.12.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h3");
          var el2 = dom.createTextNode("Creating an event is not possible");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      revision: "Ember@1.12.0",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","row");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","col-md-12 text-center");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h1");
        var el4 = dom.createTextNode("Usage Demonstration");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        dom.setAttribute(el3,"class","lead");
        var el4 = dom.createTextNode("View the source code of the dummy application for syntax employed in this demo");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","row");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","col-md-12");
        var el3 = dom.createTextNode("\n    Given this Behavior data that is set on the Behavior Service:\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("pre");
        var el4 = dom.createTextNode("{\n    event: {\n        create: true,\n        reschedule: true\n    },\n    user: {\n        edit: false,\n        remove: false\n    }\n}");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        and the use of the following in a template:\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("pre");
        var el4 = dom.createTextNode("{{#sl-able activity=\"create\" resource=\"event\"}}\n    <h3>You can create this event</h3>\n{{/sl-able}}\n\n{{#sl-unable activity=\"reschedule\" resource=\"event\"}}\n    <h3>You can reschedule this event</h3>\n{{/sl-unable}}\n\n{{#sl-able activity=\"edit\" resource=\"user\"}}\n    <h3>You cannot edit this user<h3>\n{{/sl-able}}\n\n{{#sl-unable activity=\"remove\" resource=\"user\"}}\n    <h3>You cannot remove this user<h3>\n{{/sl-unable}}");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        You will see this result:\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","row");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","col-md-12");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        Using the same Behavior data from the previous example and the following in the template:\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("pre");
        var el4 = dom.createTextNode("{{#sl-able activity=\"create\" resource=event possible=false}}\n    <h3>Creating an event is not possible</h3>\n{{/sl-able}}\n\n{{#sl-unable activity=\"reschedule\" resource=event possible=false}}\n    <h3>Rescheduling an event is not possible</h3>\n{{/sl-unable}}");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        Although both activities are set to ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("em");
        var el4 = dom.createTextNode("true");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" in the Behavior data, passing a value of ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("em");
        var el4 = dom.createTextNode("false");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" to the ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("em");
        var el4 = dom.createTextNode("possible");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" property causes the following to be rendered:\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","row");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","col-md-12");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        This also works with computed properties in the ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("em");
        var el4 = dom.createTextNode("possible");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" property as in the following example:\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("pre");
        var el4 = dom.createTextNode("{{#sl-unable activity=\"create\" resource=\"event\" possible=model.computedReturnsFalse}}\n    <h3>Creating an event is not possible</h3>\n{{/sl-unable}}");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        Which results in:\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","row");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","col-md-12");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, block = hooks.block, get = hooks.get;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [2, 1]);
        var element1 = dom.childAt(element0, [15, 1]);
        var element2 = dom.childAt(element0, [35, 1]);
        var morph0 = dom.createMorphAt(element1,1,1);
        var morph1 = dom.createMorphAt(element1,3,3);
        var morph2 = dom.createMorphAt(element1,5,5);
        var morph3 = dom.createMorphAt(element1,7,7);
        var morph4 = dom.createMorphAt(element2,1,1);
        var morph5 = dom.createMorphAt(element2,3,3);
        var morph6 = dom.createMorphAt(dom.childAt(element0, [49, 1]),1,1);
        block(env, morph0, context, "sl-able", [], {"activity": "create", "resource": "event"}, child0, null);
        block(env, morph1, context, "sl-unable", [], {"activity": "reschedule", "resource": "event"}, child1, null);
        block(env, morph2, context, "sl-able", [], {"activity": "edit", "resource": "user"}, child2, null);
        block(env, morph3, context, "sl-unable", [], {"activity": "remove", "resource": "user"}, child3, null);
        block(env, morph4, context, "sl-able", [], {"activity": "create", "resource": "event", "possible": false}, child4, null);
        block(env, morph5, context, "sl-unable", [], {"activity": "reschedule", "resource": "event", "possible": false}, child5, null);
        block(env, morph6, context, "sl-unable", [], {"activity": "create", "resource": "event", "possible": get(env, context, "model.computedReturnsFalse")}, child6, null);
        return fragment;
      }
    };
  }()));

});
define('dummy/templates/index', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.12.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("i");
          dom.setAttribute(el1,"class","fa fa-cubes fa-5x");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.12.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("b");
          var el2 = dom.createTextNode("Demo");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      revision: "Ember@1.12.0",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","row");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","col-md-12 text-center");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h1");
        var el4 = dom.createTextNode("sl-ember-behavior 1.3.0");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        dom.setAttribute(el3,"class","lead");
        var el4 = dom.createTextNode("An Ember CLI Addon that provides the ability to define and enforce behaviors, combining the concepts of whether a user has permission to perform an action and whether that action can currently be performed.");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","row");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","col-md-4 text-center");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h3");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","col-md-4 text-center");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h3");
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"href","docs");
        dom.setAttribute(el4,"target","new");
        var el5 = dom.createElement("i");
        dom.setAttribute(el5,"class","fa fa-book fa-5x");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"href","docs");
        dom.setAttribute(el4,"target","new");
        var el5 = dom.createElement("b");
        var el6 = dom.createTextNode("Documentation");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","col-md-4 text-center");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h3");
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"href","https://github.com/softlayer/sl-ember-behavior");
        var el5 = dom.createElement("i");
        dom.setAttribute(el5,"class","fa fa-github fa-5x");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"href","https://github.com/softlayer/sl-ember-behavior");
        var el5 = dom.createElement("b");
        var el6 = dom.createTextNode("Available on GitHub");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, block = hooks.block;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [2, 1]);
        var morph0 = dom.createMorphAt(dom.childAt(element0, [1]),0,0);
        var morph1 = dom.createMorphAt(dom.childAt(element0, [3]),0,0);
        block(env, morph0, context, "link-to", ["demo"], {}, child0, null);
        block(env, morph1, context, "link-to", ["demo"], {}, child1, null);
        return fragment;
      }
    };
  }()));

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
define('dummy/tests/helpers/start-app', ['exports', 'ember', 'dummy/app', 'dummy/config/environment'], function (exports, Ember, Application, config) {

    'use strict';



    exports['default'] = startApp;
    function startApp(attrs) {
        var application = undefined;

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
define('dummy/tests/unit/components/sl-able-test', ['ember', 'ember-qunit', 'sinon'], function (Ember, ember_qunit, sinon) {

    'use strict';

    var behaviorService = undefined;

    ember_qunit.moduleForComponent('sl-able', 'Unit | Component | sl able', {
        unit: true,

        beforeEach: function beforeEach() {
            behaviorService = Ember['default'].Object.create({
                isAble: sinon['default'].stub().returns(true)
            });
        }
    });

    /**
     * Ensures that the template is wrapping the content in a span tag and not in
     * any block-level tags. While it appears that core Ember functionality is being
     * tested this test is ensuring that the implied contract about how this non-UI
     * component is rendered into the DOM is adhered to.
     */
    ember_qunit.test('Renders as a span tag with no classes', function (assert) {
        this.subject({
            behaviorService: behaviorService
        });

        assert.equal(this.$().prop('tagName'), 'SPAN');
    });

    ember_qunit.test('Renders content when isAble() returns true', function (assert) {
        this.subject({
            behaviorService: behaviorService,
            template: Ember['default'].Handlebars.compile('I can do it')
        });

        assert.equal(Ember['default'].$.trim(this.$().text()), 'I can do it');
    });

    ember_qunit.test('Does not render content when isAble() returns false', function (assert) {
        behaviorService.isAble = sinon['default'].stub().returns(false);

        this.subject({
            behaviorService: behaviorService,
            template: Ember['default'].Handlebars.compile('I can do it')
        });

        assert.equal(Ember['default'].$.trim(this.$().text()), '');
    });

    ember_qunit.test('isAble() calls isAble() on the behavior service', function (assert) {
        this.subject({
            behaviorService: behaviorService,
            activity: 'anActivity',
            resource: 'aResource',
            possible: true
        });

        this.render();

        assert.ok(behaviorService.isAble.withArgs('anActivity', 'aResource', true).calledOnce, 'isAble() was called with the correct params');
    });

    ember_qunit.test('Is responsive to changes in the behavior data on the service', function (assert) {
        this.subject({
            behaviorService: behaviorService,
            activity: 'anActivity',
            resource: 'aResource'
        });

        this.render();

        Ember['default'].run(function () {
            behaviorService.set('behaviors', {
                'aResource': {
                    'anActivity': false
                }
            });
        });

        assert.ok(behaviorService.isAble.withArgs('anActivity', 'aResource', true).calledTwice, 'isAble() is called twice');
    });

    ember_qunit.test('Is responsive to changes to the `possible` parameter', function (assert) {
        var component = this.subject({
            behaviorService: behaviorService,
            activity: 'anActivity',
            resource: 'aResource'
        });

        this.render();

        assert.ok(behaviorService.isAble.withArgs('anActivity', 'aResource', true).calledOnce, 'isAble() is called with `true` as a third param');

        Ember['default'].run(function () {
            component.set('possible', false);
        });

        assert.ok(behaviorService.isAble.withArgs('anActivity', 'aResource', false).calledOnce, 'isAble() is called with `false` as a third param');
    });

});
define('dummy/tests/unit/components/sl-able-test.jshint', function () {

  'use strict';

  module('JSHint - unit/components');
  test('unit/components/sl-able-test.js should pass jshint', function() { 
    ok(true, 'unit/components/sl-able-test.js should pass jshint.'); 
  });

});
define('dummy/tests/unit/components/sl-unable-test', ['ember', 'ember-qunit', 'sinon'], function (Ember, ember_qunit, sinon) {

    'use strict';

    var behaviorService = undefined;

    ember_qunit.moduleForComponent('sl-unable', 'Unit | Component | sl unable', {
        unit: true,

        beforeEach: function beforeEach() {
            behaviorService = Ember['default'].Object.create({
                isUnable: sinon['default'].stub().returns(false)
            });
        }
    });

    /**
     * Ensures that the template is wrapping the content in a span tag and not in any block-level tags. While it appears
     * that core Ember functionality is being tested this test is ensuring that the implied contract about how this non-UI
     * component is rendered into the DOM is adhered to.
     */
    ember_qunit.test('Renders as a span tag with no classes', function (assert) {
        this.subject({
            behaviorService: behaviorService
        });

        assert.equal(this.$().prop('tagName'), 'SPAN');
    });

    ember_qunit.test('Does not render content when isUnable() returns false', function (assert) {
        this.subject({
            behaviorService: behaviorService,
            template: Ember['default'].Handlebars.compile('Should not render')
        });

        assert.equal(this.$().text(), '');
    });

    ember_qunit.test('Renders content when isUnable() returns true', function (assert) {
        behaviorService.isUnable = sinon['default'].stub().returns(true);

        this.subject({
            behaviorService: behaviorService,
            template: Ember['default'].Handlebars.compile('Should render')
        });

        assert.equal(Ember['default'].$.trim(this.$().text()), 'Should render');
    });

    ember_qunit.test('isUnable() calls isUnable() on the behavior service', function (assert) {
        this.subject({
            behaviorService: behaviorService,
            activity: 'anActivity',
            resource: 'aResource',
            possible: true
        });

        this.render();

        assert.ok(behaviorService.isUnable.withArgs('anActivity', 'aResource', true).calledOnce, 'isUnable() was called with the correct params');
    });

    ember_qunit.test('Is responsive to changes in the behavior data on the service', function (assert) {
        this.subject({
            behaviorService: behaviorService,
            activity: 'anActivity',
            resource: 'aResource'
        });

        this.render();

        Ember['default'].run(function () {
            behaviorService.set('behaviors', {
                'aResource': {
                    'anActivity': false
                }
            });
        });

        assert.ok(behaviorService.isUnable.withArgs('anActivity', 'aResource', true).calledTwice, 'isUnable() is called twice');
    });

    ember_qunit.test('Is responsive to changes to the `possible` parameter', function (assert) {
        var component = this.subject({
            behaviorService: behaviorService,
            activity: 'anActivity',
            resource: 'aResource'
        });

        this.render();

        assert.ok(behaviorService.isUnable.withArgs('anActivity', 'aResource', true).calledOnce, 'isUnable() is called with `true` as a third param');

        Ember['default'].run(function () {
            component.set('possible', false);
        });

        assert.ok(behaviorService.isUnable.withArgs('anActivity', 'aResource', false).calledOnce, 'isUnable() is called with `false` as a third param');
    });

});
define('dummy/tests/unit/components/sl-unable-test.jshint', function () {

  'use strict';

  module('JSHint - unit/components');
  test('unit/components/sl-unable-test.js should pass jshint', function() { 
    ok(true, 'unit/components/sl-unable-test.js should pass jshint.'); 
  });

});
define('dummy/tests/unit/mixins/component-test', ['ember', 'sl-ember-behavior/mixins/component', 'qunit', 'sinon'], function (Ember, ComponentMixin, qunit, sinon) {

    'use strict';

    var AugmentedObject = undefined;
    var isViewableStub = undefined;

    qunit.module('Unit | Mixin | component', {
        beforeEach: function beforeEach() {
            isViewableStub = sinon['default'].stub().returns(true);

            AugmentedObject = Ember['default'].Object.extend(ComponentMixin['default'], {
                isViewable: isViewableStub
            });
        }
    });

    qunit.test('The correct service is being injected into the component', function (assert) {
        var subject = AugmentedObject.create();

        assert.equal(subject.behaviorService.name, 'sl-behavior', 'The correct service is being injected into the component');
    });

    qunit.test('Assert is thrown when isViewable() is not implemented on the derived class', function (assert) {
        AugmentedObject = Ember['default'].Object.extend(ComponentMixin['default']);

        var subject = AugmentedObject.create();

        assert.throws(subject.isViewable, 'Assertion was thrown');
    });

    qunit.test('showContent() computed property throws assertion when `possible` property is not a boolean', function (assert) {
        var subject = AugmentedObject.create();
        var callShowContent = function callShowContent() {
            return subject.get('showContent');
        };

        // Array
        subject.set('possible', []);

        assert.throws(callShowContent, 'The `possible` property is an Array');

        // Function
        subject.set('possible', function () {});

        assert.throws(callShowContent, 'The possible property is a Function');

        // Instance
        subject.set('possible', Ember['default'].Object.create());

        assert.throws(callShowContent, 'The possible property is an Instance');

        // Null
        subject.set('possible', null);

        assert.throws(callShowContent, 'The `possible` property is Null');

        // Number
        subject.set('possible', 123);

        assert.throws(callShowContent, 'The `possible` property is a Number');

        // Object
        subject.set('possible', {});

        assert.throws(callShowContent, 'The `possible` property is an Object');

        // Undefined
        subject.set('possible', undefined);

        assert.throws(callShowContent, 'The `possible` property is Undefined');

        // Boolean
        subject.set('possible', true);

        assert.ok(callShowContent(), 'The `possible` property is a Boolean');
    });

    qunit.test('showContent() computed property returns the value the isViewable method returns', function (assert) {
        var subject = AugmentedObject.create();

        assert.equal(subject.get('showContent'), true, 'Is viewable returns true');

        AugmentedObject.reopen({
            isViewable: sinon['default'].stub().returns(false)
        });

        subject = AugmentedObject.create();

        assert.equal(subject.get('showContent'), false, 'Is viewable returns false');
    });

});
define('dummy/tests/unit/mixins/component-test.jshint', function () {

  'use strict';

  module('JSHint - unit/mixins');
  test('unit/mixins/component-test.js should pass jshint', function() { 
    ok(true, 'unit/mixins/component-test.js should pass jshint.'); 
  });

});
define('dummy/tests/unit/mixins/route-test', ['ember', 'sl-ember-behavior/mixins/route', 'qunit'], function (Ember, mixinUnderTest, qunit) {

    'use strict';

    var Mixin = undefined;

    qunit.module('Unit | Mixin | route', {
        beforeEach: function beforeEach() {
            Mixin = Ember['default'].Route.extend(mixinUnderTest['default']);
            Mixin = Mixin.create();
        }
    });

    qunit.test('The correct service is being injected into the mixin', function (assert) {
        assert.equal(Mixin.behaviorService.name, 'sl-behavior', 'The correct service is being injected into the mixin');
    });

    // Though appears to be a duplicate of the module.setup() call this is an actual test,
    // whereas the other is configuration and might change in the future
    qunit.test('Successfully mixed', function (assert) {
        var testObject = Ember['default'].Route.extend(mixinUnderTest['default']);
        var subject = testObject.create();

        assert.ok(subject);
    });

    qunit.test('"unableRoute" property defaults to null', function (assert) {
        assert.equal(Mixin.get('unableRoute'), null);
    });

    qunit.test('_super() is called with transition.targetName as argument value', function (assert) {
        var testStringValue = 'test value';

        var transition = {};
        transition.targetName = testStringValue;

        var superArgs = undefined;
        Ember['default'].set(Mixin, '_super', function (value) {
            superArgs = value;
        });

        Mixin.behaviorService = {
            isUnable: function isUnable() {}
        };

        Mixin.beforeModel(transition);

        assert.ok(superArgs, transition);
    });

    qunit.test('Call to isUnable() uses transition.targetName as first argument value', function (assert) {
        var testStringValue = 'test value';

        var transition = {};
        transition.targetName = testStringValue;

        var parameterValuePassed = undefined;
        Mixin.behaviorService = {
            isUnable: function isUnable(value1) {
                parameterValuePassed = value1;
            }
        };

        Mixin.beforeModel(transition);

        assert.ok(testStringValue, parameterValuePassed);
    });

    qunit.test('Call to isUnable() uses "route" as second argument value', function (assert) {
        var transition = {};
        transition.targetName = 'test';

        var hardCodedValue = undefined;
        Mixin.behaviorService = {
            isUnable: function isUnable(value1, value2) {
                hardCodedValue = value2;
            }
        };

        Mixin.beforeModel(transition);

        assert.ok('route', hardCodedValue);
    });

    qunit.test('If isUnable() and "unableRoute" is null, transition.abort() is called', function (assert) {
        var transition = {};
        transition.targetName = 'test';

        var iWasCalled = false;
        transition.abort = function () {
            iWasCalled = true;
        };

        Mixin.behaviorService = {
            isUnable: function isUnable() {
                return true;
            }
        };

        Mixin.beforeModel(transition);

        assert.ok(iWasCalled, 'transition.abort() was called');
    });

    qunit.test('If isUnable() and "unableRoute" is not null, transitionTo() is called with "unableRoute" value', function (assert) {
        Mixin.unableRoute = 'notEmpty';

        var transition = {};
        transition.targetName = 'test';

        var routeToTransitionTo = undefined;
        Mixin.transitionTo = function (value) {
            routeToTransitionTo = value;
        };

        Mixin.behaviorService = {
            isUnable: function isUnable() {
                return true;
            }
        };

        Mixin.beforeModel(transition);

        assert.ok(routeToTransitionTo, 'notEmpty');
    });

    qunit.test('If not isUnable() then beforeModel() introduces no varying code path', function (assert) {
        Mixin.unableRoute = 'notEmpty';

        var transition = {};
        transition.targetName = 'test';

        var abortWasCalled = false;
        transition.abort = function () {
            abortWasCalled = true;
        };

        var transitionWasCalled = false;
        Mixin.transitionTo = function () {
            transitionWasCalled = true;
        };

        Mixin.behaviorService = {
            isUnable: function isUnable() {
                return false;
            }
        };

        Mixin.beforeModel(transition);

        assert.ok(!(abortWasCalled || transitionWasCalled), 'There is no varying code path');
    });

});
define('dummy/tests/unit/mixins/route-test.jshint', function () {

  'use strict';

  module('JSHint - unit/mixins');
  test('unit/mixins/route-test.js should pass jshint', function() { 
    ok(true, 'unit/mixins/route-test.js should pass jshint.'); 
  });

});
define('dummy/tests/unit/services/sl-behavior-test', ['ember', 'sl-ember-behavior/services/sl-behavior', 'ember-qunit'], function (Ember, BehaviorService, ember_qunit) {

    'use strict';

    var BS = undefined;

    ember_qunit.moduleFor('service:sl-behavior', 'Unit | Service | sl behavior', {
        unit: true,

        beforeEach: function beforeEach() {
            BS = BehaviorService['default'].create();
        }
    });

    ember_qunit.test('"behaviors" property defaults to null', function (assert) {
        assert.equal(BS.get('behaviors'), null);
    });

    ember_qunit.test('setBehaviors() requires an Object or Instance to be provided', function (assert) {

        // Array
        var callSetBehaviors = function callSetBehaviors() {
            return BS.setBehaviors([]);
        };

        assert.throws(callSetBehaviors, 'Parameter was an Array');

        // Boolean
        callSetBehaviors = function () {
            return BS.setBehaviors(false);
        };

        assert.throws(callSetBehaviors, 'Parameter was a Boolean');

        // Function
        callSetBehaviors = function () {
            return BS.setBehaviors(function () {});
        };

        assert.throws(callSetBehaviors, 'Parameter was a Function');

        // Null
        callSetBehaviors = function () {
            return BS.setBehaviors(null);
        };

        assert.throws(callSetBehaviors, 'Parameter was Null');

        // Number
        callSetBehaviors = function () {
            return BS.setBehaviors(123);
        };

        assert.throws(callSetBehaviors, 'Parameter was a Number');

        // String
        callSetBehaviors = function () {
            return BS.setBehaviors('a string');
        };

        assert.throws(callSetBehaviors, 'Parameter was a String');

        // Undefined
        callSetBehaviors = function () {
            return BS.setBehaviors();
        };

        assert.throws(callSetBehaviors, 'Parameter was Undefined');

        // Instance
        var assertionThrown = false;

        try {
            BS.setBehaviors(Ember['default'].Object.create());
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(!assertionThrown, 'Parameter was an Instance');

        // Object
        assertionThrown = false;

        try {
            BS.setBehaviors({});
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(!assertionThrown, 'Parameter was an Object');
    });

    ember_qunit.test('setBehaviors() sets data on the behaviors property', function (assert) {
        var testBehaviors = {
            'the_key': 'my value'
        };

        BS.setBehaviors(testBehaviors);

        assert.deepEqual(BS.get('behaviors'), testBehaviors);
    });

    ember_qunit.test('isAble() requires at least two parameters to be provided', function (assert) {

        // No arguments
        var callIsAble = function callIsAble() {
            return BS.isAble();
        };

        assert.throws(callIsAble, 'No parameters were provided');

        // One argument
        callIsAble = function () {
            return BS.isAble('one');
        };

        assert.throws(callIsAble, 'One parameter was provided');

        // Two arguments
        var assertionThrown = false;

        try {
            BS.isAble('one', 'two');
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(!assertionThrown, 'Two parameters were provided');

        // Three arguments
        assertionThrown = false;

        try {
            BS.isAble('one', 'two', false);
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(!assertionThrown, 'Three parameters were provided');
    });

    ember_qunit.test('isAble() requires first parameter to be a String', function (assert) {

        // Array
        var callIsAble = function callIsAble() {
            return BS.isAble([], 'notUnderTest');
        };

        assert.throws(callIsAble, 'Parameter was an Array');

        // Boolean
        callIsAble = function () {
            return BS.isAble(false, 'notUnderTest');
        };

        assert.throws(callIsAble, 'Parameter was a Boolean');

        // Function
        callIsAble = function () {
            return BS.isAble(function () {}, 'notUnderTest');
        };

        assert.throws(callIsAble, 'Parameter was an Function');

        // Instance
        callIsAble = function () {
            return BS.isAble(Ember['default'].Object.create(), 'notUnderTest');
        };

        assert.throws(callIsAble, 'Parameter was an Instance');

        // Null
        callIsAble = function () {
            return BS.isAble(null, 'notUnderTest');
        };

        assert.throws(callIsAble, 'Parameter was Null');

        // Number
        callIsAble = function () {
            return BS.isAble(123, 'notUnderTest');
        };

        assert.throws(callIsAble, 'Parameter was a Number');

        // Object
        callIsAble = function () {
            return BS.isAble({}, 'notUnderTest');
        };

        assert.throws(callIsAble, 'Parameter was an Object');

        // Undefined
        callIsAble = function () {
            return BS.isAble(undefined, 'notUnderTest');
        };

        assert.throws(callIsAble, 'Parameter was Undefined');

        // String
        var assertionThrown = false;

        try {
            BS.isAble('test', 'notUnderTest');
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(!assertionThrown, 'Parameter was a String');
    });

    ember_qunit.test('isAble() requires second argument to be a String', function (assert) {

        // Array
        var callIsAble = function callIsAble() {
            return BS.isAble('notUnderTest', []);
        };

        assert.throws(callIsAble, 'Parameter was an Array');

        // Boolean
        callIsAble = function () {
            return BS.isAble('notUnderTest', false);
        };

        assert.throws(callIsAble, 'Parameter was a Boolean');

        // Function
        callIsAble = function () {
            return BS.isAble('notUnderTest', function () {});
        };

        assert.throws(callIsAble, 'Parameter was an Function');

        // Instance
        callIsAble = function () {
            return BS.isAble('notUnderTest', Ember['default'].Object.create());
        };

        assert.throws(callIsAble, 'Parameter was an Instance');

        // Null
        callIsAble = function () {
            return BS.isAble('notUnderTest', null);
        };

        assert.throws(callIsAble, 'Parameter was Null');

        // Number
        callIsAble = function () {
            return BS.isAble('notUnderTest', 123);
        };

        assert.throws(callIsAble, 'Parameter was a Number');

        // Object
        callIsAble = function () {
            return BS.isAble('notUnderTest', {});
        };

        assert.throws(callIsAble, 'Parameter was an Object');

        // Undefined
        callIsAble = function () {
            return BS.isAble('notUnderTest');
        };

        assert.throws(callIsAble, 'Parameter was Undefined');

        // String
        var assertionThrown = false;

        try {
            BS.isAble('notUnderTest', 'test');
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(!assertionThrown, 'Parameter was a String');
    });

    ember_qunit.test('isAble() requires third argument to be a boolean or undefined', function (assert) {

        // Array
        var callIsAble = function callIsAble() {
            return BS.isAble('notUnderTest', 'notUnderTest', []);
        };

        assert.throws(callIsAble, 'Parameter was an Array');

        // Function
        callIsAble = function () {
            return BS.isAble('notUnderTest', 'notUnderTest', function () {});
        };

        assert.throws(callIsAble, 'Parameter was an Function');

        // Instance
        callIsAble = function () {
            return BS.isAble('notUnderTest', 'notUnderTest', Ember['default'].Object.create());
        };

        assert.throws(callIsAble, 'Parameter was an Instance');

        // Null
        callIsAble = function () {
            return BS.isAble('notUnderTest', 'notUnderTest', null);
        };

        assert.throws(callIsAble, 'Parameter was Null');

        // Number
        callIsAble = function () {
            return BS.isAble('notUnderTest', 'notUnderTest', 123);
        };

        assert.throws(callIsAble, 'Parameter was a Number');

        // Object
        callIsAble = function () {
            return BS.isAble('notUnderTest', 'notUnderTest', {});
        };

        assert.throws(callIsAble, 'Parameter was an Object');

        // String
        callIsAble = function () {
            return BS.isAble('notUnderTest', 'notUnderTest', 'test');
        };

        assert.throws(callIsAble, 'Parameter was an String');

        // Boolean
        var assertionThrown = false;

        try {
            BS.isAble('notUnderTest', 'notUnderTest', false);
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(!assertionThrown, 'Parameter was a Boolean');

        // Undefined
        assertionThrown = false;

        try {
            BS.isAble('notUnderTest', 'notUnderTest');
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(!assertionThrown, 'Parameter was undefined');
    });

    ember_qunit.test('isAble() 3rd parameter is provided - value is used in addition to Behavior data to make a determination', function (assert) {
        BS.setBehaviors({
            device: {
                reboot: true
            }
        });

        assert.ok(!BS.isAble('reboot', 'device', false), 'Was not able');

        assert.ok(BS.isAble('reboot', 'device', true), 'Was able');

        BS.setBehaviors({
            device: {
                reboot: false
            }
        });

        assert.ok(!BS.isAble('reboot', 'device', true), 'Was not able');

        assert.ok(!BS.isAble('reboot', 'device', false), 'Was not able');
    });

    ember_qunit.test('isAble() returns false if no Behavior data has been set', function (assert) {
        assert.ok(!BS.isAble('reboot', 'device'), 'Returned false');

        assert.ok(!BS.isAble('reboot', 'device', true), 'Returned false');
    });

    ember_qunit.test('isAble() returns false if specified Behavior Group has not been configured', function (assert) {
        BS.setBehaviors({
            device: {
                reboot: false
            }
        });

        assert.ok(!BS.isAble('reboot', 'product'), 'Returned false');

        assert.ok(!BS.isAble('reboot', 'product', true), 'Returned false');
    });

    ember_qunit.test('isAble() returns false if specified Behavior has not been configured', function (assert) {
        BS.setBehaviors({
            device: {
                reboot: false
            }
        });

        assert.ok(!BS.isAble('restart', 'device'), 'Returned false');

        assert.ok(!BS.isAble('restart', 'device', true), 'Returned false');
    });

    ember_qunit.test('isUnable() is the negated result of a call to isAble()', function (assert) {
        BS.setBehaviors({
            device: {
                reboot: false
            }
        });

        assert.ok(BS.isUnable('reboot', 'device', true), 'Was unable');

        BS.setBehaviors({
            device: {
                reboot: true
            }
        });

        assert.ok(!BS.isUnable('reboot', 'device', true), 'Was not unable');

        assert.ok(BS.isUnable('reboot', 'device', false), 'Was unable');
    });

});
define('dummy/tests/unit/services/sl-behavior-test.jshint', function () {

  'use strict';

  module('JSHint - unit/services');
  test('unit/services/sl-behavior-test.js should pass jshint', function() { 
    ok(true, 'unit/services/sl-behavior-test.js should pass jshint.'); 
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
  require("dummy/app")["default"].create({"name":"sl-ember-behavior","version":"1.3.0.39c6a1a1"});
}

/* jshint ignore:end */
//# sourceMappingURL=dummy.map