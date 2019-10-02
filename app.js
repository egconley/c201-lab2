
'use strict';

// var userName = prompt('What\'s your name?');

// var aboutMeNotYou = prompt('Hello! ' + userName + '.' + ' You probably think this website is about you, don\'t you?');

// while (aboutMeNotYou.toLowerCase() === 'yes' ||aboutMeNotYou.toLowerCase() === 'y') {
//   // console.log('...don\'t you?');
//   aboutMeNotYou = prompt('Try again!');
// }

// if (aboutMeNotYou.toLowerCase() === 'no' || aboutMeNotYou.toLowerCase() === 'n') {
//   // console.log('Correct!  It\'s about me.');
//   alert('Correct!  It\'s about me.');
// }

// var myName = prompt('Quiz: Is my name Shmellen?');

// if (myName.toLowerCase() === 'yes' || myName.toLowerCase === 'y') {
//   // console.log('That\'s not my name.  My name\'s Ellen.');
//   alert('That\'s not my name.  My name\'s Ellen.');
// } else if (myName.toLowerCase() === 'no' || myName.toLowerCase() === 'n') {
//   // console.log('Good catch - it\'s Ellen.');
//   alert('Good catch - it\'s Ellen.');
// } else {
//   // console.log('Oops, that\'s a glitch.');
//   alert('Oops, that\'s a glitch.');
// }

// var myOrigin = prompt('Am I from Texas?');

// if (myOrigin.toLowerCase() === 'yes' || myOrigin.toLowerCase() === 'y') {
//   // console.log('Nope - not from Texas.  I grew up between Iowa and Northern California!');
//   alert('Nope - not from Texas.  I grew up between Iowa and Northern California!');
// } else if (myOrigin.toLowerCase() === 'no' || myOrigin.toLowerCase() === 'n') {
//   // console.log('Correct!  I grew up between Iowa and Northern California.');
//   alert('Correct!  I grew up between Iowa and Northern California.');
// } else {
//   // console.log('Oops, that\'s a glitch.');
//   alert('Oops, that\'s a glitch.');
// }

// var myCollege = prompt('Did I go to UW?');

// if (myCollege.toLowerCase() === 'yes' || myCollege.toLowerCase() === 'y') {
//   // console.log('Correct!  I went to UW for undergrad and grad school.');
//   alert('Correct!  I went to UW for undergrad and grad school.');
// } else if (myCollege.toLowerCase() === 'no' || myCollege.toLowerCase() === 'n') {
//   // console.log('Yes, I did.');
//   alert('Yes, I did.');
// }

// var myMajor = prompt('Was my undergrad major Computer Science?');

// if (myMajor.toLowerCase() === 'yes' || myMajor.toLowerCase() === 'y') {
//   // console.log('Unfortunately not, I was very niave back then and got a degree that I am not going to use at all...');
//   alert('Unfortunately not, I was very niave back then and got a degree that I am not going to use at all...');
// } else if (myMajor.toLowerCase() === 'no' || myMajor.toLowerCase() === 'n') {
//   // console.log('Correct! I majored in International Studies.');
//   alert('Correct! I majored in International Studies.');
// } else {
//   // console.log('Oops, that\'s a glitch.');
//   alert('Oops, that\'s a glitch.');
// }




// 1.
// Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number.
// Indicates through an alert if the guess is “too high” or “too low”.
// It should give the user exactly four opportunities to get the correct answer.
// After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort.

var commuteMinutes = [1, 2, 3, 4];
console.log('commuteMinutes 1: ' + commuteMinutes);

commuteMinutes[0] = Number(prompt('How long do you think it takes me to get to Code Fellows in the morning?'));

if (commuteMinutes[0] !== 55) {
  for (var i = 0; i < commuteMinutes.length; i++) {
    if (commuteMinutes[i] < 55) {
      if (commuteMinutes[i] <= 30) {
        commuteMinutes[i + 1] = Number(prompt('Way higher!'));
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
        commuteMinutes[i + 1] = Number(prompt('A little bit   lower...'));
      } else if (commuteMinutes[i] >= 60) {
        commuteMinutes[i + 1] = Number(prompt('A teensy bit     lower...'));
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

// 3.
// Keep track of the total number of correct answers. At the end tell them how many they got correct out of the 7 questions asked.




// alert('Goodbye ' + userName + '!');
