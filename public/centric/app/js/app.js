/*!
 *
 * Centric - Bootstrap Admin Template
 *
 * Version: 1.7
 * Author: @themicon_co
 * Website: http://themicon.co
 * License: https://wrapbootstrap.com/help/licenses
 *
 */

// APP START
// -----------------------------------

(function() {
    'use strict';
 
    angular
        .module('centric', [
            'app.core',
            'app.header',
            'app.sidebar',
            //'app.ripple',
            //'app.floatbutton',
            //'app.layouts',
            'app.menu',
            'app.preloader',
            'app.loadingbar',
            //'app.translate',
            'app.settings',
            'app.utils',
            //'app.dashboard',
            'app.home',
            //'app.charts',
            //'app.cards',
            //'app.elements',
            //'app.forms',
            //'app.tables',
            //'app.bootstrapui',
            //'app.maps',
            //'app.pages',
            'app.services',
            'app.user'
        ]);
})();


(function() {
    'use strict';

    angular
        .module('app.bootstrapui', []);
})();
(function() {
    'use strict';

    angular
        .module('app.cards', []);
})();

(function() {
    'use strict';

    angular
        .module('app.charts', []);
})();

(function() {
    'use strict';

    angular
        .module('app.core', [
            'app.router',
            'ngRoute',
            'ngAnimate',
            'ngStorage',
            'ngCookies',
            'ngMessages',
            'pascalprecht.translate',
            'ui.bootstrap',
            'cfp.loadingBar',
            'ngSanitize',
            'ngResource',
            'ui.utils'
        ]);
})();

(function() {
    'use strict';

    angular
        .module('app.dashboard', []);
})();

(function() {
    'use strict';

    angular
        .module('app.elements', []);
})();

(function() {
    'use strict';

    angular
        .module('app.floatbutton', []);
})();

(function() {
    'use strict';

    angular
        .module('app.forms', []);
})();

(function() {
    'use strict';

    angular
        .module('app.header', []);
})();

(function() {
    'use strict';

    angular
        .module('app.home', []);
})();

(function() {
    'use strict';

    angular
        .module('app.colors', []);
})();

(function() {
    'use strict';

    angular
        .module('app.layouts', []);
})();

(function() {
    'use strict';

    angular
        .module('app.loadingbar', []);
})();

(function() {
    'use strict';

    angular
        .module('app.maps', []);
})();

(function() {
    'use strict';

    angular
        .module('app.menu', []);
})();

(function() {
    'use strict';

    angular
        .module('app.pages', []);
})();

(function() {
    'use strict';

    angular
        .module('app.preloader', []);
})();

(function() {
    'use strict';

    angular
        .module('app.ripple', []);
})();

(function() {
    'use strict';

    angular
        .module('app.router', [
          'ui.router',
          'oc.lazyLoad'
        ]);
})();

(function() {
    'use strict';

    angular
        .module('app.services', []);
})();

(function() {
    'use strict';

    angular
        .module('app.settings', []);
})();

(function() {
    'use strict';

    angular
        .module('app.sidebar', []);
})();

(function() {
    'use strict';

    angular
        .module('app.tables', []);
})();

(function() {
    'use strict';

    angular
        .module('app.translate', []);
})();

(function() {
    'use strict';

    angular
        .module('app.user', [
            'app.services'
        ]);
})();

(function() {
    'use strict';

    angular
        .module('app.utils', [
            'app.colors'
        ]);
})();

(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('AlertDemoCtrl', AlertDemoCtrl);

    function AlertDemoCtrl() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
            vm.alerts = [{
                type: 'danger',
                msg: 'Oh snap! Change a few things up and try submitting again.'
            }, {
                type: 'warning',
                msg: 'Well done! You successfully read this important alert message.'
            }];

            vm.addAlert = function() {
                vm.alerts.push({
                    msg: 'Another alert!'
                });
            };

            vm.closeAlert = function(index) {
                vm.alerts.splice(index, 1);
            };
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .config(bootstrapuiConfig);

    bootstrapuiConfig.$inject = ['$uibTooltipProvider'];

    function bootstrapuiConfig($uibTooltipProvider) {
        $uibTooltipProvider.options({
            appendToBody: true
        });
    }
})();

(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('ButtonsCtrl', ButtonsCtrl);

    function ButtonsCtrl() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
            vm.singleModel = 1;

            vm.radioModel = 'Middle';

            vm.checkModel = {
                left: false,
                middle: true,
                right: false
            };
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('CarouselDemoCtrl', CarouselDemoCtrl);

    function CarouselDemoCtrl() {
        var vm = this;

        activate();

        ////////////////

        function activate() {

            vm.myInterval = 5000;
            vm.noWrapSlides = false;
            vm.active = 0;
            var slides = vm.slides = [];
            var currIndex = 0;

            vm.addSlide = function(id) {
                var newWidth = 600 + slides.length + 1;
                slides.push({
                    image: 'app/img/pic' + (id || 5) + '.jpg',
                    text: ['More', 'Extra', 'Lots of', 'Surplus'][slides.length % 2] + ' ' +
                        ['Trees', 'Mountains', 'Clouds', 'Space'][slides.length % 2],
                    id: currIndex++
                });
            };

            for (var i = 0; i < 4; i++) {
                vm.addSlide(i + 1);
            }

        }
    }
})();
(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('DatepickerDemoCtrl', DatepickerDemoCtrl);

    function DatepickerDemoCtrl() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
            vm.today = function() {
                vm.dt = new Date();
            };
            vm.today();

            vm.clear = function() {
                vm.dt = null;
            };

            // Disable weekend selection
            vm.disabled = function(date, mode) {
                return (mode === 'day' && (date.getDay() === 0 || date.getDay() === 6));
            };

            vm.toggleMin = function() {
                vm.minDate = vm.minDate ? null : new Date();
            };
            vm.toggleMin();

            vm.open = function($event) {
                $event.preventDefault();
                $event.stopPropagation();

                vm.opened = true;
            };


            vm.initDate = new Date('2019-10-20');
            vm.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
            vm.format = vm.formats[0];

            vm.dateOptions = {
                formatYear: 'yy',
                startingDay: 1,
                maxDate:"'2020-06-22'",
                showWeeks: false,
                datePickerPopup: vm.format
            };

        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('ModalController', ModalController);

    ModalController.$inject = ['$uibModal'];

    function ModalController($uibModal) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

            vm.open = function(size) {

                var modalInstance = $uibModal.open({
                    templateUrl: '/myModalContent.html',
                    controller: ModalInstanceCtrl,
                    size: size
                });

                var state = $('#modal-state');
                modalInstance.result.then(function() {
                    state.text('Modal dismissed with OK status');
                }, function() {
                    state.text('Modal dismissed with Cancel status');
                });
            };

            // Please note that $uibModalInstance represents a modal window (instance) dependency.
            // It is not the same as the $uibModal service used above.

            ModalInstanceCtrl.$inject = ['$scope', '$uibModalInstance'];

            function ModalInstanceCtrl($scope, $uibModalInstance) {

                $scope.ok = function() {
                    $uibModalInstance.close('closed');
                };

                $scope.cancel = function() {
                    $uibModalInstance.dismiss('cancel');
                };
            }
        }
    }

})();

(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('PaginationDemoCtrl', PaginationDemoCtrl);

    function PaginationDemoCtrl() {
        var vm = this;


        activate();

        ////////////////

        function activate() {
            vm.totalItems = 64;
            vm.currentPage = 4;

            vm.setPage = function(pageNo) {
                vm.currentPage = pageNo;
            };

            vm.pageChanged = function() {
                console.log('Page changed to: ' + vm.currentPage);
            };

            vm.maxSize = 5;
            vm.bigTotalItems = 175;
            vm.bigCurrentPage = 1;
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('PopoverDemoCtrl', PopoverDemoCtrl);

    function PopoverDemoCtrl() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
            vm.dynamicPopover = 'Hello, World!';
            vm.dynamicPopoverTitle = 'Title';
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('ProgressDemoCtrl', ProgressDemoCtrl);

    function ProgressDemoCtrl() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
            vm.max = 200;

            vm.random = function() {
                var value = Math.floor((Math.random() * 100) + 1);
                var type;

                if (value < 25) {
                    type = 'success';
                } else if (value < 50) {
                    type = 'info';
                } else if (value < 75) {
                    type = 'warning';
                } else {
                    type = 'danger';
                }

                vm.showWarning = (type === 'danger' || type === 'warning');

                vm.dynamic = value;
                vm.type = type;
            };
            vm.random();

            vm.randomStacked = function() {
                vm.stacked = [];
                var types = ['success', 'info', 'warning', 'danger'];

                for (var i = 0, n = Math.floor((Math.random() * 4) + 1); i < n; i++) {
                    var index = Math.floor((Math.random() * 4));
                    vm.stacked.push({
                        value: Math.floor((Math.random() * 30) + 1),
                        type: types[index]
                    });
                }
            };
            vm.randomStacked();
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('RatingDemoCtrl', RatingDemoCtrl);

    function RatingDemoCtrl() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
            vm.rate = 7;
            vm.max = 10;
            vm.isReadonly = false;

            vm.hoveringOver = function(value) {
                vm.overStar = value;
                vm.percent = 100 * (value / vm.max);
            };

            vm.ratingStates = [{
                stateOn: 'icon-2x ion-android-radio-button-on',
                stateOff: 'icon-2x ion-android-radio-button-off'
            }, {
                stateOn: 'icon-2x ion-android-star',
                stateOff: 'icon-2x ion-android-star-outline'
            }, {
                stateOn: 'icon-2x ion-android-folder',
                stateOff: 'icon-2x ion-android-folder-open'
            }];
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('TimepickerDemoCtrl', TimepickerDemoCtrl);

    function TimepickerDemoCtrl() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
            vm.mytime = new Date();

            vm.hstep = 1;
            vm.mstep = 15;

            vm.options = {
                hstep: [1, 2, 3],
                mstep: [1, 5, 10, 15, 25, 30]
            };

            vm.ismeridian = true;
            vm.toggleMode = function() {
                vm.ismeridian = !vm.ismeridian;
            };

            vm.update = function() {
                var d = new Date();
                d.setHours(14);
                d.setMinutes(0);
                vm.mytime = d;
            };

            vm.changed = function() {
                console.log('Time changed to: ' + vm.mytime);
            };

            vm.clear = function() {
                vm.mytime = null;
            };
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('TooltipDemoCtrl', TooltipDemoCtrl);

    function TooltipDemoCtrl() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
            vm.dynamicTooltip = 'Hello, World!';
            vm.dynamicTooltipText = 'dynamic';
            vm.htmlTooltip = '\'<i>I am so <b>bold</b> !</i>\'';

            vm.autoplace = function(context, source) {
                //return (predictTooltipTop(source) < 0) ?  "bottom": "top";
                var pos = 'top';
                if (predictTooltipTop(source) < 0)
                    pos = 'bottom';
                if (predictTooltipLeft(source) < 0)
                    pos = 'right';
                return pos;
            };

            // Predicts tooltip top position
            // based on the trigger element
            function predictTooltipTop(el) {
                var top = el.offsetTop;
                var height = 40; // asumes ~40px tooltip height

                while (el.offsetParent) {
                    el = el.offsetParent;
                    top += el.offsetTop;
                }
                return (top - height) - (window.pageYOffset);
            }

            // Predicts tooltip top position
            // based on the trigger element
            function predictTooltipLeft(el) {
                var left = el.offsetLeft;
                var width = el.offsetWidth;

                while (el.offsetParent) {
                    el = el.offsetParent;
                    left += el.offsetLeft;
                }
                return (left - width) - (window.pageXOffset);
            }
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('TypeaheadCtrl', TypeaheadCtrl);

    TypeaheadCtrl.$inject = ['$http'];

    function TypeaheadCtrl($http) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

            vm.selected = undefined;
            vm.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

            // Any function returning a promise object can be used to load values asynchronously
            vm.getLocation = function(val) {
                return $http.get('//maps.googleapis.com/maps/api/geocode/json', {
                    params: {
                        address: val
                    }
                }).then(function(res) {
                    var addresses = [];
                    angular.forEach(res.data.results, function(item) {
                        /*jshint -W106*/
                        addresses.push(item.formatted_address);
                    });
                    return addresses;
                });
            };

            vm.statesWithFlags = [{
                'name': 'Alabama',
                'flag': '5/5c/Flag_of_Alabama.svg/45px-Flag_of_Alabama.svg.png'
            }, {
                'name': 'Alaska',
                'flag': 'e/e6/Flag_of_Alaska.svg/43px-Flag_of_Alaska.svg.png'
            }, {
                'name': 'Arizona',
                'flag': '9/9d/Flag_of_Arizona.svg/45px-Flag_of_Arizona.svg.png'
            }, {
                'name': 'Arkansas',
                'flag': '9/9d/Flag_of_Arkansas.svg/45px-Flag_of_Arkansas.svg.png'
            }, {
                'name': 'California',
                'flag': '0/01/Flag_of_California.svg/45px-Flag_of_California.svg.png'
            }, {
                'name': 'Colorado',
                'flag': '4/46/Flag_of_Colorado.svg/45px-Flag_of_Colorado.svg.png'
            }, {
                'name': 'Connecticut',
                'flag': '9/96/Flag_of_Connecticut.svg/39px-Flag_of_Connecticut.svg.png'
            }, {
                'name': 'Delaware',
                'flag': 'c/c6/Flag_of_Delaware.svg/45px-Flag_of_Delaware.svg.png'
            }, {
                'name': 'Florida',
                'flag': 'f/f7/Flag_of_Florida.svg/45px-Flag_of_Florida.svg.png'
            }, {
                'name': 'Georgia',
                'flag': '5/54/Flag_of_Georgia_%28U.S._state%29.svg/46px-Flag_of_Georgia_%28U.S._state%29.svg.png'
            }, {
                'name': 'Hawaii',
                'flag': 'e/ef/Flag_of_Hawaii.svg/46px-Flag_of_Hawaii.svg.png'
            }, {
                'name': 'Idaho',
                'flag': 'a/a4/Flag_of_Idaho.svg/38px-Flag_of_Idaho.svg.png'
            }, {
                'name': 'Illinois',
                'flag': '0/01/Flag_of_Illinois.svg/46px-Flag_of_Illinois.svg.png'
            }, {
                'name': 'Indiana',
                'flag': 'a/ac/Flag_of_Indiana.svg/45px-Flag_of_Indiana.svg.png'
            }, {
                'name': 'Iowa',
                'flag': 'a/aa/Flag_of_Iowa.svg/44px-Flag_of_Iowa.svg.png'
            }, {
                'name': 'Kansas',
                'flag': 'd/da/Flag_of_Kansas.svg/46px-Flag_of_Kansas.svg.png'
            }, {
                'name': 'Kentucky',
                'flag': '8/8d/Flag_of_Kentucky.svg/46px-Flag_of_Kentucky.svg.png'
            }, {
                'name': 'Louisiana',
                'flag': 'e/e0/Flag_of_Louisiana.svg/46px-Flag_of_Louisiana.svg.png'
            }, {
                'name': 'Maine',
                'flag': '3/35/Flag_of_Maine.svg/45px-Flag_of_Maine.svg.png'
            }, {
                'name': 'Maryland',
                'flag': 'a/a0/Flag_of_Maryland.svg/45px-Flag_of_Maryland.svg.png'
            }, {
                'name': 'Massachusetts',
                'flag': 'f/f2/Flag_of_Massachusetts.svg/46px-Flag_of_Massachusetts.svg.png'
            }, {
                'name': 'Michigan',
                'flag': 'b/b5/Flag_of_Michigan.svg/45px-Flag_of_Michigan.svg.png'
            }, {
                'name': 'Minnesota',
                'flag': 'b/b9/Flag_of_Minnesota.svg/46px-Flag_of_Minnesota.svg.png'
            }, {
                'name': 'Mississippi',
                'flag': '4/42/Flag_of_Mississippi.svg/45px-Flag_of_Mississippi.svg.png'
            }, {
                'name': 'Missouri',
                'flag': '5/5a/Flag_of_Missouri.svg/46px-Flag_of_Missouri.svg.png'
            }, {
                'name': 'Montana',
                'flag': 'c/cb/Flag_of_Montana.svg/45px-Flag_of_Montana.svg.png'
            }, {
                'name': 'Nebraska',
                'flag': '4/4d/Flag_of_Nebraska.svg/46px-Flag_of_Nebraska.svg.png'
            }, {
                'name': 'Nevada',
                'flag': 'f/f1/Flag_of_Nevada.svg/45px-Flag_of_Nevada.svg.png'
            }, {
                'name': 'New Hampshire',
                'flag': '2/28/Flag_of_New_Hampshire.svg/45px-Flag_of_New_Hampshire.svg.png'
            }, {
                'name': 'New Jersey',
                'flag': '9/92/Flag_of_New_Jersey.svg/45px-Flag_of_New_Jersey.svg.png'
            }, {
                'name': 'New Mexico',
                'flag': 'c/c3/Flag_of_New_Mexico.svg/45px-Flag_of_New_Mexico.svg.png'
            }, {
                'name': 'New York',
                'flag': '1/1a/Flag_of_New_York.svg/46px-Flag_of_New_York.svg.png'
            }, {
                'name': 'North Carolina',
                'flag': 'b/bb/Flag_of_North_Carolina.svg/45px-Flag_of_North_Carolina.svg.png'
            }, {
                'name': 'North Dakota',
                'flag': 'e/ee/Flag_of_North_Dakota.svg/38px-Flag_of_North_Dakota.svg.png'
            }, {
                'name': 'Ohio',
                'flag': '4/4c/Flag_of_Ohio.svg/46px-Flag_of_Ohio.svg.png'
            }, {
                'name': 'Oklahoma',
                'flag': '6/6e/Flag_of_Oklahoma.svg/45px-Flag_of_Oklahoma.svg.png'
            }, {
                'name': 'Oregon',
                'flag': 'b/b9/Flag_of_Oregon.svg/46px-Flag_of_Oregon.svg.png'
            }, {
                'name': 'Pennsylvania',
                'flag': 'f/f7/Flag_of_Pennsylvania.svg/45px-Flag_of_Pennsylvania.svg.png'
            }, {
                'name': 'Rhode Island',
                'flag': 'f/f3/Flag_of_Rhode_Island.svg/32px-Flag_of_Rhode_Island.svg.png'
            }, {
                'name': 'South Carolina',
                'flag': '6/69/Flag_of_South_Carolina.svg/45px-Flag_of_South_Carolina.svg.png'
            }, {
                'name': 'South Dakota',
                'flag': '1/1a/Flag_of_South_Dakota.svg/46px-Flag_of_South_Dakota.svg.png'
            }, {
                'name': 'Tennessee',
                'flag': '9/9e/Flag_of_Tennessee.svg/46px-Flag_of_Tennessee.svg.png'
            }, {
                'name': 'Texas',
                'flag': 'f/f7/Flag_of_Texas.svg/45px-Flag_of_Texas.svg.png'
            }, {
                'name': 'Utah',
                'flag': 'f/f6/Flag_of_Utah.svg/45px-Flag_of_Utah.svg.png'
            }, {
                'name': 'Vermont',
                'flag': '4/49/Flag_of_Vermont.svg/46px-Flag_of_Vermont.svg.png'
            }, {
                'name': 'Virginia',
                'flag': '4/47/Flag_of_Virginia.svg/44px-Flag_of_Virginia.svg.png'
            }, {
                'name': 'Washington',
                'flag': '5/54/Flag_of_Washington.svg/46px-Flag_of_Washington.svg.png'
            }, {
                'name': 'West Virginia',
                'flag': '2/22/Flag_of_West_Virginia.svg/46px-Flag_of_West_Virginia.svg.png'
            }, {
                'name': 'Wisconsin',
                'flag': '2/22/Flag_of_Wisconsin.svg/45px-Flag_of_Wisconsin.svg.png'
            }, {
                'name': 'Wyoming',
                'flag': 'b/bc/Flag_of_Wyoming.svg/43px-Flag_of_Wyoming.svg.png'
            }];

        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.cards')
        .run(cardsRun);

    cardsRun.$inject = ['Menu'];

    function cardsRun(Menu) {

        var menuItem = {
            name: 'Cards',
            sref: 'app.cards',
            order: 2,
            // iconclass: 'ion-radio-waves',
            imgpath: 'app/img/icons/radio-waves.svg'
        };

        Menu.addItem(menuItem);

    }
})();

(function() {
    'use strict';

    angular
        .module('app.cards')
        .run(cardsRoute);

    cardsRoute.$inject = ['Router'];

    function cardsRoute(Router) {

        Router.state('app.cards', {
            url: '/cards',
            title: 'Cards',
            templateUrl: 'cards.html',
            require: ['angular-flot', 'easypiechart', 'sparkline']
        });
    }

})();

(function() {
    'use strict';

    angular
        .module('app.charts')
        .run(chartsRun);

    chartsRun.$inject = ['Menu'];

    function chartsRun(Menu) {

        var menuItem = {
            name: 'Charts',
            sref: 'app.charts',
            // iconclass: 'ion-connection-bars',
            imgpath: 'app/img/icons/connection-bars.svg',
            order: 3,
            subitems: [{
                name: 'Flot',
                sref: 'app.charts.flot'
            }, {
                name: 'Radial',
                sref: 'app.charts.pie'
            }, {
                name: 'Rickshaw',
                sref: 'app.charts.rickshaw'
            }]
        };

        Menu.addItem(menuItem);

    }
})();

(function() {
    'use strict';

    angular
        .module('app.charts')
        .run(chartsRoute);

    chartsRoute.$inject = ['Router'];
    function chartsRoute(Router){

        Router.state('app.charts', {
            url: '/charts',
            title: 'Charts',
            abstract: true,
            template: '<div ui-view class="ng-fadeInLeftShort"></div>'
        })
        .state('app.charts.flot', {
            url: '/flot',
            title: 'Charts Flot',
            templateUrl: 'flot.html',
            require: ['angular-flot']
        })
        .state('app.charts.pie', {
            url: '/radial',
            title: 'Charts Radial',
            templateUrl: 'radial.html',
            require: ['ui.knob', 'easypiechart']
        })
        .state('app.charts.rickshaw', {
            url: '/rickshaw',
            title: 'Charts Rickshaw',
            templateUrl: 'rickshaw.html',
            require: ['angular-rickshaw']
        })
        ;
    }

})();

(function() {
    'use strict';

    angular
        .module('app.charts')
        .controller('FlotChartController', FlotChartController);

    FlotChartController.$inject = ['$scope', 'ChartData', '$timeout', 'Colors'];

    function FlotChartController($scope, ChartData, $timeout, Colors) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

            // BAR
            // -----------------------------------
            vm.barData = ChartData.load('server/chart/bar.json');
            vm.barOptions = {
                series: {
                    bars: {
                        align: 'center',
                        lineWidth: 0,
                        show: true,
                        barWidth: 0.6,
                        fill: true,
                        fillColor: {
                            colors: [{
                                opacity: 0.8
                            }, {
                                opacity: 0.5
                            }]
                        }
                    }
                },
                grid: {
                    borderColor: 'rgba(162,162,162,.26)',
                    borderWidth: 1,
                    hoverable: true,
                    backgroundColor: 'transparent'
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, x, y) {
                        return x + ' : ' + y;
                    }
                },
                xaxis: {
                    tickColor: 'rgba(162,162,162,.26)',
                    font: { color: Colors.byName('blueGrey-200') },
                    mode: 'categories'
                },
                yaxis: {
                    position: ($scope.app.layout.rtl ? 'right' : 'left'),
                    tickColor: 'rgba(162,162,162,.26)',
                    font: { color: Colors.byName('blueGrey-200') }
                },
                shadowSize: 0
            };

            // BAR STACKED
            // -----------------------------------
            vm.barStackeData = ChartData.load('server/chart/barstacked.json');
            vm.barStackedOptions = {
                series: {
                    stack: true,
                    bars: {
                        align: 'center',
                        lineWidth: 0,
                        show: true,
                        barWidth: 0.6,
                        fill: 0.9
                    }
                },
                grid: {
                    borderColor: 'rgba(162,162,162,.26)',
                    borderWidth: 1,
                    hoverable: true,
                    backgroundColor: 'transparent'
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, x, y) {
                        return x + ' : ' + y;
                    }
                },
                xaxis: {
                    tickColor: 'rgba(162,162,162,.26)',
                    font: { color: Colors.byName('blueGrey-200') },
                    mode: 'categories'
                },
                yaxis: {
                    min: 0,
                    max: 200, // optional: use it for a clear represetation
                    position: ($scope.app.layout.rtl ? 'right' : 'left'),
                    tickColor: 'rgba(162,162,162,.26)',
                    font: { color: Colors.byName('blueGrey-200') }
                },
                shadowSize: 0
            };

            // SPLINE
            // -----------------------------------
            vm.splineData = ChartData.load('server/chart/spline.json');
            vm.splineOptions = {
                series: {
                    lines: {
                        show: false
                    },
                    points: {
                        show: true,
                        radius: 2
                    },
                    splines: {
                        show: true,
                        tension: 0.4,
                        lineWidth: 1,
                        fill: 1
                    }
                },
                grid: {
                    borderColor: 'rgba(162,162,162,.26)',
                    borderWidth: 1,
                    hoverable: true,
                    backgroundColor: 'transparent'
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, x, y) {
                        return x + ' : ' + y;
                    }
                },
                xaxis: {
                    tickColor: 'rgba(162,162,162,.26)',
                    font: { color: Colors.byName('blueGrey-200') },
                    mode: 'categories'
                },
                yaxis: {
                    min: 0,
                    max: 150, // optional: use it for a clear represetation
                    tickColor: 'rgba(162,162,162,.26)',
                    font: { color: Colors.byName('blueGrey-200') },
                    position: ($scope.app.layout.rtl ? 'right' : 'left'),
                    tickFormatter: function(v) {
                        return v /* + ' visitors'*/ ;
                    }
                },
                shadowSize: 0
            };

            // AREA
            // -----------------------------------
            vm.areaData = ChartData.load('server/chart/area.json');
            vm.areaOptions = {
                series: {
                    lines: {
                        show: true,
                        fill: true,
                        fillColor: {
                            colors: [{
                                opacity: 0.5
                            }, {
                                opacity: 0.9
                            }]
                        }
                    },
                    points: {
                        show: false
                    }
                },
                grid: {
                    borderColor: 'rgba(162,162,162,.26)',
                    borderWidth: 1,
                    hoverable: true,
                    backgroundColor: 'transparent'
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, x, y) {
                        return x + ' : ' + y;
                    }
                },
                xaxis: {
                    tickColor: 'rgba(162,162,162,.26)',
                    font: { color: Colors.byName('blueGrey-200') },
                    mode: 'categories'
                },
                yaxis: {
                    min: 0,
                    max: 150,
                    tickColor: 'rgba(162,162,162,.26)',
                    font: { color: Colors.byName('blueGrey-200') },
                    position: ($scope.app.layout.rtl ? 'right' : 'left')
                },
                shadowSize: 0
            };

            // LINE
            // -----------------------------------
            vm.lineData = ChartData.load('server/chart/line.json');
            vm.lineOptions = {
                series: {
                    lines: {
                        show: true,
                        fill: 0.01
                    },
                    points: {
                        show: true,
                        radius: 4
                    }
                },
                grid: {
                    borderColor: 'rgba(162,162,162,.26)',
                    borderWidth: 1,
                    hoverable: true,
                    backgroundColor: 'transparent'
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, x, y) {
                        return x + ' : ' + y;
                    }
                },
                xaxis: {
                    tickColor: 'rgba(162,162,162,.26)',
                    font: { color: Colors.byName('blueGrey-200') },
                    mode: 'categories'
                },
                yaxis: {
                    position: ($scope.app.layout.rtl ? 'right' : 'left'),
                    tickColor: 'rgba(162,162,162,.26)',
                    font: { color: Colors.byName('blueGrey-200') }
                },
                shadowSize: 0
            };

            // PIE
            // -----------------------------------
            vm.pieData = [{
                'label': 'CSS',
                'color': '#009688',
                'data': 40
            }, {
                'label': 'LESS',
                'color': '#FFC107',
                'data': 90
            }, {
                'label': 'SASS',
                'color': '#FF7043',
                'data': 75
            }];
            vm.pieOptions = {
                series: {
                    pie: {
                        show: true,
                        innerRadius: 0,
                        label: {
                            show: true,
                            radius: 0.8,
                            formatter: function(label, series) {
                                return '<div class="flot-pie-label">' +
                                    //label + ' : ' +
                                    Math.round(series.percent) +
                                    '%</div>';
                            },
                            background: {
                                opacity: 0.8,
                                color: '#222'
                            }
                        }
                    }
                }
            };

            // DONUT
            // -----------------------------------
            vm.donutData = [{
                'color': '#4CAF50',
                'data': 60,
                'label': 'Coffee'
            }, {
                'color': '#009688',
                'data': 90,
                'label': 'CSS'
            }, {
                'color': '#FFC107',
                'data': 50,
                'label': 'LESS'
            }, {
                'color': '#FF7043',
                'data': 80,
                'label': 'Jade'
            }, {
                'color': '#3949AB',
                'data': 116,
                'label': 'AngularJS'
            }];
            vm.donutOptions = {
                series: {
                    pie: {
                        show: true,
                        innerRadius: 0.5 // This makes the donut shape
                    }
                }
            };

            // REALTIME
            // -----------------------------------
            vm.realTimeOptions = {
                series: {
                    lines: {
                        show: true,
                        fill: true,
                        fillColor: {
                            colors: ['#3F51B5', '#3F51B5']
                        }
                    },
                    shadowSize: 0 // Drawing is faster without shadows
                },
                grid: {
                    show: false,
                    borderWidth: 0,
                    minBorderMargin: 20,
                    labelMargin: 10
                },
                xaxis: {
                    tickFormatter: function() {
                        return '';
                    }
                },
                yaxis: {
                    min: 0,
                    max: 110
                },
                legend: {
                    show: true
                },
                colors: ['#3F51B5']
            };

            // Generate random data for realtime demo
            var data = [],
                totalPoints = 300;

            update();

            function getRandomData() {
                if (data.length > 0)
                    data = data.slice(1);
                // Do a random walk
                while (data.length < totalPoints) {
                    var prev = data.length > 0 ? data[data.length - 1] : 50,
                        y = prev + Math.random() * 10 - 5;
                    if (y < 0) {
                        y = 0;
                    } else if (y > 100) {
                        y = 100;
                    }
                    data.push(y);
                }
                // Zip the generated y values with the x values
                var res = [];
                for (var i = 0; i < data.length; ++i) {
                    res.push([i, data[i]]);
                }
                return [res];
            }

            function update() {
                vm.realTimeData = getRandomData();
                $timeout(update, 30);
            }
            // end random data generation

        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.charts')
        .service('ChartData', ChartData);

    ChartData.$inject = ['$resource'];

    function ChartData($resource) {
        this.load = load;

        ////////////////

        var opts = {
            get: {
                method: 'GET',
                isArray: true
            }
        };

        function load(source) {
            return $resource(source, {}, opts).get();
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.charts')
        .controller('RadialChartsController', RadialChartsController);

    /*jshint -W069*/
    RadialChartsController.$inject = ['Colors'];

    function RadialChartsController(Colors) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

            // KNOB Charts

            vm.knobLoaderData1 = 80;
            vm.knobLoaderOptions1 = {
                width: '50%', // responsive
                displayInput: true,
                thickness: 0.1,
                fgColor: Colors.byName('info'),
                bgColor: 'rgba(162,162,162, .09)'
            };

            vm.knobLoaderData2 = 45;
            vm.knobLoaderOptions2 = {
                width: '50%', // responsive
                displayInput: true,
                thickness: 1,
                inputColor: '#fff',
                fgColor: Colors.byName('deepPurple-500'),
                bgColor: Colors.byName('green-500'),
                readOnly: true
            };

            vm.knobLoaderData3 = 30;
            vm.knobLoaderOptions3 = {
                width: '50%', // responsive
                displayInput: true,
                fgColor: Colors.byName('pink-500'),
                bgColor: 'rgba(162,162,162, .09)',
                displayPrevious: true,
                thickness: 0.1,
                lineCap: 'round'
            };

            vm.knobLoaderData4 = 20;
            vm.knobLoaderOptions4 = {
                width: '50%', // responsive
                displayInput: true,
                fgColor: Colors.byName('info'),
                bgColor: 'rgba(162,162,162, .09)',
                angleOffset: -125,
                angleArc: 250
            };

            // Easy Pie Charts

            vm.piePercent1 = 85;
            vm.piePercent2 = 45;
            vm.piePercent3 = 25;
            vm.piePercent4 = 60;

            vm.pieOptions1 = {
                animate: {
                    duration: 800,
                    enabled: true
                },
                barColor: Colors.byName('success'),
                trackColor: false,
                scaleColor: false,
                lineWidth: 10,
                lineCap: 'circle'
            };

            vm.pieOptions2 = {
                animate: {
                    duration: 800,
                    enabled: true
                },
                barColor: Colors.byName('warning'),
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                lineCap: 'circle'
            };

            vm.pieOptions3 = {
                animate: {
                    duration: 800,
                    enabled: true
                },
                barColor: Colors.byName('danger'),
                trackColor: false,
                scaleColor: Colors.byName('gray'),
                lineWidth: 15,
                lineCap: 'circle'
            };

            vm.pieOptions4 = {
                animate: {
                    duration: 800,
                    enabled: true
                },
                barColor: Colors.byName('danger'),
                trackColor: 'rgba(162,162,162, .09)',
                scaleColor: Colors.byName('gray-dark'),
                lineWidth: 15,
                lineCap: 'circle'
            };

            vm.randomize = function(type) {
                if (type === 'easy') {
                    vm.piePercent1 = random();
                    vm.piePercent2 = random();
                    vm.piePercent3 = random();
                    vm.piePercent4 = random();
                }
                if (type === 'knob') {
                    vm.knobLoaderData1 = random();
                    vm.knobLoaderData2 = random();
                    vm.knobLoaderData3 = random();
                    vm.knobLoaderData4 = random();
                }
            };

            function random() {
                return Math.floor((Math.random() * 100) + 1);
            }

        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.charts')
        .controller('ChartRickshawController', ChartRickshawController);

    ChartRickshawController.$inject = ['Colors'];

    function ChartRickshawController(Colors) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

            vm.renderers = [{
                id: 'area',
                name: 'Area'
            }, {
                id: 'line',
                name: 'Line'
            }, {
                id: 'bar',
                name: 'Bar'
            }, {
                id: 'scatterplot',
                name: 'Scatterplot'
            }];

            vm.palettes = [
                'spectrum14',
                'spectrum2000',
                'spectrum2001',
                'colorwheel',
                'cool',
                'classic9',
                'munin'
            ];

            vm.rendererChanged = function(id) {
                vm['options' + id] = {
                    renderer: vm['renderer' + id].id
                };
            };

            vm.paletteChanged = function(id) {
                vm['features' + id] = {
                    palette: vm['palette' + id]
                };
            };

            vm.changeSeriesData = function(id) {
                var seriesList = [];
                for (var i = 0; i < 3; i++) {
                    var series = {
                        name: 'Series ' + (i + 1),
                        data: []
                    };
                    for (var j = 0; j < 10; j++) {
                        series.data.push({
                            x: j,
                            y: Math.random() * 20
                        });
                    }
                    seriesList.push(series);
                    vm['series' + id][i] = series;
                }
                //vm['series' + id] = seriesList;
            };

            vm.series0 = [];

            vm.options0 = {
                renderer: 'area'
            };

            vm.renderer0 = vm.renderers[0];
            vm.palette0 = vm.palettes[0];

            vm.rendererChanged(0);
            vm.paletteChanged(0);
            vm.changeSeriesData(0);

            // Graph 2

            var seriesData = [
                [],
                [],
                []
            ];
            var random = new Rickshaw.Fixtures.RandomData(150);

            for (var i = 0; i < 150; i++) {
                random.addData(seriesData);
            }

            vm.series2 = [{
                color: Colors.byName('indigo-700'),
                data: seriesData[0],
                name: 'New York'
            }, {
                color: Colors.byName('primary'),
                data: seriesData[1],
                name: 'London'
            }, {
                color: Colors.byName('info'),
                data: seriesData[2],
                name: 'Tokyo'
            }];
            vm.options2 = {
                renderer: 'area'
            };

            vm.series3 = [{
                color: Colors.byName('green-700'),
                data: seriesData[0],
                name: 'New York'
            }, {
                color: Colors.byName('green-500'),
                data: seriesData[1],
                name: 'London'
            }, {
                color: Colors.byName('green-200'),
                data: seriesData[2],
                name: 'Tokyo'
            }];
            vm.options3 = {
                renderer: 'bar'
            };
            // Scatterplot


            var seriesData2 = [
                [],
                [],
                []
            ];
            var random2 = new Rickshaw.Fixtures.RandomData(150);

            for (var j = 0; j < 200; j++) {
                random2.addData(seriesData2);
            }
            vm.series4 = [{
                color: Colors.byName('pink-700'),
                data: seriesData2[0],
                name: 'New York'
            }, {
                color: Colors.byName('pink-500'),
                data: seriesData2[1],
                name: 'London'
            }, {
                color: Colors.byName('pink-200'),
                data: seriesData2[2],
                name: 'Tokyo'
            }];
            vm.options4 = {
                height: 170,
                renderer: 'scatterplot'
            };
            vm.features4 = {
                legend: {
                    toggle: true,
                    highlight: true
                },
                hover: {
                    xFormatter: function(x) {
                        return 't=' + x;
                    },
                    yFormatter: function(y) {
                        return '$' + y;
                    }
                }
            };

        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.charts')
        .directive('sparkline', sparkline);

    sparkline.$inject = ['$timeout', '$window'];

    function sparkline($timeout, $window) {

        return {
            restrict: 'EA',
            scope: {
                'values': '=?',
                'options': '=?'
            },
            link: link
        };

        function link(scope, element) {
            var $element = $(element);
            var values = scope.values;
            var options = scope.options;

            // timeouts executes after interpolation
            $timeout(function() {
                options = $.extend({}, options, $element.data());
                if (!values || !options) return;
                initSparkLine();
            });

            function initSparkLine() {

                options.type = options.type || 'bar'; // default chart is bar
                options.disableHiddenCheck = true;

                $element.sparkline(values, options);

                if (options.resize) {
                    var tm;
                    $($window).resize(function() {
                        // don't allow multiple timers
                        $timeout.cancel(tm);
                        tm = $timeout(function() {
                            $element.sparkline(values, options);
                        });
                    });
                }
            }
        }
    }

})();

(function() {
    'use strict';

    angular
        .module('app.core')
        .config(coreConfig);

    coreConfig.$inject = ['$controllerProvider', '$compileProvider', '$filterProvider', '$provide'];

    function coreConfig($controllerProvider, $compileProvider, $filterProvider, $provide) {

        var core = angular.module('app.core');
        // registering components after bootstrap
        core.controller = $controllerProvider.register;
        core.directive = $compileProvider.directive;
        core.filter = $filterProvider.register;
        core.factory = $provide.factory;
        core.service = $provide.service;
        core.constant = $provide.constant;
        core.value = $provide.value;

    }

})();

(function() {
    'use strict';

    angular
        .module('app.core')
        .constant('APP_MEDIAQUERY', {
            'desktopLG': 1200,
            'desktop': 992,
            'tablet': 767,
            'mobile': 480
        });

})();

(function() {
    'use strict';

    angular
        .module('app.core')
        .run(coreRoute);

    coreRoute.$inject = ['Router'];

    function coreRoute(Router) {

        Router.state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'core.layout.html',
            require: ['icons', 'ng-mfb', 'md-colors', 'screenfull']
        });
    }

})();

(function() {
    'use strict';

    angular
        .module('app.core')
        .run(coreRun);

    coreRun.$inject = ['$rootScope'];

    function coreRun($rootScope) {

        $rootScope.theme = function() {
            return $rootScope.app.theme;
        }

        $rootScope.layout = function() {
            return [

                $rootScope.sidebarVisible ? 'sidebar-visible' : '',
                $rootScope.app.sidebar.offcanvas ? 'sidebar-offcanvas' : '',
                $rootScope.sidebarOffcanvasVisible ? 'offcanvas-visible' : ''

            ].join(' ');

        }
    }

})();
(function() {
    'use strict';

    angular
        .module('app.dashboard')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$scope', '$timeout', '$window', 'Colors', 'APP_MEDIAQUERY'];

    function DashboardController($scope, $timeout, $window, Colors, APP_MEDIAQUERY) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
            var $win = angular.element($window);

            // Main flot chart responsive
            // --------------------------
            // Checking the viewport size we can reduce the data set to display
            // less information on mobile screens with less space
            // Note: The resize technique could be expensive in some cases.

            prepareChartData();
            $win.resize(prepareChartData);

            var tm;

            function prepareChartData() {
                // don't allow multiple timers
                $timeout.cancel(tm);
                // check for mobiles
                if ($window.innerWidth < APP_MEDIAQUERY.tablet) {
                    tm = $timeout(function() {
                        vm.chartData = getChartData('mobile');
                    });
                } else {
                    tm = $timeout(function() {
                        vm.chartData = getChartData();
                    });
                }
            }

            function getChartData(target) {
                var data = [
                {
                    'label': 'Clicks',
                    'color': Colors.byName('purple-300'),
                    data: [
                        ['1', 40],
                        ['2', 50],
                        ['3', 40],
                        ['4', 50],
                        ['5', 66],
                        ['6', 66],
                        ['7', 76],
                        ['8', 96],
                        ['9', 90],
                        ['10', 105],
                        ['11', 125],
                        ['12', 135]

                    ]
                },
                {
                    'label': 'Unique',
                    'color': Colors.byName('green-400'),
                    data: [
                        ['1', 30],
                        ['2', 40],
                        ['3', 20],
                        ['4', 40],
                        ['5', 80],
                        ['6', 90],
                        ['7', 70],
                        ['8', 60],
                        ['9', 90],
                        ['10', 150],
                        ['11', 130],
                        ['12', 160]
                    ]
                }, {
                    'label': 'Recurrent',
                    'color': Colors.byName('blue-500'),
                    data: [
                        ['1', 10],
                        ['2', 20],
                        ['3', 10],
                        ['4', 20],
                        ['5', 6],
                        ['6', 10],
                        ['7', 32],
                        ['8', 26],
                        ['9', 20],
                        ['10', 35],
                        ['11', 30],
                        ['12', 56]

                    ]
                }];
                // reduce the data set when target is mobile
                if (target === 'mobile') {
                    data[0].data = data[0].data.slice(-6);
                    data[1].data = data[1].data.slice(-6);
                    data[2].data = data[2].data.slice(-6);
                }
                return data;
            }

            // first load
            vm.chartData = getChartData();
            // main chart options
            vm.chartOptions = {
                series: {
                    lines: {
                        show: false
                    },
                    points: {
                        show: false,
                        radius: 3
                    },
                    splines: {
                        show: true,
                        tension: 0.39,
                        lineWidth: 5,
                        fill: 1,
                        fillColor: Colors.byName('primary')
                    }
                },
                grid: {
                    borderColor: '#eee',
                    borderWidth: 0,
                    hoverable: true,
                    backgroundColor: 'transparent'
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, x, y) {
                        return x + ' : ' + y;
                    }
                },
                xaxis: {
                    tickColor: 'transparent',
                    mode: 'categories',
                    font: { color: Colors.byName('blueGrey-200') }
                },
                yaxis: {
                    show: false,
                    min: 0,
                    max: 220, // optional: use it for a clear representation
                    tickColor: 'transparent',
                    font: { color: Colors.byName('blueGrey-200') },
                    //position: 'right' or 'left',
                    tickFormatter: function(v) {
                        return v /* + ' visitors'*/ ;
                    }
                },
                shadowSize: 0
            };

            // Bar chart stacked
            // ------------------------
            vm.stackedChartData = [{
                data: [
                    [1, 45],
                    [2, 42],
                    [3, 45],
                    [4, 43],
                    [5, 45],
                    [6, 47],
                    [7, 45],
                    [8, 42],
                    [9, 45],
                    [10, 43]
                ]
            }, {
                data: [
                    [1, 35],
                    [2, 35],
                    [3, 17],
                    [4, 29],
                    [5, 10],
                    [6, 7],
                    [7, 35],
                    [8, 35],
                    [9, 17],
                    [10, 29]
                ]
            }];
            vm.stackedChartOptions = {
                bars: {
                    show: true,
                    fill: true,
                    barWidth: 0.3,
                    lineWidth: 1,
                    align: 'center',
                    // order : 1,
                    fillColor: {
                        colors: [{
                            opacity: 1
                        }, {
                            opacity: 1
                        }]
                    }
                },
                colors: [Colors.byName('blue-100'), Colors.byName('blue-500')],
                series: {
                    shadowSize: 3
                },
                xaxis: {
                    show: true,
                    position: 'bottom',
                    ticks: 10,
                    font: { color: Colors.byName('blueGrey-200') }
                },
                yaxis: {
                    show: false,
                    min: 0,
                    max: 60,
                    font: { color: Colors.byName('blueGrey-200') }
                },
                grid: {
                    hoverable: true,
                    clickable: true,
                    borderWidth: 0,
                    color: 'rgba(120,120,120,0.5)'
                },
                tooltip: true,
                tooltipOpts: {
                    content: 'Value %x.0 is %y.0',
                    defaultTheme: false,
                    shifts: {
                        x: 0,
                        y: -20
                    }
                }
            };

            // Flot bar chart
            // ------------------
            vm.barChartOptions = {
                series: {
                    bars: {
                        show: true,
                        fill: 1,
                        barWidth: 0.2,
                        lineWidth: 0,
                        align: 'center'
                    },
                    highlightColor: 'rgba(255,255,255,0.2)'
                },
                grid: {
                    hoverable: true,
                    clickable: true,
                    borderWidth: 0,
                    color: '#8394a9'
                },
                tooltip: true,
                tooltipOpts: {
                    content: function getTooltip(label, x, y) {
                        return 'Visitors for ' + x + ' was ' + (y * 1000);
                    }
                },
                xaxis: {
                    tickColor: 'transparent',
                    mode: 'categories',
                    font: { color: Colors.byName('blueGrey-200') }
                },
                yaxis: {
                    tickColor: 'transparent',
                    font: { color: Colors.byName('blueGrey-200') }
                },
                legend: {
                    show: false
                },
                shadowSize: 0
            };

            vm.barChartData = [{
                'label': 'New',
                bars: {
                    order: 0,
                    fillColor: Colors.byName('primary')
                },
                data: [
                    ['Jan', 20],
                    ['Feb', 15],
                    ['Mar', 25],
                    ['Apr', 30],
                    ['May', 40],
                    ['Jun', 35]
                ]
            }, {
                'label': 'Recurrent',
                bars: {
                    order: 1,
                    fillColor: Colors.byName('green-400')
                },
                data: [
                    ['Jan', 35],
                    ['Feb', 25],
                    ['Mar', 45],
                    ['Apr', 25],
                    ['May', 30],
                    ['Jun', 15]
                ]
            }];

            // Small flot chart
            // ---------------------
            vm.chartTaskData = [{
                'label': 'Total',
                color: Colors.byName('primary'),
                data: [
                    ['Jan', 14],
                    ['Feb', 14],
                    ['Mar', 12],
                    ['Apr', 16],
                    ['May', 13],
                    ['Jun', 14],
                    ['Jul', 19]
                    //4, 4, 3, 5, 3, 4, 6
                ]
            }];
            vm.chartTaskOptions = {
                series: {
                    lines: {
                        show: false
                    },
                    points: {
                        show: false
                    },
                    splines: {
                        show: true,
                        tension: 0.4,
                        lineWidth: 3,
                        fill: 1
                    },
                },
                legend: {
                    show: false
                },
                grid: {
                    show: false,
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, x, y) {
                        return x + ' : ' + y;
                    }
                },
                xaxis: {
                    tickColor: '#fcfcfc',
                    mode: 'categories'
                },
                yaxis: {
                    min: 0,
                    max: 30, // optional: use it for a clear representation
                    tickColor: '#eee',
                    //position: 'right' or 'left',
                    tickFormatter: function(v) {
                        return v /* + ' visitors'*/ ;
                    }
                },
                shadowSize: 0
            };

            // Easy Pie charts
            // -----------------

            vm.percentTask = 85;
            vm.pieOptionsTask = {
                lineWidth: 6,
                trackColor: 'transparent',
                barColor: Colors.byName('primary'),
                scaleColor: false,
                size: 90,
                lineCap: 'round',
                animate: {
                    duration: 3000,
                    enabled: true
                }
            };

            // Date picker

            vm.today = function() {
                vm.dt = new Date();
            };
            vm.today();

            var tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            var afterTomorrow = new Date();
            afterTomorrow.setDate(tomorrow.getDate() + 2);

            vm.events = [{
                date: tomorrow,
                status: 'full'
            }, {
                date: afterTomorrow,
                status: 'partially'
            }];

            vm.getDayClass = function(data) {
                var date = data.date,
                  mode = data.mode;
                if (mode === 'day') {
                    var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

                    for (var i = 0; i < vm.events.length; i++) {
                        var currentDay = new Date(vm.events[i].date).setHours(0, 0, 0, 0);

                        if (dayToCheck === currentDay) {
                            return vm.events[i].status;
                        }
                    }
                }

                return '';
            };

            vm.dpOptions = {
                showWeeks: false,
                customClass: vm.getDayClass
            }

            // Vector Map
            // -----------------

            // USA Map
            vm.usa_markers = [{
                latLng: [40.71, -74.00],
                name: 'New York'
            }, {
                latLng: [34.05, -118.24],
                name: 'Los Angeles'
            }, {
                latLng: [41.87, -87.62],
                name: 'Chicago',
                style: {
                    fill: Colors.byName('pink-500'),
                    r: 15
                }
            }, {
                latLng: [29.76, -95.36],
                name: 'Houston',
                style: {
                    fill: Colors.byName('purple-500'),
                    r: 10
                }
            }, {
                latLng: [39.95, -75.16],
                name: 'Philadelphia'
            }, {
                latLng: [38.90, -77.03],
                name: 'Washington'
            }, {
                latLng: [37.36, -122.03],
                name: 'Silicon Valley',
                style: {
                    fill: Colors.byName('green-500'),
                    r: 20
                }
            }];

            vm.usa_options = {
                map: 'us_mill_en',
                normalizeFunction: 'polynomial',
                backgroundColor: '#fff',
                regionsSelectable: false,
                markersSelectable: false,
                zoomButtons: false,
                zoomOnScroll: false,
                regionStyle: {
                    initial: {
                        fill: Colors.byName('blueGrey-200')
                    },
                    hover: {
                        fill: Colors.byName('gray-light'),
                        stroke: '#fff'
                    },
                },
                markerStyle: {
                    initial: {
                        fill: Colors.byName('blue-500'),
                        stroke: '#fff',
                        r: 10
                    },
                    hover: {
                        fill: Colors.byName('orange-500'),
                        stroke: '#fff'
                    }
                }
            };

            // Sparklines
            vm.sparkValue1 = [4, 4, 3, 5, 3, 4, 6, 5, 3, 2, 3, 4, 6];
            vm.sparkValue2 = [2, 3, 4, 6, 5, 4, 3, 5, 4, 3, 4, 3, 4, 5];
            vm.sparkValue3 = [4, 4, 3, 5, 3, 4, 6, 5, 3, 2, 3, 4, 6];
            vm.sparkValue4 = [6, 5, 4, 3, 5, 4, 3, 4, 3, 4, 3, 2, 2];
            vm.sparkOpts = {
                type: 'line',
                height: 20,
                width: '70',
                lineWidth: 2,
                valueSpots: {
                    '0:': Colors.byName('blue-700'),
                },
                lineColor: Colors.byName('blue-700'),
                spotColor: Colors.byName('blue-700'),
                fillColor: 'transparent',
                highlightLineColor: Colors.byName('blue-700'),
                spotRadius: 0
            };

        } //activate()
    }
})();
(function() {
    'use strict';

    angular
        .module('app.dashboard')
        .run(dashboardRun);
    dashboardRun.$inject = ['Menu'];

    function dashboardRun(Menu) {

        var menuItem = {
            name: 'Dashboard',
            sref: 'app.dashboard',
            // iconclass: 'ion-aperture',
            imgpath: 'app/img/icons/aperture.svg',
            order: 1,
            label: {
                count: 2,
                classname: 'badge bg-success'
            }
        };

        Menu.addItem(menuItem);

    }
})();

(function() {
    'use strict';

    angular
        .module('app.dashboard')
        .run(dashboardRoute);

    dashboardRoute.$inject = ['Router'];

    function dashboardRoute(Router) {

        Router.state('app.dashboard', {
            url: '/dashboard',
            title: 'Dashboard',
            templateUrl: 'dashboard.html',
            require: ['angular-flot', 'easypiechart', 'sparkline', 'vector-map', 'vector-map-maps']
        });
    }

})();

(function() {
    'use strict';

    angular
        .module('app.elements')
        .run(elementsRun);
    elementsRun.$inject = ['Menu'];

    function elementsRun(Menu) {

        var menuItem = {
            name: 'Elements',
            sref: 'app.elements',
            // iconclass: 'ion-levels',
            imgpath: 'app/img/icons/levels.svg',
            order: 6,
            subitems: [{
                name: 'Colors',
                sref: 'app.elements.colors'
            }, {
                name: 'Whiteframes',
                sref: 'app.elements.whiteframes'
            }, {
                name: 'Lists',
                sref: 'app.elements.lists'
            }, {
                name: 'Bootstrapui',
                sref: 'app.elements.bootstrapui'
            }, {
                name: 'Buttons',
                sref: 'app.elements.buttons'
            }, {
                name: 'Sweet-alert',
                sref: 'app.elements.sweet-alert'
            }, {
                name: 'Spinners',
                sref: 'app.elements.spinners'
            }, {
                name: 'Navtree',
                sref: 'app.elements.navtree'
            }, {
                name: 'Nestable',
                sref: 'app.elements.nestable'
            }, {
                name: 'Grid',
                sref: 'app.elements.grid'
            }, {
                name: 'Grid Masonry',
                sref: 'app.elements.grid-masonry-deck'
            }, {
                name: 'Typography',
                sref: 'app.elements.typography'
            }, {
                name: 'Icons',
                sref: 'app.elements.icons'
            }, {
                name: 'Utilities',
                sref: 'app.elements.utilities'
            }]
        };

        Menu.addItem(menuItem);

    }
})();

(function() {
    'use strict';

    angular
        .module('app.elements')
        .run(elementsRoute);

    elementsRoute.$inject = ['Router'];

    function elementsRoute(Router) {

        Router.state('app.elements', {
                url: '/ui',
                abstract: true,
                template: '<div ui-view class="ng-fadeInLeftShort"></div>'
            })
            .state('app.elements.colors', {
                url: '/colors',
                title: 'UI Colors',
                templateUrl: 'colors.html'
            })
            .state('app.elements.whiteframes', {
                url: '/whiteframes',
                title: 'Whiteframes',
                templateUrl: 'whiteframes.html'
            })
            .state('app.elements.lists', {
                url: '/lists',
                title: 'Lists',
                templateUrl: 'lists.html'
            })
            .state('app.elements.bootstrapui', {
                url: '/bootstrapui',
                title: 'Bootstrapui',
                templateUrl: 'bootstrapui.html'
            })
            .state('app.elements.buttons', {
                url: '/buttons',
                title: 'Buttons',
                templateUrl: 'buttons.html'
            })
            .state('app.elements.sweet-alert', {
                url: '/sweet-alert',
                title: 'Sweet-alert',
                templateUrl: 'sweetalert.html',
                require: ['oitozero.ngSweetAlert']
            })
            .state('app.elements.spinners', {
                url: '/spinners',
                title: 'Spinners',
                templateUrl: 'spinners.html',
                require: ['the-cormoran.angular-loaders']
            })
            .state('app.elements.navtree', {
                url: '/navtree',
                title: 'Navtree',
                templateUrl: 'navtree.html',
                require: ['angularBootstrapNavTree']
            })
            .state('app.elements.nestable', {
                url: '/nestable',
                title: 'Nestable',
                templateUrl: 'nestable.html',
                require: ['ng-nestable']
            })
            .state('app.elements.grid', {
                url: '/grid',
                title: 'Grid',
                templateUrl: 'grid.html'
            })
            .state('app.elements.grid-masonry-deck', {
                url: '/grid-masonry-deck',
                title: 'Grid Masonry',
                templateUrl: 'grid-masonry-deck.html',
                require: ['akoenig.deckgrid']
            })
            .state('app.elements.typography', {
                url: '/typography',
                title: 'Typography',
                templateUrl: 'typography.html'
            })
            .state('app.elements.icons', {
                url: '/icons',
                title: 'Icons',
                templateUrl: 'icons.html'
            })
            .state('app.elements.utilities', {
                url: '/utilities',
                title: 'Utilities',
                templateUrl: 'utilities.html'
            });
    }

})();

(function() {
    'use strict';

    angular
        .module('app.elements')
        .controller('MasonryDeckController', MasonryDeckController)
        .directive('imageloaded', imageloaded); // required by demo

    MasonryDeckController.$inject = ['Router'];

    function MasonryDeckController(Router) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

            vm.viewpath = Router.viewpath;

            vm.photos = [
                {id: 'photo-1', name: 'Awesome photo', src: 'app/img/user/01.jpg'},
                {id: 'photo-2', name: 'Great photo', src: 'app/img/user/02.jpg'},
                {id: 'photo-3', name: 'Strange photo', src: 'app/img/user/06.jpg'},
                {id: 'photo-4', name: 'A photo?', src: 'app/img/user/03.jpg'},
                {id: 'photo-5', name: 'What a photo', src: 'app/img/user/04.jpg'},
                {id: 'photo-6', name: 'Silly photo', src: 'app/img/user/02.jpg'},
                {id: 'photo-7', name: 'Weird photo', src: 'app/img/user/01.jpg'},
                {id: 'photo-8', name: 'Modern photo', src: 'app/img/user/07.jpg'},
                {id: 'photo-9', name: 'Classical photo', src: 'app/img/user/06.jpg'},
                {id: 'photo-10', name: 'Dynamic photo', src: 'app/img/user/04.jpg'},
                {id: 'photo-11', name: 'Neat photo', src: 'app/img/user/03.jpg'},
                {id: 'photo-12', name: 'Bumpy photo', src: 'app/img/user/01.jpg'},
                {id: 'photo-13', name: 'Brilliant photo', src: 'app/img/user/05.jpg'},
                {id: 'photo-14', name: 'Excellent photo', src: 'app/img/user/04.jpg'},
                {id: 'photo-15', name: 'Gorgeous photo', src: 'app/img/user/07.jpg'}
            ];
        }
    }

    // Add class to img element when source is loaded
    function imageloaded() {
        // Copyright(c) 2013 André König <akoenig@posteo.de>
        // MIT Licensed
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
            var cssClass = attrs.loadedclass;

            element.bind('load', function() {
                angular.element(element).addClass(cssClass);
            });
        }
    }

})();

(function() {
    'use strict';

    angular
        .module('app.elements')
        .controller('AbnTestController', AbnTestController);

    AbnTestController.$inject = ['$timeout', '$resource'];

    function AbnTestController($timeout, $resource) {
        var vm = this;

        activate();

        ////////////////

        /*jshint -W106*/
        function activate() {
            vm.my_tree_handler = function(branch) {

                vm.output = 'You selected: ' + branch.label;

                if (branch.data && branch.data.description) {
                    vm.output += '(' + branch.data.description + ')';
                    return vm.output;
                }
            };

            // onSelect event handlers
            var apple_selected = function(branch) {
                vm.output = 'APPLE! : ' + branch.label;
                return vm.output;
            };

            var treedata_avm = [{
                label: 'Animal',
                children: [{
                    label: 'Dog',
                    data: {
                        description: 'man\'s best friend'
                    }
                }, {
                    label: 'Cat',
                    data: {
                        description: 'Felis catus'
                    }
                }, {
                    label: 'Hippopotamus',
                    data: {
                        description: 'hungry, hungry'
                    }
                }, {
                    label: 'Chicken',
                    children: ['White Leghorn', 'Rhode Island Red', 'Jersey Giant']
                }]
            }, {
                label: 'Vegetable',
                data: {
                    definition: 'A plant or part of a plant used as food, typically as accompaniment to meat or fish, such as a cabbage, potato, carrot, or bean.',
                    data_can_contain_anything: true
                },
                onSelect: function(branch) {
                    vm.output = 'Vegetable: ' + branch.data.definition;
                    return vm.output;
                },
                children: [{
                    label: 'Oranges'
                }, {
                    label: 'Apples',
                    children: [{
                        label: 'Granny Smith',
                        onSelect: apple_selected
                    }, {
                        label: 'Red Delicous',
                        onSelect: apple_selected
                    }, {
                        label: 'Fuji',
                        onSelect: apple_selected
                    }]
                }]
            }, {
                label: 'Mineral',
                children: [{
                    label: 'Rock',
                    children: ['Igneous', 'Sedimentary', 'Metamorphic']
                }, {
                    label: 'Metal',
                    children: ['Aluminum', 'Steel', 'Copper']
                }, {
                    label: 'Plastic',
                    children: [{
                        label: 'Thermoplastic',
                        children: ['polyethylene', 'polypropylene', 'polystyrene', ' polyvinyl chloride']
                    }, {
                        label: 'Thermosetting Polymer',
                        children: ['polyester', 'polyurethane', 'vulcanized rubber', 'bakelite', 'urea-formaldehyde']
                    }]
                }]
            }];

            var treedata_geography = [{
                label: 'North America',
                children: [{
                    label: 'Canada',
                    children: ['Toronto', 'Vancouver']
                }, {
                    label: 'USA',
                    children: ['New York', 'Los Angeles']
                }, {
                    label: 'Mexico',
                    children: ['Mexico City', 'Guadalajara']
                }]
            }, {
                label: 'South America',
                children: [{
                    label: 'Venezuela',
                    children: ['Caracas', 'Maracaibo']
                }, {
                    label: 'Brazil',
                    children: ['Sao Paulo', 'Rio de Janeiro']
                }, {
                    label: 'Argentina',
                    children: ['Buenos Aires', 'Cordoba']
                }]
            }];

            vm.my_data = treedata_avm;
            vm.try_changing_the_tree_data = function() {
                if (vm.my_data === treedata_avm) {
                    vm.my_data = treedata_geography;
                } else {
                    vm.my_data = treedata_avm;
                }
                return vm.my_data;
            };

            var tree;
            // This is our API control variable
            vm.my_tree = tree = {};
            vm.try_async_load = function() {

                vm.my_data = [];
                vm.doing_async = true;

                // Request tree data via $resource
                var remoteTree = $resource('server/treedata.json');

                return remoteTree.get(function(res) {

                    vm.my_data = res.data;

                    vm.doing_async = false;

                    return tree.expand_all();

                    // we must return a promise so the plugin
                    // can watch when it's resolved
                }).$promise;
            };

            // Adds a new branch to the tree
            vm.try_adding_a_branch = function() {
                var b;
                b = tree.get_selected_branch();
                return tree.add_branch(b, {
                    label: 'New Branch',
                    data: {
                        something: 42,
                        'else': 43
                    }
                });
            };

        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.elements')
        .controller('NestableController', NestableController);

    function NestableController() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
            vm.items = [{
                item: {
                    text: 'Sherry Spencer'
                },
                children: []
            }, {
                item: {
                    text: 'Nathaniel Herrera'
                },
                children: [{
                    item: {
                        text: 'Violet Graves'
                    },
                    children: []
                }, {
                    item: {
                        text: 'Daniel Crawford'
                    },
                    children: []
                }]
            }];

            vm.add = function() {
                vm.items.push({
                    item: {
                        text: 'Darren Dean'
                    },
                    children: []
                });
            }
        }
    }
})();
(function() {
    'use strict';

    angular
        .module('app.elements')
        .controller('SweetAlertController', SweetAlertController);

    SweetAlertController.$inject = ['SweetAlert'];

    function SweetAlertController(SweetAlert) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
            vm.demo1 = function() {
                SweetAlert.swal('Here\'s a message');
            };

            vm.demo2 = function() {
                SweetAlert.swal('Here\'s a message!', 'It\'s pretty, isn\'t it?');
            };

            vm.demo3 = function() {
                SweetAlert.swal('Good job!', 'You clicked the button!', 'success');
            };

            vm.demo4 = function() {
                SweetAlert.swal({
                    title: 'Are you sure?',
                    text: 'Your will not be able to recover this imaginary file!',
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#DD6B55',
                    confirmButtonText: 'Yes, delete it!',
                    closeOnConfirm: false
                }, function() {
                    SweetAlert.swal('Booyah!');
                });
            };

            vm.demo5 = function() {
                SweetAlert.swal({
                    title: 'Are you sure?',
                    text: 'Your will not be able to recover this imaginary file!',
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#DD6B55',
                    confirmButtonText: 'Yes, delete it!',
                    cancelButtonText: 'No, cancel plx!',
                    closeOnConfirm: false,
                    closeOnCancel: false
                }, function(isConfirm) {
                    if (isConfirm) {
                        SweetAlert.swal('Deleted!', 'Your imaginary file has been deleted.', 'success');
                    } else {
                        SweetAlert.swal('Cancelled', 'Your imaginary file is safe :)', 'error');
                    }
                });
            };

            vm.demo6 = function() {
                SweetAlert.swal({
                    title: 'Sweet!',
                    text: 'Here\'s a custom image.',
                    imageUrl: '//oitozero.com/img/avatar.jpg'
                });
            };
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.floatbutton')
        .controller('FloatButtonController', FloatButtonController);

    FloatButtonController.$inject = ['$window'];

    function FloatButtonController($window) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

            vm.menuState = 'closed';
            vm.loc = loc;
            vm.mainAction = mainAction;
            vm.hovered = hovered;

            vm.chosen = {
                effect: 'zoomin',
                position: 'br',
                method: 'click',
                action: 'fire'
            };

            vm.buttons = [{
                label: 'View on Github',
                icon: 'ion-social-github',
                href: '//github.com/nobitagit/ng-material-floating-button/'
            }, {
                label: 'Follow me on Github',
                icon: 'ion-social-octocat',
                href: '//github.com/nobitagit'
            }, {
                label: 'Share on Twitter',
                icon: 'ion-social-twitter',
                href: '//twitter.com/share?text=Amazing material floating action button directive!&url=http://nobitagit.github.io/ng-material-floating-button/&hashtags=angular,material,design,button'
            }];

            function loc(href) {
                $window.location.href = href;
            }

            function mainAction() {
                console.log('Firing Main Action!');
            }

            function hovered() {
                // toggle something on hover.
            }

            vm.toggle = function() {
                this.menuState = this.menuState === 'closed' ? 'open' : 'closed';
            };

            vm.closeMenu = function() {
                this.menuState = 'closed';
            };
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.forms')
        .controller('ColorPickerController', ColorPickerController);

    function ColorPickerController() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
            vm.hexPicker = {
                color: ''
            };

            vm.rgbPicker = {
                color: ''
            };

            vm.rgbaPicker = {
                color: ''
            };

            vm.nonInput = {
                color: ''
            };

            vm.resetColor = function() {
                vm.hexPicker = {
                    color: '#ff0000'
                };
            };

            vm.resetRBGColor = function() {
                vm.rgbPicker = {
                    color: 'rgb(255,255,255)'
                };
            };

            vm.resetRBGAColor = function() {
                vm.rgbaPicker = {
                    color: 'rgb(255,255,255, 0.25)'
                };
            };

            vm.resetNonInputColor = function() {
                vm.nonInput = {
                    color: '#ffffff'
                };
            };
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.forms')
        .controller('DropzoneController', DropzoneController);

    function DropzoneController() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
            vm.dropzoneConfig = {
                autoProcessQueue: false,
                uploadMultiple: true,
                parallelUploads: 100,
                maxFiles: 100,
                dictDefaultMessage: '<em class="ion-upload text-info icon-2x"></em><br>Drop files here to upload', // default messages before first drop
                paramName: 'file', // The name that will be used to transfer the file
                maxFilesize: 2, // MB
                addRemoveLinks: true,
                accept: function(file, done) {
                    if (file.name === 'justinbieber.jpg') {
                        done('Naha, you dont. :)');
                    } else {
                        done();
                    }
                },
                init: function() {
                    var dzHandler = this;

                    this.element.querySelector('button[type=submit]').addEventListener('click', function(e) {
                        e.preventDefault();
                        e.stopPropagation();
                        dzHandler.processQueue();
                    });
                    this.on('addedfile', function(file) {
                        console.log('Added file: ' + file.name);
                    });
                    this.on('removedfile', function(file) {
                        console.log('Removed file: ' + file.name);
                    });
                    this.on('sendingmultiple', function() {

                    });
                    this.on('successmultiple', function(/*files, response*/) {

                    });
                    this.on('errormultiple', function(/*files, response*/) {

                    });
                }

            };
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.forms')
        .controller('FormEditorController', FormEditorController);


    function FormEditorController() {
        var vm = this;

        activate();

        ////////////////

        function activate() {

            // Summernote
            // -----------------------------------

            vm.summernoteText = 'Pellentesque sollicitudin sollicitudin erat, in imperdiet tortor fringilla ut...';

            vm.airmodeText = '<h3>Vivamus elit lectus</h3>' +
              '<p><i>Duis cursus consectetur elementum.</i></p>' +
              '<p>Suscipit a venenatis id, varius sit amet nunc. Mauris eu lacus massa, vel condimentum lectus. Quisque sollicitudin massa vel erat tincidunt blandit. Nulla mauris sem, hendrerit sed fringilla a, facilisis vitae eros. Donec ullamcorper scelerisque mollis. Donec ac lectus vel nulla pretium porta tempus eget tortor. Pellentesque sed purus libero. Praesent nec eros ac urna dictum ultrices. Donec at feugiat risus.</p>' +
              '<p>Fusce dolor lacus, interdum eu tincidunt sed, aliquet vel turpis. Nunc luctus, quam non condimentum ornare, orci ligula malesuada lacus, nec sagittis neque augue vel nunc. Quisque congue egestas cursus. Integer lorem metus, rutrum non rhoncus sed, fringilla interdum urna. Curabitur gravida, ante ac imperdiet accumsan, quam nibh porttitor mauris, non luctus sem lectus porta augue. Nunc eget augue mi.</p><br>' +
              '<p>Aliquam eget dui tellus.</p>';

        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.forms')
        .directive('filestyle', filestyle);

    function filestyle() {
        var directive = {
            link: link,
            restrict: 'A',
            scope: {
                options: '='
            }
        };
        return directive;

        function link(scope, element) {
            element.filestyle(
                angular.extend(scope.options || {}, element.data() || {})
            );
        }
    }

})();

(function() {
    'use strict';

    angular
        .module('app.forms')
        .run(formsRun);
    formsRun.$inject = ['Menu'];

    function formsRun(Menu) {

        var menuItem = {
            name: 'Forms',
            sref: 'app.forms',
            // iconclass: 'ion-clipboard',
            imgpath: 'app/img/icons/clipboard.svg',
            order: 4,
            subitems: [{
                name: 'Classic',
                sref: 'app.forms.classic'
            }, {
                name: 'Validation',
                sref: 'app.forms.validation'
            }, {
                name: 'Advanced',
                sref: 'app.forms.advanced'
            }, {
                name: 'Material',
                sref: 'app.forms.material'
            }, {
                name: 'Editors',
                sref: 'app.forms.editor'
            }, {
                name: 'Upload',
                sref: 'app.forms.upload'
            }, {
                name: 'Dropzone',
                sref: 'app.forms.dropzone'
            }, {
                name: 'xEditable',
                sref: 'app.forms.xeditable'
            }]
        };

        Menu.addItem(menuItem);

    }
})();
(function() {
    'use strict';

    angular
        .module('app.forms')
        .run(formsRoute);

    formsRoute.$inject = ['Router'];
    function formsRoute(Router){

        Router.state('app.forms', {
            url: '/forms',
            abstract: true,
            template: '<div ui-view class="ng-fadeInLeftShort"></div>'
        })
        .state('app.forms.material', {
            url: '/material',
            title: 'Material Inputs',
            templateUrl: 'material.html'
        })
        .state('app.forms.validation', {
            url: '/validation',
            title: 'Validation',
            templateUrl: 'validation.html',
            require: ['ui.select']
        })
        .state('app.forms.classic', {
            url: '/classic',
            title: 'Classic Inputs',
            templateUrl: 'forms.classic.html'
        })
        .state('app.forms.advanced', {
            url: '/advanced',
            title: 'Advanced',
            templateUrl: 'forms.advanced.html',
            require: ['ui.select', 'vr.directives.slider', 'colorpicker.module']
        })
        .state('app.forms.editor', {
            url: '/editor',
            title: 'Editors',
            templateUrl: 'editor.html',
            require: ['fontawesome', 'summernote']
        })
        .state('app.forms.upload', {
            url: '/upload',
            title: 'Forms Upload',
            templateUrl: 'upload.html',
            require: ['filestyle', 'angularFileUpload']
        })
        .state('app.forms.dropzone', {
            url: '/dropzone',
            title: 'Dropzone',
            templateUrl: 'dropzone.html',
            require: ['ngDropzone']
        })
        .state('app.forms.xeditable', {
            url: '/xeditable',
            title: 'Forms Xeditable',
            templateUrl: 'xeditable.form.html',
            require: ['xeditable']
        })
        ;
    }

})();

(function() {
    'use strict';

    angular
        .module('app.forms')
        .controller('RangeSliderController', RangeSliderController);

    function RangeSliderController() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
            // Set initial values
            vm.value = 50;
            vm.range = {
                min: 20,
                max: 80
            };
            vm.formatted = 30;
            vm.range2 = {
                min: 20,
                max: 80
            };
            // return the value converted
            vm.priceFormat = function(value) {
                return '$' + value.toString();
            };
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.forms')
        .controller('uiSelectController', uiSelectController)
        .filter('propsFilter', propsFilter);

    uiSelectController.$inject = ['$scope', '$http'];

    function uiSelectController($scope, $http) {
        /* jshint validthis:true */
        var vm = this;

        activate();

        ////////////////

        function activate() {

            vm.disabled = undefined;

            vm.enable = function() {
                vm.disabled = false;
            };

            vm.disable = function() {
                vm.disabled = true;
            };

            vm.clear = function() {
                vm.person.selected = undefined;
                vm.address.selected = undefined;
                vm.country.selected = undefined;
            };

            vm.person = {};
            vm.people = [
                { name: 'Adam', email: 'adam@email.com', age: 10 },
                { name: 'Amalie', email: 'amalie@email.com', age: 12 },
                { name: 'Wladimir', email: 'wladimir@email.com', age: 30 },
                { name: 'Samantha', email: 'samantha@email.com', age: 31 },
                { name: 'Estefanía', email: 'estefanía@email.com', age: 16 },
                { name: 'Natasha', email: 'natasha@email.com', age: 54 },
                { name: 'Nicole', email: 'nicole@email.com', age: 43 },
                { name: 'Adrian', email: 'adrian@email.com',age: 21 }
            ];

            vm.address = {};
            vm.refreshAddresses = function(address) {
                if(!address) return;
                var params = {
                    address: address
                };
                return $http.get(
                    '//maps.googleapis.com/maps/api/geocode/json', {
                        params: params
                    }
                ).then(function(response) {
                    vm.addresses = response.data.results;
                });
            };

            vm.country = {};
            vm.countries = [ // Taken from https://gist.github.com/unceus/6501985
                {name: 'Afghanistan', code: 'AF'},
                {name: 'Åland Islands', code: 'AX'},
                {name: 'Albania', code: 'AL'},
                {name: 'Algeria', code: 'DZ'},
                {name: 'American Samoa', code: 'AS'},
                {name: 'Andorra', code: 'AD'},
                {name: 'Angola', code: 'AO'},
                {name: 'Anguilla', code: 'AI'},
                {name: 'Antarctica', code: 'AQ'},
                {name: 'Antigua and Barbuda', code: 'AG'},
                {name: 'Argentina', code: 'AR'},
                {name: 'Armenia', code: 'AM'},
                {name: 'Aruba', code: 'AW'},
                {name: 'Australia', code: 'AU'},
                {name: 'Austria', code: 'AT'},
                {name: 'Azerbaijan', code: 'AZ'},
                {name: 'Bahamas', code: 'BS'},
                {name: 'Bahrain', code: 'BH'},
                {name: 'Bangladesh', code: 'BD'},
                {name: 'Barbados', code: 'BB'},
                {name: 'Belarus', code: 'BY'},
                {name: 'Belgium', code: 'BE'},
                {name: 'Belize', code: 'BZ'},
                {name: 'Benin', code: 'BJ'},
                {name: 'Bermuda', code: 'BM'},
                {name: 'Bhutan', code: 'BT'},
                {name: 'Bolivia', code: 'BO'},
                {name: 'Bosnia and Herzegovina', code: 'BA'},
                {name: 'Botswana', code: 'BW'},
                {name: 'Bouvet Island', code: 'BV'},
                {name: 'Brazil', code: 'BR'},
                {name: 'British Indian Ocean Territory', code: 'IO'},
                {name: 'Brunei Darussalam', code: 'BN'},
                {name: 'Bulgaria', code: 'BG'},
                {name: 'Burkina Faso', code: 'BF'},
                {name: 'Burundi', code: 'BI'},
                {name: 'Cambodia', code: 'KH'},
                {name: 'Cameroon', code: 'CM'},
                {name: 'Canada', code: 'CA'},
                {name: 'Cape Verde', code: 'CV'},
                {name: 'Cayman Islands', code: 'KY'},
                {name: 'Central African Republic', code: 'CF'},
                {name: 'Chad', code: 'TD'},
                {name: 'Chile', code: 'CL'},
                {name: 'China', code: 'CN'},
                {name: 'Christmas Island', code: 'CX'},
                {name: 'Cocos (Keeling) Islands', code: 'CC'},
                {name: 'Colombia', code: 'CO'},
                {name: 'Comoros', code: 'KM'},
                {name: 'Congo', code: 'CG'},
                {name: 'Congo, The Democratic Republic of the', code: 'CD'},
                {name: 'Cook Islands', code: 'CK'},
                {name: 'Costa Rica', code: 'CR'},
                {name: 'Cote D\'Ivoire', code: 'CI'},
                {name: 'Croatia', code: 'HR'},
                {name: 'Cuba', code: 'CU'},
                {name: 'Cyprus', code: 'CY'},
                {name: 'Czech Republic', code: 'CZ'},
                {name: 'Denmark', code: 'DK'},
                {name: 'Djibouti', code: 'DJ'},
                {name: 'Dominica', code: 'DM'},
                {name: 'Dominican Republic', code: 'DO'},
                {name: 'Ecuador', code: 'EC'},
                {name: 'Egypt', code: 'EG'},
                {name: 'El Salvador', code: 'SV'},
                {name: 'Equatorial Guinea', code: 'GQ'},
                {name: 'Eritrea', code: 'ER'},
                {name: 'Estonia', code: 'EE'},
                {name: 'Ethiopia', code: 'ET'},
                {name: 'Falkland Islands (Malvinas)', code: 'FK'},
                {name: 'Faroe Islands', code: 'FO'},
                {name: 'Fiji', code: 'FJ'},
                {name: 'Finland', code: 'FI'},
                {name: 'France', code: 'FR'},
                {name: 'French Guiana', code: 'GF'},
                {name: 'French Polynesia', code: 'PF'},
                {name: 'French Southern Territories', code: 'TF'},
                {name: 'Gabon', code: 'GA'},
                {name: 'Gambia', code: 'GM'},
                {name: 'Georgia', code: 'GE'},
                {name: 'Germany', code: 'DE'},
                {name: 'Ghana', code: 'GH'},
                {name: 'Gibraltar', code: 'GI'},
                {name: 'Greece', code: 'GR'},
                {name: 'Greenland', code: 'GL'},
                {name: 'Grenada', code: 'GD'},
                {name: 'Guadeloupe', code: 'GP'},
                {name: 'Guam', code: 'GU'},
                {name: 'Guatemala', code: 'GT'},
                {name: 'Guernsey', code: 'GG'},
                {name: 'Guinea', code: 'GN'},
                {name: 'Guinea-Bissau', code: 'GW'},
                {name: 'Guyana', code: 'GY'},
                {name: 'Haiti', code: 'HT'},
                {name: 'Heard Island and Mcdonald Islands', code: 'HM'},
                {name: 'Holy See (Vatican City State)', code: 'VA'},
                {name: 'Honduras', code: 'HN'},
                {name: 'Hong Kong', code: 'HK'},
                {name: 'Hungary', code: 'HU'},
                {name: 'Iceland', code: 'IS'},
                {name: 'India', code: 'IN'},
                {name: 'Indonesia', code: 'ID'},
                {name: 'Iran, Islamic Republic Of', code: 'IR'},
                {name: 'Iraq', code: 'IQ'},
                {name: 'Ireland', code: 'IE'},
                {name: 'Isle of Man', code: 'IM'},
                {name: 'Israel', code: 'IL'},
                {name: 'Italy', code: 'IT'},
                {name: 'Jamaica', code: 'JM'},
                {name: 'Japan', code: 'JP'},
                {name: 'Jersey', code: 'JE'},
                {name: 'Jordan', code: 'JO'},
                {name: 'Kazakhstan', code: 'KZ'},
                {name: 'Kenya', code: 'KE'},
                {name: 'Kiribati', code: 'KI'},
                {name: 'Korea, Democratic People\'s Republic of', code: 'KP'},
                {name: 'Korea, Republic of', code: 'KR'},
                {name: 'Kuwait', code: 'KW'},
                {name: 'Kyrgyzstan', code: 'KG'},
                {name: 'Lao People\'s Democratic Republic', code: 'LA'},
                {name: 'Latvia', code: 'LV'},
                {name: 'Lebanon', code: 'LB'},
                {name: 'Lesotho', code: 'LS'},
                {name: 'Liberia', code: 'LR'},
                {name: 'Libyan Arab Jamahiriya', code: 'LY'},
                {name: 'Liechtenstein', code: 'LI'},
                {name: 'Lithuania', code: 'LT'},
                {name: 'Luxembourg', code: 'LU'},
                {name: 'Macao', code: 'MO'},
                {name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK'},
                {name: 'Madagascar', code: 'MG'},
                {name: 'Malawi', code: 'MW'},
                {name: 'Malaysia', code: 'MY'},
                {name: 'Maldives', code: 'MV'},
                {name: 'Mali', code: 'ML'},
                {name: 'Malta', code: 'MT'},
                {name: 'Marshall Islands', code: 'MH'},
                {name: 'Martinique', code: 'MQ'},
                {name: 'Mauritania', code: 'MR'},
                {name: 'Mauritius', code: 'MU'},
                {name: 'Mayotte', code: 'YT'},
                {name: 'Mexico', code: 'MX'},
                {name: 'Micronesia, Federated States of', code: 'FM'},
                {name: 'Moldova, Republic of', code: 'MD'},
                {name: 'Monaco', code: 'MC'},
                {name: 'Mongolia', code: 'MN'},
                {name: 'Montserrat', code: 'MS'},
                {name: 'Morocco', code: 'MA'},
                {name: 'Mozambique', code: 'MZ'},
                {name: 'Myanmar', code: 'MM'},
                {name: 'Namibia', code: 'NA'},
                {name: 'Nauru', code: 'NR'},
                {name: 'Nepal', code: 'NP'},
                {name: 'Netherlands', code: 'NL'},
                {name: 'Netherlands Antilles', code: 'AN'},
                {name: 'New Caledonia', code: 'NC'},
                {name: 'New Zealand', code: 'NZ'},
                {name: 'Nicaragua', code: 'NI'},
                {name: 'Niger', code: 'NE'},
                {name: 'Nigeria', code: 'NG'},
                {name: 'Niue', code: 'NU'},
                {name: 'Norfolk Island', code: 'NF'},
                {name: 'Northern Mariana Islands', code: 'MP'},
                {name: 'Norway', code: 'NO'},
                {name: 'Oman', code: 'OM'},
                {name: 'Pakistan', code: 'PK'},
                {name: 'Palau', code: 'PW'},
                {name: 'Palestinian Territory, Occupied', code: 'PS'},
                {name: 'Panama', code: 'PA'},
                {name: 'Papua New Guinea', code: 'PG'},
                {name: 'Paraguay', code: 'PY'},
                {name: 'Peru', code: 'PE'},
                {name: 'Philippines', code: 'PH'},
                {name: 'Pitcairn', code: 'PN'},
                {name: 'Poland', code: 'PL'},
                {name: 'Portugal', code: 'PT'},
                {name: 'Puerto Rico', code: 'PR'},
                {name: 'Qatar', code: 'QA'},
                {name: 'Reunion', code: 'RE'},
                {name: 'Romania', code: 'RO'},
                {name: 'Russian Federation', code: 'RU'},
                {name: 'Rwanda', code: 'RW'},
                {name: 'Saint Helena', code: 'SH'},
                {name: 'Saint Kitts and Nevis', code: 'KN'},
                {name: 'Saint Lucia', code: 'LC'},
                {name: 'Saint Pierre and Miquelon', code: 'PM'},
                {name: 'Saint Vincent and the Grenadines', code: 'VC'},
                {name: 'Samoa', code: 'WS'},
                {name: 'San Marino', code: 'SM'},
                {name: 'Sao Tome and Principe', code: 'ST'},
                {name: 'Saudi Arabia', code: 'SA'},
                {name: 'Senegal', code: 'SN'},
                {name: 'Serbia and Montenegro', code: 'CS'},
                {name: 'Seychelles', code: 'SC'},
                {name: 'Sierra Leone', code: 'SL'},
                {name: 'Singapore', code: 'SG'},
                {name: 'Slovakia', code: 'SK'},
                {name: 'Slovenia', code: 'SI'},
                {name: 'Solomon Islands', code: 'SB'},
                {name: 'Somalia', code: 'SO'},
                {name: 'South Africa', code: 'ZA'},
                {name: 'South Georgia and the South Sandwich Islands', code: 'GS'},
                {name: 'Spain', code: 'ES'},
                {name: 'Sri Lanka', code: 'LK'},
                {name: 'Sudan', code: 'SD'},
                {name: 'Suriname', code: 'SR'},
                {name: 'Svalbard and Jan Mayen', code: 'SJ'},
                {name: 'Swaziland', code: 'SZ'},
                {name: 'Sweden', code: 'SE'},
                {name: 'Switzerland', code: 'CH'},
                {name: 'Syrian Arab Republic', code: 'SY'},
                {name: 'Taiwan, Province of China', code: 'TW'},
                {name: 'Tajikistan', code: 'TJ'},
                {name: 'Tanzania, United Republic of', code: 'TZ'},
                {name: 'Thailand', code: 'TH'},
                {name: 'Timor-Leste', code: 'TL'},
                {name: 'Togo', code: 'TG'},
                {name: 'Tokelau', code: 'TK'},
                {name: 'Tonga', code: 'TO'},
                {name: 'Trinidad and Tobago', code: 'TT'},
                {name: 'Tunisia', code: 'TN'},
                {name: 'Turkey', code: 'TR'},
                {name: 'Turkmenistan', code: 'TM'},
                {name: 'Turks and Caicos Islands', code: 'TC'},
                {name: 'Tuvalu', code: 'TV'},
                {name: 'Uganda', code: 'UG'},
                {name: 'Ukraine', code: 'UA'},
                {name: 'United Arab Emirates', code: 'AE'},
                {name: 'United Kingdom', code: 'GB'},
                {name: 'United States', code: 'US'},
                {name: 'United States Minor Outlying Islands', code: 'UM'},
                {name: 'Uruguay', code: 'UY'},
                {name: 'Uzbekistan', code: 'UZ'},
                {name: 'Vanuatu', code: 'VU'},
                {name: 'Venezuela', code: 'VE'},
                {name: 'Vietnam', code: 'VN'},
                {name: 'Virgin Islands, British', code: 'VG'},
                {name: 'Virgin Islands, U.S.', code: 'VI'},
                {name: 'Wallis and Futuna', code: 'WF'},
                {name: 'Western Sahara', code: 'EH'},
                {name: 'Yemen', code: 'YE'},
                {name: 'Zambia', code: 'ZM'},
                {name: 'Zimbabwe', code: 'ZW'}
            ];

            // Multiple
            vm.someGroupFn = function(item) {

                if (item.name[0] >= 'A' && item.name[0] <= 'M')
                    return 'From A - M';

                if (item.name[0] >= 'N' && item.name[0] <= 'Z')
                    return 'From N - Z';

            };

            vm.counter = 0;
            vm.someFunction = function(item, model) {
                vm.counter++;
                vm.eventResult = {
                    item: item,
                    model: model
                };
            };

            vm.availableColors = ['Red', 'Green', 'Blue', 'Yellow', 'Magenta', 'Maroon', 'Umbra', 'Turquoise'];

            vm.multipleDemo = {};
            vm.multipleDemo.colors = ['Blue', 'Red'];
            vm.multipleDemo.selectedPeople = [vm.people[5], vm.people[4]];
            vm.multipleDemo.selectedPeopleWithGroupBy = [vm.people[8], vm.people[6]];
            vm.multipleDemo.selectedPeopleSimple = ['samantha@email.com', 'wladimir@email.com'];
        }
    }

    /**
     * AngularJS default filter with the following expression:
     * "person in people | filter: {name: $select.search, age: $select.search}"
     * performs a AND between 'name: $select.search' and 'age: $select.search'.
     * We want to perform a OR.
     */
    function propsFilter() {
        return filterFilter;

        ////////////////
        function filterFilter(items, props) {
            var out = [];

            if (angular.isArray(items)) {
                items.forEach(function(item) {
                    var itemMatches = false;

                    var keys = Object.keys(props);
                    for (var i = 0; i < keys.length; i++) {
                        var prop = keys[i];
                        var text = props[prop].toLowerCase();
                        if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
                            itemMatches = true;
                            break;
                        }
                    }

                    if (itemMatches) {
                        out.push(item);
                    }
                });
            } else {
                // Let the output be the input untouched
                out = items;
            }

            return out;
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.forms')
        .controller('FileUploadController', FileUploadController);

    FileUploadController.$inject = ['FileUploader'];
    function FileUploadController(FileUploader) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          var uploader = vm.uploader = new FileUploader({
              url: 'server/upload.php'
          });

          // FILTERS

          uploader.filters.push({
              name: 'customFilter',
              fn: function(/*item, options*/) {
                  return this.queue.length < 10;
              }
          });

          // CALLBACKS

          uploader.onWhenAddingFileFailed = function(item /*{File|FileLikeObject}*/, filter, options) {
              console.info('onWhenAddingFileFailed', item, filter, options);
          };
          uploader.onAfterAddingFile = function(fileItem) {
              console.info('onAfterAddingFile', fileItem);
          };
          uploader.onAfterAddingAll = function(addedFileItems) {
              console.info('onAfterAddingAll', addedFileItems);
          };
          uploader.onBeforeUploadItem = function(item) {
              console.info('onBeforeUploadItem', item);
          };
          uploader.onProgressItem = function(fileItem, progress) {
              console.info('onProgressItem', fileItem, progress);
          };
          uploader.onProgressAll = function(progress) {
              console.info('onProgressAll', progress);
          };
          uploader.onSuccessItem = function(fileItem, response, status, headers) {
              console.info('onSuccessItem', fileItem, response, status, headers);
          };
          uploader.onErrorItem = function(fileItem, response, status, headers) {
              console.info('onErrorItem', fileItem, response, status, headers);
          };
          uploader.onCancelItem = function(fileItem, response, status, headers) {
              console.info('onCancelItem', fileItem, response, status, headers);
          };
          uploader.onCompleteItem = function(fileItem, response, status, headers) {
              console.info('onCompleteItem', fileItem, response, status, headers);
          };
          uploader.onCompleteAll = function() {
              console.info('onCompleteAll');
          };

          console.info('uploader', uploader);
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.forms')
        .controller('FormValidationController', FormValidationController);

    function FormValidationController() {
        var vm = this;

        activate();

        ////////////////

        function activate() {

            vm.notBlackListed = function(value) {
                var blacklist = ['bad@mail.com', 'another@email.com'];
                return blacklist.indexOf(value) === -1;
            };

            vm.words = function(value) {
                return value && value.split(' ').length;
            };

            // Submit form
            vm.submitForm = function(formName) {
                if (vm[formName].$valid) {
                    alert('Submitted!!');
                } else {
                    console.log('Form name:' + formName + ': Not valid!!');
                    return false;
                }
            };

        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.forms')
        .controller('FormxEditableController', FormxEditableController);

    FormxEditableController.$inject = ['$scope', 'editableOptions', 'editableThemes', '$filter', '$http'];
    function FormxEditableController($scope, editableOptions, editableThemes, $filter, $http) {
        var vm = this;
        vm.title = 'Controller';

        activate();

        ////////////////

        function activate() {

          editableOptions.theme = 'bs3';

          editableThemes.bs3.inputClass = 'input-sm';
          editableThemes.bs3.buttonsClass = 'btn-sm';
          editableThemes.bs3.submitTpl = '<button type="submit" class="btn btn-success"><span class="fa fa-check"></span></button>';
          editableThemes.bs3.cancelTpl = '<button type="button" class="btn btn-default" ng-click="$form.$cancel()">'+
                                           '<span class="fa fa-times text-muted"></span>'+
                                         '</button>';

          vm.user = {
            email: 'email@example.com',
            tel: '123-45-67',
            number: 29,
            range: 10,
            url: '//example.com',
            search: 'blabla',
            color: '#6a4415',
            date: null,
            time: new Date(),
            datetime: null,
            month: null,
            week: null,
            desc: 'Sed pharetra euismod dolor, id feugiat ante volutpat eget. '
          };

          // Local select
          // -----------------------------------

          vm.user2 = {
            status: 2
          };

          vm.statuses = [
            {value: 1, text: 'status1'},
            {value: 2, text: 'status2'},
            {value: 3, text: 'status3'},
            {value: 4, text: 'status4'}
          ];

          vm.showStatus = function() {
            var selected = $filter('filter')(vm.statuses, {value: vm.user2.status});
            return (vm.user2.status && selected.length) ? selected[0].text : 'Not set';
          };

          // select remote
          // -----------------------------------

          vm.user3 = {
            id: 4,
            text: 'admin' // original value
          };

          vm.groups = [];

          vm.loadGroups = function() {
            return vm.groups.length ? null : $http.get('server/xeditable-groups.json').success(function(data) {
              vm.groups = data;
            });
          };

          $scope.$watch('user3.id', function(newVal, oldVal) {
            if (newVal !== oldVal) {
              var selected = $filter('filter')(vm.groups, {id: vm.user3.id});
              vm.user3.text = selected.length ? selected[0].text : null;
            }
          });

          // Typeahead
          // -----------------------------------

          vm.user4 = {
            state: 'Arizona'
          };

          vm.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.header')
        .controller('HeaderController', HeaderController)
        .controller('HeaderModalController', HeaderModalController)
        .controller('HeaderModalSearchController', HeaderModalSearchController);

    HeaderController.$inject = ['$uibModal', 'auth', '$state'];

    function HeaderController($uibModal, auth, $state) {
        var vm = this;
        
        
        vm.logout = function() {
            var r = auth.logout();
            r.then(function(res){
                $state.go('user.login');
            }, auth.onError);
        };
        
        activate();

        ////////////////

        function activate() {
            // Header Search
            vm.openModalSearch = function() {

                var modalSearchInstance = $uibModal.open({
                    animation: true,
                    templateUrl: 'app/views/header-search.tpl.html',
                    controller: 'HeaderModalSearchController as mod',
                    // position via css class
                    windowClass: 'modal-top',
                    backdropClass: 'modal-backdrop-soft',
                    // sent data to the modal instance (injectable into controller)
                    resolve: {
                        data: function() {
                            return {
                                title: 'Search'
                            };
                        }
                    }
                });

                modalSearchInstance.result.then(function( /*data*/ ) {
                    // use data from modal here
                }, function() {
                    // Modal dismissed
                });
            };

            // Settings panel (right sidebar)
            vm.openModalBar = function() {

                var modalBarInstance = $uibModal.open({
                    animation: true,
                    templateUrl: 'app/views/settings.tpl.html',
                    controller: 'HeaderModalController as mod',
                    // position via css class
                    windowClass: 'modal-right',
                    backdropClass: 'modal-backdrop-soft',
                    // sent data to the modal instance (injectable into controller)
                    resolve: {
                        data: function() {
                            return {
                                title: 'Settings'
                            };
                        }
                    }
                });

                modalBarInstance.result.then(function( /*data*/ ) {
                    // use data from modal here
                }, function() {
                    // Modal dismissed
                });
            };

        }
    }

    HeaderModalController.$inject = ['$uibModalInstance', 'data'];

    function HeaderModalController($uibModalInstance, data) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

            vm.modalTitle = data.title;

            vm.close = function() {
                $uibModalInstance.close( /* data for promise*/ );
            };

            vm.cancel = function() {
                $uibModalInstance.dismiss('cancel');
            };
        }
    }
    HeaderModalSearchController.$inject = ['$uibModalInstance', '$timeout', 'data'];

    function HeaderModalSearchController($uibModalInstance, $timeout, data) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

            vm.modalTitle = data.title;

            // input autofocus
            $timeout(function() {
                document.querySelector('.header-input-search').focus();
            }, 300);

            vm.close = function() {
                $uibModalInstance.close( /* data for promise*/ );
            };

            vm.cancel = function() {
                $uibModalInstance.dismiss('cancel');
            };
        }
    }

})();

(function() {
    'use strict';

    angular
        .module('app.home')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', 'home'];

    function HomeController($scope, home) {
        var c = this;
        
        c.apiStats = {};
        
        c.init = function() {
            var r = home.getGeneralServerStats();
            
            r.then(function(res){
                c.apiStats = res.data.general_api_stats;
            }, home.onError);
        };
        
        c.init();
        
    }
})();
(function() {
    'use strict';

    angular
        .module('app.home')
        .run(homeRun);
    homeRun.$inject = ['Menu'];

    function homeRun(Menu) {

        var menuItem = {
            name: 'Home',
            sref: 'app.home',
            // iconclass: 'ion-aperture',
            imgpath: 'app/img/icons/aperture.svg',
            order: 1,
//            label: {
//                count: 2,
//                classname: 'badge bg-success'
//            }
        };

        Menu.addItem(menuItem);

    }
})();

(function() {
    'use strict';

    angular
        .module('app.home')
        .run(homeRoute);

    homeRoute.$inject = ['Router'];

    function homeRoute(Router) {

        Router.state('app.home', {
            url: '/home',
            title: 'Home',
            templateUrl: 'home.html',
            require: ['angular-flot', 'easypiechart', 'sparkline', 'vector-map', 'vector-map-maps']
        });
    }

})();

/**
 * Main api CRUD service
 *
 * @package   RiskMan
 * @author    Rolf
 * 
 */

/**
 * API service wrapper to make Ajax calls for Trxade
*/
(function() {
    'use strict';
    angular
        .module("app.home")
        .service('home', ['api', function (api) {
                
        this.getGeneralServerStats = function() {
            return api.read('/stats/general_api_stats');
        };
        
        this.onError = function(err) {
            return api.errorCallback(err);
        };
        
    }]);

})();
(function() {
    'use strict';

    angular
        .module('app.colors')
        .constant('APP_COLORS', {
            'gray-darker':            '#263238',
            'gray-dark':              '#455A64',
            'gray':                   '#607D8B',
            'gray-light':             '#90A4AE',
            'gray-lighter':           '#ECEFF1',

            'primary':                '#448AFF',
            'success':                '#4CAF50',
            'info':                   '#03A9F4',
            'warning':                '#FFB300',
            'danger':                 '#F44336'
        })
        ;
})();

(function() {
    'use strict';

    angular
        .module('app.core')
        .run(colorsRun);

    colorsRun.$inject = ['$rootScope', 'Colors'];

    function colorsRun($rootScope, Colors) {

        // Allows to use branding color with interpolation
        // <tag attribute="{{ colorByName('primary') }}" />
        $rootScope.colorByName = Colors.byName;

    }

})();

(function() {
    'use strict';

    angular
        .module('app.colors')
        .service('Colors', Colors);

    Colors.$inject = ['APP_COLORS'];

    function Colors(APP_COLORS) {
        this.byName = byName;

        ////////////////

        function byName(name) {
            var color = APP_COLORS[name];
            if (!color && materialColors) {
                var c = name.split('-'); // red-500, blue-a100, deepPurple-500, etc
                if (c.length)
                    color = (materialColors[c[0]] || {})[c[1]];
            }
            return (color || '#fff');
        }
    }

})();

(function() {
    'use strict';

    // This component is only used to provide a link in the menu
    // to the jQuery demo. It shows the menu support for direct
    // links using 'href' property.
    angular
        .module('centric')
        .run(jQueryDemoRun);
    jQueryDemoRun.$inject = ['Menu'];

    function jQueryDemoRun(Menu) {

        var menuItem = {
            name: 'HTML5/jQuery',
            href: '../html5jquery/',
            iconclass: 'ion-android-open',
            order: 99
        };

        //Menu.addItem(menuItem);

    }
})();

(function() {
    'use strict';

    angular
        .module('app.layouts')
        .run(layoutsRun);

    layoutsRun.$inject = ['Menu'];

    function layoutsRun(Menu) {

        var menuItem = {
            name: 'Layouts',
            sref: 'app.layouts',
            order: 5.1,
            // iconclass: 'ion-grid',
            imgpath: 'app/img/icons/grid.svg',
            subitems: [{
                name: 'Columns',
                sref: 'app.layouts.columns'
            }, {
                name: 'Overlap',
                sref: 'app.layouts.overlap'
            }, {
                name: 'Boxed',
                sref: 'app.layouts.boxed'
            }, {
                name: 'Tabs Deep Link',
                sref: 'app.layouts.tabs.home',
                // helper to check deeplinking in tabs
                srefParent: 'app.layouts.tabs'
            }, {
                name: 'Containers',
                sref: 'app.layouts.containers'
            }]
        };

        Menu.addItem(menuItem);

    }
})();

(function() {
    'use strict';

    angular
        .module('app.layouts')
        .run(layoutsRoute);

    layoutsRoute.$inject = ['Router'];
    function layoutsRoute(Router){

        Router.state('app.layouts', {
            url: '/layouts',
            title: 'Layouts',
            abstract: true,
            template: '<div ui-view class="ng-fadeInLeftShort"></div>'
        })
        .state('app.layouts.columns', {
            url: '/columns',
            title: 'Columns',
            templateUrl: 'layouts.columns.html'
        })
        .state('app.layouts.boxed', {
            url: '/boxed',
            title: 'Boxed',
            templateUrl: 'layouts.boxed.html'
        })
        .state('app.layouts.overlap', {
            url: '/overlap',
            title: 'Overlap',
            templateUrl: 'layouts.overlap.html'
        })
        .state('app.layouts.tabs', {
            url: '/tabs',
            title: 'Tabs',
            abstract: true,
            templateUrl: 'layouts.tabs.html'
        })
            .state('app.layouts.tabs.home', {
                url: '/home',
                title: 'Tabs Home',
                template: '<h4>Home view</h4>'
            })
            .state('app.layouts.tabs.profile', {
                url: '/profile',
                title: 'Tabs Profile',
                template: '<h4>Profile view</h4>'
            })
            .state('app.layouts.tabs.messages', {
                url: '/messages',
                title: 'Tabs Messages',
                template: '<h4>Messages view</h4>'
            })
        .state('app.layouts.containers', {
            url: '/containers',
            title: 'Containers',
            templateUrl: 'layouts.containers.html'
        })
        ;
    }

})();

(function() {
    'use strict';

    angular
        .module('app.layouts')
        .controller('TabsDeepController', TabsDeepController);

    TabsDeepController.$inject = ['$rootScope', '$state'];
    function TabsDeepController($rootScope, $state) {
        var vm = this;


        activate();

        ////////////////

        function activate() {
            vm.tabs = [
                { heading: 'Home', route:'app.layouts.tabs.home', active:false },
                { heading: 'Profile', route:'app.layouts.tabs.profile', active:false },
                { heading: 'Messages', route:'app.layouts.tabs.messages', active:false },
            ];

            vm.go = function(route){
                $state.go(route);
            };

            $rootScope.$on('$stateChangeSuccess', tabActive);
            tabActive();

            function tabActive() {
                vm.tabs.forEach(function(tab, id) {
                    vm.tabs[id].active = $state.is(tab.route);
                });
            }
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.loadingbar')
        .config(loadingbarConfig);
    loadingbarConfig.$inject = ['cfpLoadingBarProvider'];

    function loadingbarConfig(cfpLoadingBarProvider) {
        cfpLoadingBarProvider.includeBar = true;
        cfpLoadingBarProvider.includeSpinner = true;
        cfpLoadingBarProvider.latencyThreshold = 500;
        //cfpLoadingBarProvider.parentSelector = '';
    }
})();

(function() {
    'use strict';

    angular
        .module('app.loadingbar')
        .run(loadingbarRun);
    loadingbarRun.$inject = ['$rootScope', '$timeout', 'cfpLoadingBar'];

    function loadingbarRun($rootScope, $timeout, cfpLoadingBar) {

        // Loading bar transition
        // -----------------------------------
        var thBar;
        $rootScope.$on('$stateChangeStart', function() {
            thBar = $timeout(function() {
                cfpLoadingBar.start();
            }, 0); // sets a latency Threshold
        });
        $rootScope.$on('$stateChangeSuccess', function(event) {
            event.targetScope.$watch('$viewContentLoaded', function() {
                $timeout.cancel(thBar);
                cfpLoadingBar.complete();
            });
        });

    }

})();

(function() {
    'use strict';

    angular
        .module('app.maps')
        .controller('DatamapsController', DatamapsController);

    DatamapsController.$inject = ['Colors'];

    function DatamapsController(Colors) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

            vm.mapObject = {
                scope: 'usa',
                responsive: true,
                options: {
                    width: 1110,
                    legendHeight: 60 // optionally set the padding for the legend
                },
                geographyConfig: {
                    highlightFillColor: Colors.byName('info'),
                    highlightBorderWidth: 0
                },
                fills: {
                    'HIGH': Colors.byName('info'),
                    'MEDIUM': Colors.byName('info'),
                    'LOW': Colors.byName('info'),
                    'defaultFill': Colors.byName('gray-lighter')
                },
                data: {
                    "AZ": {
                        "fillKey": "MEDIUM",
                    },
                    "CO": {
                        "fillKey": "HIGH",
                    },
                    "DE": {
                        "fillKey": "LOW",
                    },
                    "GA": {
                        "fillKey": "MEDIUM",
                    }
                }
            };


            vm.mapObjectArc = {
                scope: 'usa',
                responsive: true,
                fills: {
                    defaultFill: Colors.byName('blue-500'),
                    win: Colors.byName('blueGrey-700'),
                },
                geographyConfig: {
                    borderWidth: 0,
                    highlightFillColor: Colors.byName('blue-100'),
                    highlightBorderWidth: 0
                },
                data: {
                    'TX': {
                        fillKey: 'win'
                    },
                    'FL': {
                        fillKey: 'win'
                    },
                    'NC': {
                        fillKey: 'win'
                    },
                    'CA': {
                        fillKey: 'win'
                    },
                    'NY': {
                        fillKey: 'win'
                    },
                    'CO': {
                        fillKey: 'win'
                    }
                }
            };

            vm.mapPluginArc = {
                arc: {}
            };

            vm.mapPluginArcData = {
                arc: [{
                    origin: 'CA',
                    destination: 'TX',
                    options: {
                        strokeWidth: 3,
                        strokeColor: '#fff',
                    }
                }, {
                    origin: 'OR',
                    destination: 'TX',
                    options: {
                        strokeWidth: 3,
                        strokeColor: '#fff',
                    }
                }, {
                    origin: 'NY',
                    destination: 'TX',
                    options: {
                        strokeWidth: 3,
                        strokeColor: '#fff',
                    }
                }]
            }
        }
    }
})();
(function() {
    'use strict';

    angular
        .module('app.maps')
        .controller('GMapFullController', GMapFullController);

    GMapFullController.$inject = ['uiGmapIsReady'];

    function GMapFullController(uiGmapIsReady) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

            vm.myMarkers = [
                {id: 0, name: 'Canada',        coords: {latitude: 56.130366, longitude: -106.346771 } },
                {id: 1, name: 'New York',      coords: {latitude: 40.712784, longitude: -74.005941 } },
                {id: 2, name: 'Toronto',       coords: {latitude: 43.653226, longitude: -79.383184 } },
                {id: 3, name: 'San Francisco', coords: {latitude: 37.774929, longitude: -122.419416 } },
                {id: 4, name: 'Utah',          coords: {latitude: 39.320980, longitude: -111.093731 } }
            ];
            vm.map = {
                zoom: 4,
                center: vm.myMarkers[4].coords
            };
            vm.mapOptions = {
                scrollwheel: false
            };

            // http://angular-ui.github.io/angular-google-maps/#!/api/IsReady
            uiGmapIsReady.promise(1).then(function(instances) {
                instances.forEach(function(inst) {
                    var map = inst.map;
                    // var uuid = map.uiGmap_id;
                    // var mapInstanceNumber = inst.instance; // Starts at 1.

                    vm.myMap = map;
                    angular.forEach(vm.myMarkers, function(pos, id) {
                        vm.myMarkers[id].position = new google.maps.Marker({
                            map: vm.myMap,
                            position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude)
                        });
                    });

                });
            });

        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.maps')
        .controller('GMapController', GMapController);

    GMapController.$inject = ['$scope', '$timeout', 'uiGmapGoogleMapApi'];

    function GMapController($scope, $timeout, uiGmapGoogleMapApi) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

            // Basic map
            vm.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };

            // Markers

            vm.map1 = {center: {latitude: 40.1451, longitude: -99.6680 }, zoom: 4 };
            vm.options = {scrollwheel: false};
            vm.coordsUpdates = 0;
            vm.dynamicMoveCtr = 0;
            vm.marker = {
              id: 0,
              coords: {
                latitude: 40.1451,
                longitude: -99.6680
              },
              options: { draggable: true },
              events: {
                dragend: function (/*marker, eventName, args*/) {
                  // var lat = marker.getPosition().lat();
                  // var lon = marker.getPosition().lng();

                  vm.marker.options = {
                    draggable: true,
                    labelContent: 'lat: ' + vm.marker.coords.latitude + ' ' + 'lon: ' + vm.marker.coords.longitude,
                    labelAnchor: '100 0',
                    labelClass: 'marker-labels'
                  };
                }
              }
            };
            var $offWatch = $scope.$watchCollection('marker.coords', function (newVal, oldVal) {
              if (_.isEqual(newVal, oldVal))
                return;
              vm.coordsUpdates++;
            });
            $timeout(function () {
              vm.marker.coords = {
                latitude: 42.1451,
                longitude: -100.6680
              };
              vm.dynamicMoveCtr++;
              $timeout(function () {
                vm.marker.coords = {
                  latitude: 43.1451,
                  longitude: -102.6680
                };
                vm.dynamicMoveCtr++;
              }, 2000);
            }, 1000);

            // uiGmapGoogleMapApi is a promise.
            // The 'then' callback function provides the google.maps object.
            // uiGmapGoogleMapApi.then(function(/*maps*/) {

            // });

            $scope.$on('$destroy', $offWatch);
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.maps')
        .run(mapsRun);

    mapsRun.$inject = ['Menu'];

    function mapsRun(Menu) {

        var menuItem = {
            name: 'Maps',
            sref: 'app.maps',
            // iconclass: 'ion-planet',
            imgpath: 'app/img/icons/planet.svg',
            order: 7,
            subitems: [{
                name: 'Google Maps Full',
                sref: 'app.maps.full'
            }, {
                name: 'Google Maps',
                sref: 'app.maps.google'
            },{
                name: 'Vector Maps',
                sref: 'app.maps.vector'
            },{
                name: 'Datamaps',
                sref: 'app.maps.datamaps'
            }]
        };

        Menu.addItem(menuItem);

    }
})();

(function() {
    'use strict';

    angular
        .module('app.maps')
        .run(mapsRoute);

    mapsRoute.$inject = ['Router'];

    function mapsRoute(Router) {

        Router.state('app.maps', {
                url: '/maps',
                title: 'Maps',
                abstract: true,
                template: '<div ui-view class="ng-fadeInLeftShort"></div>'
            })
            .state('app.maps.google', {
                url: '/google',
                title: 'Google Maps',
                templateUrl: 'google-map.html',
                require: ['lodash', 'uiGmapgoogle-maps']
            })
            .state('app.maps.full', {
                url: '/google-full',
                title: 'Fullsize Google Map',
                templateUrl: 'google-map-full.html',
                require: ['lodash', 'uiGmapgoogle-maps']
            })
            .state('app.maps.vector', {
                url: '/vector',
                title: 'Vector Maps',
                templateUrl: 'vector-map.html',
                require: ['vector-map', 'vector-map-maps']
            })
            .state('app.maps.datamaps', {
                url: '/datamaps',
                title: 'Datamaps',
                templateUrl: 'datamaps.html',
                require: ['datamaps']
            });
    }

})();

(function() {
    'use strict';

    angular
        .module('app.maps')
        .controller('VectorMapController', VectorMapController);

    VectorMapController.$inject = ['Colors'];

    function VectorMapController(Colors) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

            vm.options = {
                map: 'world_mill_en',
                normalizeFunction: 'polynomial',
                backgroundColor: '#fff',
                regionsSelectable: true,
                markersSelectable: true,
                regionStyle: {
                    initial: {
                        fill: Colors.byName('gray-lighter')
                    },
                    hover: {
                        fill: Colors.byName('indigo-500'),
                        stroke: '#fff'
                    },
                },
                markerStyle: {
                    initial: {
                        fill: Colors.byName('pink-500'),
                        stroke: '#fff',
                        r: 10
                    },
                    hover: {
                        fill: Colors.byName('amber-500'),
                        stroke: '#fff'
                    }
                }
            };

            vm.series = {

            };

            vm.world_markers = [
                {'latLng': [47.14, 9.52],    'name': 'Liechtenstein'},
                {'latLng': [7.11, 171.06],   'name': 'Marshall Islands'},
                {'latLng': [17.3, -62.73],   'name': 'Saint Kitts and Nevis'},
                {'latLng': [3.2, 73.22],     'name': 'Maldives'},
                {'latLng': [35.88, 14.5],    'name': 'Malta'},
                {'latLng': [12.05, -61.75],  'name': 'Grenada'},
                {'latLng': [13.16, -61.23],  'name': 'Saint Vincent and the Grenadines'},
                {'latLng': [13.16, -59.55],  'name': 'Barbados'},
                {'latLng': [17.11, -61.85],  'name': 'Antigua and Barbuda'},
                {'latLng': [-4.61, 55.45],   'name': 'Seychelles'},
                {'latLng': [7.35, 134.46],   'name': 'Palau'},
                {'latLng': [42.5, 1.51],     'name': 'Andorra'}
            ];
            vm.other_markers = [
                {'latLng': [56.13, -106.34], 'name': 'Canada', style: {fill: Colors.byName('info')}},
                {'latLng': [40.71, -74.00],  'name': 'New York', style: {fill: Colors.byName('info')}},
                {'latLng': [43.65, -79.38],  'name': 'Toronto', style: {fill: Colors.byName('info')}},
                {'latLng': [37.77, -122.41], 'name': 'San Francisco', style: {fill: Colors.byName('info')}},
                {'latLng': [39.32, -111.09], 'name': 'Utah', style: {fill: Colors.byName('info')}},
                {'latLng': [41.9, 12.45],    'name': 'Vatican City', style: {fill: Colors.byName('info')}},
                {'latLng': [43.93, 12.46],   'name': 'San Marino', style: {fill: Colors.byName('info')}}
            ];

            vm.showAllMarkers = false;
            vm.markers = vm.world_markers;

            vm.displayAllMarkers = displayAllMarkers;

            function displayAllMarkers(show) {

                if (show) vm.markers = vm.world_markers.concat(vm.other_markers);
                else vm.markers = vm.world_markers;

            }

            // USA Map

            vm.usa_markers = [{
                latLng: [40.71, -74.00],
                name: 'New York'
            }, {
                latLng: [34.05, -118.24],
                name: 'Los Angeles'
            }, {
                latLng: [41.87, -87.62],
                name: 'Chicago'
            }, {
                latLng: [29.76, -95.36],
                name: 'Houston'
            }, {
                latLng: [39.95, -75.16],
                name: 'Philadelphia'
            }, {
                latLng: [38.90, -77.03],
                name: 'Washington'
            }, {
                latLng: [37.36, -122.03],
                name: 'Silicon Valley',
                style: {
                    fill: Colors.byName('green-500'),
                    r: 20
                }
            }];

            vm.usa_options = {
                map: 'us_mill_en',
                normalizeFunction: 'polynomial',
                backgroundColor: '#fff',
                regionsSelectable: true,
                markersSelectable: true,
                regionStyle: {
                    initial: {
                        fill: Colors.byName('deepPurple-400')
                    },
                    hover: {
                        fill: Colors.byName('deepPurple-100'),
                        stroke: '#fff'
                    },
                },
                markerStyle: {
                    initial: {
                        fill: Colors.byName('amber-500'),
                        stroke: '#fff',
                        r: 10
                    },
                    hover: {
                        fill: Colors.byName('orange-500'),
                        stroke: '#fff'
                    }
                }
            };
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.maps')
        .directive('vectorMap', vectorMap);

    vectorMap.$inject = ['$timeout'];

    function vectorMap($timeout) {
        var directive = {
            // bindToController: true,
            link: link,
            restrict: 'AE',
            scope: {
                mapOptions: '=',
                mapMarkers: '=',
                mapSeries: '='
            }
        };
        return directive;

        function link(scope, element, attrs) {
            // Height attribute
            if(attrs.height) element.css('height', attrs.height);

            $timeout(function() {
                // watch for changes
                scope.$watch('mapOptions', function() {
                    reload(element, scope.mapOptions);
                });
                scope.$watch('mapMarkers', function() {
                    scope.mapOptions.markers = scope.mapMarkers;
                    reload(element, scope.mapOptions);
                });
                scope.$watch('mapSeries', function() {
                    scope.mapOptions.series = scope.mapSeries;
                    reload(element, scope.mapOptions);
                });
            });

            function reload(el) {
                $(el).empty()
                    .vectorMap(scope.mapOptions);
            }
        }
    }

})();

(function() {
    'use strict';

    angular
        .module('app.menu')
        .controller('MenuController', MenuController);

    MenuController.$inject = ['Menu'];

    function MenuController(Menu) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
            vm.items = Menu.getItems();
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.menu')
        .service('Menu', Menu);

    function Menu() {
        /* jshint validthis:true */
        this.addItem = addItem;
        this.getItems = getItems;

        ////////////////

        this.menu = [];

        function addItem(item) {
            validate(item);
            this.menu.push(item);
        }

        function getItems() {
            return this.menu;
        }

        // validate items and throw error when can't recover
        function validate(item) {
            if (!angular.isDefined(item))
                throw new Error('Menu item not defined.');
            if (!angular.isDefined(item.name))
                throw new Error('Menu item name not defined.');
            if (!angular.isDefined(item.order))
                item.order = 0; // order must exists
            // item ok
            return item;
        }

    }
})();

(function() {
    'use strict';

    angular
        .module('app.pages')
        .controller('MessagesController', MessagesController)
        .controller('MessageViewModalController', MessageViewModalController)
        .controller('MessageNewModalController', MessageNewModalController);

    MessagesController.$inject = ['$uibModal'];

    function MessagesController($uibModal) {
        var vm = this;


        activate();

        ////////////////

        function activate() {

            vm.display = function() {

                var modalBarInstance = $uibModal.open({
                    animation: true,
                    templateUrl: 'app/views/messages.view.tpl.html',
                    controller: 'MessageViewModalController as mod',
                    // position via css class
                    windowClass: 'modal-right modal-auto-size',
                    backdropClass: '',
                    // sent data to the modal instance (injectable into controller)
                    resolve: {
                        data: function() {
                            return {
                                title: 'Settings'
                            };
                        }
                    }
                });

                modalBarInstance.result.then(function( /*data*/ ) {
                    // use data from modal here
                }, function() {
                    // Modal dismissed
                });
            };

            vm.compose = function() {

                var modalBarInstance = $uibModal.open({
                    animation: true,
                    templateUrl: 'app/views/messages.new.tpl.html',
                    controller: 'MessageNewModalController as mod',
                    // position via css class
                    // windowClass: 'modal-right modal-auto-size',
                    // backdropClass: '',
                    // sent data to the modal instance (injectable into controller)
                    resolve: {
                        data: function() {
                            return {
                                title: 'Settings'
                            };
                        }
                    }
                });

                modalBarInstance.result.then(function( /*data*/ ) {
                    // use data from modal here
                }, function() {
                    // Modal dismissed
                });
            };

        }
    }

    MessageNewModalController.$inject = ['$uibModalInstance', 'data'];

    function MessageNewModalController($uibModalInstance, data) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

            vm.modalTitle = data.title;

            vm.close = function() {
                $uibModalInstance.close( /* data for promise*/ );
            };

            vm.cancel = function() {
                $uibModalInstance.dismiss('cancel');
            };
        }
    }

    MessageViewModalController.$inject = ['$uibModalInstance', 'data'];

    function MessageViewModalController($uibModalInstance, data) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

            vm.modalTitle = data.title;

            vm.close = function() {
                $uibModalInstance.close( /* data for promise*/ );
            };

            vm.cancel = function() {
                $uibModalInstance.dismiss('cancel');
            };
        }
    }

})();

(function() {
    'use strict';

    angular
        .module('app.pages')
        .run(pagesRun);

    pagesRun.$inject = ['Menu'];

    function pagesRun(Menu) {

        var menuItem = {
            name: 'Pages',
            sref: 'app.pages',
            order: 8,
            // iconclass: 'ion-ios-browsers',
            imgpath: 'app/img/icons/ios-browsers.svg',
            subitems: [{
                name: 'Timeline',
                sref: 'app.pages.timeline'
            }, {
                name: 'Invoice',
                sref: 'app.pages.invoice'
            }, {
                name: 'Pricing',
                sref: 'app.pages.pricing'
            }, {
                name: 'Contacts',
                sref: 'app.pages.contacts'
            }, {
                name: 'FAQ',
                sref: 'app.pages.faq'
            }, {
                name: 'Projects',
                sref: 'app.pages.projects'
            }, {
                name: 'Blog',
                sref: 'app.pages.blog'
            }, {
                name: 'Article',
                sref: 'app.pages.article'
            }, {
                name: 'Profile',
                sref: 'app.pages.profile'
            }, {
                name: 'Gallery',
                sref: 'app.pages.gallery'
            }, {
                name: 'Wall',
                sref: 'app.pages.wall'
            }, {
                name: 'Search',
                sref: 'app.pages.search'
            }, {
                name: 'Messages Board',
                sref: 'app.pages.messages'
            }]
        };

        Menu.addItem(menuItem);

    }
})();
(function() {
    'use strict';

    angular
        .module('app.pages')
        .run(pagesRoute);

    pagesRoute.$inject = ['Router'];
    function pagesRoute(Router){

        Router.state('app.pages', {
            url: '/pages',
            abstract: true,
            template: '<div ui-view class="ng-fadeInLeftShort"></div>'
        })
        .state('app.pages.blog', {
            url: '/Blog',
            title: 'Blog',
            templateUrl: 'blog.html'
        })
        .state('app.pages.article', {
            url: '/Article',
            title: 'Article',
            templateUrl: 'blog.article.html'
        })
        .state('app.pages.profile', {
            url: '/Profile',
            title: 'Profile',
            templateUrl: 'profile.html',
            require: ['xeditable']
        })
        .state('app.pages.gallery', {
            url: '/Gallery',
            title: 'Gallery',
            templateUrl: 'gallery.html',
            require: ['blueimp-gallery']
        })
        .state('app.pages.wall', {
            url: '/wall',
            title: 'Wall',
            templateUrl: 'wall.html'
        })
        .state('app.pages.search', {
            url: '/Search',
            title: 'Search',
            templateUrl: 'search.html'
        })
        .state('app.pages.messages', {
            url: '/messages',
            title: 'Messages Board',
            templateUrl: 'messages.html'
        })
        .state('app.pages.timeline', {
            url: '/timeline',
            title: 'Timeline',
            templateUrl: 'timeline.html'
        })
        .state('app.pages.invoice', {
            url: '/invoice',
            title: 'Invoice',
            templateUrl: 'invoice.html'
        })
        .state('app.pages.pricing', {
            url: '/pricing',
            title: 'Pricing',
            templateUrl: 'pricing.html'
        })
        .state('app.pages.contacts', {
            url: '/contacts',
            title: 'Contacts',
            templateUrl: 'contacts.html'
        })
        .state('app.pages.projects', {
            url: '/projects',
            title: 'Projects',
            templateUrl: 'projects.html'
        })
        .state('app.pages.faq', {
            url: '/faq',
            title: 'FAQ',
            templateUrl: 'faq.html'
        })
        ;
    }

})();

(function() {
    'use strict';

    angular
        .module('app.pages')
        .controller('ProfileController', ProfileController);

    ProfileController.$inject = ['editableOptions'];
    function ProfileController(editableOptions) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
            editableOptions.theme = 'bs3';

            vm.genders = [
                {value: 0, text: 'Female'},
                {value: 1, text: 'Male'}
              ];

            vm.data = {
                area: 'Research & development',
                birthday: new Date(2000, 10, 10),
                membersince: new Date(2015, 10, 5),
                gender: 0,
                address: 'Some street, 123',
                email: 'user@mail.com',
                phone: '13-123-46578',
                about: 'Pellentesque porta tincidunt justo, non fringilla erat iaculis in. Sed nisi erat, ornare eu pellentesque quis, pellentesque non nulla. Proin rutrum, est pellentesque commodo mattis, sem justo porttitor odio, id aliquet lacus augue nec nisl.'
            };

            vm.showGender = function() {
                return vm.genders[vm.data.gender].text;
            };
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.preloader')
        .directive('preloader', preloader);

    preloader.$inject = ['$animate', '$timeout', '$q'];

    function preloader($animate, $timeout, $q) {

        var directive = {
            restrict: 'EAC',
            template: '<div class="preloader-progress">' +
                '<div class="preloader-progress-bar" ' +
                'ng-style="{width: loadCounter + \'%\'}"></div>' +
                '</div>',
            link: link
        };
        return directive;

        ///////

        function link(scope, el) {

            scope.loadCounter = 0;

            var counter = 0,
                timeout;

            // disables scrollbar
            angular.element('body').css('overflow', 'hidden');
            // ensure class is present for styling
            el.addClass('preloader');

            appReady().then(function() {
                $timeout(endCounter, 500);
            });

            timeout = $timeout(startCounter);

            ///////

            function startCounter() {

                var remaining = 100 - counter;
                counter = counter + (0.0175 * Math.pow(1 - Math.sqrt(remaining), 2));

                scope.loadCounter = parseInt(counter, 10);

                timeout = $timeout(startCounter, 20);
            }

            function endCounter() {

                $timeout.cancel(timeout);

                scope.loadCounter = 100;

                $timeout(function() {
                    // animate preloader hiding
                    $animate.addClass(el, 'preloader-hidden');
                    // retore scrollbar
                    angular.element('body').css('overflow', '');
                }, 300);
            }

            function appReady() {
                var deferred = $q.defer();
                var fired = 0;
                // if this doesn't sync with the real app ready
                // a custom event must be used instead
                var off = scope.$on('$viewContentLoaded', function() {
                    fired++;
                    // Wait for two events since we have two main ui-view
                    if ( fired > 1 ) {
                        deferred.resolve();
                        off();
                    }
                });

                return deferred.promise;
            }

        } //link
    }

})();

(function() {
    'use strict';

    angular
        .module('app.ripple')
        .directive('ripple', ripple);

    function ripple() {

        return {
            restrict: 'C',
            link: link
        };

        function link(scope, element) {
            new Ripple(element);
        }

    }

})();

(function(global) {
    'use strict';

    // public interface
    global.Ripple = RippleEffect;

    /**
     * Ripple effect for common components
     * @param [element] jQuery or jqLite element
     */
    function RippleEffect(element) {
        var TRANSITION_END = 'transitionend webkitTransitionEnd';
        var jq = angular.element;

        this.element = element;
        this.rippleElement = this.getElement();
        this.$rippleElement = jq(this.rippleElement);

        var clickEv = this.detectClickEvent();

        var self = this;
        element.on(clickEv, function() {
            // remove animation on click
            self.$rippleElement.removeClass('md-ripple-animate');
            // Set ripple size and position
            self.calcSizeAndPos();
            // start to animate
            self.$rippleElement
                .addClass('md-ripple-animate');
        });

        this.$rippleElement.on(TRANSITION_END, function() {
            self.$rippleElement
                .removeClass('md-ripple-animate');
            // avoid weird affect when ripple is not active
            self.rippleElement.style.width = 0;
            self.rippleElement.style.height = 0;
        });
    }
    /**
     * Returns the elements used to generate the effect
     * If not exists, it is created by appending a new
     * dom element
     */
    RippleEffect.prototype.getElement = function() {
        var dom = this.element[0];
        var rippleElement = dom.querySelector('.md-ripple');

        if (rippleElement === null) {
            // Create ripple
            rippleElement = document.createElement('span');
            rippleElement.className = 'md-ripple';
            // Add ripple to element
            this.element.append(rippleElement);
        }
        return rippleElement;
    };

    /**
     * Determines the better size for the ripple element
     * based on the element attached and calculates the
     * position be fully centered
     */
    RippleEffect.prototype.calcSizeAndPos = function() {
        var size = Math.max(this.element.width(), this.element.height());
        this.rippleElement.style.width = size + 'px';
        this.rippleElement.style.height = size + 'px';
        // autocenter (requires css)
        this.rippleElement.style.marginTop = -(size / 2) + 'px';
        this.rippleElement.style.marginLeft = -(size / 2) + 'px';
    };

    RippleEffect.prototype.detectClickEvent = function() {
        var isIOS = ((/iphone|ipad/gi).test(navigator.appVersion));
        return isIOS ? 'touchstart' : 'click';
    };

})(window);

(function() {
    'use strict';

    angular
        .module('app.router')
        .config(routerConfig);

    routerConfig.$inject = ['$ocLazyLoadProvider', 'APP_REQUIRES'];

    function routerConfig($ocLazyLoadProvider, APP_REQUIRES) {

        // Lazy Load modules configuration
        $ocLazyLoadProvider.config({
            debug: false,
            events: true,
            modules: APP_REQUIRES.modules
        });

    }
})();

(function() {
    'use strict';

    angular
        .module('app.router')
        .constant('APP_REQUIRES', {
            'modernizr': {
                files: ['vendor/modernizr/modernizr.custom.js']
            },
            'icons': {
                files: ['vendor/ionicons/css/ionicons.min.css']
            },
            'fontawesome': {
                files: ['vendor/font-awesome/css/font-awesome.min.css']
            },
            'screenfull': {
                files: ['vendor/screenfull/dist/screenfull.js']
            },
            'lodash': {
                files: ['vendor/lodash/dist/lodash.min.js']
            },
            'md-colors': {
                files: ['vendor/material-colors/dist/colors.css']
            },
            'sparkline': {
                files: ['vendor/sparkline/index.js']
            },
            'ng-mfb': {
                files: ['vendor/ng-mfb/mfb/dist/mfb.min.css',
                    'vendor/ng-mfb/src/mfb-directive.js'
                ]
            },
            'easypiechart': {
                files: ['vendor/jquery.easy-pie-chart/dist/angular.easypiechart.min.js']
            },
            'angular-flot': {
                'serie': true,
                files: ['vendor/flot/jquery.flot.js',
                    'vendor/flot/jquery.flot.categories.js',
                    'vendor/flot.tooltip/js/jquery.flot.tooltip.min.js',
                    'vendor/flot/jquery.flot.resize.js',
                    'vendor/flot/jquery.flot.pie.js',
                    'vendor/flot/jquery.flot.time.js',
                    'vendor/sidebysideimproved/jquery.flot.orderBars.js',
                    'vendor/flot-spline/js/jquery.flot.spline.min.js',
                    'vendor/angular-flot/angular-flot.js'
                ]
            },
            'ui.select': {
                files: ['vendor/angular-ui-select/dist/select.js',
                    'vendor/angular-ui-select/dist/select.css'
                ]
            },
            'uiGmapgoogle-maps': {
                files: [
                    'vendor/angular-simple-logger/dist/angular-simple-logger.min.js',
                    'vendor/angular-google-maps/dist/angular-google-maps.min.js'
                ]
            },
            'angular-rickshaw': {
                serie: true,
                files: ['vendor/d3/d3.min.js',
                    'vendor/rickshaw/rickshaw.js',
                    'vendor/rickshaw/rickshaw.min.css',
                    'vendor/angular-rickshaw/rickshaw.js'
                ]
            },
            'ui.knob': {
                files: ['vendor/angular-knob/src/angular-knob.js',
                    'vendor/jquery-knob/dist/jquery.knob.min.js'
                ]
            },
            'oitozero.ngSweetAlert': {
                files: ['vendor/sweetalert/dist/sweetalert.css',
                    'vendor/sweetalert/dist/sweetalert.min.js',
                    'vendor/angular-sweetalert/SweetAlert.js'
                ]
            },
            'the-cormoran.angular-loaders': {
                files: [
                    'vendor/loaders.css/loaders.css',
                    'vendor/angular-loaders/dist/angular-loaders.min.js'
                ]
            },
            'angularBootstrapNavTree': {
                files: ['vendor/angular-bootstrap-nav-tree/dist/abn_tree_directive.js',
                    'vendor/angular-bootstrap-nav-tree/dist/abn_tree.css'
                ]
            },
            'ng-nestable': {
                files: ['vendor/ng-nestable/src/angular-nestable.js',
                    'vendor/nestable/jquery.nestable.js'
                ]
            },
            'akoenig.deckgrid': {
                files: ['vendor/angular-deckgrid/angular-deckgrid.js']
            },
            'vr.directives.slider': {
                files: ['vendor/venturocket-angular-slider/build/angular-slider.min.js']
            },
            'xeditable': {
                files: ['vendor/angular-xeditable/dist/js/xeditable.js',
                    'vendor/angular-xeditable/dist/css/xeditable.css'
                ]
            },
            'colorpicker.module': {
                files: ['vendor/angular-bootstrap-colorpicker/css/colorpicker.css',
                    'vendor/angular-bootstrap-colorpicker/js/bootstrap-colorpicker-module.js'
                ]
            },
            'summernote': {
                serie: true,
                insertBefore: '#appcss',
                files: [
                    'vendor/bootstrap/js/modal.js',
                    'vendor/bootstrap/js/dropdown.js',
                    'vendor/bootstrap/js/tooltip.js',
                    'vendor/summernote/dist/summernote.css',
                    'vendor/summernote/dist/summernote.js',
                    'vendor/angular-summernote/dist/angular-summernote.js'
                ]
            },
            'angularFileUpload': {
                files: ['vendor/angular-file-upload/dist/angular-file-upload.min.js']
            },
            'filestyle': {
                files: ['vendor/bootstrap-filestyle/src/bootstrap-filestyle.js']
            },
            'ngDropzone': {
                serie: true,
                insertBefore: '#appcss',
                files: [
                    'vendor/dropzone/dist/basic.css',
                    'vendor/dropzone/dist/dropzone.css',
                    'vendor/dropzone/dist/dropzone.js',
                    'vendor/angular-dropzone/lib/angular-dropzone.js'
                ]
            },
            'vector-map': {
                files: ['vendor/ika.jvectormap/jquery-jvectormap-1.2.2.min.js',
                    'vendor/ika.jvectormap/jquery-jvectormap-1.2.2.css'
                ]
            },
            'vector-map-maps': {
                files: ['vendor/ika.jvectormap/jquery-jvectormap-world-mill-en.js',
                    'vendor/ika.jvectormap/jquery-jvectormap-us-mill-en.js'
                ]
            },
            'datatables': {
                serie: true,
                files: ['vendor/datatables/media/css/jquery.dataTables.css',
                    'vendor/datatables/media/js/jquery.dataTables.js',
                    'vendor/angular-datatables/dist/angular-datatables.js',
                    // 'vendor/angular-datatables/dist/plugins/bootstrap/datatables.bootstrap.css',
                    'vendor/angular-datatables/dist/plugins/bootstrap/angular-datatables.bootstrap.js'
                ]
            },
            'ngTable': {
                files: ['vendor/ng-table/dist/ng-table.min.js',
                    'vendor/ng-table/dist/ng-table.min.css'
                ]
            },
            'ngTableExport': {
                files: ['vendor/ng-table-export/ng-table-export.js']
            },
            'blueimp-gallery': {
                files: ['vendor/blueimp-gallery/js/jquery.blueimp-gallery.min.js',
                    'vendor/blueimp-gallery/css/blueimp-gallery.min.css'
                ]
            },
            'datamaps': {
                files: ['vendor/d3/d3.min.js',
                    'vendor/topojson/topojson.min.js',
                    'vendor/datamaps/dist/datamaps.all.js',
                    'vendor/angular-datamaps/dist/angular-datamaps.min.js'
                ],
                serie: true
            }
        });

})();
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
            defaultRoute: '/app/dashboard'
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

/**
 * Main api CRUD service
 *
 * @package   RiskMan
 * @author    Rolf
 * 
 */

/**
 * API service wrapper to make Ajax calls for Trxade
*/
(function() {
    'use strict';
    angular
        .module("app.services")
        .service('api', ['$http','$state', function ($http, $state) {

        //'/rest' path is assumed as base path
        var baseUrl = '/rest';

        /**
         * Sets base url if needed
         * @param {string} url
         * @returns {null}
         */
        this.setBaseUrl = function (url) {
            baseUrl = url;
        };

        /**
         * Default handler for Ajax errors, log to console the response object
         * @param {object} response
         * @returns {response}
         */
        this.errorCallback = function(response) {
            if(response.status === 403) {
                $state.go('user.login');
            } else {
                var value = {
                    string: 'Error:', 
                    data: response
                };
                console.log(value);
                return response;
            }
            
        }; 

        /**
         * Makes a POST HTTP request
         * @param {string} url
         * @param {object} data
         * @returns {request}
         */
        this.create = function(url, data){
            return $http({
               method: 'POST',
               url: baseUrl + url,
               data: data
            });
        };

        /**
         * Makes a GET HTTP request
         * @param {string} url
         * @returns {request}
         */
        this.read = function(url){
            return $http({
               method: 'GET',
               url: baseUrl + url
            });
        };

        /**
         * Makes a PUT HTTP request
         * @param {string} url
         * @param {object} data
         * @returns {request}
         */
        this.update = function(url, data) {
            return $http({
                method: 'PUT',
                url: baseUrl + url,
                data: data
            });
        };
        
        /**
         * Makes a DELETE HTTP request
         * @param {string} url
         * @param {object} data 
         * @returns {request}
         */
        this.deleteList = function(url, data) {
            return $http({
                method: 'DELETE',
                url: baseUrl + url,
                data: data,
                headers: {
                    "Content-Type": "application/json"
                }
            });
        };

        /**
         * Makes a DELETE HTTP request
         * @param {string} url
         * @returns {request}
         */
        this.delete = function(url) {
            return $http({
                method: 'DELETE',
                url: baseUrl + url
            });
        };

        this.deleteById = function(url, param) {
            return $http({
                method: 'DELETE',
                url: baseUrl + url + '/' + param
            });
        };
    }]);

})();
/**
 * Main api CRUD service
 *
 * @package   RiskMan
 * @author    Rolf
 * 
 */

/**
 * API service wrapper to make Ajax calls for Trxade
*/
(function() {
    'use strict';
    angular
        .module("app.services")
        .service('auth', ['api','$state', function (api, $state) {

        this.auth = function(data) {
            if(data.username && data.password) {
                return api.create('/auth', data);
            } 
            return false;
        };
        
        this.logout = function() {
            var data = {
                id: 'me'
            };
            
            return api.deleteList('/auth', data);
        };
        
        this.onError = function(err) {
            return api.errorCallback(err);
        };
    }]);

})();
(function() {
    'use strict';

    angular
        .module('app.settings')
        .run(settingsRun);

    settingsRun.$inject = ['$rootScope'];

    function settingsRun($rootScope) {

        var themes = [
            'theme-1',
            'theme-2',
            'theme-3',
            'theme-4',
            'theme-5',
            'theme-6',
            'theme-7',
            'theme-8',
            'theme-9',
        ]

        // Global Settings
        // -----------------------------------
        $rootScope.app = {
            name: 'Centric',
            description: 'Bootstrap Admin Template',
            year: ((new Date()).getFullYear()),
            layout: {
                rtl: false
            },
            sidebar: {
                over: false,
                showheader: true,
                showtoolbar: true,
                offcanvas: false
            },
            header: {
                menulink: 'menu-link-slide'
            },
            footerHidden: false,
            viewAnimation: 'ng-fadeInLeftShort',
            theme: themes[0],
            currentTheme: 0
        };

        $rootScope.themes = themes;

    }

})();
(function() {
    'use strict';

    angular
        .module('app.sidebar')
        .directive('sidebarNav', sidebarNav);

    sidebarNav.$inject = [];

    function sidebarNav() {
        return {
            restrict: 'EAC',
            link: link
        };

        function link(scope, element) {

            element.on('click', function(event) {
                var item = getItemElement(event);
                // check click is on a tag
                if (!item) return;

                var ele = angular.element(item),
                    liparent = ele.parent()[0];

                var lis = ele.parent().parent().children(); // markup: ul > li > a
                // remove .active from childs
                lis.find('li').removeClass('active');
                // remove .active from siblings ()
                angular.forEach(lis, function(li) {
                    if (li !== liparent)
                        angular.element(li).removeClass('active');
                });

                var next = ele.next();
                if (next.length && next[0].tagName === 'UL') {
                    ele.parent().toggleClass('active');
                    event.preventDefault();
                }
            });

        }

        // find the a element in click context
        // doesn't check deeply, asumens two levels only
        function getItemElement(event) {
            var element = event.target,
                parent = element.parentNode;
            if (element.tagName.toLowerCase() === 'a') return element;
            if (parent.tagName.toLowerCase() === 'a') return parent;
            if (parent.parentNode.tagName.toLowerCase() === 'a') return parent.parentNode;
        }
    }

})();

(function() {
    'use strict';

    angular
        .module('app.sidebar')
        .run(sidebarRun);
    sidebarRun.$inject = ['$rootScope', '$window', '$document', '$timeout', 'APP_MEDIAQUERY'];

    function sidebarRun($rootScope, $window, $document, $timeout, APP_MEDIAQUERY) {
        // Sidebar API for mobile
        $rootScope.toggleSidebar = toggleSidebarState;
        $rootScope.closeSidebar = function() {
            toggleSidebarState(false);
        };
        $rootScope.openSidebar = function() {
            toggleSidebarState(true);
        };

        // Sidebar offcanvas API for desktops
        $rootScope.toggleSidebarOffcanvasVisible = function(state) {
            $rootScope.sidebarOffcanvasVisible = angular.isDefined(state) ? state : !$rootScope.sidebarOffcanvasVisible;
        };

        // ESC key close sidebar
        $document.on('keyup',function(e) {
             if (e.keyCode == 27) {
                $timeout(function() {
                    $rootScope.toggleSidebarOffcanvasVisible(false);
                });
            }
        });

        // Considerations for different APP states

        // on mobiles, sidebar starts off-screen
        if (isMobileScreen()) $timeout(function() {
            toggleSidebarState(false);
        });

        // hide sidebar when open a new view
        $rootScope.$on('$stateChangeStart', function() {
            if (isMobileScreen())
                toggleSidebarState(false);
            // Always hide offscreen sidebar when route change
            else
                $rootScope.toggleSidebarOffcanvasVisible(false);
        });

        // remove desktop offcanvas when app changes to mobile
        // so when it returns, the sidebar is shown again
        $window.addEventListener('resize', function() {
            if (isMobileScreen())
                $rootScope.toggleSidebarOffcanvasVisible(false);
        });

        ///////

        function toggleSidebarState(state) {
            //  state === true -> open
            //  state === false -> close
            //  state === undefined -> toggle
            $rootScope.sidebarVisible = angular.isDefined(state) ? state : !$rootScope.sidebarVisible;
        }

        function isMobileScreen() {
            return $window.innerWidth < APP_MEDIAQUERY.desktop;
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.tables')
        .controller('DataTableController', DataTableController);

    DataTableController.$inject = ['$resource', 'DTOptionsBuilder', 'DTColumnDefBuilder', 'DTDefaultOptions'];

    function DataTableController($resource, DTOptionsBuilder, DTColumnDefBuilder, DTDefaultOptions) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
            // Override the Bootstrap default options
            DTDefaultOptions.setBootstrapOptions({
                pagination: {
                    classes: {
                        ul: 'pagination pagination-rounded'
                    }
                }
            });

            vm.dtOptionsBs = DTOptionsBuilder
                .newOptions()
                .withPaginationType('full_numbers')
                .withDisplayLength(2)
                // Add Bootstrap compatibility
                .withBootstrap()
                .withLanguage({
                    sSearch: '<em class="ion-search"></em>',
                    oPaginate: {
                        sFirst: '<em class="ion-arrow-left-b"></em>',
                        sLast: '<em class="ion-arrow-right-b"></em>',
                        sNext: '<em class="ion-ios-arrow-right"></em>',
                        sPrevious: '<em class="ion-ios-arrow-left"></em>'
                    }
                })
                ;

            // Dynamic
            vm.dtOptions = DTOptionsBuilder
                .newOptions()
                .withPaginationType('numbers')
                .withDisplayLength(5)
                .withBootstrap()
                .withLanguage({
                    sSearch: '<em class="ion-search"></em>',
                    oPaginate: {
                        sFirst: '<em class="ion-arrow-left-b"></em>',
                        sLast: '<em class="ion-arrow-right-b"></em>',
                        sNext: '<em class="ion-ios-arrow-right"></em>',
                        sPrevious: '<em class="ion-ios-arrow-left"></em>'
                    }
                })
                ;
            vm.dtColumnDefs = [
                DTColumnDefBuilder.newColumnDef(0),
                DTColumnDefBuilder.newColumnDef(1),
                DTColumnDefBuilder.newColumnDef(2),
                DTColumnDefBuilder.newColumnDef(3).notSortable()
            ];

            $resource('server/datatable.json').query().$promise.then(function(persons) {
                vm.persons = persons;
            });

            // Change data

            vm.heroes = [{
                'id': 860,
                'firstName': 'Superman',
                'lastName': 'Yoda'
            }, {
                'id': 870,
                'firstName': 'Ace',
                'lastName': 'Ventura'
            }, {
                'id': 590,
                'firstName': 'Flash',
                'lastName': 'Gordon'
            }, {
                'id': 870,
                'firstName': 'Ace',
                'lastName': 'Ventura'
            }, {
                'id': 590,
                'firstName': 'Flash',
                'lastName': 'Gordon'
            }, {
                'id': 803,
                'firstName': 'Luke',
                'lastName': 'Skywalker'
            }];

            vm.person2Add = _buildPerson2Add(1);
            vm.addPerson = addPerson;
            vm.modifyPerson = modifyPerson;
            vm.removePerson = removePerson;

            function _buildPerson2Add(id) {
                return {
                    id: id,
                    firstName: 'Foo' + id,
                    lastName: 'Bar' + id
                };
            }

            function addPerson() {
                vm.heroes.push(angular.copy(vm.person2Add));
                vm.person2Add = _buildPerson2Add(vm.person2Add.id + 1);
            }

            function modifyPerson(index) {
                vm.heroes.splice(index, 1, angular.copy(vm.person2Add));
                vm.person2Add = _buildPerson2Add(vm.person2Add.id + 1);
            }

            function removePerson(index) {
                vm.heroes.splice(index, 1);
            }

        }
    }
})();

(function() {
    'use strict';
    /*jshint -W055*/

    angular
        .module('app.tables')
        .controller('NgTableController', NgTableController);

    NgTableController.$inject = ['$scope', '$filter', 'ngTableParams'];

    function NgTableController($scope, $filter, ngTableParams) {

        var vm = this;

        // SORTING

        var data = [{
            name: 'Moroni',
            age: 50,
            money: -10
        }, {
            name: 'Tiancum',
            age: 43,
            money: 120
        }, {
            name: 'Jacob',
            age: 27,
            money: 5.5
        }, {
            name: 'Nephi',
            age: 29,
            money: -54
        }, {
            name: 'Enos',
            age: 34,
            money: 110
        }, {
            name: 'Tiancum',
            age: 43,
            money: 1000
        }, {
            name: 'Jacob',
            age: 27,
            money: -201
        }, {
            name: 'Nephi',
            age: 29,
            money: 100
        }, {
            name: 'Enos',
            age: 34,
            money: -52.5
        }, {
            name: 'Tiancum',
            age: 43,
            money: 52.1
        }, {
            name: 'Jacob',
            age: 27,
            money: 110
        }, {
            name: 'Nephi',
            age: 29,
            money: -55
        }, {
            name: 'Enos',
            age: 34,
            money: 551
        }, {
            name: 'Tiancum',
            age: 43,
            money: -1410
        }, {
            name: 'Jacob',
            age: 27,
            money: 410
        }, {
            name: 'Nephi',
            age: 29,
            money: 100
        }, {
            name: 'Enos',
            age: 34,
            money: -100
        }];

        vm.tableParams = new ngTableParams({
            page: 1, // show first page
            count: 10, // count per page
            sorting: {
                name: 'asc' // initial sorting
            }
        }, {
            total: data.length, // length of data
            getData: function($defer, params) {
                // use build-in angular filter
                var orderedData = params.sorting() ?
                    $filter('orderBy')(data, params.orderBy()) :
                    data;

                $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
            }
        });

        // FILTERS

        vm.tableParams2 = new ngTableParams({
            page: 1, // show first page
            count: 10, // count per page
            filter: {
                name: '',
                age: ''
                    // name: 'M'       // initial filter
            }
        }, {
            total: data.length, // length of data
            getData: function($defer, params) {
                // use build-in angular filter
                var orderedData = params.filter() ?
                    $filter('filter')(data, params.filter()) :
                    data;

                vm.users = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());

                params.total(orderedData.length); // set total for recalc pagination
                $defer.resolve(vm.users);
            }
        });

        // SELECT ROWS

        vm.data = data;

        vm.tableParams3 = new ngTableParams({
            page: 1, // show first page
            count: 10 // count per page
        }, {
            total: data.length, // length of data
            getData: function($defer, params) {
                // use build-in angular filter
                var filteredData = params.filter() ?
                    $filter('filter')(data, params.filter()) :
                    data;
                var orderedData = params.sorting() ?
                    $filter('orderBy')(filteredData, params.orderBy()) :
                    data;

                params.total(orderedData.length); // set total for recalc pagination
                $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
            }
        });

        vm.changeSelection = function(/*user*/) {
            // console.info(user);
        };

        // Editable

        $scope.tableParams4 = new ngTableParams({
            page: 1, // show first page
            count: 10 // count per page
        }, {
            total: data.length, // length of data
            getData: function($defer, params) {
                $defer.resolve(data.slice((params.page() - 1) * params.count(), params.page() * params.count()));
            }
        });

        // EXPORT CSV

        var data5 = [{
            name: 'Moroni',
            age: 50
        }, {
            name: 'Tiancum',
            age: 43
        }, {
            name: 'Jacob',
            age: 27
        }, {
            name: 'Nephi',
            age: 29
        }, {
            name: 'Enos',
            age: 34
        }, {
            name: 'Tiancum',
            age: 43
        }, {
            name: 'Jacob',
            age: 27
        }, {
            name: 'Nephi',
            age: 29
        }, {
            name: 'Enos',
            age: 34
        }, {
            name: 'Tiancum',
            age: 43
        }, {
            name: 'Jacob',
            age: 27
        }, {
            name: 'Nephi',
            age: 29
        }, {
            name: 'Enos',
            age: 34
        }, {
            name: 'Tiancum',
            age: 43
        }, {
            name: 'Jacob',
            age: 27
        }, {
            name: 'Nephi',
            age: 29
        }, {
            name: 'Enos',
            age: 34
        }];

        vm.tableParams5 = new ngTableParams({
            page: 1, // show first page
            count: 10 // count per page
        }, {
            total: data5.length, // length of data
            getData: function($defer, params) {
                $defer.resolve(data5.slice((params.page() - 1) * params.count(), params.page() * params.count()));
            }
        });

    }
    NgTableController.$inject = ['$scope', '$filter', 'ngTableParams'];

})();

(function() {
    'use strict';

    angular
        .module('app.tables')
        .run(tablesRun);
    tablesRun.$inject = ['Menu'];

    function tablesRun(Menu) {

        var menuItem = {
            name: 'Tables',
            sref: 'app.tables',
            order: 5,
            // iconclass: 'ion-navicon',
            imgpath: 'app/img/icons/navicon.svg',
            subitems: [{
                name: 'Classic',
                sref: 'app.tables.classic'
            }, {
                name: 'Datatable',
                sref: 'app.tables.datatable'
            }, {
                name: 'ngTable',
                sref: 'app.tables.ngtable'
            }, {
                name: 'xEditable',
                sref: 'app.tables.xeditable'
            }]
        };

        Menu.addItem(menuItem);

    }
})();
(function() {
    'use strict';

    angular
        .module('app.tables')
        .run(tablesRoute);

    tablesRoute.$inject = ['Router'];
    function tablesRoute(Router){

        Router.state('app.tables', {
            url: '/tables',
            title: 'Tables',
            abstract: true,
            template: '<div ui-view class="ng-fadeInLeftShort"></div>'
        })
        .state('app.tables.classic', {
            url: '/classic',
            title: 'Tables Classic',
            templateUrl: 'tables.classic.html'
        })
        .state('app.tables.datatable', {
            url: '/data',
            title: 'Tables Data',
            templateUrl: 'datatable.html',
            require: ['datatables']
        })
        .state('app.tables.ngtable', {
            url: '/ngtable',
            title: 'ngTable',
            templateUrl: 'ngtable.html',
            require: ['ngTable', 'ngTableExport']
        })
        .state('app.tables.xeditable', {
            url: '/xeditable',
            title: 'Tables Xeditable',
            templateUrl: 'xeditable.table.html',
            require: ['xeditable']
        })
        ;
    }

})();

(function() {
    'use strict';

    angular
        .module('app.tables')
        .controller('TablexEditableController', TablexEditableController);

    TablexEditableController.$inject = ['$filter', '$http', 'editableOptions', 'editableThemes', '$q'];

    function TablexEditableController($filter, $http, editableOptions, editableThemes, $q) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

            editableOptions.theme = 'bs3';

            // editable row
            // -----------------------------------
            vm.users = [{
                id: 1,
                name: 'awesome user1',
                status: 2,
                group: 4,
                groupName: 'admin'
            }, {
                id: 2,
                name: 'awesome user2',
                status: undefined,
                group: 3,
                groupName: 'vip'
            }, {
                id: 3,
                name: 'awesome user3',
                status: 2,
                group: null
            }];

            vm.statuses = [{
                value: 1,
                text: 'status1'
            }, {
                value: 2,
                text: 'status2'
            }, {
                value: 3,
                text: 'status3'
            }, {
                value: 4,
                text: 'status4'
            }];

            vm.groups = [];
            vm.loadGroups = function() {
                return vm.groups.length ? null : $http.get('server/xeditable-groups.json').success(function(data) {
                    vm.groups = data;
                });
            };

            vm.showGroup = function(user) {
                if (user.group && vm.groups.length) {
                    var selected = $filter('filter')(vm.groups, {
                        id: user.group
                    });
                    return selected.length ? selected[0].text : 'Not set';
                } else {
                    return user.groupName || 'Not set';
                }
            };

            vm.showStatus = function(user) {
                var selected = [];
                if (user.status) {
                    selected = $filter('filter')(vm.statuses, {
                        value: user.status
                    });
                }
                return selected.length ? selected[0].text : 'Not set';
            };

            vm.checkName = function(data, id) {
                if (id === 2 && data !== 'awesome') {
                    return 'Username 2 should be `awesome`';
                }
            };

            vm.saveUser = function(data, id) {
                //vm.user not updated yet
                angular.extend(data, {
                    id: id
                });
                console.log('Saving user: ' + id);
                // return $http.post('/saveUser', data);
            };

            // remove user
            vm.removeUser = function(index) {
                vm.users.splice(index, 1);
            };

            // add user
            vm.addUser = function() {
                vm.inserted = {
                    id: vm.users.length + 1,
                    name: '',
                    status: null,
                    group: null,
                    isNew: true
                };
                vm.users.push(vm.inserted);
            };

            // editable column
            // -----------------------------------


            vm.saveColumn = function(column) {
                var results = [];
                angular.forEach(vm.users, function( /*user*/ ) {
                    // results.push($http.post('/saveColumn', {column: column, value: user[column], id: user.id}));
                    console.log('Saving column: ' + column);
                });
                return $q.all(results);
            };

            // editable table
            // -----------------------------------

            // filter users to show
            vm.filterUser = function(user) {
                return user.isDeleted !== true;
            };

            // mark user as deleted
            vm.deleteUser = function(id) {
                var filtered = $filter('filter')(vm.users, {
                    id: id
                });
                if (filtered.length) {
                    filtered[0].isDeleted = true;
                }
            };

            // cancel all changes
            vm.cancel = function() {
                for (var i = vm.users.length; i--;) {
                    var user = vm.users[i];
                    // undelete
                    if (user.isDeleted) {
                        delete user.isDeleted;
                    }
                    // remove new
                    if (user.isNew) {
                        vm.users.splice(i, 1);
                    }
                }
            };

            // save edits
            vm.saveTable = function() {
                var results = [];
                for (var i = vm.users.length; i--;) {
                    var user = vm.users[i];
                    // actually delete user
                    if (user.isDeleted) {
                        vm.users.splice(i, 1);
                    }
                    // mark as not new
                    if (user.isNew) {
                        user.isNew = false;
                    }

                    // send on server
                    // results.push($http.post('/saveUser', user));
                    console.log('Saving Table...');
                }

                return $q.all(results);
            };

        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.translate')
        .config(translateConfig);
    translateConfig.$inject = ['$translateProvider'];

    function translateConfig($translateProvider) {

        $translateProvider.useStaticFilesLoader({
            prefix: 'server/i18n/',
            suffix: '.json'
        });
        $translateProvider.preferredLanguage('en');
        $translateProvider.useLocalStorage();
        $translateProvider.usePostCompiling(true);
        $translateProvider.useSanitizeValueStrategy('sanitizeParameters');

    }
})();

(function() {
    'use strict';

    angular
        .module('app.translate')
        .run(translateRun);
    translateRun.$inject = ['$rootScope', '$translate'];

    function translateRun($rootScope, $translate) {

        // Internationalization
        // ----------------------

        $rootScope.language = {
            // Handles language dropdown
            listIsOpen: false,
            // list of available languages
            available: {
                'en': 'English',
                'es_AR': 'Español'
            },
            // display always the current ui language
            init: function() {
                var proposedLanguage = $translate.proposedLanguage() || $translate.use();
                var preferredLanguage = $translate.preferredLanguage(); // we know we have set a preferred one in app.config
                $rootScope.language.selected = $rootScope.language.available[(proposedLanguage || preferredLanguage)];
            },
            set: function(localeId) {
                // Set the new idiom
                $translate.use(localeId);
                // save a reference for the current language
                $rootScope.language.selected = $rootScope.language.available[localeId];
                // finally toggle dropdown
                $rootScope.language.listIsOpen = !$rootScope.language.listIsOpen;
            }
        };

        $rootScope.language.init();

    }
})();

(function() {
    'use strict';

    angular
        .module('app.user', ['app.services'])
        .controller('loginCtrl', ['$scope','auth','$state', function($scope, auth, $state) {
            
            $scope.model =  {
                username: '',
                password: ''
            };
            
            
            $scope.errorLogin = {
                msg: ''
            };
            
            $scope.auth = function() {
                var r = auth.auth($scope.model);
                r.then(function(res){
                    if(res.data.success) {
                        $state.go('app.home');
                    } 
                }, function(err) {
                    $scope.errorLogin.msg = err.data.feedback[0];
                    console.log(err);
                });
            };
            
            var init = function() {
                console.log('init');
                
            };
            
            init();
            
            
    
        }]);
})();
(function() {
    'use strict';

    angular
        .module('app.user')
        .run(userRun);

    userRun.$inject = ['Menu'];

    function userRun(Menu) {

        var menuItem = {
            name: 'User',
            sref: 'user',
            order: 9,
            iconclass: 'ion-person-stalker',
            imgpath: 'app/img/icons/person-stalker.svg',
            subitems: [{
                name: 'Login',
                sref: 'user.login'
            }, {
                name: 'Signup',
                sref: 'user.signup'
            }, {
                name: 'Lock',
                sref: 'user.lock'
            }, {
                name: 'Recover',
                sref: 'user.recover'
            }]
        };

        Menu.addItem(menuItem);

    }
})();

(function() {
    'use strict';

    angular
        .module('app.user')
        .run(userRoute);

    userRoute.$inject = ['Router'];
    function userRoute(Router){

        Router.state('user', {
            url: '/user',
            title: 'User',
            abstract: true,
            template: '<div class="page-container bg-blue-grey-900"><div ui-view class="ng-fadeInLeftShort"></div></div>',
            require: ['modernizr', 'icons', 'ng-mfb', 'md-colors']
        })
        .state('user.login', {
            url: '/login',
            title: 'Login',
            templateUrl: 'login.html'
        })
        .state('user.signup', {
            url: '/signup',
            title: 'Signup',
            templateUrl: 'signup.html'
        })
        .state('user.lock', {
            url: '/lock',
            title: 'Lock',
            templateUrl: 'lock.html'
        })
        .state('user.recover', {
            url: '/recover',
            title: 'Recover',
            templateUrl: 'recover.html'
        })
        ;
    }

})();

(function() {
    'use strict';
    angular
        .module('app.utils')
        .service('Browser', Browser);

    Browser.$inject = ['$window'];

    // Browser detection
    function Browser($window) {
        return $window.jQBrowser;
    }

})();
(function() {
    'use strict';

    angular
        .module('app.utils')
        .directive('toggleFullscreen', toggleFullscreen);

    toggleFullscreen.$inject = ['Browser'];

    function toggleFullscreen(Browser) {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element) {
            // Not supported under IE
            if (Browser.msie) {
                element.addClass('hide');
            } else {
                element.on('click', function(e) {
                    e.preventDefault();

                    if (screenfull.enabled) {

                        screenfull.toggle();

                    } else {
                        // Fullscreen not enabled ;
                    }

                });
            }
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.utils')
        .directive('svgReplace', svgReplace);

    svgReplace.$inject = ['$compile', '$http', '$templateCache', '$timeout']
    function svgReplace ($compile, $http, $templateCache, $timeout) {

        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
            $timeout(function() {

                var src = attrs.src;

                if( !src || src.indexOf('.svg') < 0)
                    throw "only support for SVG images";
                    // return /*only support for SVG images*/;

                $http.get(src, {
                    cache : $templateCache
                }).success(function (res) {
                    element.replaceWith($compile(res)(scope))
                })

            });
        }
    }

})();

(function() {
    'use strict';

    angular
        .module('app.utils')
        .directive('triggerResize', triggerResize);

    triggerResize.$inject = ['$window', '$timeout'];

    function triggerResize($window, $timeout) {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element) {
            element.on('click', function() {
                $timeout(function() {
                    $window.dispatchEvent(new Event('resize'));
                });
            });
        }
    }

})();
