$(document).ready(function() {

	// $("nav").on("click","#bio-button", function() {
 //   event.preventDefault()
 //   console.log("CLick")

 //  var articles = $("#content");
 //  var input = $("#artist-name-input");
 //  // var button = $("#bio-button");
 //  var toSearch = '';
 //  var searchUrl = "http://api.music-story.com";

 //  $.ajax({
 //      url: "",
 //      method: "GET"
 //    }).done(function(response) {
 //      console.log(response);
 //      console.log(response.Runtime);
 //    });

 			var key = 'd77f879e7a8a31734942e7e15b46bd562bfbe59c';
			var secret = '25db4cfa9c14439b612069f24c3eb65cefc68ff2';
			var token = '376d3a7196861c3756a857de898f3b99e3d1d8c8';
			var token_secret = '8588ecbdf6b7cf56732b7105dde23179b94e7710';
			var api = new MusicStoryApi(key, secret);
			// looking for some bands. This first call will take care of getting tokens before doing request.

			// looking for some bands. This first call will take care of getting tokens before doing request.
			console.log("4")
			api.search('Artist', {name: 'lil wayne'}, function(list) {
				console.log(list)

				
			});
 })

// })