/* Hello World */

console.log('Jekyll Bootstrap - https://github.com/dpstrange/jekyll-bootstrap')

/* Anchor.js */

anchors.options = {
    icon: '#'
};
anchors.add('.anchors h1, .anchors h2, .anchors h3, .anchors h4, .anchors h5, .anchors h6');

/* Externalize Links */

$(document).ready(function(){
    // resolve external links in new tab
    $('a[href^="http://"], a[href^="https://"]').not('a[href*="'+location.hostname+'"]').attr('target','_blank').addClass("external");
});