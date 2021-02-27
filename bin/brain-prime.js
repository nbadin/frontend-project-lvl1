#!/usr/bin/env node
import {greeting} from '../src/cli.js';
import {primeGame} from '../src/Game/prime.js';

const userName = greeting();
primeGame(userName);