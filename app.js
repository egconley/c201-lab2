'use strict';

var userName = prompt('What\'s your name?');

alert('Hello! ' + userName + '.' + ' Welcome to my About Me page!  Let\'s see how much you know about me.');

var userAnswers = [0, 0, 0, 0, 0, 0, 0];

function question1() {
  var myName = prompt('Quiz: Is my name Shmellen?');

  if (myName.toLowerCase() === 'yes' || myName.toLowerCase === 'y') {
  // console.log('That\'s not my name.  My name\'s Ellen.');
    alert('Nope, it\'s Ellen.');
  } else if (myName.toLowerCase() === 'no' || myName.toLowerCase() === 'n') {
  // console.log('Good catch - it\'s Ellen.');
    alert('Good catch - it\'s Ellen.');
    return userAnswers[0] = 1;
  } else {
  // console.log('Oops, that\'s a glitch.');
    alert('Oops, that\'s a glitch.');
  }
}
// console.log(question1());
// console.log(userAnswers);

function question2() {
  var myOrigin = prompt('Am I from Minnisota?');

  if (myOrigin.toLowerCase() === 'yes' || myOrigin.toLowerCase() === 'y') {
  // console.log('Nope - not from Minnisota.  I grew up between Iowa and Northern California!');
    alert('Nope - not from Minnisota.  I grew up between Iowa and Northern California!');
  } else if (myOrigin.toLowerCase() === 'no' || myOrigin.toLowerCase() === 'n') {
  // console.log('Correct!  I grew up between Iowa and Northern California.');
    alert('Correct!  I grew up between Iowa and Northern California.');
    return userAnswers[1] = 1;
  } else {
  // console.log('Oops, that\'s a glitch.');
    alert('Oops, that\'s a glitch.');
  }
}
// console.log(question2());
// console.log(userAnswers);

function question3() {
  var myCollege = prompt('Did I go to UW?');

  if (myCollege.toLowerCase() === 'yes' || myCollege.toLowerCase() === 'y') {
    // console.log('Correct!  I went to UW for undergrad and grad school.');
    alert('Correct!  I went to UW for undergrad and grad school.');
    return userAnswers[2] = 1;
  } else if (myCollege.toLowerCase() === 'no' || myCollege.toLowerCase() === 'n') {
    // console.log('Yes, I did.');
    alert('Wrong... :(');
  }
}
// // // console.log(question3());
// // // console.log(userAnswers);

function question4() {
  var myMajor = prompt('Was my undergrad major Computer Science?');

  if (myMajor.toLowerCase() === 'yes' || myMajor.toLowerCase() === 'y') {
    // console.log('Unfortunately not, I was very niave back then and got a degree that I am not going to use at all...');
    alert('Unfortunately not, I was very niave back then and got a degree that I am not going to use at all...');
  } else if (myMajor.toLowerCase() === 'no' || myMajor.toLowerCase() === 'n') {
    // console.log('Correct! I majored in International Studies.');
    alert('Correct! I majored in International Studies.');
    return userAnswers[3] = 1;
  } else {
    // console.log('Oops, that\'s a glitch.');
    alert('Oops, that\'s a glitch.');
  }
}
// console.log(question4());
// console.log(userAnswers);

function question5() {
  var speakSpanish = prompt('Do I speak Spanish?');

  if (speakSpanish.toLowerCase() === 'yes' || speakSpanish.toLowerCase() === 'y') {
    // console.log('Yup!  My partner is from Peru.');
    alert('Yup!  My partner is from Peru.');
    return userAnswers[4] = 1;
  } else if (speakSpanish.toLowerCase() === 'no' || speakSpanish.toLowerCase() === 'n') {
    // console.log('Correct! I majored in International Studies.');
    alert('I do actually!  My partner is from Peru.');
  } else {
    // console.log('Oops, that\'s a glitch.');
    alert('Oops, that\'s a glitch.');
  }
}
// console.log(question5());
// console.log(userAnswers);

function question6() {
  var commuteMinutes = [1, 2, 3, 4];
  // console.log('commuteMinutes 1: ' + commuteMinutes);
  var commuteMinAnswer = 55;
  commuteMinutes[0] = Number(prompt('How long do you think it takes me to get to Code Fellows in the morning?'));
  if (commuteMinutes[0] !== commuteMinAnswer) {
    for (var i = 0; i <= 3; i++) {
      if (commuteMinutes[i] === commuteMinAnswer) {
        // console.log('Line 104, i: ' + i + ', commuteMinutes[i]: ' + commuteMinutes[i]);
        return alert('Way to go!  My commute takes about 55 minutes each morning!');
      } else if (commuteMinutes[i] < commuteMinAnswer) {
        // console.log('Line 106, i: ' + i + ', commuteMinutes[i]: ' + commuteMinutes[i]);
        if (commuteMinutes[i] <= (commuteMinAnswer - 20)) {
          commuteMinutes[i + 1] = Number(prompt('Higher!'));
          // console.log('Line 109, i: ' + i + ', commuteMinutes[i]: ' + commuteMinutes[i]);
        } else if (commuteMinutes[i] <= (commuteMinAnswer - 10)) {
          commuteMinutes[i + 1] = Number(prompt('A little bit higher...'));
          // console.log('Line 112, i: ' + i + ', commuteMinutes[i]: ' + commuteMinutes[i]);
        } else if (commuteMinutes[i] <= (commuteMinAnswer - 5)) {
          commuteMinutes[i + 1] = Number(prompt('A teensy bit higher...'));
          // console.log('Line 115, i: ' + i + ', commuteMinutes[i]: ' + commuteMinutes[i]);
        }
      }
      else if (commuteMinutes[i] > commuteMinAnswer) {
        // console.log('Line 119, i: ' + i + ', commuteMinutes[i]: ' + commuteMinutes[i]);
        if (commuteMinutes[i] >= (commuteMinAnswer + 5)) {
          commuteMinutes[i + 1] = Number(prompt('Way lower!'));
          // console.log('Line 122, i: ' + i + ', commuteMinutes[i]: ' + commuteMinutes[i]);
        } else if (commuteMinutes[i] >= (commuteMinAnswer + 10)) {
          commuteMinutes[i + 1] = Number(prompt('A little bit lower...'));
          // console.log('Line 125, i: ' + i + ', commuteMinutes[i]: ' + commuteMinutes[i]);
        } else if (commuteMinutes[i] >= (commuteMinAnswer + 20)) {
          commuteMinutes[i + 1] = Number(prompt('A teensy bit lower...'));
          // console.log('Line 128, i: ' + i + ', commuteMinutes[i]: ' + commuteMinutes[i]);
        }
      }
    }
  }
  if (commuteMinutes.includes(commuteMinAnswer)) {
    alert('Way to go!  My commute takes about 55 minutes each morning!');
    return userAnswers[5] = 1;
  }
  else {
    alert('Close but no cigar.  My commute takes about 55 minutes each morning.');
  }
}
// console.log(question6());
// console.log(userAnswers);

function question7() {
  var whereGrewUp = [];
  var grewUpAnswer = ['iowa', 'california'];

  whereGrewUp[0] = prompt('What two states did I grow up in?').toLowerCase();
  // console.log('whereGrewUp[0] ' + whereGrewUp[0]);

  for (var j = 0; j < 5; j++) {
    console.log('Line 153, j: ' + j + ', whereGrewUp: ' + whereGrewUp);
    /* if whereGrewUp doesn't include any correct answers and the user gets one correct */
    if (!(whereGrewUp.includes(grewUpAnswer[0])) && !(whereGrewUp.includes(grewUpAnswer[1]))) {
      // console.log('Line 156, j: ' + j + ', whereGrewUp: ' + whereGrewUp);
      switch (whereGrewUp[j]) {
      case grewUpAnswer[0]:
      case grewUpAnswer[1]:
        whereGrewUp[j + 1] = prompt('That\'s one!').toLowerCase();
        // console.log('Line 161, j: ' + j + 'whereGrewUp: ' + whereGrewUp);
        break;
      default:
        whereGrewUp[j + 1] = prompt('Try again!').toLowerCase();
        // console.log('Line 165, j: ' + j + ', whereGrewUp: ' + whereGrewUp);
        break;
      }
      /* if whereGrewUp includes both correct answers */
    } else if (whereGrewUp.includes(grewUpAnswer[0]) && whereGrewUp.includes(grewUpAnswer[1])) {
      // console.log('Line 170, j: ' + j + ', whereGrewUp: ' + whereGrewUp);
      alert('That\'s the other one! Great job!');
      return userAnswers[6] = 1;
      /* if whereGrewUp includes just one correct answer */
    } else if (whereGrewUp.includes(grewUpAnswer[0]) || whereGrewUp.includes(grewUpAnswer[1])) {
      // console.log('Line 175, j: ' + j + ', whereGrewUp: ' + whereGrewUp);
      switch (whereGrewUp[j]) {
      case grewUpAnswer[0]:
      case grewUpAnswer[1]:
        whereGrewUp[j + 1] = prompt('That\'s one!').toLowerCase();
        // console.log('Line 180, j: ' + j + ', whereGrewUp: ' + whereGrewUp);
        break;
      default:
        whereGrewUp[j + 1] = prompt('Try again!').toLowerCase();
        // console.log('Line 184, j: ' + j + ', whereGrewUp: ' + whereGrewUp);
        break;
      }
    } else {
      whereGrewUp[j + 1] = prompt('Try again!').toLowerCase();
      // console.log('Line 189, j: ' + j + ', whereGrewUp: ' + whereGrewUp);
    }
  }

  if (!(whereGrewUp.includes(grewUpAnswer[0])) && !(whereGrewUp.includes(grewUpAnswer[1]))) {
    alert('Nice Try. I grew up in Iowa and California');
  }
}
// console.log(question7());
// console.log(userAnswers);

question1();
question2();
question3();
question4();
question5();
question6();
question7();

// console.log(whereGrewUp);
// console.log(score);
alert('Congrats! You got ' + (Number(userAnswers[0]) + Number(userAnswers[1]) + Number(userAnswers[2]) + Number(userAnswers[3]) + Number(userAnswers[4]) + Number(userAnswers[5]) + Number(userAnswers[6])) + ' out of ' + userAnswers.length);

alert('Goodbye ' + userName + '!');
