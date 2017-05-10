$(document).ready(function() {
 var colors = ['#ff0000', '#90ff00', '#ffd200', '#ff00ba', '#e74c3c', '#00ff1e', '#FB6964', '#0096ff', "#472E32", "#00ffde", "#77B1A9", "#73A857", "#ff9000"];
  $("#kuotes").on("click", function() {
    $.getJSON("https://gist.githubusercontent.com/AbhishekChd/ab9949b618fcbf58ac84f9c8e88d6688/raw/90916f0d09a295eb5b2eea6c29a648e8c60b0e6f/5769a491e4b01190df7a9a70.json", function(json) {
      var content = "",
        author = "",
        num = Math.floor(Math.random() * 20);
      content = json[num]["content"]
      author = json[num]["author"];
      $("#quote").html(content);
      $("#author").html("- " + author)

   var color = Math.floor(Math.random() * colors.length);
      $("body").css({
        background: colors[color],
        });
        $("h1").css({
        h1: colors[color],
    });
  });
    
  $("#tweeter").on("click",function(){
      var text = document.getElementById('quote').innerHTML+' '+document.getElementById('author').innerHTML;
    var link= "https://twitter.com/intent/tweet?text="+text+"&hashtags=quote";
    window.open(link,'_blank');
      });
    });
  });