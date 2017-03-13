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
    // append a paragraph to our new <div> displaying the number of button clicks
    $el.append('<p class="clicks">' + clicks + '</p>');
    $el.append('<button>Swap</button>');
    $el.append('<button>Delete</button>');
    console.log($el);
  });
});
