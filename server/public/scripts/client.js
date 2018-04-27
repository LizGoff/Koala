console.log( 'js' );;

var app = angular.module("KoalaApp", []);

app.controller("KoalaController", [
    "$http",
    function($http) {
        console.log("KoalaController has been loaded");
        var self = this;
        self.koalaList = [];
        self.newKoala = {};
        self.getKoalaToDom()

        self.getKoalaToDom = function () {
            $http({
                method: "GET",
                url: "/koala"
            })
            .then(function(response) {
                self.koalaList = response.data;  
            })
            .catch(function(error) {
                console.log("error on /koala get", error);
            });
        }

        self.createKoala = function() {
            console.log(self.newKoala)
            $http({
                method: "POST",
                url: "/koala",
                data: self.newKoala
            })
            .then(function(response) {
                console.log('post response:', response);
                self.getKoalaToDom()
            })
            .catch(function(error) {
                console.log("error on /koala get", error);
            });
        }
        self.deleteKoala = function(deleteKoala) {
            console.log(self.newKoala);
            $http({
                method: "DELETE",
                url: "/koala",
                params: deleteKoala
            })
            .then(function(response) {
                self.getKoalaToDom()
                console.log('response from delete', response);
            })
            .catch(function(error) {
                console.log('error on /koala DELETE', error);
            });
        }
        self.updateKoala = function(koalaToSave) {
            console.log(self.newKoala);
            $http({
                method: "PUT",
                url: "/koala",
                data: koalaToSave
            })
            .then(function(response) {
                self.getKoalaToDom()
                console.log('response from put', response);
            })
            .catch(function(error) {
                console.log('error on /koala PUT', error);
            })
        }
    }
]);