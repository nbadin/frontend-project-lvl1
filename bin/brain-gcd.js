#!/usr/bin/env node
/* eslint-disable import/extensions */
import { greeting } from '../src/cli.js';
import { gcdGame } from '../src/Game/gcd.js';

const userName = greeting();
gcdGame(userName);
