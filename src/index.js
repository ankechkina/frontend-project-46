import { readFileSync } from 'node:fs';
import path from 'path';
import parse from './parse.js';

const getFormat = ((filepath) => path.extname(filepath).slice(1));

const readFile = (filepath) => {
  const fullPath = path.resolve(process.cwd(), filepath);
  const data = readFileSync(fullPath);
  return parse(getFormat(fullPath), data);
};

const gendiff = (filepath1, filepath2) => {
  const data1 = readFile(filepath1);
  const data2 = readFile(filepath2);
  console.log(data1, data2);
};

export default gendiff;
