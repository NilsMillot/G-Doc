import reveal from 'reveal.js';
import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';

let deck = new Reveal(document.querySelector('.reveal'), {
    embedded:false,
    plugins: [ Markdown ]
})
deck.initialize(
    {
    // be preserved when the presentation is scaled to fit different
  // resolutions. Can be specified using percentage units.
  width: 960,
  height: 700,

  // Factor of the display size that should remain empty around
  // the content
  margin:50,



    }
);

