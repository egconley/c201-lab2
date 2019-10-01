'use strict';
// Prompt the user a total of exactly five yes or no questions. The user input for the answer must accept either y/n or yes/no responses while taking into consideration case sensitivity by normalizing the user input so that it can be validated (hint: look into the .toUpperCase() or .toLowerCase() functions). Be sure to let the user know if they answered the question correctly by alerting them with a response.

// Add console.log() messages within your app to notify the user if they are correct. Before submitting, comment out (don’t delete) your console.log() messages and replace them with the alerts() to complete the project.

var aboutMeNotYou = prompt('Hello!  You probably think this website is about you, don\'t you?');

while (aboutMeNotYou.toLowerCase() === 'yes' ||aboutMeNotYou.toLowerCase() === 'y') {
  console.log('...don\'t you?');
  aboutMeNotYou = prompt('...don\'t you?');
}

if (aboutMeNotYou.toLowerCase() === 'no' || aboutMeNotYou.toLowerCase() === 'n') {
  console.log('Correct!  It\'s about me.');
  alert('Correct!  It\'s about me.');
}

var myName = prompt('Quiz: Is my name Shmellen?');

if (myName.toLowerCase === 'yes' || myName.toLowerCase === 'y') {
  console.log('That\'s not my name.  My name\'s Ellen.');
  alert('That\'s not my name.  My name\'s Ellen.');
} else if (myName.toLowerCase() === 'no' || myName.toLowerCase() === 'n') {
  console.log('Good catch - it\'s Ellen.');
  alert('Good catch - it\'s Ellen.');
} else {
  console.log('Oops, that\'s a glitch.');
  alert('Oops, that\'s a glitch.');
}

var myOrigin = prompt('Am I from Texas?');

if (myOrigin.toLowerCase() === 'yes' || myOrigin.toLowerCase() === 'y') {
  console.log('Nope - not from Texas.  I grew up between Iowa and Northern California!');
  alert('Nope - not from Texas.  I grew up between Iowa and Northern California!');
} else if (myOrigin.toLowerCase() === 'no' || myOrigin.toLowerCase() === 'n') {
  console.log('Correct!  I grew up between Iowa and Northern California.');
  alert('Correct!  I grew up between Iowa and Northern California.');
} else {
  console.log('Oops, that\'s a glitch.');
  alert('Oops, that\'s a glitch.');
}

var myCollege = prompt('Did I go to UW?');

if (myCollege.toLowerCase() === 'yes' || myCollege.toLowerCase() === 'y') {
  console.log('Correct!  I went to UW for undergrad and grad school.');
  alert('Correct!  I went to UW for undergrad and grad school.');
} else if (myCollege.toLowerCase() === 'no' || myCollege.toLowerCase() === 'n') {
  console.log('Yes, I did.');
  alert('Yes, I did.');
}

var myMajor = prompt('Was my undergrad major Computer Science?');

if (myMajor.toLowerCase() === 'yes' || myMajor.toLowerCase() === 'y') {
  console.log('Unfortunately not, I was very niave back then and got a degree that I am not going to use at all...');
  alert('Unfortunately not, I was very niave back then and got a degree that I am not going to use at all...');
} else if (myMajor.toLowerCase() === 'no' || myMajor.toLowerCase() === 'n') {
  console.log('Correct! I majored in International Studies.');
  alert('Correct! I majored in International Studies.');
} else {
  console.log('Oops, that\'s a glitch.');
  alert('Oops, that\'s a glitch.');
}







// As a user, I would like a personalized welcome message so that I feel like I am interacting with the site owner.

// Ask the user their name through a prompt()

// Display that name back to the user through a custom greeting welcoming them to your site.

// Display the user’s name back to them in your final message to the user.