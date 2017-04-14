$(document).ready(function() {
  $("#get-new-quote-button").on("click", function(){
    var quote;
    $.getJSON("https://api.icndb.com/jokes/random", function(json) {
      quote = json.value.joke;
      $("#quote").html(quote);
    });
   // $('#twitter-share-button').attr("href", "https://twitter.com/intent/tweet?text=" + quote);
    var c = (Math.random()*0xFFFFFF<<0).toString(16);
    $("#quote").css("color", '#'+ c);
    $("body").css("color", '#'+ c);
    $("#get-new-quote-button").css("color", '#'+ c);
    $("#twitter-share-button").css("color", '#'+ c);
    });
});