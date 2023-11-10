const compareStylish = (comparisonTree) => {
  const result = comparisonTree.map((node) => {
    if (node.state === 'added') {
      return `+ ${node.key}: ${node.value}`;
    }
    if (node.state === 'deleted') {
      return `- ${node.key}: ${node.value}`;
    }
    if (node.state === 'changed') {
      return `- ${node.key}: ${node.value1}\n+ ${node.key}: ${node.value2}`;
    }
    return `  ${node.key}: ${node.value}`;
  }).join('\n');
  return result;
};

export default compareStylish;
