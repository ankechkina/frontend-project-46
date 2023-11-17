const compareStylish = (comparisonTree, replacer = ' ', spacesCount = 2) => {
  const result = comparisonTree.map((node) => {
    if (node.state === 'added') {
      return `${replacer.repeat(spacesCount)}+ ${node.key}: ${node.value}`;
    }
    if (node.state === 'deleted') {
      return `${replacer.repeat(spacesCount)}- ${node.key}: ${node.value}`;
    }
    if (node.state === 'changed') {
      return `${replacer.repeat(spacesCount)}- ${node.key}: ${node.value1}\n${replacer.repeat(spacesCount)}+ ${node.key}: ${node.value2}`;
    }
    return `${replacer.repeat(spacesCount * 2)}${node.key}: ${node.value}`;
  });
  return ['{', ...result, '}'].join('\n');
};

export default compareStylish;
