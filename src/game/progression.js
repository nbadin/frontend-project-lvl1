import generateNumber from '../utils/generateNumber.js';
import runGame, { roundCount } from '../index.js';

const getQuestion = (first, step, hiddenNumberIndex) => {
  const progression = [];
  for (let i = 0; i < 10; i += 1) {
    progression.push(first + (step * i));
    if (i === hiddenNumberIndex) {
      progression[i] = '..';
    }
  }
  const question = progression.join(' ');
  return question;
};

const generateRound = () => {
  const first = generateNumber(1, 100);
  const step = generateNumber(1, 10);
  const hiddenNumberIndex = generateNumber(1, 10);
  const question = getQuestion(first, step, hiddenNumberIndex);
  const answer = String(first + (step * hiddenNumberIndex));

  return [question, answer];
};

export default () => {
  const questionsAndAnswers = [];

  for (let i = 0; i < roundCount; i += 1) {
    questionsAndAnswers.push(generateRound());
  }

  const rules = 'What number is missing in the progression?';
  runGame(rules, questionsAndAnswers);
};
