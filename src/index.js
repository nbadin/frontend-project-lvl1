import readline from 'readline-sync';

export const roundCount = 3;

export default (rules, data) => {
  const userName = readline.question('May I have your name? ');
  console.log(rules);
  const questionsAndAnswers = data;

  // eslint-disable-next-line no-restricted-syntax
  for (const [question, correctAnswer] of questionsAndAnswers) {
    console.log(`Question: ${question}`);
    const userAnswer = readline.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
    }

    console.log('Correct!');
  }

  return console.log(`Congratulations, ${userName}!`);
};
