/* global $ */

// 

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
})