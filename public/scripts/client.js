var app = angular.module('GiphyApp', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    // template: '<h2>hello<h2>',
    templateUrl: 'views/pages/main.html',
  }).when('/favorites', {
    templateUrl: 'views/pages/favorites.html',
  });

  $locationProvider.html5Mode(true);
}); // end app.config



  // FOR main.html
app.controller('GifController', function(GifGetter) {
  console.log('GifController connected');

  var vm = this;
  // vm.searchQuery = 'Upsilon'

vm.randomGif = function() {
  GifGetter.randomGif().then(function(res) {
    console.log("from the controller \n", res);

    vm.gifUrl = res.data.image_url
  }); // end GifGetter.andomGif
}; // end vm.randomGif

// random gif on page load
vm.randomGif();

vm.searchGif = function(searchQuery) {
  GifGetter.searchGif(searchQuery).then(function(res) {
    vm.gifUrl = res.data[0].images.original.url;
  }); // end GifGetter.searchGif
}; // end vm.searchGif

vm.favoriteGif = function(comment) {
  // save the comment in gifComment and send the controller as the data.
  vm.gifComment = comment;
  favorite = this;
  GifGetter.favoriteGif(favorite).then(function(res) {
    console.log('this is client response', res);
  }); // end GifGetter favoriteGif
}; // end vm.favoriteGif

}); // end app.controller




  // FOR favorites.html
app.controller('FavController', function(GifGetter) {

  var favm = this;
  // make an array to store all favorited gifs
  favm.gifList = [];

  favm.getFavoriteGifs = function () {
  GifGetter.getFavoriteGifs().then(function (res) {

    // make the array equal an array of objects (the response)
    favm.gifList = res;
    favm.count = res.length
  }); // close then.
}; // closes getFavGif

  // display all favorited gifs
favm.getFavoriteGifs();


}) // end.app controller
