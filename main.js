$('input').keyup(function() {
    var userInput = $(this).val();
    $.ajax({
      url: 'http://www.omdbapi.com/?apikey=4896ff0a',
      data: {
        t: userInput
      },
      dataType: 'json',
      success: function(response) {
        console.log(response);
        $('p').html(response.Title);
        $('#poster').attr('src', response.Poster);
      }
    });
    console.log($(this).val())
  })
  
  