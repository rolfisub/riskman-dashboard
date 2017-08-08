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
