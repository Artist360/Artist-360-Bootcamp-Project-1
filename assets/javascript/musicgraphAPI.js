// Got a lot of commented out code here and the indentation is pretty wonky.
// While neither of those things impact functionality, they make this code
// much more difficult to maintain and underatand.

// Also you should try to get in the habit of wrapping your code inside a document.ready
// block or some other fucntional closure. This is so you don't pollute the global scope
// and anything you intend to be on the global scope can just be wet as a property on
// `window` - for instance with `musicgraph` you'd just need to do the following:
// `window.musicgraph = musicgraph`

var data =""
var youtubeID=""
// $(document).ready(function() {

	   //  $("body").on("click","#artist-search-btn", function() {
    //   event.preventDefault()
    //   $(".bs-example-modal-lg").modal("hide")
    //   $("#content").empty()

    // });
	// MUSICGRAPH API!!!
	// api key f344ee98dde459951ae8cbb4f62add7d

	$("body").on("click","#artist-search-btn", musicgraph)

		function musicgraph() {

// $("nav").on("click","#bio-button", function() {
  event.preventDefault()

	var input = $("#artist-name-input")
	var artistSearch = ""
		

  var AjaxMusicgraphData = function() {
	var queryURL = "https://cors-anywhere.herokuapp.com/http://api.musicgraph.com/api/v2/artist/search?api_key=f344ee98dde459951ae8cbb4f62add7d&name=" + artistSearch
	$.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {
      // console.log(response);
      //youtube()
      // console.log(response.data[0].musicbrainz_image_url);
      // var artistImageURL = response.data[0].musicbrainz_image_url
      // var artistImage = $("<img>")
      // artistImage.addClass("artist-image")
      // artistImage.attr("src", artistImageURL)
      // console.log(artistImage[0])
       
 //      $("#content").append(artistImage[0])

	// var musicbrainzSearch = response.data[0].musicbrainz_id
	// console.log(musicbrainzSearch)
	// var queryURL2 = "http://musicbrainz.org/ws/2/artist/5b11f4ce-a62d-471e-81fc-a69a8278c7da?fmt=json"
    
 //    $.ajax({
 //      url: queryURL2,
 //      method: "GET"
 //    }).done(function(response) {
 //      console.log(response);
 //      // console.log(response.data[0].musicbrainz_image_url);
      
    
 //    });

 youtubeID=response.data[0].youtube_id;
 // console.log(youtubeID)
     });
    }
	artistSearch = input.val()
	$("#artist-name-input").val("")
	console.log(artistSearch)
	AjaxMusicgraphData()


  }


// })

