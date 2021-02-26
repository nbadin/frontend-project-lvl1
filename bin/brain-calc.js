#!/usr/bin/env node
import {greeting} from '../src/cli.js';
import {calcGame} from '../src/calc.js';

const userName = greeting();
calcGame(userName);