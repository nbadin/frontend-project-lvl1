#!/usr/bin/env node
/* eslint-disable import/extensions */
import { greeting } from '../src/cli.js';
import { primeGame } from '../src/Game/prime.js';

const userName = greeting();
primeGame(userName);
