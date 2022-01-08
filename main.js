//Declare arrays with the pieces of text.
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
    'takes position in the configuration ',
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

//Declare randomized pieces arrays
let seq1 = [];
let seq2 = [];
let seq3 = [];
let seq4 = [];

//Declare the string for the output of the discourse
let discourseString = '';

//Generates a random id
function randId(numElements) {
    return Math.floor(Math.random() * (numElements));
}

//Populate the randomized arrays.
do {
    let currRandId = randId(12);
    if (!seq1.includes(currRandId)) {
        seq1.push(currRandId);
    }
} while (seq1.length <= 5);
do {
    let currRandId = randId(6);
    if (!seq2.includes(currRandId)) {
        seq2.push(currRandId);
    }
} while (seq2.length <= 5);
do {
    let currRandId = randId(6);
    if (!seq3.includes(currRandId)) {
        seq3.push(currRandId);
    }
} while (seq3.length <= 5);
do {
    let currRandId = randId(6);
    if (!seq4.includes(currRandId)) {
        seq4.push(currRandId);
    }
} while (seq4.length <= 5);

//Create the string with randomized array elements
for (let i = 0; i <= 5; i++) {
    discourseString = discourseString + piece1[seq1[i]] + piece2[seq2[i]] + piece3[seq3[i]] + piece4[seq4[i]] + '\n'
}

//log the discourse
console.log(discourseString);
