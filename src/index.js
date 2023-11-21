import { readFileSync } from 'node:fs';
import path from 'path';
import parse from './parse.js';
import compareFiles from './compareFiles.js';
import format from './formatters/index.js';

const getFormat = ((filepath) => path.extname(filepath).slice(1));

const readFile = (filepath) => {
  const fullPath = path.resolve(process.cwd(), filepath);
  const data = readFileSync(fullPath);
  return parse(getFormat(fullPath), data);
};

const gendiff = (filepath1, filepath2, formatType = 'stylish') => {
  const data1 = readFile(filepath1);
  const data2 = readFile(filepath2);
  const comparisonTree = compareFiles(data1, data2);
  return format(formatType, comparisonTree);
};

export default gendiff;
