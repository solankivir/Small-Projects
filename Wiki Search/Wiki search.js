$(function () {
    $('a[href="#search"]').on('click', function(event) {
        event.preventDefault();
        $('#search').addClass('open');
        $('#search > form > input[type="search"]').focus();
      $('#results').html('');
      $('#heading').html('Search Results')
    });
    
    $('#search').on('click', function(event) {
        if (event.target == this) {
            $(this).removeClass('open');
        }
    });
    
    $('form').submit(function(event) {
        event.preventDefault();
      $('#search').removeClass('open');
  $.getJSON("https://crossorigin.me/https://en.wikipedia.org/w/api.php?action=opensearch&search=" + $("#keyword").val() +  "&limit=10&format=json", function(results){
        var list = "";
        var headings = results[1], descs = results[2], links = results[3];
        for(i=0; i<headings.length; i++){
        list +='<a href="'+ links[i] +'" target="_blank" class="list-group-item"><h4 class="list-group-item-heading">'+headings[i]+'</h4><p class="list-group-item-text">' + descs[i] + '</p></a>';
        }
    $('#results').html(list);
    $('#heading').html('Top 10 Search results for: ' + results[0]);
      })
        return false;
    })
});