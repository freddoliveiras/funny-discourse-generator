// The essential pieces
const piece1 = [
    'Dear people of my country, ',
    'We should never forget that ',
    'The experience shows us that ',
    'It\'s not too much to insist that ',
    'I think that it\'s very important to emphasize that ',
    'The encouragement in the technological progress as well as ',
    'If we ponder, we see that ',
    'Today, ',
    'In the context of the current policy, ',
    'All data points out that ',
    'As a result of this intensive work, ',
    'This awesome project makes me believe that '
];
const piece2 = [
    'our effort to accomplish this challenge ',
    'a great complexity of studies ',
    'the new structural model, recommended here, ',
    'the expansion of our activity ',
    'the assess of those results ',
    'the development of different ways of acting '
];
const piece3 = [
    'compels us to the analyses ',
    'plays a fundamental role in the formulation ',
    'requires precision and definition ',
    'offers an excellent opportunity for the verification ',
    'takes an important position in the definition ',
    'emphasize the importance '
];
const piece4 = [
    'of our financial and administrative goals.',
    'of basic politics toward the success of the program.',
    'of specific conditions for each business.',
    'of our team building potential.',
    'of the government attributions.',
    'of the procedures.'
];
//Stores the pieces with randomized elements
let seq1 = [];
let seq2 = [];
let seq3 = [];
let seq4 = [];
function randId(numElements) {
    return Math.floor(Math.random() * (numElements));
}
let speechString = '';
do {
    let currRandId = randId(12);
    if (!seq1.includes(currRandId)) {
        seq1.push(currRandId);
    }
} while (seq1.length <= 5);

do {
    let currIndex = randId(6);
    if (!seq2.includes(currIndex)) {
        seq2.push(currIndex);
    }
} while (seq2.length <= 5);

do {
    let currIndex = randId(6);
    if (!seq3.includes(currIndex)) {
        seq3.push(currIndex);
    }
} while (seq3.length <= 5);
do {
    let currIndex = randId(6);
    if (!seq4.includes(currIndex)) {
        seq4.push(currIndex);
    }
} while (seq4.length <= 5);

for (let i = 0; i <= 5; i++) {
    speechString = speechString + piece1[seq1[i]] + piece2[seq2[i]] + piece3[seq3[i]] + piece4[seq4[i]] + '\n'
}
console.log(speechString);
