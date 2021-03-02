import readline from 'readline-sync';
import greeting from './cli.js';

export default (rules, playRound) => {
  const userName = greeting();
  console.log(rules);
  let rounds = 3;
  for (let i = 0; i < rounds; rounds -= 1) {
    const taskAndAnswer = playRound;
    const task = taskAndAnswer.shift();
    const correctAnswer = taskAndAnswer.shift();
    console.log(`Question: ${task}`);
    const userAnswer = readline.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      // eslint-disable-next-line no-unused-vars
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
  return rounds === 0 ? console.log(`Congratulations, ${userName}!`) : undefined;
};
