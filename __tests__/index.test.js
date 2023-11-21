import { test, expect } from '@jest/globals';
import path from 'path';
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

const expectedStylish = readFile('expectedStylish.txt');
const expectedPlain = readFile('expectedPlain.txt');
const expectedJson = readFile('expectedJson.txt');

const json1 = getFixturePath('file1.json');
const json2 = getFixturePath('file2.json');
const yaml1 = getFixturePath('file1.yaml');
const yaml2 = getFixturePath('file2.yaml');

test('gendiff JSON', () => {
  expect(gendiff(json1, json2, 'stylish')).toEqual(expectedStylish);
  expect(gendiff(json1, json2, 'plain')).toEqual(expectedPlain);
  expect(gendiff(json1, json2, 'json')).toEqual(expectedJson);
  expect(gendiff(json1, json2)).toEqual(expectedStylish);
});

test('gendiff YAML', () => {
  expect(gendiff(yaml1, yaml2, 'stylish')).toEqual(expectedStylish);
  expect(gendiff(yaml1, yaml2, 'plain')).toEqual(expectedPlain);
  expect(gendiff(yaml1, yaml2, 'json')).toEqual(expectedJson);
  expect(gendiff(yaml1, yaml2)).toEqual(expectedStylish);
});
