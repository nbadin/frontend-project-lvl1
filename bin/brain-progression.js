#!/usr/bin/env node
import {greeting} from '../src/cli.js';
import {progressionGame} from '../src/Game/progression.js';

const userName = greeting();
progressionGame(userName);