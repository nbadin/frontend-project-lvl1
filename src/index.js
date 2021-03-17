import readline from 'readline-sync';

export const roundCount = 3;

export default (rules, data) => {
  const userName = readline.question('May I have your name? ');
  console.log(rules);

  // eslint-disable-next-line no-restricted-syntax
  for (const [question, correctAnswer] of data) {
    console.log(`Question: ${question}`);
    const userAnswer = readline.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};
