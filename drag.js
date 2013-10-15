/*
 * What are the objects in this exercise?
 * What are their properties and methods?
 * How do your objects interact with their respective DOM elements?
 */

function get_price(items) {
  var sum = 0
  $.each(items, function ( index, value ) {
    sum += parseFloat(value.innerText)
  });
  return sum
 }


function init(){
  var total = 0
    $('.item').draggable({
      helper: "clone",
    });

    $('#grocery_list').droppable({
      tolerance: 'intersect',
      drop: function(event, ui){
        $(this).append($(ui.draggable).clone());
        items_array = $('#grocery_list').find('.item_price')
        total = get_price(items_array)
        $('#total_cost').html(total.toFixed(2))
      }

    })
};

$('document').ready(function(){

  init()

});
