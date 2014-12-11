var adapt = require('adapt-learn');
var score = .5;
var base = adapt.learn();

base.add({ message: 'How much is 2+2?', answer: 4 });
base.add({ message: 'How much is 3*3?', answer: 9 });
base.add({ message: 'How much is 74/2?', answer: 37 });
base.add({ message: 'How much is 100/50?', answer: 2 });

limit = (base.getSeries().length - 1);

function getQuestion(score, answer) {
  answer = answer || null;
  return base.adapt(score, answer);
}

function printQuestion(question) {
  console.log(question.message);
}

function getAnswer(answer) {
  var question = getQuestion(score);

  if (question.answer === parseFloat(answer, 10)) {
    printQuestion(getQuestion(score, true));
    score += .5;
  } else if (question.answer !== parseFloat(answer, 10)) {
    printQuestion(getQuestion(score, false));
    score -= .5;
  } else {
    printQuestion(getQuestion(score));
  }
}

process.stdin.resume();
process.stdin.on('data', function (chunk) {
  getAnswer(chunk.toString());
});
printQuestion(getQuestion(score));
