console.log( 'js' );;

var app = angular.module("KoalaApp", []);

app.controller("KoalaController", [
    "$http",
    function($http) {
        console.log("KoalaController has been loaded");
        var self = this;
        self.koalaList = []
        self.newKoala = {};
        getKoalaToDom()

        function getKoalaToDom() {
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
                getKoalaToDom()
            })
            .catch(function(error) {
                console.log("error on /koala get", error);
            });
        }
    }







]);