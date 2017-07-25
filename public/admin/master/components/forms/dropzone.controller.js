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
