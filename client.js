// counter to track button-clicks
var clicks = 0;

$(document).ready(function() {
  // on generate button click
  $('.generate').on('click', 'button', function() {
    // increment the clicks counter
    clicks++;
    // append a <div> to the text-area <div>
    $('.text-area').append('<div class="shell"></div>');
    // store our newly created <div> in a varialbe
    var $el = $('.text-area').children().last();
    // append a paragraph to our new <div> displaying number of 'generate' button clicks
    $el.append('<p class="clicks">' + clicks + '</p>');
    // append a swap button for changing the background-color
    $el.append('<button class="swap">Swap</button>');
    // append a delete button for removing the <div>
    $el.append('<button class="delete">Delete</button>');
  });

  $('.text-area').on('click', '.swap', function() {
    $(this).parent().addClass('yellow');
  });

  $('.text-area').on('click', '.delete', function() {
    $(this).parent().remove();
  });
});
