#!/usr/bin/env node
import {greeting} from '../src/cli.js';
import {evenGame} from '../src/Game/even.js';

const userName = greeting();
evenGame(userName);
