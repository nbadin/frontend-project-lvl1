#!/usr/bin/env node
/* eslint-disable import/extensions */
import { greeting } from '../src/cli.js';
import { calcGame } from '../src/Game/calc.js';

const userName = greeting();
calcGame(userName);
