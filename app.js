
'use strict';

var userName = prompt('What\'s your name?');

prompt('Hello! ' + userName + '.' + ' Welcome to my About Me page!  Let\'s see how much you know about me.');

var myName = prompt('Quiz: Is my name Shmellen?');

if (myName.toLowerCase() === 'yes' || myName.toLowerCase === 'y') {
  // console.log('That\'s not my name.  My name\'s Ellen.');
  alert('That\'s not my name.  My name\'s Ellen.');
} else if (myName.toLowerCase() === 'no' || myName.toLowerCase() === 'n') {
  // console.log('Good catch - it\'s Ellen.');
  alert('Good catch - it\'s Ellen.');
} else {
  // console.log('Oops, that\'s a glitch.');
  alert('Oops, that\'s a glitch.');
}

var myOrigin = prompt('Am I from Minnisota?');

if (myOrigin.toLowerCase() === 'yes' || myOrigin.toLowerCase() === 'y') {
  // console.log('Nope - not from Texas.  I grew up between Iowa and Northern California!');
  alert('Nope - not from Minnisota.  I grew up between Iowa and Northern California!');
} else if (myOrigin.toLowerCase() === 'no' || myOrigin.toLowerCase() === 'n') {
  // console.log('Correct!  I grew up between Iowa and Northern California.');
  alert('Correct!  I grew up between Iowa and Northern California.');
} else {
  // console.log('Oops, that\'s a glitch.');
  alert('Oops, that\'s a glitch.');
}

var myCollege = prompt('Did I go to UW?');

if (myCollege.toLowerCase() === 'yes' || myCollege.toLowerCase() === 'y') {
  // console.log('Correct!  I went to UW for undergrad and grad school.');
  alert('Correct!  I went to UW for undergrad and grad school.');
} else if (myCollege.toLowerCase() === 'no' || myCollege.toLowerCase() === 'n') {
  // console.log('Yes, I did.');
  alert('Wrong... :(');
}

var myMajor = prompt('Was my undergrad major Computer Science?');

if (myMajor.toLowerCase() === 'yes' || myMajor.toLowerCase() === 'y') {
  // console.log('Unfortunately not, I was very niave back then and got a degree that I am not going to use at all...');
  alert('Unfortunately not, I was very niave back then and got a degree that I am not going to use at all...');
} else if (myMajor.toLowerCase() === 'no' || myMajor.toLowerCase() === 'n') {
  // console.log('Correct! I majored in International Studies.');
  alert('Correct! I majored in International Studies.');
} else {
  // console.log('Oops, that\'s a glitch.');
  alert('Oops, that\'s a glitch.');
}

var speakSpanish = prompt('Do I speak Spanish?');

if (speakSpanish.toLowerCase() === 'yes' || speakSpanish.toLowerCase() === 'y') {
  // console.log('Yup!  My partner is from Peru.');
  alert('Yup!  My partner is from Peru.');
} else if (speakSpanish.toLowerCase() === 'no' || speakSpanish.toLowerCase() === 'n') {
  // console.log('Correct! I majored in International Studies.');
  alert('I do actually!  My partner is from Peru.');
} else {
  // console.log('Oops, that\'s a glitch.');
  alert('Oops, that\'s a glitch.');
}

var commuteMinutes = [1, 2, 3, 4];
// console.log('commuteMinutes 1: ' + commuteMinutes);

commuteMinutes[0] = Number(prompt('How long do you think it takes me to get to Code Fellows in the morning?'));

if (commuteMinutes[0] !== 55) {
  for (var i = 0; i < commuteMinutes.length; i++) {
    if (commuteMinutes[i] < 55) {
      if (commuteMinutes[i] <= 30) {
        commuteMinutes[i + 1] = Number(prompt('Higher!'));
      } else if (commuteMinutes[i] <= 40) {
        commuteMinutes[i + 1] = Number(prompt('A little bit higher...'));
      } else if (commuteMinutes[i] <= 50) {
        commuteMinutes[i + 1] = Number(prompt('A teensy bit higher...'));
      }
    }
    else if (commuteMinutes[i] > 55) {
      if (commuteMinutes[i] >= 100) {
        commuteMinutes[i + 1] = Number(prompt('Way lower!'));
      } else if (commuteMinutes[i] >= 70) {
        commuteMinutes[i + 1] = Number(prompt('A little bit lower...'));
      } else if (commuteMinutes[i] >= 60) {
        commuteMinutes[i + 1] = Number(prompt('A teensy bit lower...'));
      }
    }
  }
}

console.log(commuteMinutes);

if (commuteMinutes.includes(55)) {
  alert('Way to go!  My commute takes about 55 minutes each morning!');
}
else {
  alert('Close but no cigar.  My commute takes about 55 minutes each morning.');
}

// 2.
// Add a 7th question that has multiple possible correct answers that are stored in an array.
// Give the user 6 attempts to guess the correct answer.
// The guesses will end once the user guesses a correct answer or they run out of attempts.
// Display all the possible correct answers to the user.
// Consider using a loop of some sort for this question.
// Keep track of the total number of correct answers. At the end tell them how many they got correct out of the 7 questions asked.

var whereGrewUp = ['a', 'b', 'c', 'd', 'e', 'f'];
var score = 0;

whereGrewUp[0] = prompt('Where did I grow up?');

for (i = 0; i < 5; i++) {
  switch (whereGrewUp[i]) {
  case 'Iowa':
  case 'California':
    whereGrewUp[i +1] = prompt('That\'s right! Where else did I grow up?');
    score++;
    // console.log(whereGrewUp);
    // console.log(whereGrewUp.length);
    break;
  default:
    whereGrewUp[i +1] = prompt('Try again!');
    // console.log(whereGrewUp);
    break;
  }
}
// console.log(whereGrewUp);
// console.log(score);

// alert('Goodbye ' + userName + '!');
