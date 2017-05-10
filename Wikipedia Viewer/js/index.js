$(document).ready(function() {
 var colors = ['#ff0000', '#90ff00', '#ffd200', '#ff00ba', '#e74c3c', '#00ff1e', '#FB6964', '#0096ff', "#472E32", "#00ffde", "#77B1A9", "#73A857", "#ff9000"];
  $('#masukkan').val('');
  $('#cari').click(function() {
    var masukkan = $('#masukkan').val();
    if (!masukkan) {
      $('#masukkan').focus();
      return;
    }
    var reqURL = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + masukkan + '&format=json&callback=?';
    console.log(reqURL);
    $.ajax( {
      type: "GET",
      url: reqURL,
      async: false,
      dataType: "json",
      headers: {
        'Api-User-Agent': 'Example/1.0'
      },
      success: function(data) {
        $('#hasil').html('');
        for (var i = 0; i < data[1].length; i++) {
          $('#hasil').prepend(
            '<li><h2><a class="title" href=' + data[3][i] +
            ' target="_blank">'
            + data[1][i] + '</a><h3><p>'
            + data[2][i] + '</p><hr></li>');
        }
      },
   });
     $( ".kotak" ).show();
    
    var color = Math.floor(Math.random() * colors.length);
      $("body").css({
        background: colors[color],
        });
        $("h1").css({
        h1: colors[color],
        });
 });
});