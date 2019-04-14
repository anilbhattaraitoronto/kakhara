import { vowels } from './vowels.js';
import { roots } from './roots.js';
import { extendedRoots } from './extendedRoots.js';
import { words } from './words.js';
import { sentences } from './sentences.js';
console.log(roots, extendedRoots, words, sentences);
let i = 0;

const createItemBox = (items, containerId) => {
    let wrapperSection = document.querySelector(containerId);
    let length = items.nepali.length;
    items.nepali.forEach(() => {
        let characterBox = `
    <section class="character">
        <div class="english">${items.english[i]}</div>
        <div class="nepali">${items.nepali[i]}</div>
        <div class="letter-sound">
        <audio controls>
        <source src="${items.sound[i]}" type="sound/mpeg"/>
        </audio>
        </div>
    </section>
`
        wrapperSection.innerHTML += characterBox;
        i++;


    });
    if (i = length) {
        i = 0;
    }
}
createItemBox(vowels, '#vowel-wrapper');
createItemBox(roots, '#root-wrapper');
// createCharacterBox(extendedRoots);
// createCharacterBox(words);
// createCharacterBox(sentences);

