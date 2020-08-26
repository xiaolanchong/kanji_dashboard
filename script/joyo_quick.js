/* global $ */

$(document).ready(() => {
  const toggleHidden = (checkbox, className) => {
    if (checkbox.checked)
      $(`.${className}`).removeClass('hidden')
    else
      $(`.${className}`).addClass('hidden')
  }
  $('#showKanji').change((ev) => toggleHidden(ev.target, 'kanji'))
  $('#showOn').change((ev) => toggleHidden(ev.target, 'on'))
  $('#showKun').change((ev) => toggleHidden(ev.target, 'kun'))
  $('#showMeaning').change((ev) => toggleHidden(ev.target, 'meaning'))
  
  toggleHidden($('#showKanji')[0], 'kanji')
  toggleHidden($('#showOn')[0], 'on')
  toggleHidden($('#showKun')[0], 'kun')
  toggleHidden($('#showMeaning')[0], 'meaning')
  
  $('#shuffleRows').click(() => {
    $('#kanjiTable>tbody').shuffle()
  })
});

(function($){

    $.fn.shuffle = function() {
        return this.each(function(){
            var items = $(this).children().clone(true);
            return (items.length) ? $(this).html($.shuffle(items)) : this;
        });
    }
    
    $.shuffle = function(arr) {
        for(var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
        return arr;
    }
    
})(jQuery);