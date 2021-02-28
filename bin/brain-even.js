#!/usr/bin/env node
/* eslint-disable import/extensions */
import { greeting } from '../src/cli.js';
import { evenGame } from '../src/Game/even.js';

const userName = greeting();
evenGame(userName);
