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
