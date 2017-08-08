(function() {
    'use strict';

    angular
        .module('app.router')
        .provider('Router', RouterProvider);

    RouterProvider.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];

    function RouterProvider($locationProvider, $stateProvider, $urlRouterProvider) {

        var config = {
            // The paths where html template resides
            viewsBasePath: 'app/views/',
            // Automatically prepend views path to all templatesUrl?
            useViewsBasePath: true,
            // Set the following to true to enable the HTML5 Mode
            // You may have to set <base> tag in index and a routing configuration in your server
            html5Mode: false,
            // defaults to dashboard
            defaultRoute: '/user/login'
        };

        // public access to change configuration
        this.configure = function(cfg) {
            angular.extend(config, cfg);
        };

        $locationProvider.html5Mode(config.html5Mode);

        $urlRouterProvider.otherwise(config.defaultRoute);

        this.$get = Router;

        Router.$inject = ['$rootScope', '$state', '$stateParams', 'APP_REQUIRES'];

        function Router($rootScope, $state, $stateParams, APP_REQUIRES) {
            /* jshint validthis:true */

            var service = {
                // service access level
                viewpath: viewpath,
                resolveFor: resolveFor,
                state: state,
                getStates: getStates
            };

            init();

            return service;

            ///////

            // wrapper for $stateProvider to simply routes creation
            function state(name, options) {
                if (!name) throw new Error('Route name not defined.');

                if (options.require) {
                    var require = this.resolveFor.apply(this, options.require);
                    options.resolve = angular.extend({}, options.resolve, require);
                }
                if (options.templateUrl && config.useViewsBasePath)
                    options.templateUrl = this.viewpath(options.templateUrl);

                $stateProvider.state(name, options);

                // allow chain execution
                return this;
            }

            // Set here the base of the
            // relative path for all views
            function viewpath(uri) {
                return config.viewsBasePath + uri;
            }

            // Generates a resolve object by passing script names
            // previously configured in constant.APP_REQUIRES
            function resolveFor() {
                var _args = arguments;
                return {
                    __deps: ['$ocLazyLoad', '$q', function($ocLL, $q) {
                        // Creates a promise chain for each argument
                        var promiseChain = $q.when(1); // empty promise
                        for (var i = 0, len = _args.length; i < len; i++) {
                            promiseChain = andThen(_args[i]);
                        }
                        return promiseChain;

                        // creates promise to chain dynamically
                        function andThen(mod) {
                            // support a function that returns a promise
                            if (typeof mod === 'function')
                                return promiseChain.then(mod);
                            else {
                                return promiseChain.then(function() {
                                    // check if module is defined
                                    if (!APP_REQUIRES[mod])
                                        throw new Error('Route resolve: Bad resource name [' + mod + ']');
                                    // finally, return the load promise
                                    return $ocLL.load(APP_REQUIRES[mod]);
                                });
                            }
                        }

                    }]
                };
            } // resolveFor

            function getStates() {
                return $state.get();
            }

            function init() {

                // Set reference to access them from any scope
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;

                // auto update document title
                $rootScope.$on('$stateChangeSuccess',
                    function(event, toState /*, toParams, fromState, fromParams*/ ) {
                        // Autoscroll to top
                        scrollTopMainView();
                        // Update document title
                        var title = (toState.title || '');
                        $rootScope.documentTitle = title; // data bind to <title>
                    }
                );
                // on state not found log to console
                $rootScope.$on('$stateNotFound',
                    function(event, unfoundState /*, fromState, fromParams*/ ) {
                        console.log('State not found: ' + unfoundState.to + unfoundState.toParams + unfoundState.options);
                    });
                // on error log to console
                $rootScope.$on('$stateChangeError',
                    function(event, toState, toParams, fromState, fromParams, error) {
                        console.log(error);
                    });
            }

            function scrollTopMainView() {
                // There must not be more than one <main> element in a document. (http://www.w3schools.com/tags/tag_main.asp)
                var main = document.querySelector('main');
                if(main) main.scrollTop = 0;
            }
        }
    }
})();
