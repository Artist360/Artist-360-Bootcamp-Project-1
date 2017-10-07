//var SpotifyWebApi = require('node_modules/spotify-web-api-node');

// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId : '4aca47c1d7574db6b4b2e46286af1927',
  clientSecret : '06a2e14c1f314f879eea053ea4786ab8',
  redirectUri : 'http://localhost:8888/callback'
});

spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE')
  .then(function(data) {
    console.log('Artist albums', data.body);
  }, function(err) {
    console.error(err);
  });