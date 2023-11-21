import getPlainFormat from './plain.js';
import getStylishFormat from './stylish.js';

const format = (formatType, comparisonTree) => {
  switch (formatType) {
    case 'stylish': {
      return getStylishFormat(comparisonTree);
    }
    case 'plain': {
      return getPlainFormat(comparisonTree);
    }
    case 'json': {
      return JSON.stringify(comparisonTree);
    }
    default:
      throw new Error(`Unknown format ${formatType}`);
  }
};

export default format;
