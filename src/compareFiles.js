import _ from 'lodash';

const compareFiles = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const keys = _.sortBy(_.union(keys1, keys2));

  const diff = keys.map((key) => {
    if (!_.has(obj1, key)) {
      return { key, value: obj2[key], state: 'added' };
    }
    if (!_.has(obj2, key)) {
      return { key, value: obj1[key], state: 'deleted' };
    }
    if (obj1[key] !== obj2[key]) {
      return {
        key, value1: obj1[key], value2: obj2[key], state: 'changed',
      };
    }
    return { key, value: obj2[key], state: 'unchanged' };
  });
  return diff;
};

export default compareFiles;
