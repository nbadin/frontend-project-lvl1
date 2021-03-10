import generateNumber from '../utils/generateNumber.js';
import runGame, { roundCount } from '../index.js';

const generateRandomProgression = () => {
  const minProgressionNumber = 1;
  const maxProgressionNumber = 15;
  const progressionLength = 10;
  const firstNumber = generateNumber(minProgressionNumber, maxProgressionNumber);
  const step = generateNumber(minProgressionNumber, maxProgressionNumber);
  const result = [];

  for (let i = 0; i < progressionLength; i += 1) {
    result.push(firstNumber + (step * i));
  }

  return result;
};

const generateQuestionAndAnswer = () => {
  const progression = generateRandomProgression();
  const indexOfMissedNum = generateNumber(0, progression.length - 1);
  const answer = String(progression[indexOfMissedNum]);
  progression[indexOfMissedNum] = '..';
  const task = progression.join(' ');
  const questionAndAnswerForOneRound = [task, answer];

  return questionAndAnswerForOneRound;
};

export default () => {
  const tasksAndAnswers = [];

  for (let i = 0; i < roundCount; i += 1) {
    tasksAndAnswers.push(generateQuestionAndAnswer());
  }

  const rules = 'What number is missing in the progression?';

  runGame(rules, tasksAndAnswers);
};
