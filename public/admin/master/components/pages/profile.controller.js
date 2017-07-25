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
