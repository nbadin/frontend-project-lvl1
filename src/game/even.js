import generateNumber from '../utils/generateNumber.js';
import runGame, { roundCount } from '../index.js';

const isEven = (num) => num % 2 === 0;

const generateQuestionAndAnswer = () => {
  const minNumber = 1;
  const maxNumber = 200;
  const task = generateNumber(minNumber, maxNumber);
  const answer = isEven(task) ? 'yes' : 'no';
  const questionAndAnswerForOneRound = [task, answer];

  return questionAndAnswerForOneRound;
};

export default () => {
  const tasksAndAnswers = [];

  for (let i = 0; i < roundCount; i += 1) {
    tasksAndAnswers.push(generateQuestionAndAnswer());
  }

  const rules = 'Answer "yes" if the number is even, otherwise answer "no"';

  runGame(rules, tasksAndAnswers);
};
