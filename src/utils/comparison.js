const comparison = (a, b, filterCondition) => {
  switch (filterCondition) {
    case 'equals':
      return a === b
    case 'does_not_equal':
      return a !== b
    case 'greater_than':
      return a > b
    case 'less_than':
      return a < b
    default:
      break;
  }
};

const checkTruthy = arr => arr.every(v => v === true);

module.exports = { comparison, checkTruthy };
