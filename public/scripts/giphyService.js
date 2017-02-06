app.service('GifGetter', function($http) {

  var publicAPIkey = "dc6zaTOxFJmzC";
  var giphyUrl = 'http://api.giphy.com/v1/gifs/'

  this.randomGif = function() {
    return $http({
      type: 'GET',
      url: giphyUrl + 'random?api_key=' + publicAPIkey,
      params: {'rating' : 'G', 'limit': 1}
    }).then(function(response){
      // console.log(response);
      return response.data;
    }).catch(function(err) {
      console.log(err);
    })

  }; // end this.randomGif

  this.searchGif = function(query) {
    return $http({
      type: 'GET',
      url: giphyUrl + 'search?q=' + query + '&api_key=' + publicAPIkey,
      params: {'rating' : 'G'}
    }).then(function(response){
      console.log(response);
      return response.data;
    }).catch(function(err) {
      console.log(err);
    })

  }; // end this.searchGif

  this.favoriteGif = function(favorite) {
    console.log('this is the data', favorite);
    return $http.post('/gifRoutes/post', favorite ).then(function(response) {
      return response;
    }).catch(function(err) {
      console.log('error getting response from gifRoutes :', err);
    });
  }; // end this.favoriteGif




  // FOR favorites.html

  this.getFavoriteGifs = function() {
    return $http.get('/gifRoutes').then(function(response) {
      return response.data
    }).catch(function(err) {
      console.log('error getting response from gifRoutes :', err);
    });

  }; // end this.getFavoriteGifs




}); // end app.service
