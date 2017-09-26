function tplawesome(e,t){//e=data of item.html,
  res=e;
  console.log('logging res')
  console.log(res)
  console.log('logging t')
  console.log(t)

  for(var n=0;n<t.length;n++)//i dont know why a for loop is needed. there always one video that is passed
    //or maybe the for loop is a used as a check to check if there is a video found?
    //if t.length = 0 ? it wont run
    //so i tested it with t.length set to 0
    // the for loop wont run if there are no videos found
    //this is a clever way to do a conditional check
    //but this would confuse other people. it confused me lol
    {
      console.log(t.length)
      //i know what this command does. replaces the youtube title declared in item.html
      //replaces video id in item.html
      //but i dont know how this code does it lol
      // so ill replace it with code that i understand but does the same thing
      res=res.replace(/\{\{(.*?)\}\}/g,function(e,r){return t[n][r]})

      monkey = res
      console.log('res updated')
      console.log(res)
    }

    // commenting out all the above code from lines 8 to lines 26
    // and un commenting lines 30 to 31 does the same thing
   // res=res.replace("{{title}}",t[0].title)
   // res=res.replace("{{videoid}}",t[0].videoid)

    return res
}


    $("form").on("submit", function(e) {
        var test = encodeURIComponent($("#search").val()).replace(/%20/g, "+");
        console.log("loginggggggg test")
        console.log(test)
       e.preventDefault();
       // prepare the request
       var request = gapi.client.youtube.search.list({
            part: "snippet",
            type: "video",
            //some info about encode URIComponent
            //i dont think we really need this method
            //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
            //https://stackoverflow.com/questions/1206911/why-do-i-need-to-add-g-when-using-string-replace-in-javascript
            //https://www.w3schools.com/jsref/jsref_encodeURIComponent.asp
            q: encodeURIComponent($("#search").val()).replace(/%20/g, "+"),
            maxResults: 3,
            order: "viewCount",
            publishedAfter: "2015-01-01T00:00:00Z"
       }); 
       // execute the request
       request.execute(function(response) {
          var results = response.result;//store the result of the response
          var resultsDiv = $("#results").html("");//clear the results of the video for next search
          console.log(results)
          //http://api.jquery.com/jquery.each/
          //The $.each() function can be used to iterate over any collection, whether it is an object or an array.
          $.each(results.items, getVideo );

          //https://api.jquery.com/jquery.get/
          //from what i understand the jquery.get checks if the item.html file exist and will run the callback function if it does exist
          function getVideo (index, item) {
            $.get("assets/html/item.html", function(data) {//data is the contents of item.html
              console.log(data)
                $("#results").append(tplawesome(data, [{"title":item.snippet.title, "videoid":item.id.videoId}]));
            });
          }
          resetVideoHeight();
       });
    });
    
    $(window).on("resize", resetVideoHeight);


function resetVideoHeight() {
  console.log("running reset video height")
    $(".video").css("height", $("#results").width() * 9/16);
}

//set the client id and api
// init function runs first on start up?
function init() {
  console.log("initting")
    gapi.client.setApiKey("AIzaSyAWtNryZAH0FZ2IGlCr1Z8DPdvQwfjztPw");
    gapi.client.load("youtube", "v3", function() {
        // yt api is ready
    });
}