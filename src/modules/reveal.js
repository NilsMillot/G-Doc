import reveal from 'reveal.js';
import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';

let deck = new Reveal(document.querySelector('.reveal'), {
    embedded:true,
    plugins: [ Markdown ]
})
deck.initialize();

